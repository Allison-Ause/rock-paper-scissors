
export function getRandomItem(array) {
    const random = Math.floor(Math.random() * array.length);
    const item = array[random];
    return item;
}

export function score(userThrow, computerThrow) {
    if (userThrow === 'rock' && computerThrow === 'scissors') {
        return 1;

    } else if (userThrow === 'scissors' && computerThrow === 'paper') {
        return 1;

    } else if (userThrow === 'paper' && computerThrow === 'rock') {
        return 1;

    } else if (userThrow === 'rock' && computerThrow === 'paper') {
        return -1;

    } else if (userThrow === 'paper' && computerThrow === 'scissors') {
        return -1;

    } else if (userThrow === 'scissors' && computerThrow === 'rock') {
        return -1;

    } if (userThrow === computerThrow) {
        return 0;
    }
}