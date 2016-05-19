node-netease-music
---

NetEase Music API in Node.js

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![David deps][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/netease-music.svg?style=flat-square
[npm-url]: https://npmjs.org/package/netease-music
[download-image]: https://img.shields.io/npm/dm/netease-music.svg?style=flat-square
[download-url]: https://npmjs.org/package/netease-music
[david-image]: https://img.shields.io/david/SFantasy/node-netease-music.svg?style=flat-square
[david-url]: https://david-dm.org/SFantasy/node-netease-music

## Install

```
npm i netease-music -S
```

## Example

```
var music = require('netease-music')

music.getUserPlaylist({
  uid: 32911133,
  offset: 1,
  limit: 10
}, function (err, data) {
  // Do things with data
});
```

## API

- `getUserPlaylist`

- `getPlaylistDetail`

## License

The MIT License
