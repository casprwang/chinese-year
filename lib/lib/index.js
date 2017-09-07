'use strict';

var repoUrl = 'https://github.com/sindresorhus/pokemon';

var years = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep', 'Monkey', 'Rooster', 'Dog', 'Pig'];

exports.years = years;

exports.getAnimal = function (num) {
  var ind = num % 12;
  var name = void 0;
  if (ind > 3) {
    name = years[ind - 4];
  } else {
    name = years[ind + 8];
  }
  if (!name) throw new Error('Opps, error');
  return name;
};