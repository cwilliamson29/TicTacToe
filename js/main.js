/*
 grid reference

1  |  2  |  3
___|_____|____
4  |  5  |  6
___|_____|____
7  |  8  |  9
   |     |

*/

const PlayerFactory = (name, choice) => {
    let moves = 5;
    if (choice === "O") {
        moves = 4;
    }
    let chosenMove = [];

    return { name, choice, moves, chosenMove }
}

let playerX = PlayerFactory("Player 1", "X");
let playerO = PlayerFactory("Player 2", "O");

let movesLeft = playerX.moves + playerO.moves

// detech box usage
let gridArray = [];

const winScenario = [
    ["s1", "s4", "s7"],
    ["s2", "s5", "s8"],
    ["s3", "s6", "s9"],
    ["s1", "s5", "s9"],
    ["s1", "s4", "s7"],
    ["s1", "s2", "s3"],
    ["s4", "s5", "s6"],
    ["s7", "s8", "s9"]
]

let currentPlayer = "x";
let gridChoiceDetectlet;
let gameWin = false;
document.getElementById('restart').addEventListener('click', function() {
    restartGame();
});

for (let i = 1; i <= 9;) {
    document.getElementById('s' + i).addEventListener('click', function() {
        setPlayerSelection(this.id);
    });
    ++i
}

function setPlayerSelection(id) {
    if (gameWin) {
        return
    }

    let player;
    if (currentPlayer === "x") {
        player = playerX;
        player.chosenMove.push(id);
    } else if (currentPlayer === "o") {
        player = playerO;
        player.chosenMove.push(id);
    }

    --player.moves;

    console.log(player.name)
    if (currentPlayer === "x") {
        BoxSelection(id, currentPlayer);
        if (gridChoiceDetect === true) {
            ++player.moves
            return
        }
        document.getElementById(id).textContent = "X";

        currentPlayer = "o";
    } else if (currentPlayer === "o") {
        BoxSelection(id, currentPlayer);
        if (gridChoiceDetect === true) {
            return
        }
        document.getElementById(id).textContent = "O";

        currentPlayer = "x";
    }

}

function BoxSelection(box, choice) {
    gridChoiceDetect = gridArray.includes(box);

    if (gridChoiceDetect === true) {

        let invalidSelect = document.getElementById('statusBar').textContent = "Invalid selection, choose again!";

        return invalidSelect;

    } else if (gridChoiceDetect === false) {
        gridArray.push(box);

        if (choice !== "x") {
            player = playerX;
        } else {
            player = playerO;
        }

        document.getElementById('statusBar').textContent = "It's " + player.name + "'s move!";

        return detectPlayerWin(choice)
    }
}

function detectPlayerWin(choice) {
    let player;

    if (choice === "x") {
        player = playerX;
    } else {
        player = playerO;
    }

    for (let j = 0; j < 8;) {

        let containsWin = winScenario[j].every(i => player.chosenMove.includes(i));

        if (containsWin === true) {
            winGame(player);
            gameWin = true;
            console.log(player.name + " win")
        }

        ++j
    }
}

function winGame(player) {
    document.getElementById('statusBar').textContent = player.name + " wins with " + player.moves + " moves left!";

    for (let i = 1; i <= 9;) {
        document.getElementById('s' + i).addEventListener('click', function() {
            restartGame();
        });
        ++i
    }
}

function restartGame() {
    location.reload();
    return false;
}