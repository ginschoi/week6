/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

/*

DESIGN AND PLANNING

users are trying to buy liquor - system is checking their current age to see if they are the legal age.

setting drinking age parameters/rules
// under (<) 13 = leave
// under 19 = grow up to 19
// between AND equal to 19 ~ 50 = drink away
// over 50 = warn about health
// over 70 == warn about health and life

interface will ask...
- what is your age?

user will input...
- their current age

the system will output...
- console log msg that indicates if they are too young or within legal age

Function of CheckDrinkingAge: Evaluates the age and logs the appropriate message based on the prompt logic.
readline.question for user input: Asks the user for their age, converts the input to a number, and passes it to CheckDrinkingAge.

*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});



//determine a proper parameter variable name
function CheckDrinkingAge(CurrentAge) {

  if (CurrentAge < 13) {
    console.log("You are too young, you need to leave.");
  } else if (CurrentAge > 13 && CurrentAge < 19) {
    console.log("You need to grow up to 19 before you can drink.");
  } else if (CurrentAge >= 19 && CurrentAge <= 50) {
    console.log("Drink away!");
  } else if (CurrentAge > 50 && CurrentAge <= 70) {
    console.log("Be careful with your health.");
  } else if (CurrentAge > 70) {
    console.log("Be careful with both your health and your life.");
  }

}

//determine a proper question to ask and the proper variable name for user input

readline.question('What is your current age? I need this information for you to buy liquor ', CurrentAge => {

  //calling the function here with user input

  CheckDrinkingAge(Number(CurrentAge));
  readline.close();
});

// Its a very simple and clear code to understand, I think putting the question at the start and having the answer respond at the bottom might be easier when the code is very long and it gets 
// more confusing. However I think for this practice it is fine having it at the bottom. You can also make your response more fun but thats just what I think, XD ^w^ -Reagan