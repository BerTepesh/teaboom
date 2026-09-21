const del = require('del')

module.exports = function clean(cb) {
  return del('public').then(() => {
    cb()
  })
}