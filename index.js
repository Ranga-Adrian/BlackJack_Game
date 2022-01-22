let message = document.getElementById('message-el');
let cards = document.getElementById('cards-el');
let sumElem = document.getElementById('sum-el');
let sum = 0;
let min = 2;
let max = 12;
let isAlive = true;
let hasWonBlackJack = false;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function startGame() {
    if (isAlive === false || hasWonBlackJack === true) window.location.reload();
    if (sum < 21) {
        newCard();
    }
}

function newCard() {
    console.log('Drawing a new card from the deck ! ');
    let random = getRandomInt(min, max);
    cards.textContent += ' ' + random;
    sum += random;
    if (sum === 21) {
        message.textContent = "Whoraaayyy ! You've won the BlackJack ! :D ";
        hasWonBlackJack = true;
    } else if (sum < 21) {
        message.textContent =
            "You've got untill now " + sum + ', do you want another card ?';
    } else {
        message.textContent = 'You have loosed the BlackJack :(';
        isAlive = false;
    }
    sumElem.textContent = 'Sum: ' + sum;
}
