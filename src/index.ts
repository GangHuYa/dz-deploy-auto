const fs = require('fs')
const path = require('path')
const { initData } = require('./library/index')

type configType = {
	host: string;
	username: string;
	port: number;
	password: string;
	localDistPath: string; // 项目打包之后的文件夹
	serverPath: string; // 要上传的服务器地址
	privateKeyValue: string; // 私钥
	isDeleteZip: boolean; // 是否要删除已经上传的zip包
	isClearPrevFiles: boolean;
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
	isClearPrevFiles: boolean;
}

type initDataType = {
	configPath: string;
	isDeleteZip: boolean;
	isClearPrevFiles: boolean;
}

module.exports = initData
