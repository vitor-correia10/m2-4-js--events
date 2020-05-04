// Exercise 3.3

let main = document.querySelector('.main');

function toggleBackground(event) {
    let buttonId = event.currentTarget.id;

    document.getElementById(buttonId).classList.toggle('btn-green');
}

for (x = 1; x <= 20; x++) {
    let buttons = document.createElement('button');
    buttons.innerText = x;

    buttons.id = `btn-${x}`;

    //Adding buttons style
    buttons.style.padding = '10px';
    buttons.style.position = 'absolute';
    buttons.style.top = `${Math.random() * 90}vh`;
    buttons.style.left = `${Math.random() * 90}vw`;

    main.appendChild(buttons);

    buttons.addEventListener('click', toggleBackground);
}