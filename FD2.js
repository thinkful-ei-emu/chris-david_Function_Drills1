/* eslint-disable indent */
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
    return 'And beyond';
  }
  else if (num > 0) {
    return 'To infinity';
  }
  else if (num < 0) {
    return 'To negative infinity';
  }
  else {
    return 'Staying home';
  }
}

log(beyond());
function decode(code){
let arry = code.split(' ');
let answer='';
for(var x=0;x<=arry.length-1;x++){
    console.log(arry[x]);
    switch(arry[x][0]){
        case 'a' : answer += arry[x][1];
        break;
        case 'b' : answer += arry[x][2];
        break;
        case 'c' : answer += arry[x][3];
        break;
        case 'd' : answer += arry[x][4];
        break;
        default: answer+= ' '; 

    }
    
}
return answer;


}
log(decode('craft block argon meter bells brown croon droop'));

function howMany(month, leapYear) {
  let answer = '';
  switch(month){
  case 'February' :
    if (leapYear) {
      answer = 29;
    }
    else {
      answer = 28;
    }
    break;
  
  case 'January':
  case 'March':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    answer = 31;
    break;

  case 'April':
  case 'May':
  case 'June':
  case 'September':
  case 'November':
    answer = 30;
    break;

  default:
     throw new Error('Must provide a valid month.');

  }


  return `${month} has ${answer} days`;
}

log(howMany('February', true));