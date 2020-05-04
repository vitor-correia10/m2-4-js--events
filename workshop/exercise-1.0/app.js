// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

let mainPage = document.querySelector('body');
    mainPage.style.height = '100vh';

let paragraph = "Page was clicked"

let paragraph1 = document.createElement('p');
paragraph1.innerText = paragraph;
paragraph1.setAttribute(
    "style",
    "text-align: center; color: red; text-decoration: underline;"
)

function clickingOnPage(){
    mainPage.appendChild(paragraph1);
}

mainPage.addEventListener('click', clickingOnPage)



