#!/usr/bin/env node
export {}
const { initData } = require('./library/index.ts')

const startUpload = () => {
  initData('../deploy-config.json')
}

module.exports = {
  startUpload
}