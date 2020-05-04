// Exercise 3.2

let main = document.querySelector('.main');

function toggleBackground(event) {
    let buttonId = event.currentTarget.id;

    document.getElementById(buttonId).classList.toggle('btn-green');
}

for (let x = 1; x <= 20; x++) {
    let buttons = document.createElement('button');
    buttons.innerText = x

    buttons.id = `btn-${x}`;

    main.appendChild(buttons);

    buttons.addEventListener('click', toggleBackground);
}

