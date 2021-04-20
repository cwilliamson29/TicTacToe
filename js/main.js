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
    return { name, choice, moves }
}

let playerX = PlayerFactory("Player 1", "X");
let playerO = PlayerFactory("Player 2", "O");

let movesLeft = playerX.moves + playerO.moves

// detech box usage
let gridArray = [];
let playerChoice = {
    s1: null,
    s2: null,
    s3: null,
    s4: null,
    s5: null,
    s6: null,
    s7: null,
    s8: null,
    s9: null
}

let currentPlayer = "x";
let gridChoiceDetect

for (let i = 1; i <= 9;) {
    document.getElementById('s' + i).addEventListener('click', function() {
        setPlayerSelection(this.id);
    });
    ++i
}

function setPlayerSelection(id) {
    if (currentPlayer === "x") {
        BoxSelection(id, currentPlayer);

        if (gridChoiceDetect === true) {
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
        playerChoice[box] = choice;
        //console.log(playerChoice)
        return detectPlayerWin(choice)
    }

    console.log("skipped if")
}

function detectPlayerWin(choice) {
    let playerWin;
    --movesLeft;
    if (playerChoice.s1 === choice &&
        playerChoice.s4 === choice &&
        playerChoice.s7 === choice) {

        console.log("win")
    } else if (playerChoice.s2 === choice &&
        playerChoice.s5 === choice &&
        playerChoice.s8 === choice) {

        console.log("win")
    } else if (playerChoice.s3 === choice &&
        playerChoice.s6 === choice &&
        playerChoice.s9 === choice) {

        console.log("win")
    } else if (playerChoice.s1 === choice &&
        playerChoice.s5 === choice &&
        playerChoice.s9 === choice) {

        console.log("win")
    } else if (playerChoice.s1 === choice &&
        playerChoice.s4 === choice &&
        playerChoice.s7 === choice) {

        console.log("win")
    } else if (playerChoice.s7 === choice &&
        playerChoice.s5 === choice &&
        playerChoice.s3 === choice) {

        console.log("win")
    } else if (playerChoice.s1 === choice &&
        playerChoice.s2 === choice &&
        playerChoice.s3 === choice) {

        console.log("win")
    } else if (playerChoice.s4 === choice &&
        playerChoice.s5 === choice &&
        playerChoice.s6 === choice) {

        console.log("win")
    } else if (playerChoice.s7 === choice &&
        playerChoice.s8 === choice &&
        playerChoice.s9 === choice) {

        console.log("win")
    } else if (movesLeft === 0) {
        console.log("tie game")
    } else {
        console.log("Bust a move!")
    }
}