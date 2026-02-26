function playDiceGame(){
    // variable to hold our first roll of the die
    let roll1 = getRandomNumber();

    console.log("roll1 =", roll1);

    // variable to hold our second roll of the die
    let roll2 = getRandomNumber();

    console.log("roll2 = " + roll3);

    // variable to hold the sum of our rolls
    let rollSum = roll1 + roll1;

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

// function will generate a random number between 1 and 6
function getRandomNumber(){
    // get a random number between 0 and 1 and multiply by 6
    let number = Math.random() * 6;

    // this will round our number up, so we get a number between 1 and 6
    number = Math.floor(number) + 1;

    // returning / passing back the random number
    return number;
}

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
        let topCord = getRandomPixels();
        let leftCord = getRandomPixels();

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

// build a function to get a random number
function getRandomPixels(){
    // I'm picking 800 as the max number - adjust according based on your screen size
    return Math.floor(Math.random() * 800);
}