    //global variables
    var correctAnswers = 0;
    
    
    var userName = prompt('Welcome to my site! What is your name? ');
    console.log('Welcome to my site! What is your name? ');

     //My education achievements
    var college = prompt('Does Jerome has a college degree? ');
    college = college.toUpperCase();
    console.log('Does Jerome has a college degree? ' + college);

    if((college ==='YES' || college === 'Y')){
        alert('You are right');
    } else {
        alert('I have two Bachelor degrees');
    }
    


    //My Origin
    var country = prompt('Can you tell that Jerome is from Africa? ');
    country = country.toUpperCase();
    console.log('Can you tell that Jerome is from Africa? ' + country);

    if((country === 'NO' || country === 'N')){
        alert('Proud African');
    } else {
        alert('Is it that obvious? ');
    }
    

    //Married life
    var married = prompt('Is Jerome married? ');
    married = married.toUpperCase();
    console.log('Is Jerome married? ' + married);

    if((married === 'NO' || married === 'N')){
        alert('Sorry i am taken');
    } else {
        alert('Happily Married');
    }

    //Descendants
    var kids = prompt('Does Jerome have any kids? ');
    kids = kids.toUpperCase();
    console.log('Does Jerome have any kids? ' + kids);

    if((kids === 'YES' || kids === 'Y')){
        alert('Not yet');
    } else {
        alert('I love kids though');
    }

    //Where I live
    var state = prompt('Jerome lives in Kansas? ');
    state = state.toUpperCase();
    console.log('Jerome lives in Kansas? ' + state);

    if((state === 'NO' || state === 'N')){
        alert('You are a genius');
    } else {
        alert('I am a Seattlelite');
    }

//This is where you give the user four tries to get the correct answer
    var turns = 4;
    var jersey = 9;
    

    while(turns > 0){
        var userNameGuess = prompt('What is my favorite jersey number?');
        
       if(userNameGuess < jersey){
        alert('Too small');
        turns --;
       }
        
     if(userNameGuess > jersey){
        alert('Too much');
        turns --;
    }

    if(userNameGuess == jersey){
        turns = 0;
        alert('Wonderful!');
        
    //     // break;
     }
     
         
}
       
    //Favorite athletes
    var tries = 0;
    var athletes = ['rooney', 'lebron james', 'rashford']
    // var correctAnswer = ('Rooney', 'Lebron');
    var wrongPick = true; //You need a variable name for if they dont choose the correct
    var userPlay = prompt('Can you name my favorite athletes? ');
    userPlay = userPlay.toLowerCase();

    
    while(tries < 6 && wrongPick === true){
       
        for(var i = 0; i < athletes.length; i++){
            console.log(athletes[i]);
        
              if(userPlay === athletes[i]){
                  alert('How did you know that. Rooney,Lebron and Rashford are my favorite athletes');
                wrongPick = false;
                  break;

              }
              if((userPlay === athletes[i]) && (tries===6)){
                  alert('It is rooney,lebron and rashford');
                  
                
                  
                }
            }
            if(wrongPick === true ){
                alert('Try again');
                break;
                // tries++;
            }
        
    }

    
    
    

    // while(tries > 0){
    //   var userPlay = prompt('Can you name my favorite athletes? ');

    //   if(userPlay === athletes){
    //       alert('How did you know that');
    //       tries --;
    //   }
    //   if(userPlay !== athletes){
    //       alert('They played for manchester united');
    //       turns --;
    //   }
    //   if(userPlay === athletes){
    //       tries = 0;
    //       alert('Yay!');
    //   }
    // }
    
    
    // while()
    // alert('How did you know that');
    
