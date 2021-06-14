'use strict';

//proof of life
console.log('Yut-Yut');
let guessScore = 0

let userName = prompt('Welcome to all about me. What is it you call yourself?');
 console.log('The users name is ' + userName);
 if (userName ===null || userName === '') {
      userName = prompt('I didn\'t undersand, I would like to now what it is you call yourself.')
}

function getUserName(){
  
     document.write('<h2> Welcome one who is called ' + userName + '</h2>');
     return userName;
}

 alert('Welcome ' + userName);

 alert ('Please answer the following qustions yes or no');

 function firstQuestion() {
 let questionOne = prompt('Is my name Spenser?');
 let lowercaseQuestionOne = questionOne.toLowerCase();
 console.log('original response ' + questionOne + ' lowercase response ' + lowercaseQuestionOne);

 if (lowercaseQuestionOne === 'yes' || lowercaseQuestionOne === 'y') {
   alert('That is correct');
   guessScore ++
 } else if (lowercaseQuestionOne === 'no' || lowercaseQuestionOne === 'n') {
   alert ('That is incorrect');
 } else {
   alert('I am confused by your response');
 }
return firstQuestion;
}
firstQuestion();

function secondQuestion() {
 let questionTwo = prompt('Am I 32 years old?');
 let lowercaseQuestionTwo = questionTwo.toLowerCase();
 console.log('original response ' + questionTwo + ' lowercase response ' + lowercaseQuestionTwo);

 if (lowercaseQuestionTwo === 'yes' || lowercaseQuestionTwo === 'y') {
   alert('That is correct.');
   guessScore++
 } else if (lowercaseQuestionTwo === 'no' || lowercaseQuestionTwo === 'n') {
   alert ('That is incorrect.');
 } else {
   alert('I am confused by your response, therefore, I am confused by your tactics.');
 }
 return secondQuestion;
}
secondQuestion();

function thirdQuestion() {
 let marine = prompt('Was I in the Marines?');
 let lowercaseMarine = marine.toLowerCase();
 console.log('original response ' + marine + ' lowercase response ' + lowercaseMarine);

 if (lowercaseMarine === 'yes' || lowercaseMarine === 'y') {
   alert('Yes I was! I bet you won\'t get the next one right!');
   guessScore++
 } else if (lowercaseMarine === 'no' || lowercaseMarine === 'n') {
   alert('That is incorrect, do you even know me?');
 } else {
   alert('Remember all questions must be answered with either yes or no!');
 }
 return thirdQuestion;
}
thirdQuestion();

function fourthQuestion() {
 let years = prompt('Was I in the Marines for 12 years?');
 let lowercaseYears = years.toLowerCase();
 console.log('original response ' + years + ' lowercase response ' + lowercaseYears);

 if (lowercaseYears === 'yes' || lowercaseYears === 'y') {
   alert('Yes I was in the Marines for 12 years! You really are paying attention!');
   guessScore++
 } else if (lowercaseYears === 'no' || lowercaseYears === 'n') {
   alert('That is incorrect, tisk tisk tisk.');
 } else {
   alert('I am confused by your response. I am confused by your tactics, all your base are belong to us!');
 }
 return fourthQuestion;
}
fourthQuestion();
 
 alert('Alright, last yes or no question.')
 
 function fifthQuestion() {
 let questionLocation = prompt('Do I live in Washington State?')
 let lowercaseQuestionLocation = questionLocation.toLowerCase();
 console.log('originial response ' + questionLocation + ' lowercase response ' + lowercaseQuestionLocation);
 
 if (lowercaseQuestionLocation === 'yes' || lowercaseQuestionLocation === 'y') {
   alert(userName + ' wow, you got it right!');
   guessScore++
  } else if (lowercaseQuestionLocation === 'no' || lowercaseQuestionLocation === 'n') {
    alert('That is not right! If you would really like to get to know me, feel free to read all about me on this website!');
  } else {
    alert('Hmmm, maybe try again by refreshing this page and remember to answer wil only yes or no.')
  }
 return fifthQuestion;
}
fifthQuestion();

  alert('This next one is not a yes or no');
function sixthQuestion() {
  let movies = ['die hard', 'boondock saints', 'the boondock saints', 'the departed', 'departed'];
    console.log ('This is my array ' + movies)
  let guesscount = 6;
  let correct = false;
  
  while (correct === false && guesscount > 0) {
    let userguess = prompt ('What is my favorite movie?');
    // let lowercaseUserguess = userguess.toLowerCase();
    for (let index = 0; index < movies.length; index++) {
      if (userguess === movies[index]){
      alert('You got is right!');
      correct = true;
      guessScore++
      break;
      }
    }
    if (correct === false && guesscount > 1){
      alert('Sorry, wrong answer.');
    }
    if (correct === false && guesscount == 0){
      alert('You did not guess correct! The correct answers were Die Hard, The Boondock Saints, and The Departed.');
      correct = true;
      break;
    }
    guesscount--;
    console.log('This is user attempt' + (6 - guesscount))
  }
  return sixthQuestion;
}
sixthQuestion();

alert("Can you guess the number?");

// numberguessing game;

function questionseven(){
  let correctAnswer = Math.floor(Math.random() * 100) + 1;
  console.log(correctAnswer)
  let userAttempts = 4;
  for(let i = 0; i < userAttempts; i++){
    let userGuess = prompt('Guess my number.');
    while(userGuess < 1 || userGuess > 100){
      userGuess = prompt('Wrong range. Please enter a number 1 -100');
    }
    if (userGuess == correctAnswer) {
      alert('You got it. Good guess!');
      guessScore++
      break;
    } else if(userGuess < correctAnswer){
      alert('To low, try again.');
    } else if (userGuess > correctAnswer){
      alert('To high, try again.');
    } else {
      alert('Something else went wrong, try again.')
    }
    console.log(i);
    if (i == userAttempts -1){
      alert('You did not guess correctly. Correct Answer is: ' + correctAnswer);
    }
  }
  return questionseven;
}

questionseven();
  
  alert(userName + ' wow, you got it right! My name is Spenser, I am 32 years old. I spent 12 years in the Marines and I curently live in WA! My favorite movies are Die Hard, The Boondock Saints, and The Departed. Lastly, the correct number was' +correctAnswer + 'Great job. Now if you want to know more about me read on, my friend! You answered ' + guessScore + ' questions correctly!');

