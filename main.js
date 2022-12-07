const circle = document.getElementById('circle');
const cross = document.getElementById('cross');
const gameover = document.getElementById('gameover');

let fields = [];
let toggle = true;

let winFields = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function playerPlace(field) {
    let fieldHtml = document.getElementById(field);

    if (toggle) {
        fields[field] = 'circle';
        fieldHtml.innerHTML = `<img src="src/img/circle.png">`;
        toggle = false;
    } else if (!toggle) {
        fields[field] = 'cross';
        fieldHtml.innerHTML = `<img src="src/img/cross.png">`;
        toggle = true;
    }

    checkWin();
    console.log(fields);
}

function checkWin() {
    for (let i = 0; i < winFields.length; i++) {
        if (fields[winFields[i][0]] === fields[winFields[i][1]] &&
            fields[winFields[i][1]] === fields[winFields[i][2]]) {
            console.log("GEWONNEN");
        }
    }

}