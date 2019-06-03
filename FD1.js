/* eslint-disable no-console */
// eslint-disable-next-line strict
'use strict';
var getYearOfBirth = function(age){
  return 2019 - age;
};
var createGreeting = function(name, age){
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${getYearOfBirth(age)}.`;
};
createGreeting();
console.log(createGreeting);