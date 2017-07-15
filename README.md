# chinese-year [![Build Status](https://travis-ci.org/wangsongiam/chinese-year.svg?branch=master)](https://travis-ci.org/wangsongiam/chinese-year)
> get the zodiac animal name of a certain year

## Install
```
npm install --save chinese-year
```

## Usage
```js
const chineseYear = require('chinese-year')
chineseYear.years
//=> ['Rat', 'Ox', ...]

chineseYear.getAnimal(2000)
//=> 'Dragon'
```

## API
### .getAnimal(year: number):string
### .year:array
get zodiac animal name of a year number

## License
MIT © [Song Wang](https://songwang.io)

