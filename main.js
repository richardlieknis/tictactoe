const circle = document.getElementById('circle');
const cross = document.getElementById('cross');
const gameover = document.getElementById('gameover');
const winSound = new Audio('src/audio/win.mp3');
const drawSound = new Audio('src/audio/draw.mp3');

let fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let currentPlayer = 'cross';
let win = false;

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
    let fieldHtml = document.getElementById(id);
    if (fields[id] < 9 && !win) {
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
            console.log("GEWONNEN:", currentPlayer);
            win = true;
            document.getElementById(`line${i}`).classList.remove('d-none');

            setTimeout(function() {
                document.getElementById('gameover').style.scale = .85;
                showWinner();
                winSound.play();
            }, 800);
        }
    }
}

function showWinner() {
    if (currentPlayer === 'circle') {
        document.getElementById("winner").innerHTML = 'Player 1 won!'
    } else if (currentPlayer === 'cross') {
        document.getElementById("winner").innerHTML = 'Player 2 won!'
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