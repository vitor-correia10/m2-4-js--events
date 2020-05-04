// Exercise 3.1

let main = document.querySelector('.main');

// Adding 20 buttons + ID for each one
for (let row = 1; row <= 20; row++) {
    let button = document.createElement('button');
    button.innerText = row

    button.id = 'btn-' + (row);

    main.appendChild(button);

    button.addEventListener('click', buttonGreen);
}

// Addin a class if the button is clicked
function buttonGreen(event) {
    let buttonId = event.currentTarget.id;

    document.getElementById(buttonId).classList.add('btn-green');
}