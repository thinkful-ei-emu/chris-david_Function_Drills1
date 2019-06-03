/* eslint-disable no-console */
'use strict';
function jediName(fName, lName){
  return lName.slice(0,3) + fName.toLowerCase().slice(0,2);
}
console.log(jediName('David', 'Queen'));