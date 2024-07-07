export {}
function getCurrentDate () {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${year}${month > 9 ? month : '0' + month}${day > 9 ? day : '0' + day}${hour > 9 ? hour : '0' + hour}${minute > 9 ? minute : '0' + minute}${second > 9 ? second : '0' + second}`
}

module.exports = getCurrentDate