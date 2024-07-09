export {}
const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
const ora = require('ora')
const chalk = require('chalk')
const shelljs = require('shelljs')
const { NodeSSH } = require('dz-node-ssh')
const getCurrentDate = require('../utils/index')

const ssh = new NodeSSH()

type configType = {
	host: string;
	username: string;
	port: number;
	password: string;
	localDistPath: string; // 项目打包之后的文件夹
	serverPath: string; // 要上传的服务器地址
	privateKeyValue: string; // 私钥
	isDeleteZip: boolean; // 是否要删除已经上传的zip包
}

type connectType = {
	host: string;
	port: number;
	username: string;
	password: string;
	privateKeyValue: string;
	serverPath: string;
	destination: string;
	currentDate: string;
}

const compressFile = (source: string, destination: string) => {
	// console.log('source', source, destination)
	const spinner = ora('compressing files, please wait a moment...').start()
	const output = fs.createWriteStream(destination)
	const archive = archiver('zip', {
		zlib: { level: 9 }
	})
	return new Promise((resolve, reject) => {
		output.on('close', () => {
			spinner.succeed(chalk.green('succeed to compress files'))
			resolve(true)
		})
		archive.on('error', (err: any) => {
			spinner.fail(chalk.red('failed to compress files'))
			console.log('err', err)
			reject(false)
		})
		archive.directory(source, 'dist')
		archive.pipe(output)
		archive.finalize()
	})
}

const connectServer = async (config: connectType) => {
	let spinner = ora('connecting to server...').start()
	try {
		const { host, port, username, password, privateKeyValue, serverPath, destination, currentDate } = config
		await ssh.connect({
			host,
			port,
			username,
			password,
			privateKey: privateKeyValue
		})
		spinner.succeed(chalk.green('succeed to connect'))
		try {
			await ssh.execCommand('rm -rf ./*', { cwd: serverPath })
			spinner = ora('start uploading...').start()
			await ssh.putFile(destination, serverPath + currentDate + '.zip')
			spinner.succeed(chalk.green('succeed to upload files'))
		} catch (e) {
			console.log('e', e)
			spinner.fail(chalk.red('failed to upload files'))
			process.exit(0)
		}
	} catch (e) {
		spinner.fail(chalk.red('failed to connect to server'))
		console.log('e', e)
		process.exit(0)
	}
}

const unzipFile = async (currentDate: string, serverPath: string, isDeleteZip: boolean = false) => {
	const spinner = ora('start unzipping...').start()
	try {
		const command = `unzip ./${currentDate}.zip`
		await ssh.execCommand(command, { cwd: serverPath })
		if (isDeleteZip) {
			const deleteCommand = `rm -rf ./${currentDate}.zip`
			await ssh.execCommand(deleteCommand, { cwd: serverPath })
		}
		// console.log('result', result)
		spinner.succeed(chalk.green('succeed to unzip and deploy successfully '))
	} catch (e) {
		spinner.fail(chalk.red('failed to unzip'))
		console.log('e', e)
		process.exit(0)
	} finally {
		ssh.dispose()
	}
}

const run = async (config: configType) => {
	console.time('totalUsedTime')
	const currentDate = getCurrentDate()
	try {
		// console.log('currentDate', currentDate)
		const { 
			host,
			username,
			port,
			password,
			localDistPath,
			serverPath,
			privateKeyValue,
			isDeleteZip
		} = config
		const sourcePath = path.join(process.cwd(), localDistPath)
		const destination = path.join(process.cwd(), './' + currentDate + '.zip')

		if (!fs.existsSync(sourcePath)) {
			console.log(chalk.red('no file or directory is found'))
			process.exit(0)
			return false
		}
		await compressFile(sourcePath, destination)
		await connectServer({ host, username, port, password, privateKeyValue, serverPath, destination, currentDate })
		await unzipFile(currentDate, serverPath, isDeleteZip)
		shelljs.rm('-rf', path.join(process.cwd(), currentDate + '.zip'))
		shelljs.rm('-rf', path.join(process.cwd(), './dist'))
		console.timeEnd('totalUsedTime')
	} catch (e) {
		console.log('e', e)
		process.exit(0)
	}
}

const initData = (configPath: string, isDeleteZip: boolean = false) => {
  const res = fs.readFileSync(path.join(process.cwd(), configPath), { encoding: 'utf-8' })
	const { 
		host,
		username,
		port = 22,
		localDistPath = './dist/',
		serverPath,
		privateKeyPath,
		password
	} = JSON.parse(res) || {}
	const commandDir = process.cwd()
	const config = {
		host: host.trim() || '',
		username: username || '',
		password: password.trim(),
		port: port || 22,
		localDistPath,
		serverPath: serverPath.trim() || '',
		privateKeyValue: privateKeyPath.trim() ? fs.readFileSync(path.join(commandDir, privateKeyPath), { encoding: 'utf-8' }) : '',
		isDeleteZip
	}
	if (!config.host) {
		console.error(chalk.red('Please set host'))
		return process.exit(0)
	}
	if (!config.password && !config.privateKeyValue) {
		console.error(chalk.red('password or privateKeyPath is not found'))
		return process.exit(0)
	}
	if (!config.serverPath) {
		console.error(chalk.red('Please set serverPath'))
		return process.exit(0)
	}
	if (config.serverPath === '/') {
		console.error(chalk.red('serverPath must not be set to /'))
		return process.exit(0)
	}
	if (!/.*\/$/.test(config.serverPath)) {
		config.serverPath = config.serverPath + '/'
	}
  run(config)
}

module.exports = {
	initData
}
