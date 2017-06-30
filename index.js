const character = require('./lib/character')

module.exports = function (id, cb) {
  character(id, function (err, data) {
    if (cb) { cb(err, data) }
  })
}
