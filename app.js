
// const yourName = prompt('Welcome to my page! Identify yourself!');
// alert(`Hi! ${yourName}\nThis page is only for gorgeous Folks`);
// const answer = prompt('Are you gorgeous?');


// if (answer = 'yes'){
//     alert(`Confirmed! ${yourName}\nis gorgeous!`);
//     document.write("You have been Gorgeous certfied " + yourName)
// }
// else if (answer = "no"){
//     alert("Don't worry, we'll let you in this once")
//     document.write(`Don't worry! ${yourName}\nyou'll get there`)
// }
// else{
//     alert("Oh no! That's an invalid answer! I'll report you to Kassie")
//     // document.write(`I'm Serious! you are not allowed`)
//     // window.location.href = 'https://f-taveras.github.io/hello-world/alertPage.html';
// }

function welcomeMessages(){
    const yourName = prompt('Welcome to my page! Identify yourself!');
    alert(`Hi! ${yourName}\nThis page is only for fabulouse Folks`);
    let answer = prompt('Are you fabulous?');

    if (answer == 'yes' || answer == 'Yes'){
        alert(`Confirmed! ${yourName}\nis gorgeous!`);
        document.write("You have been Gorgeous certfied " + yourName)
    }
    else if (answer == "no" || answer == 'No'){
        alert("Don't worry, we'll let you in this once")
        document.write(`Don't worry! ${yourName}\nyou'll get there`)
    }
    else{
        alert("Oh no! ")
        window.location.href = 'alertPage.html';
}

return yourName;
}

function gameStart(){
    alert ("You have been a bad user, now you have to do some math!")
   let answer = prompt("what's the sum of 10+10?")
    while (answer != 20)
    answer = prompt(" You got this! what's the sum of 10+10?")
}

function userAnswer(){
    document.write("Thank you for Joining us " + welcomeMessages(yourName))
}


// function isInteger(value) {
//     return !isNaN(value) && Number.isInteger(Number(value));
//   }
function bonus(){

alert("You got it right!")
let number = prompt("Now you get to pick a any multiplier! Pick any number")

// while (!number.isInteger) {
//     userInput = prompt('Woah Woah! Easy partner, you are really trying me');
//     if (isInteger(number)) 
//       valid = true;
// }
while(number > 10){
number = prompt ("You have been greety, But I'm nice, so try again")
return number;    
}

}



