function playDiceGame(){
    // variable to hold our first roll of the die
    let roll1 = getRandomNumber(6, false);

    console.log("roll1 =", roll1);

    // variable to hold our second roll of the die
    let roll2 = getRandomNumber(6, false);

    console.log("roll2 = " + roll2);

    // variable to hold the sum of our rolls
    let rollSum = roll1 + roll2;

    console.log("rollSum=" + rollSum);

    // test for a win - duplicate even numbers = 2, 2 or 4, 4, 6, 6
    // % is modulus - the result when using modulus is the remainder
    // if you divide a number by 2 and there is no remainder, the number is even
    if (roll1 == roll2 && roll1 % 2 == 0){
        // update the message div with the good news that the round was a win
        document.getElementById("divMessage").textContent = "You win!";
    }
    // if the user rolls a 7 or 11, they lost
    else if(rollSum == 7 && rollSum == 11){
        // update the message div with the good news that the round was lost
        document.getElementById("divMessage").textContent = "Sorry, you lose!";
    }
    // else is the catch all - if any other combination of dice roll happened,
    // it was a tie
    else{
        // update the message div with the good news that the round was a tie
        document.getElementById("divMessage").textContent = "You tied (pushed)!";
    }

    // display the game details to the user
    document.getElementById("divRoll1").textContent = "Dice roll 1: " + roll1;
    document.getElementById("divRoll2").textContent = "Dice roll 2: " + roll2;
    document.getElementById("divSum").textContent = "Sum: " + rollSum;

}

// function will generate a random number between 1 and max
function getRandomNumber(max, includeZero){
    // get a random number between 0 and 1 and multiply by max
    let number = Math.random() * max;

    // this will round our number down, so we get a number between 0 and max (exclusive)
    if (includeZero){
        number = Math.floor(number);
    }// this will round our number down, but we add 1 so that we get a number between 1 and max (inclusive)
    else{
        number = Math.floor(number) + 1;
    }

    // returning / passing back the random number
    return number;
}

// build a function to get a random number
/*function getRandomPixels(){
    // I'm picking 800 as the max number - adjust according based on your screen size
    return Math.floor(Math.random() * 800);
}*/

/* the code to move the meme around */

// create a variable to track the current interval id (returend from the setInterval function)
let intervalId = 0;

// create the function to move the image
function startImageMove(){
    // we are creating a variable that is a shortcut/nickname for our HTML image element
    let memeImage = document.getElementById("memeImage");

    // setInterval allows us to repeatedly run code
    // function(){} is an anonymous function - a way to run a chunk of code 1 time as a function argument
    intervalId = setInterval(function(){
        // get a random number for top and left coordinates
        // I want coordinates between 0 and 800
        let topCord = getRandomNumber(801, true);
        let leftCord = getRandomNumber(801, true);

        memeImage.style.left = leftCord + "px";
        memeImage.style.top = topCord + "px";

    }, 1000); // 1000 miliseconds = 1 second
  
    // enable the stop button == can click on stop button
    document.getElementById("btnStop").disabled = false;

    // disable the start button == cannot click on start button
    document.getElementById("btnStart").disabled = true;
}

// create the function that stops the image from moving
function stopImageMove(){
    // call a built in JavaScript function that stops the setInterval from running
    clearInterval(intervalId);

    // disable the stop button == cannot click on stop button
    document.getElementById("btnStop").disabled = true;

    // enable the start button == can click on start button
    document.getElementById("btnStart").disabled = false;
}


// this function will validate the user input based on the requirements of the client (assignment requirements)
function validate(){
    // first name variable
    let firstName = document.getElementById("txtFirstName").value;

    // show the first name in the console
    console.log("firstName=" + firstName);

    // last name variable
    let lastName = document.getElementById("txtLastName").value;

    // show the last name in the console
    console.log("lastName=" + lastName);

    // zip code variable
    let zip = document.getElementById("txtZip").value;

    // show the zip in the console
    console.log("zip=" + zip);

    // create a variable to hold the first name + " " + last name
    let fullName = firstName + " " + lastName;

    console.log("fullName=" + fullName);

    // create a variable to hold the message we will show to the user
    let message = "";

    // we need to make sure the full name does not exceed 20 characters
    if (fullName.length == 1 || fullName.length > 20){
        message = "Please enter a name that is less than 20 characters.";
    }
    // the zip code can only have 5 characters
    else if (zip.length != 5){
        message = "Please enter a 5 digit zip code.";
    }
    // otherwise, the user has entered everything correctly, and they get the secret word
    else{
        message = "The secret word is validation!";
    }
    
    console.log("message=" + message);

    // display the message on the associate div
    document.getElementById("divMessage").textContent = message;
}

// Palindrome checking code
 // create the checkPalin function
 function checkPalin(event){
    // prevent the form from submitting (so the page does not refresh)
    event.preventDefault();

    // create a variable to store the word that the user entered
    let wordToTest = document.getElementById("txtWord").value;
    
    console.log("wordToTest=" + wordToTest);

    // call the function to test it
    // TODO: print out the result to the user
    let bPalin = isPalin(wordToTest);

    // create a shortcut to the message div
    let divMessage = document.getElementById("divMessage");

    // create a message for the user based on the value of bPalin
    if (bPalin){ // if(bPalin) is equivalent to if (bPalin == true)
        // show the user a message
        divMessage.textContent = "The phrase is a palindrome!";
    }
    else{
        divMessage.textContent = "The phrase is NOT a palindrome!";
    }
}

// create a function to test to see if a string is the same backwards and forwards
function isPalin(strToTest){
    // I want to convert the string to all lowercase so that it is a more fair comparison
    strToTest = strToTest.toLowerCase();
    // replace all instances /g of spaces /\s with an empty string
    strToTest = strToTest.replace(/\s/g, "");

    console.log("strToTest=" + strToTest);

    // create a new variable so can keep the original string for testing
    let strReverse = strToTest;

    // convert the reverse string to an array, we will reverse the contents
    // so test would become tset and then convert the array back to a string
    strReverse = strReverse.split("").reverse().join("");

    console.log("strReverse=" + strReverse);

    // compare the original string with the reversed string
    // if they match, this function will return true, otherwise it will return false
    if (strReverse == strToTest){
        return true;
    }
    /*
    else{
        return false
    }
    */
    // if we get to this line, it must not have been a palindrome, so return false; this is equivalent to the else above - include only 1 or the other
    return false;
}

  // this function will add an audio element to the page so we can listen to a sound clip
  function addAudio(){
    // this is the shortcut/nickname for the div that would hold the audio
    let divAudio = document.getElementById("divAudio");

    // create an audio HTML element using JavaScript
    let audioElement = document.createElement("audio");
    // set the attributes of our new HTML element
    // add an ID so we can more easily work with this element
    audioElement.setAttribute("id", "myAudio");

    // add the file name as the source
    // if you are using the sound file provided in the assignment, your code will look like this:
    // audioElement.setAttribute("src", "us-lab-background.mp3");
    audioElement.setAttribute("src", "Crisp_Ocean_Waves-Mike_Koenig-1486046376.mp3");

    // highly suggested - add controls
    audioElement.setAttribute("controls", "controls");

    // set the volume to 0 by default
    audioElement.volume = 0;

    // add our new HTML audio element to the div that will host it
    divAudio.appendChild(audioElement);

    // disallow the user from clicking the add audio button now that the audio has been added to the webpage
    document.getElementById("btnAddAudio").hidden = true;

    // make the play and pause buttons appear
    document.getElementById("btnPlayAudio").hidden = false;
    document.getElementById("btnPauseAudio").hidden = false;
}

// create the function so that we can play the audio
function playAudio(){
    // create a shortcut/nickname to the audio element that we created in the addAudio function
    let myAudio = document.getElementById("myAudio");
    // let's play the sound!
    myAudio.play();
}

// create the function so that we can stop playing the audio - really pause it
function pauseAudio(){
    // create a shortcut/nickname to the audio element that we created in the addAudio function
    let myAudio = document.getElementById("myAudio");
    // let's pause the sound!
    myAudio.pause();
}

