const mainDiv = document.getElementById('main');

function toggleColor(event) {
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.toggle('green');
}

for (let i = 1; i <= 20; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.id = `btn-${i}`;
    mainDiv.appendChild(button);

    button.addEventListener('click', toggleColor);
}

// In this exercise, I added CSS to the index.html file.
// I am using a class to change the background.