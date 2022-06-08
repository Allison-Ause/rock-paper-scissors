// IMPORT code to test here
// import { fn } from '../module.js';
import { score } from '../utils.js';

const test = QUnit.test;


// Winning Throw Tests

test('scores rock v scissors as 1', (expect) => {
    const rock = 'rock';
    const scissors = 'scissors';

    let userThrow = rock;
    let computerThrow = scissors;

    const actual = score(userThrow, computerThrow);

    expect.equal(actual, 1);
});

test('scores scissors v paper as 1', (expect) => {
    const scissors = 'scissors';
    const paper = 'paper';

    let userThrow = scissors;
    let computerThrow = paper;

    const actual = score(userThrow, computerThrow);

    expect.equal(actual, 1);
});

test('scores paper v rock as 1', (expect) => {
    const paper = 'paper';
    const rock = 'rock';

    let userThrow = paper;
    let computerThrow = rock;

    const actual = score(userThrow, computerThrow);

    expect.equal(actual, 1);
});

// Losing Throw Tests

test('scores rock v paper as -1', (expect) => {
    const paper = 'paper';
    const rock = 'rock';

    let userThrow = rock;
    let computerThrow = paper;

    const actual = score(userThrow, computerThrow);

    expect.equal(actual, -1);
});

test('scores paper v scissors as -1', (expect) => {
    const paper = 'paper';
    const scissors = 'scissors';

    let userThrow = paper;
    let computerThrow = scissors;

    const actual = score(userThrow, computerThrow);

    expect.equal(actual, -1);
});

test('scores scissors v rock as -1', (expect) => {
    const scissors = 'scissors';
    const rock = 'rock';

    let userThrow = scissors;
    let computerThrow = rock;

    const actual = score(userThrow, computerThrow);

    expect.equal(actual, -1);
});


// Tied Throw Tests

test('scores rock v rock as a 0', (expect) => {
    const rock = 'rock';
    
    let userThrow = rock;
    let computerThrow = rock;

    const actual = score(userThrow, computerThrow);

    expect.equal(actual, 0);
});

test('scores paper v paper as a 0', (expect) => {
    const paper = 'paper';

    let userThrow = paper;
    let computerThrow = paper;

    const actual = score(userThrow, computerThrow);

    expect.equal(actual, 0);
});

test('scores scissors v scissors as a tie', (expect) => {
    let scissors = 'scissors';

    let userThrow = scissors;
    let computerThrow = scissors;

    const actual = score(userThrow, computerThrow);

    expect.equal(actual, 0);
});


