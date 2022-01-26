
let sum = 0;
let hasBlackCheck = false;
let isAlive = false;
let message = "";
let cards = []
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let player = {
    name: "Sachin",
    chips: 700
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " :$" + player.chips

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: "
    for (let count = 0; count < cards.length; count++) {

        cardEl.textContent = cardEl.textContent + cards[count] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw another card?"
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackCheck = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;

}
function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum > 10) {
        return 10
    }
    else if (randomNum === 1)
        return 11; //ace

    else
        return randomNum;
}
function newCard() {
    if (isAlive === true && hasBlackCheck === false) {
        let card = getRandomCard();
        sum = card + sum;
        cards.unshift(card);
        renderGame();
    }



}