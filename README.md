# rick-and-morty [![Build Status](https://travis-ci.org/zackharley/rick-and-morty.svg?branch=master)](https://travis-ci.org/zackharley/rick-and-morty) {

> Get [Rick and Morty][1] gifs

The gif list is just a [JSON file][2] and can be used wherever.

![Rick and Morty](rick-and-morty.gif)

## Install

```
$ npm install --save rick-and-morty
```

## Usage

```js
const rickAndMorty = require('rick-and-morty');

rickAndMorty.random();
// -> 'http://i.giphy.com/l41lI4bYmcsPJX9Go.gif'
```

## API

### .all: *string[]*

All gifs.

### .random(): *string*

Random name.

## Related

 - [rick-and-morty-cli][3] - CLI for this module

## License

2016 © [Zack Harley][4]
> :fork_and_knife: Fork away!

# }

[1]: https://en.wikipedia.org/wiki/Rick_and_Morty
[2]: https://github.com/zackharley/rick-and-morty/blob/master/rick-and-morty.json
[3]: https://github.com/zackharley/rick-and-morty-cli
[4]: https://github.com/zackharley
