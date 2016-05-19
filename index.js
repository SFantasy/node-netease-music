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

exports.getPlaylistDetail = function (id, callback) {
  request({
    uri: api.getPlaylistDetail,
    qs: {
      id: id
    }
  }, function (err, res, body) {
    if (err) callback(err, null)
    callback(null, body)
  })
}

exports.getSongDetail = function (id, callback) {
  request({
    uri: api.getSongDetail,
    qs: {
      id: id,
      ids: JSON.stringify([id])
    }
  }, function (err, res, body) {
    if (err) callback(err, null)
    callback(null, body)
  })
}
