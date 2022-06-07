// import needed modules
import { getRandomItem, score } from './utils.js';

// state
const throws = ['rock', 'paper', 'scissors'];
let choosing = true;
let wins = 0;
let losses = 0;
let draws = 0;
let total = 0;

//these are global variables:
let computerThrow = '';
let userThrow = '';
const throwResult = document.getElementById('throw-result');
const computerLabel = document.getElementById('computer-label');

function scoreGame() {
    computerThrow = getRandomItem(throws);

    if (computerThrow === 'rock') {
        computerLabel.textContent = 'Rock';
    } else if (computerThrow === 'paper') {
        computerLabel.textContent = 'Paper';
    } else if (computerThrow === 'scissors') {
        computerLabel.textContent = 'Scissors';
    }

    const result = score(userThrow, computerThrow);

    if (result === 1) {
        wins++;
        throwResult.textContent = 'win';

    }
    else if (result === -1) {
        losses++;
        throwResult.textContent = 'lose';
    }
    else if (result === 0) {
        draws++;
        throwResult.textContent = 'tie';
    }
    total++;

    displayResults();
    displayFaceOff();
}
// components
    // component
    // define and grab DOM elements
const rockButton = document.getElementById('rock-select');
const paperButton = document.getElementById('paper-select');
const scissorsButton = document.getElementById('scissors-select');
const userLabel = document.getElementById('user-label');

rockButton.addEventListener('click', () => {
    userThrow = 'rock';
    scoreGame();
    userLabel.textContent = 'Rock';
});

paperButton.addEventListener('click', () => {
    userThrow = 'paper';
    scoreGame();
    userLabel.textContent = 'Paper';
});

scissorsButton.addEventListener('click', () => {
    userThrow = 'scissors';
    scoreGame();
    userLabel.textContent = 'Scissors';
});

const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const drawsDisplay = document.getElementById('draws-display');
const totalDisplay = document.getElementById('total-display');
const faceOffDisplay = document.getElementById('faceoff-display');

const userImage = document.getElementById('user-image');
const computerImage = document.getElementById('computer-image');

function displayFaceOff() {

    if (choosing) {
        faceOffDisplay.classList.remove('hidden');
    }
    else {
        faceOffDisplay.classList.add('hidden');
    }
    userImage.src = 'assets/' + userThrow + '.png';
    computerImage.src = 'assets/' + computerThrow + '.png';
}


function displayResults() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawsDisplay.textContent = draws;
    totalDisplay.textContent = total;

}

displayResults();

