const circle = document.getElementById('circle');
const cross = document.getElementById('cross');
const gameover = document.getElementById('gameover');
const winSound = new Audio('src/audio/win.mp3');
const drawSound = new Audio('src/audio/draw.mp3');

let fields = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentPlayer = 'cross';
let win = false;
let counter = 0;

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

function playerPlace(id) {
    counter++;
    let fieldHtml = document.getElementById(id);
    if (fields[id] < 10 && !win) {
        if (currentPlayer === 'circle') {
            fields[id] = 'circle';
            fieldHtml.innerHTML = `<img src="src/img/circle.png">`;
            checkWin();
            setCurrentPlayer(currentPlayer);

        } else if (currentPlayer === 'cross') {
            fields[id] = 'cross';
            fieldHtml.innerHTML = `<img src="src/img/cross.png">`;
            checkWin();
            setCurrentPlayer(currentPlayer);
        }
    }

    if (counter === 9 && !win) {
        showGameover(true);
    }
}

function setCurrentPlayer(player) {
    if (player === 'circle') {
        currentPlayer = 'cross';
        document.getElementById('player1').classList.remove('inactive');
        document.getElementById('player2').classList.add('inactive');
    } else if (player === 'cross') {
        currentPlayer = 'circle';
        document.getElementById('player2').classList.remove('inactive');
        document.getElementById('player1').classList.add('inactive');
    }

}

function checkWin() {
    for (let i = 0; i < winFields.length; i++) {
        if (fields[winFields[i][0]] === fields[winFields[i][1]] &&
            fields[winFields[i][1]] === fields[winFields[i][2]]) {
            win = true;
            document.getElementById(`line${i}`).classList.remove('d-none');
            showGameover();
        }
    }
}

function showGameover(draw) {
    setTimeout(function() {
        document.getElementById('gameover').style.scale = .85;
        showWinner(draw);

    }, 800);
}

function showWinner(draw) {
    if (!draw) {
        if (currentPlayer === 'circle') {
            document.getElementById("winner").innerHTML = 'Player 1 won!';
            winSound.play();
        } else if (currentPlayer === 'cross') {
            document.getElementById("winner").innerHTML = 'Player 2 won!';
            winSound.play();
        }
    } else {
        document.getElementById("winner").innerHTML = 'DRAW';
        drawSound.play();
    }
}

function resetGame() {
    win = false;
    for (let i = 0; i < 9; i++) {
        let fieldHtml = document.getElementById(i);
        fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        fieldHtml.innerHTML = "";
        document.getElementById('gameover').style.scale = 0;
        document.getElementById(`line${i}`).classList.add('d-none');


    }
}