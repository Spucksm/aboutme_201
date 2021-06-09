'use strict';

//  proof of life
console.log('Yut-Yut');

let userName = prompt('Welcome to all about me. What is it you call yourself?');

function getUserName(){
  
  console.log('The users name is ' + userName);
    document.write('<h2> Welcome one who is called ' + userName + '</h2>');
    return userName;
}

let alertReturn = alert('Welcome ' + userName);

alert ('Please answer all qustions yes or no');

let questionOne = prompt('Is my name Spenser?');
let lowercaseQuestionOne = 'yes' || questionOne.toLowerCase();
console.log('original response ' + questionOne + ' lowercase response ' + lowercaseQuestionOne);

if (lowercaseQuestionOne === 'yes' || lowercaseQusetionOne === 'y') {
  alert('That is correct');
} else if (lowercaseQuestionOne === 'no' || lowercaseQuestionOne === 'n') {
  alert ('That is incorrect');
} else {
  alert('I am confused by your response');
}

let questionTwo = prompt('Am I 32 years old?');
let lowercaseQuestionTwo = 'yes' || questionTwo.toLowerCase();
console.log('original response ' + questionTwo + ' lowercase response ' + lowercaseQuestionTwo);

if (lowercaseQuestionTwo === 'yes' || lowercaseQuestionTwo === 'y') {
  alert('That is correct.');
} else if (lowercaseQuestionTwo === "no" || lowercaseQuestionTwo === 'n') {
  alert ('That is incorrect.');
} else {
  alert('I am confused by your response, therefore, I am confused by your tactics.');
}

let marine = prompt('Was I in the Marines?');
let lowercaseMarine = 'yes' || lowercaseMarine.toLowerCase();
console.log('original response ' + marine + ' lowercase response ' + lowercaseMarine);

if (lowercaseMarine === 'yes' || lowercaseMarine === 'y') {
  alert('Yes I was! I bet you won\'t get the next one right!');
} else if (lowercaseMarine === 'no' || lowercaseMarine === 'n') {
  alert('That is incorrect, do you even know me?');
} else {
  alert('Remember all questions must be answered with either yes or no!');
}

let years = prompt('Was I in the Marines for 12 years?');
let lowercaseYears = 'yes' || years.toLowerCase();
console.log('original response ' + years + ' lowercase response ' + lowercaseYears);

if (lowercaseYears === 'yes' || lowercaseYears === 'y') {
  alert('Yes I was in the Marines for 12 years! You really are paying attention!');
} else if (lowercaseYears === 'no' || lowercaseYears === 'n') {
  alert('That is incorrect, tisk tisk tisk.');
} else {
  alert('I am confused by your response. I am confused by your tactics, all your base are belong to us!');
}

alert('Alright, last question!')

let questionLocation = prompt('Do I live in Washington State?')
let lowercaseQuestionLocation = 'yes' || questionLocation.toLowerCase();
console.log('originial response ' + questionLocation + ' lowercase response ' + lowercaseQuestionLocation);

if (lowercaseQuestionLocation === 'yes' || lowercaseQuestionLocation === 'y') {
  alert(userName + ' wow, you got it right! My name is Spenser, I am 32 years old. I spent 12 years in the Marines and I curently live in WA! Great job. Now if you want to know more about me read on, my friend!');
} else if (lowercaseQuestionLocation === 'no' || lowercaseQuestionLocation === 'n') {
  alert('That is not right! If you would really like to get to know me, feel free to read all about me on this website!');
} else {
  alert('Hmmm, maybe try again by refreshing this page and remember to answer wil only yes or no.')
}