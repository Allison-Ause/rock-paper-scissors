// import needed modules
import { getRandomItem, score } from './utils.js';

// state
const throws = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;
let draws = 0;
let total = 0;

//these are global variables:
let computerThrow = '';
let userThrow = '';

function scoreGame() {
    computerThrow = getRandomItem(throws);

    const result = score(userThrow, computerThrow);

    if (result === 1) {
        wins++;
    }
    else if (result === -1) {
        losses++;
    }
    else if (result === 0) {
        draws++;
    }
    total++;

    displayResults();
}
// components
    // component
    // define and grab DOM elements
const rockButton = document.getElementById('rock-select');
const paperButton = document.getElementById('paper-select');
const scissorsButton = document.getElementById('scissors-select');

rockButton.addEventListener('click', () => {
    userThrow = 'rock';
    scoreGame();
});

paperButton.addEventListener('click', () => {
    userThrow = 'paper';
    scoreGame();
});

scissorsButton.addEventListener('click', () => {
    userThrow = 'scissors';
    scoreGame();
});

const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const drawsDisplay = document.getElementById('draws-display');
const totalDisplay = document.getElementById('total-display');

function displayResults() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawsDisplay.textContent = draws;
    totalDisplay.textContent = total;
}
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions
displayResults();

