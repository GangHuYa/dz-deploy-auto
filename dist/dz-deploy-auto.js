(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dz-deploy-auto", [], factory);
	else if(typeof exports === 'object')
		exports["dz-deploy-auto"] = factory();
	else
		root["dz-deploy-auto"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar initData = __webpack_require__(/*! ./library/index */ \"./src/library/index.ts\").initData;\nmodule.exports = initData;\n\n\n//# sourceURL=webpack://dz-deploy-auto/./src/index.ts?");

/***/ }),

/***/ "./src/library/index.ts":
/*!******************************!*\
  !*** ./src/library/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar archiver = __webpack_require__(/*! archiver */ \"archiver\");\nvar ora = __webpack_require__(/*! ora */ \"ora\");\nvar chalk = __webpack_require__(/*! chalk */ \"chalk\");\nvar shelljs = __webpack_require__(/*! shelljs */ \"shelljs\");\nvar NodeSSH = __webpack_require__(/*! dz-node-ssh */ \"dz-node-ssh\").NodeSSH;\nvar getCurrentDate = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.ts\");\nvar ssh = new NodeSSH();\nvar compressFile = function (source, destination, currentDate) {\n    // console.log('source', source, destination)\n    var spinner = ora('compressing files, please wait a moment...').start();\n    var output = fs.createWriteStream(destination);\n    var archive = archiver('zip', {\n        zlib: { level: 9 }\n    });\n    return new Promise(function (resolve, reject) {\n        output.on('close', function () {\n            spinner.succeed(chalk.green('succeed in compressing files'));\n            resolve(true);\n        });\n        archive.on('error', function (err) {\n            spinner.fail(chalk.red('failed to compress files'));\n            console.log('err', err);\n            reject(false);\n        });\n        archive.directory(source, currentDate);\n        archive.pipe(output);\n        archive.finalize();\n    });\n};\nvar connectServer = function (config) { return __awaiter(void 0, void 0, void 0, function () {\n    var spinner, host, port, username, password, privateKeyValue, serverPath, destination, currentDate, isClearPrevFiles, e_1, e_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                spinner = ora('connecting to server...').start();\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 9, , 10]);\n                host = config.host, port = config.port, username = config.username, password = config.password, privateKeyValue = config.privateKeyValue, serverPath = config.serverPath, destination = config.destination, currentDate = config.currentDate, isClearPrevFiles = config.isClearPrevFiles;\n                return [4 /*yield*/, ssh.connect({\n                        host: host,\n                        port: port,\n                        username: username,\n                        password: password,\n                        privateKey: privateKeyValue\n                    })];\n            case 2:\n                _a.sent();\n                spinner.succeed(chalk.green('succeed in connecting'));\n                _a.label = 3;\n            case 3:\n                _a.trys.push([3, 7, , 8]);\n                if (!isClearPrevFiles) return [3 /*break*/, 5];\n                return [4 /*yield*/, ssh.execCommand('rm -rf ./*', { cwd: serverPath })];\n            case 4:\n                _a.sent();\n                _a.label = 5;\n            case 5:\n                spinner = ora('start uploading...').start();\n                return [4 /*yield*/, ssh.putFile(destination, serverPath + currentDate + '.zip')];\n            case 6:\n                _a.sent();\n                spinner.succeed(chalk.green('succeed in uploading files'));\n                return [3 /*break*/, 8];\n            case 7:\n                e_1 = _a.sent();\n                console.log('e', e_1);\n                spinner.fail(chalk.red('failed to upload files'));\n                process.exit(0);\n                return [3 /*break*/, 8];\n            case 8: return [3 /*break*/, 10];\n            case 9:\n                e_2 = _a.sent();\n                spinner.fail(chalk.red('failed to connect to server'));\n                console.log('e', e_2);\n                process.exit(0);\n                return [3 /*break*/, 10];\n            case 10: return [2 /*return*/];\n        }\n    });\n}); };\nvar unzipFile = function (currentDate_1, serverPath_1) {\n    var args_1 = [];\n    for (var _i = 2; _i < arguments.length; _i++) {\n        args_1[_i - 2] = arguments[_i];\n    }\n    return __awaiter(void 0, __spreadArray([currentDate_1, serverPath_1], args_1, true), void 0, function (currentDate, serverPath, isDeleteZip) {\n        var spinner, command, deleteCommand, e_3;\n        if (isDeleteZip === void 0) { isDeleteZip = false; }\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    spinner = ora('start unzipping...').start();\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 5, 6, 7]);\n                    command = \"unzip ./\".concat(currentDate, \".zip\");\n                    return [4 /*yield*/, ssh.execCommand(command, { cwd: serverPath })];\n                case 2:\n                    _a.sent();\n                    if (!isDeleteZip) return [3 /*break*/, 4];\n                    deleteCommand = \"rm -rf ./\".concat(currentDate, \".zip\");\n                    return [4 /*yield*/, ssh.execCommand(deleteCommand, { cwd: serverPath })];\n                case 3:\n                    _a.sent();\n                    _a.label = 4;\n                case 4:\n                    // console.log('result', result)\n                    spinner.succeed(chalk.green('succeed in unzip and deploy successfully '));\n                    return [3 /*break*/, 7];\n                case 5:\n                    e_3 = _a.sent();\n                    spinner.fail(chalk.red('failed to unzip'));\n                    console.log('e', e_3);\n                    process.exit(0);\n                    return [3 /*break*/, 7];\n                case 6:\n                    ssh.dispose();\n                    return [7 /*endfinally*/];\n                case 7: return [2 /*return*/];\n            }\n        });\n    });\n};\nvar run = function (config) { return __awaiter(void 0, void 0, void 0, function () {\n    var currentDate, host, username, port, password, localDistPath, serverPath, privateKeyValue, isDeleteZip, isClearPrevFiles, isRewriteDirectoryName, sourcePath, destination, e_4;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                console.time('totalUsedTime');\n                currentDate = getCurrentDate();\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 5, , 6]);\n                host = config.host, username = config.username, port = config.port, password = config.password, localDistPath = config.localDistPath, serverPath = config.serverPath, privateKeyValue = config.privateKeyValue, isDeleteZip = config.isDeleteZip, isClearPrevFiles = config.isClearPrevFiles, isRewriteDirectoryName = config.isRewriteDirectoryName;\n                sourcePath = path.join(process.cwd(), localDistPath);\n                destination = path.join(process.cwd(), './' + (isRewriteDirectoryName ? currentDate : localDistPath) + '.zip');\n                if (!fs.existsSync(sourcePath)) {\n                    console.log(chalk.red('no file or directory is found'));\n                    process.exit(0);\n                    return [2 /*return*/, false];\n                }\n                return [4 /*yield*/, compressFile(sourcePath, destination, currentDate)];\n            case 2:\n                _a.sent();\n                return [4 /*yield*/, connectServer({ host: host, username: username, port: port, password: password, privateKeyValue: privateKeyValue, serverPath: serverPath, destination: destination, currentDate: currentDate, isClearPrevFiles: isClearPrevFiles })];\n            case 3:\n                _a.sent();\n                return [4 /*yield*/, unzipFile(currentDate, serverPath, isDeleteZip)];\n            case 4:\n                _a.sent();\n                shelljs.rm('-rf', path.join(process.cwd(), currentDate + '.zip'));\n                shelljs.rm('-rf', path.join(process.cwd(), './dist'));\n                console.timeEnd('totalUsedTime');\n                return [3 /*break*/, 6];\n            case 5:\n                e_4 = _a.sent();\n                console.log('e', e_4);\n                process.exit(0);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); };\n// { configPath, isDeleteZip = false, isClearPrevFiles = false }\nvar initData = function (parameters) {\n    var res = fs.readFileSync(path.join(process.cwd(), parameters.configPath), { encoding: 'utf-8' });\n    var _a = JSON.parse(res) || {}, host = _a.host, username = _a.username, _b = _a.port, port = _b === void 0 ? 22 : _b, _c = _a.localDistPath, localDistPath = _c === void 0 ? './dist/' : _c, serverPath = _a.serverPath, privateKeyPath = _a.privateKeyPath, _d = _a.password, password = _d === void 0 ? '' : _d;\n    var commandDir = process.cwd();\n    var config = {\n        host: host.trim() || '',\n        username: username || '',\n        password: password.trim(),\n        port: port || 22,\n        localDistPath: localDistPath,\n        serverPath: serverPath.trim() || '',\n        privateKeyValue: privateKeyPath.trim() ? fs.readFileSync(path.join(commandDir, privateKeyPath), { encoding: 'utf-8' }) : '',\n        isClearPrevFiles: parameters.isClearPrevFiles,\n        isDeleteZip: parameters.isDeleteZip,\n        isRewriteDirectoryName: parameters.isRewriteDirectoryName\n    };\n    if (!config.host) {\n        console.error(chalk.red('Please set host'));\n        return process.exit(0);\n    }\n    if (!config.password && !config.privateKeyValue) {\n        console.error(chalk.red('password or privateKeyPath is not found'));\n        return process.exit(0);\n    }\n    if (!config.serverPath) {\n        console.error(chalk.red('Please set serverPath'));\n        return process.exit(0);\n    }\n    if (config.serverPath === '/') {\n        console.error(chalk.red('serverPath must not be set to /'));\n        return process.exit(0);\n    }\n    if (!/.*\\/$/.test(config.serverPath)) {\n        config.serverPath = config.serverPath + '/';\n    }\n    run(config);\n};\nmodule.exports = {\n    initData: initData\n};\n\n\n//# sourceURL=webpack://dz-deploy-auto/./src/library/index.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction getCurrentDate() {\n    var date = new Date();\n    var year = date.getFullYear();\n    var month = date.getMonth() + 1;\n    var day = date.getDate();\n    var hour = date.getHours();\n    var minute = date.getMinutes();\n    var second = date.getSeconds();\n    return \"\".concat(year).concat(month > 9 ? month : '0' + month).concat(day > 9 ? day : '0' + day).concat(hour > 9 ? hour : '0' + hour).concat(minute > 9 ? minute : '0' + minute).concat(second > 9 ? second : '0' + second);\n}\nmodule.exports = getCurrentDate;\n\n\n//# sourceURL=webpack://dz-deploy-auto/./src/utils/index.ts?");

/***/ }),

/***/ "archiver":
/*!***************************!*\
  !*** external "archiver" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"archiver\");\n\n//# sourceURL=webpack://dz-deploy-auto/external_%22archiver%22?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack://dz-deploy-auto/external_%22chalk%22?");

/***/ }),

/***/ "dz-node-ssh":
/*!******************************!*\
  !*** external "dz-node-ssh" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dz-node-ssh\");\n\n//# sourceURL=webpack://dz-deploy-auto/external_%22dz-node-ssh%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack://dz-deploy-auto/external_%22fs%22?");

/***/ }),

/***/ "ora":
/*!**********************!*\
  !*** external "ora" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ora\");\n\n//# sourceURL=webpack://dz-deploy-auto/external_%22ora%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack://dz-deploy-auto/external_%22path%22?");

/***/ }),

/***/ "shelljs":
/*!**************************!*\
  !*** external "shelljs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"shelljs\");\n\n//# sourceURL=webpack://dz-deploy-auto/external_%22shelljs%22?");

/***/ })

/******/ });
});