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
	localDistPath: string; // 项目打包之后的文件夹
	serverPath: string; // 要上传的服务器地址
	privateKeyValue: string; // 私钥
}

type connectType = {
	host: string;
	port: number;
	username: string;
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
		archive.directory(source, false)
		archive.pipe(output)
		archive.finalize()
	})
}

const connectServer = async (config: connectType) => {
	let spinner = ora('connecting to server...').start()
	try {
		const { host, port, username, privateKeyValue, serverPath, destination, currentDate } = config
		await ssh.connect({
			host,
			port,
			username,
			privateKey: privateKeyValue
		})
		spinner.succeed(chalk.green('succeed to connect'))
		try {
			spinner = ora('start uploading...').start()
			await ssh.execCommand('rm -rf ./*', { cwd: serverPath })
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

const unzipFile = async (currentDate: string, serverPath: string) => {
	const spinner = ora('start unzipping...').start()
	try {
		const command = `unzip ./${currentDate}.zip; rm -rf ./${currentDate}.zip`
		await ssh.execCommand(command, { cwd: serverPath })
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
	console.time('totalUseTime')
	const currentDate = getCurrentDate()
	try {
		// console.log('currentDate', currentDate)
		const { 
			host,
			username,
			port,
			localDistPath,
			serverPath,
			privateKeyValue
		} = config
		const sourcePath = path.join(process.cwd(), localDistPath)
		const destination = path.join(process.cwd(), './' + currentDate + '.zip')

		if (!fs.existsSync(sourcePath)) {
			console.log(chalk.red('no file or directory is found'))
			process.exit(0)
			return false
		}
		await compressFile(sourcePath, destination)
		await connectServer({ host, username, port, privateKeyValue, serverPath, destination, currentDate })
		await unzipFile(currentDate, serverPath)
		shelljs.rm('-rf', path.join(process.cwd(), currentDate + '.zip'))
		shelljs.rm('-rf', path.join(process.cwd(), './dist'))
		console.timeEnd('totalUseTime')
	} catch (e) {
		console.log('e', e)
		process.exit(0)
	}
}

const initData = (configPath: string) => {
  const res = fs.readFileSync(path.join(process.cwd(), configPath), { encoding: 'utf-8' })
	const { 
		host,
		username,
		port = 22,
		localDistPath = './dist/',
		serverPath,
		privateKeyPath
	} = JSON.parse(res) || {}
	// '../../id_rsa'
	const commandDir = process.cwd()
	// console.log('keyPath', path.join(commandDir, privateKeyPath))
	const config = {
		host: host || '',
		username: username || '',
		port: port || 22,
		localDistPath,
		serverPath: serverPath || '',
		privateKeyValue: fs.readFileSync(path.join(commandDir, privateKeyPath), { encoding: 'utf-8' })
	}
  run(config)
}

module.exports = {
	initData
}
