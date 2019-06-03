/* eslint-disable indent */
/* eslint-disable no-console */
// eslint-disable-next-line strict
'use strict';
var getYearOfBirth = function(age){ 
    if (age < 0) {
        throw new Error('Age can not be negative');
    } 
    return 2019 - age;  
};
var createGreeting = function(name, age){
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${getYearOfBirth(age)}.`;
};
try {
   const greeting1 = createGreeting();
   console.log(greeting1);
}
catch(e) {
    alert(e.message);
}
