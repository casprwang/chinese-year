import chineseYears from '.'

test('get the first animal', ()=> {
  expect(chineseYears.years[0]).toBe('Rat')
})


test('get the secons animal', ()=> {
  expect(chineseYears.years[1]).toBe('Ox')
})

test('get the last animal', ()=> {
  expect(chineseYears.years[chineseYears.years.length-1]).toBe('Pig')
})


test(`get 2000's Dragon`, ()=> {
  expect(chineseYears.getAnimal(2000)).toBe('Dragon')
})

test(`get 2016's Monkey`, ()=> {
  expect(chineseYears.getAnimal(2016)).toBe('Monkey')
})

test(`get 2012's Monkey`, ()=> {
  expect(chineseYears.getAnimal(2012)).toBe('Dragon')
})