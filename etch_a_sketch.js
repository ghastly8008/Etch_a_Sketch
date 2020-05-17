
const error = document.querySelector('#error'); //selects div node on doc
const p = document.createElement('p'); //creates new node
var pText = document.createTextNode(`Please hit the "reset" button first`); //creates textNode
p.appendChild(pText);

// function checkSize (size) {
//     if (size >= 16 && size <= 100) {
//       document.documentElement.style.setProperty("--n", size);
//       createDivs(size);
//     } else {
//         alert('Please enter a number that is greater than 16 and smaller than 100.');
//         clearCanvas();
//     }
// }

count = 0;

function makeBlocks() {
    var c = document.getElementById('boxParent');
    var submit = document.getElementById("myInput");
    var choice = submit.value;
    count++;
    if (choice <= 16 || choice >= 100) {
          alert('Please enter a number that is greater than 16 and smaller than 100.');
    }
    if (count > 1) {
        c.innerHTML = "";
    }
    for (var i = 0; i < choice; i++) {
        var row = document.createElement('div');
        row.className = "row";
        row.id = `rowID${i}`;
        for (var j = 0; j < choice; j++) {
            var box = document.createElement('div');
            box.className = "box";
            box.id = `boxID${i}${j}`;
            box.addEventListener('mouseover', colorIn);
            row.appendChild(box);
        }
        document.getElementById('boxParent').appendChild(row);
    }
}

var colorSelected = 'delete';
function changeColor(color) {
    colorSelected = color;
    //colorSelected = button.id;
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


document.getElementById("myBtn").addEventListener('click', makeBlocks);


