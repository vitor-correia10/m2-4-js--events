// Exercise 2

let main = document.querySelector('.main');

// Adding 3 sections + ID for each one

for (let x = 1; x <= 3; x++) {
    let section = document.createElement('section');
    
    main.appendChild(section);

    section.id = 'section-' + (x);
}

//1 - current time
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getUTCSeconds();

document.querySelector('#section-1').innerText = `Current Time - > ${time}`;

// let addingSec = setInterval(function adding(){
//     time =  time + 1;
//     document.querySelector('#section-1').innerText = `Current Time -> ${time}`;
//     console.log(time);
// }, 
// 1000);


//2 - stopwatch
let section2 = document.querySelector('#section-2');
let divStopWatch = document.createElement('div');
    section2.appendChild(divStopWatch);
    divStopWatch.innerText = 'StopWatch - > 00:00';
    divStopWatch.style.margin = '20px 0 10px 0';

let secondsStopWatch = 0;
let minutesStopWatch = 0;
let timeStopWatch;

//adding time
function adding() {
    secondsStopWatch++;
    if (secondsStopWatch >= 60) {
        secondsStopWatch = 0;
        minutesStopWatch++;
    }
    
    document.querySelector('#section-2>div').innerText = ` StopWatch - > ${
        (
            minutesStopWatch ? (minutesStopWatch > 9 ? minutesStopWatch : "0" + minutesStopWatch) : "00"
            ) + ":" + (
            secondsStopWatch > 9 ? secondsStopWatch : "0" + secondsStopWatch
        )}`
}

let timeInterval;
function startTime(){
    timeInterval = setInterval(adding, 1000);
}

// adding buttons
for (let i = 1; i <= 2; i++) {
    let button = document.createElement('button');
    
    section2.appendChild(button);

    button.id = 'button-' + (i);
}

let btnStart = 'Start'
    document.querySelector('#button-1').innerText = btnStart;
    document.querySelector("#button-1").addEventListener('click', startTime);

let btnStop = 'Stop'
    document.querySelector('#button-2').innerText = btnStop;

function stopWatchFunction () {
    clearTimeout(timeInterval);
}

document.querySelector('#button-2').addEventListener('click', stopWatchFunction );

//3 - Timer
let section3 = document.querySelector('#section-3');
    section3.style.margin = '20px 0 10px 0';

let paragraphTimer = document.createElement('p');
    section3.appendChild(paragraphTimer);
    paragraphTimer.id = 'displayTimer';
let displayT = document.querySelector('#displayTimer');

let input = document.createElement('input');
    section3.appendChild(input);
    input.id = 'inputBox';

let btnTimer = document.createElement('button');
    section3.appendChild(btnTimer);
    btnTimer.innerText = 'Timer';
    btnTimer.id = 'entreNumber';

function countDown () {
    let userValue = document.querySelector('#inputBox').value;
    let startCountDown = setInterval(function(){
        let showCount = displayT.innerText = userValue;
        userValue = userValue - 1;
        if(userValue < 0){
            displayT.innerText = 'Time is over!';
            displayT.style.background = 'red';
            clearInterval(startCountDown);
        }
    }, 1000);
}
    document.querySelector('#entreNumber').addEventListener('click', countDown );


