const character = require('./lib/character')

module.exports = function (id, cb) {
  character(id, function (err, data) {
    cb(err, data)
  })
}
