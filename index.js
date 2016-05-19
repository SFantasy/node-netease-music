var request = require('request')

var api = require('./api')

exports.getUserPlaylist = function (options, callback) {
  request({
    uri: api.getUserPlaylist,
    qs: {
      uid: options.uid,
      offset: options.offset,
      limit: options.limit
    }
  }, function (err, res, body) {
    if (err) callback(err, null)
    callback(null, body)
  })
}

exports.getPlaylistDetail = function (id, callback) {
  request({
    uri: api.getPlaylistDetail,
    qs: {

    }
  }, function (err, res, body) {
    if (err) callback(err, null)
    callback(null, body)
  })
}
