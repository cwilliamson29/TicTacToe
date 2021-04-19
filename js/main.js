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