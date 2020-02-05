// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

// Create variables with DOM items
const body = document.querySelector('body');
const result = document.getElementById('result');

// The 'click' function
function clickEvent() {
    result.innerText = "You Win!";

    // always remove the eventListener when you're done
    body.removeEventListener('click', clickEvent);
}

// Add the event listener
body.addEventListener('click', clickEvent);