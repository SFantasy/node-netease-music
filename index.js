var request = require('request')

var api = require('./api')

exports.getUserPlaylist = function (params, callback) {
  request({
    uri: api.getUserPlaylist,
    qs: {
      uid: params.uid,
      offset: params.offset,
      limit: params.limit
    }
  }, function (err, res, body) {
    if (err) callback(err, null)
    callback(null, body)
  })
}

exports.getPlaylistDetail = function (params, callback) {
  request({
    uri: api.getPlaylistDetail,
    qs: {
      id: params.id
    }
  }, function (err, res, body) {
    if (err) callback(err, null)
    callback(null, body)
  })
}
