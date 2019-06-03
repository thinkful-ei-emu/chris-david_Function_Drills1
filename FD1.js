/* eslint-disable no-console */
// eslint-disable-next-line strict
'use strict';
var createGreeting = function(name, age){
  const yearOfBirth = 2016 - age;
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}.`;
};
createGreeting();
console.log(createGreeting);