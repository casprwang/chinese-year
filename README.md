# chinese-year
> get the zodiac animal name of a year

The name list is just a list file and can be used wherever.

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
MIT © [Song Wang](songwang.io)

