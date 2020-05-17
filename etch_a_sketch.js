
const error = document.querySelector('#error'); //selects div node on doc
const p = document.createElement('p'); //creates new node
var pText = document.createTextNode(`Please hit the "reset" button first`); //creates textNode
p.appendChild(pText);

function checkSize (choice) {
    var submit = document.getElementById("myInput");
    var choice = submit.value;
    if (choice <= 100) {
      document.documentElement.style.setProperty("--n", choice);
      makeBlocks(choice);
    } else {
        alert('Please enter a number smaller than 100');
    }
}

function makeBlocks(num) {
    canvas.innerHTML = "";
    for (var i = 0; i < num ** 2; i++) {
        const container = document.querySelector('#canvas');
        const div = document.createElement('div');
        div.classList.add('div');
        div.addEventListener('mouseover', colorIn);
        container.appendChild(div);
    }
}

var colorSelected = 'delete';
function changeColor(color) {
    colorSelected = color;
}

function colorIn() {
    var box = this;
    switch (colorSelected) {
        case 'yellow':
            box.classList.remove('drawRed');
            box.classList.remove('drawGreen');
            box.classList.add('drawYellow');
            box.classList.remove('drawBlue');
            break;
        case 'red':
            box.classList.remove('drawYellow');
            box.classList.remove('drawGreen');
            box.classList.add('drawRed');
            box.classList.remove('drawBlue');
            break;
        case 'green':
            box.classList.add('drawGreen');
            box.classList.remove('drawYellow');
            box.classList.remove('drawRed');
            box.classList.remove('drawBlue');
            break;
        case 'blue':
            box.classList.add('drawBlue');
            box.classList.remove('drawYellow');
            box.classList.remove('drawRed');
            box.classList.remove('drawGreen');
            break;
        default:
            box.classList.remove('drawGreen');
            box.classList.remove('drawYellow');
            box.classList.remove('drawRed');
            box.classList.remove('drawBlue');
    }
}


document.getElementById("myBtn").addEventListener('click', checkSize);


