"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */



function analyzeColor(color) {
    if (color === "blue") {
        return "blue is the color of the sky!";
    } else if (color === "red") {
        return "Strawberries are red!";
    } else if (color === "cyan") {
        return "I don't know anything about cyan";
    } else {
        return "I don't know anything about " + color;
    }
}

var returnOfFuntion = analyzeColor("cyan");

console.log(returnOfFuntion);

//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
//


 var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 var randomColor = colors[Math.floor(Math.random() * colors.length)];


 //
//
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//

var message = console.log(analyzeColor(randomColor));

//
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//

function analyzeColor2(color){

switch (color) {
    case "red":
        alert("This is my favorite color!")
        break;
    case "orange":
        alert("This is my 2nd favorite color!")
        break;
    case "yellow":
        alert("This is the color of the sun!")
        break;
    case "green":
        alert("The color of money!")
        break;
    case "blue":
        alert("Color of the ocean")
        break;
    case "indigo":
        alert("indigo is the color of my computer")
        break;
    case "violet":
        alert("Violet is a beautiful spectrum")
        break;
}
}
analyzeColor2(randomColor);
//
//
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
//
//



var pickingColor = prompt("Give me a color.");
//
alert(analyzeColor(pickingColor));


//
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
 var luckynumber = Math.floor(Math.random() * 6);

function calculateTotal(){

    var OGprice = Number(prompt("How much is your total?"));
    // var luck = ((OGprice * (luckynumber / 100)) * 20);

    if (luckynumber === 0) {
        return ("Your total is = $" + OGprice +  "Your lucky number is 0, No discount for you!");
    } else if (luckynumber === 1) {
        return ("Your total is = $" + OGprice +  "Your lucky number is 1, 10% discount for you! Total = $" + (OGprice - (OGprice * .10)));
    } else if (luckynumber === 2) {
        return ("Your total is = $" + OGprice +  "Your lucky number is 1, 20% discount for you! Total = $" + (OGprice - (OGprice * .20)));
    } else if (luckynumber === 3) {
        return ("Your total is = $" + OGprice +  "Your lucky number is 3, 35% discount for you! Total = &" + (OGprice - (OGprice * .35)));
    } else if (luckynumber === 4) {
        return ("Your total is = $" + OGprice +  "Your lucky number is 4, 50% discount for you! Total = $" + (OGprice - (OGprice * .5)));
        }  else if(luckynumber === 5) {
        return ("All for free!")
            }
        }

alert(calculateTotal());
//
//
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
//
// //  Generate a random number between 0 and 6
 //var luckyNumber = Math.floor(Math.random() * 6);

    var totalbill = Number(prompt("What is your total bill? "));
    alert("Your lucky number is " + luckynumber);
    alert("Your total for the bill is $" + totalbill);
    alert("Your discount is " +  calculateTotal(luckynumber, ));
//
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */
//
var pickAnumber = confirm("Would you like to enter a number?");
var num = prompt("what number would you like to pick?");
alert(num);
//
//
//
//
var userConfirmed = confirm("Would you like to enter a number?");

if (userConfirmed) {
    var usersNumber = Number(prompt("Give me a number."));

    if (!isNaN(usersNumber)){



    if (usersNumber % 2 === 0){
        alert("Your number is Even.")
    } else {
        alert("Your number is Odd.")
    }

    alert("Your number plus 100 is " + (100 + usersNumber));

    var numberPosOrNeg = (usersNumber > 0) ? "positive" : "Negitive";

    alert("Your number is " + numberPosOrNeg + ".");

}else{
        alert("Hey that is not a number!");
    }

} else {

}

//
// if(pickAnumber % 2 == 0) {
//     alert("The number is even.");
// } else {
//     alert("The number is Odd.")
// }
////

function basket(){
    basket.push("Gotta get Good");
}