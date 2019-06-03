/* eslint-disable indent */
/* eslint-disable no-console */
// eslint-disable-next-line strict
'use strict';
const log = function(msg){
    console.log(msg);
};
var getYearOfBirth = function(age){ 
    if (age < 0) {
        throw new Error('Age can not be negative');
    } 
    return 2019 - age;  
};
var createGreeting = function(name, age){
  if(name === undefined || age === undefined){
      throw new Error('arguments not vaild');
  }
  if(isNaN(age) || typeof(name) === typeof('name')){
      throw new TypeError('Arguments not valid');
  }
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${getYearOfBirth(age)}.`;
};
try {
   const greeting1 = createGreeting();
   console.log(greeting1);
}
catch(e) {
    alert(e.message);
}
