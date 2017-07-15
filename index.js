const repoUrl = 'https://github.com/sindresorhus/pokemon';

const years = [
  'Rat',
  'Ox',
  'Tiger',
  'Rabbit',
  'Dragon',
  'Snake',
  'Horse',
  'Sheep',
  'Monkey',
  'Rooster',
  'Dog',
  'Pig'
]

exports.years = years

exports.getAnimal = num => {
  const ind = num % 12
  let name 
  if (ind >3) {
    name = years[ind-4]
  } else {
    name = years[ind + 8]
  }
  if (!name) throw new Error(`Opps, error`)
  return name
}
