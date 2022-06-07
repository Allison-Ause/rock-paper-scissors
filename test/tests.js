// IMPORT code to test here
// import { fn } from '../module.js';
import { score } from './utils.js';

const test = QUnit.test;

test('test your pure functions...', (expect) => {
    //Arrange - 1
    // Set up your arguments and expectations
    const expected = true;

    //Act - 2
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect - 3
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('scores winning throws as 1', (expect) => {
    expect.equal(score('rock', 'scissors'), 1);
//  expect.equal(score('scissors', 'paper'), 1);
//  expect.equal(score('paper', 'rocks'), 1);
});

//test('scores tied/draw throws as 0', (expect) => {
//    expect.equal(score('rock', 'rock'), 0);
//    expect.equal(score('scissors', 'scissors'), 0); 
//    expect.equal(score('paper', 'paper'), 0); 
//});

//test('scores losing throws as -1', (expect) => {
//    expect.equal(score('rock', 'paper'), -1);
//    expect.equal(score('paper', 'scissors'), 0); 
//    expect.equal(score('scissors', 'rock'), 0); 
//});
