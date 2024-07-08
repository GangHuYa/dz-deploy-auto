const fs = require('fs')
const path = require('path')
const { initData } = require('./library/index')

type configType = {
	host: string;
	username: string;
	port: number;
	localDistPath: string; // 项目打包之后的文件夹
	serverPath: string; // 要上传的服务器地址
	privateKeyValue: string; // 私钥
}

module.exports = initData
