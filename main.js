// //global variables
// 'use strict';
var correctAnswers = 0;


var userName = prompt('Welcome to my site! What is your name? ');
prompt('Welcome to my site ' + userName + '!');
console.log('Welcome to my site! What is your name? ');

//My education achievements
function collegeQ(){
  var college = prompt('Does Jerome has a college degree? ');
  college = college.toUpperCase();
  console.log('Does Jerome has a college degree? ' + college);

  if((college ==='YES' || college === 'Y')){
    alert('You are right');
    correctAnswers++;
  } else {
    alert('I have two Bachelor degrees');
  }
}

//My Origin
function countryQ(){
  var country = prompt('Can you tell that Jerome is from Africa? ');
  country = country.toUpperCase();
  console.log('Can you tell that Jerome is from Africa? ' + country);

  if((country === 'NO' || country === 'N')){
    alert('Proud African');
  } else {
    alert('Is it that obvious? ');
    correctAnswers++;
  }
}

//Married life
function marriedQ(){
  var married = prompt('Is Jerome married? ');
  married = married.toUpperCase();
  console.log('Is Jerome married? ' + married);

  if((married === 'NO' || married === 'N')){
    alert('Sorry i am taken');
  } else {
    alert('Happily Married');
    correctAnswers++;
  }
}


//Descendants
function kidsQ(){
  var kids = prompt('Does Jerome have any kids? ');
  kids = kids.toUpperCase();
  console.log('Does Jerome have any kids? ' + kids);

  if((kids === 'YES' || kids === 'Y')){
    alert('Not yet');
    correctAnswers++;
  } else {
    alert('I love kids though');
  }
}


//Where I live
function stateQ(){
  var state = prompt('Jerome lives in Kansas? ');
  state = state.toUpperCase();
  console.log('Jerome lives in Kansas? ' + state);

  if((state === 'NO' || state === 'N')){
    alert('You are a genius');
    correctAnswers++;
  } else {
    alert('I am a Seattlelite');
  }
}


//This is where you give the user four tries to get the correct answer
function jerseyQ(){
  var turns = 4;
  var jersey = 9;


  while(turns > 0){
    var userNameGuess = prompt('What is my favorite jersey number?');
    var userNameGuessInt = parseInt(userNameGuess);
    if(userNameGuessInt < jersey){
      alert('Too small');
      turns --;
    }

    if(userNameGuessInt > jersey){
      alert('Too much');
      turns --;
    }

    if(userNameGuessInt === jersey){
      turns = 0;
      alert('Wonderful!');
      correctAnswers++;
    }


  }
}


//Favorite athletes

function athletesQ(){
  var athletes = ['rooney', 'lebron james', 'rashford'];


  for(var i = 5; i >=0; i--){
    var userPlay = prompt('Can you name my favorite athletes? ');
    userPlay = userPlay.toLowerCase();

    if(athletes.includes(userPlay)){
      alert('How did you know that. Rooney,Lebron and Rashford are my favorite athletes');
      correctAnswers++;
      break;
    }else
      alert('No, please try again. You have ' + i + ' guesses left');
  }

}

collegeQ();
countryQ();
marriedQ();
kidsQ();
stateQ();
jerseyQ();
athletesQ();

prompt('You got ' + correctAnswers + ' out of 7 correct!');
