// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

let mainPage = document.querySelector('body');
    mainPage.style.height = '100vh';
    mainPage.style.background = 'lightblue';

let result = document.querySelector('#result');
    result.style.fontSize = '28px';
    result.style.textAlign = 'center';
    result.style.color = 'darkgreen'


let whoWin = false;
let win = 'You Won!';
let lose = 'You Lost!';

function clickingOnPage(){
    whoWin = true;
    result.innerText = win;

    mainPage.removeEventListener('click', clickingOnPage);
}

setTimeout(
    function notClicking(){
        if( whoWin == false){
            result.innerText = lose;

            mainPage.removeEventListener('click', clickingOnPage);
        }
    },
1000);

mainPage.addEventListener('click', clickingOnPage)
