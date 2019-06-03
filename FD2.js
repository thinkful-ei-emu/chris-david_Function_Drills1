/* eslint-disable no-console */
'use strict';

function log(msg) {
  console.log(msg);
}
function jediName(fName, lName){
  return lName.slice(0,3) + fName.toLowerCase().slice(0,2);
}
console.log(jediName('David', 'Queen'));

function beyond(num) {
  if (num === Infinity) {
    log('And beyond');
  }
  else if (num > 0) {
    log('To infinity');
  }
  else if (num < 0) {
    log('To negative infinity');
  }
  else {
    log('Staying home');
  }
}

beyond();