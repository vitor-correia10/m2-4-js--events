// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)
let body = document.querySelector('body');
    body.style.height = '100vh'; 
let result = document.querySelector('#result');

let whoWin = false;
let win = 'You are so fast...You Won!';
let lose = 'Unfortunately, You Lost!';

//Time
let time = document.querySelector('#time')
    time.style.fontWeight = '700';

let timeMath = Math.floor(Math.random() * 3 + 3);
time.innerText = timeMath;

let timeRemaining = timeMath;


//Display a message
function clicking(){
    whoWin = true;
    result.innerText = win;

    body.removeEventListener('click', clicking);

    clearInterval(couting);
}

setTimeout(
    function notClicking(){
        console.log('timeUp')
        if(whoWin == false){
            result.innerText = lose;

            body.removeEventListener('click', clicking)
        }

        clearInterval(couting);
    },
timeMath * 1000 + 1000);

body.addEventListener('click', clicking)

//Decrease time
let couting = setInterval(function decrease(){
    timeRemaining =  timeRemaining - 1;
    time.innerText = timeRemaining;    
    }, 
1000);