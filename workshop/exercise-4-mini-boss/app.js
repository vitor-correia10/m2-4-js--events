// 4 - Mini Boss
const starting = document.querySelector('#starting');
const timer = document.querySelector('#timer');
const gameBoard = document.querySelector('#game');
const message = document.querySelector('#message');

let value = 5;
const buttonsRandom = Math.floor(Math.random() * 10) + 2;

let buttonsArray = [];

function startingGame() {
    // remove the start button
    starting.remove();
    
    timer.innerText = value;
    let seconds = value - 1;
    let countdown = setInterval(function () {
        if (seconds < 1) {
            clearInterval(countdown);
            endingGame();
        }
        timer.innerText = seconds;
        seconds -= 1;
    }, 1000);

    for (let i = 0; i < buttonsRandom; i++) {
        let button = document.createElement('button');
        button.innerText = i;
        button.id = `btn-${i}`;
        button.style.top = `${Math.random() * 300 + 100}px`;
        button.style.left = `${Math.random() * 400 + 100}px`;

        gameBoard.appendChild(button);

        buttonsArray.push(false);

        button.addEventListener('click', toggleColor);
    }
    
    const buttonStatus = setInterval(function () {
        if (checkArray(buttonsArray)) {
            timer.innerText = 0;
        endingGame();
        clearInterval(buttonStatus);
    }
    }, 100);
}

starting.addEventListener('click', startingGame);

function checkArray(arr) {
    return arr.every(function (item) {
        return item;
    });
}

function toggleColor(event) {
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.toggle('btn-green');
    
    const id = buttonId.split('-')[1];

    buttonsArray[id] = !buttonsArray[id];
}

function endingGame() {
    if (checkArray(buttonsArray)) {
        message.innerText = 'You Won :D';
        message.style.background = 'green';
    } else {
        message.innerText = 'You Lost :(';
        message.style.background = 'red';
    }

    for (let i = 0; i < buttonsRandom; i++) {
    document.getElementById(`btn-${i}`);
    document.removeEventListener('click', toggleColor);
    }
}