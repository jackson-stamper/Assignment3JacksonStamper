/*
Scenario: You want a program that can be used to make sure a new password is typed in correctly.
It will get the new password twice, and compare the two to make sure they are the same. 
Create a new form named 'functionCompare'. 
Get the desired new password from the user twice in the main program. 
Create a function named 'Compare' that takes two arguments (pass1, pass2) and is called from the main program.
Call the function from the main program and pass the two passwords to the function.
The function returns 'true' if the two passwords passed in were the same, or 'false' if they were  not the same.
Hint: .localeCompare() is a handy string method..... (see https://www.w3schools.com/jsref/jsref_localecompare.asp (Links to an external site.) )
The variables used inside the function must be declared in the function (the function parameters, etc). No global variables (ie. declared outside the function) may be used in the function.  
Back in the main program, when the function returns the answer, output this message to the console: 

The passwords are the same. 
OR
The passwords are not the same
*/

let password1 = prompt("Enter your password")
let password2 = prompt("Enter your password again")
function Compare(p1, p2) {
    return p1.localeCompare(p2)
  };
  
  let result = compare(password1, password2)
  
  if (result == 0){
    console.log('The passwords are the same.')
  }else{
    console.log('The passwords are not the same.')
    };