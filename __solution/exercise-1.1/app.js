// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

// Create variables with DOM items
const body = document.querySelector('body');
const result = document.getElementById('result');

let hasWon = false;

// The 'click' function
function clickEvent() {
    hasWon = true;
    result.innerText = "You Win!";

    // always remove the eventListener when you're done
    body.removeEventListener('click', clickEvent);
}

setTimeout(function() {
    if (!hasWon) {
        result.innerText = 'You Lose!';

        // always remove the eventListener when you're done
        body.removeEventListener('click', clickEvent);
    }
}, 1000);

// Add the event listener
body.addEventListener('click', clickEvent);