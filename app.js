
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

    if (answer == 'yes'){
        alert(`Confirmed! ${yourName}\nis gorgeous!`);
        document.write("You have been Gorgeous certfied " + yourName)
    }
    else if (answer == "no"){
        alert("Don't worry, we'll let you in this once")
        document.write(`Don't worry! ${yourName}\nyou'll get there`)
    }
    else{
        alert("Oh no! ")
        window.location.href = 'alertPage.html';
}

return yourName;
}

function gameStart (){
    alert (welcomeMessages() + "You have been a bad user, now you have to do some math!")
    answer = prompt("wha's the sum of 10+10?")
    while (answer != "20")
    alert ("Try harder, I believe in you")

}

function userAnswer(){
    document.write("Thank you for Joining us " + welcomeMessages())
}
