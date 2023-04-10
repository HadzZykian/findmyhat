const prompt = require('prompt-sync')({ sigint: true });
const clear = require('clear-screen');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const height = 10; //row
const width = 10; //col
const field = [];

// Generate the game field
function generateField() {
    for (let i = 0; i < height; i++) {
        field[height] = [];
        for (let j = 0; j < width; j++) {
            field[i][j] = fieldCharacter;
        }
    }
}

// Starting position of the path character
function startPosition(field) {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] == pathCharacter) {
                return [i, j];
            }
        }
    }
}

// To Move the character
function moveCharacter(field, direction) {
    const currentPos = startPosition(field);
    let [row, col] = currentPos;

    if (direction == 'u' && row > 0) {
        row--;
    }
    


    if (field[row][col] == hole) {
        console.log('Sorry, you fell down a hole!');
        return false;
    } else if (field[row][col] == hat) {
        console.log('Congrats, you found your hat!');
        return false;
    } else {
        field[row][col] = pathCharacter;
        field[currentPos[0]][currentPos[1]] = fieldCharacter;
        return [row, col];
    }
}


function startGame() {
    const field = generateField()
    let playing = true;
    while (playing) {
        clear();
        const direction = prompt('Which way? ');
        const newPos = moveCharacter(field, direction.toLowerCase());
        if (newPos == false) {
            playing = false;
        }
    }
}

startGame();
