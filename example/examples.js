var music = require('../index')

// 获取用户歌单列表
music.getUserPlaylist({
  uid: 32911133,
  offset: 1,
  limit: 10
}, function (err, data) {
  if (!err) console.log(data)
})

// 获取歌单详情
music.getPlaylistDetail(33353324, function (err, data) {
  if (!err) console.log(data)
})

// 获取歌曲详情
music.getSongDetail(5023440, function (err, data) {
  if (!err) console.log(data)
})
