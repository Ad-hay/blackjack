let card = []
let sum = 0
let player = {
    Name: "ADHAY",
    Chip: 150
}
//let newcard = card + " , " + thirdCard
//let newsum = sum + thirdCard
let hasBlackJack = false
let isAlive = true
let youLost = false
let message = ""
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chip

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")  Or
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let startEl = document.querySelector("#start-btn")
let loseChip = player.Chip - 50
let wonChip = player.Chip + 100



function startgame() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    card = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}

function rendergame() {
    if (sum <= 20) {
        message = "Do you want to draw anoter card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!!!"
        hasBlackJack = true
    } else {
        message = "You have lost"
        isAlive = false
        youLost = true
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    for (let i = 0; i < card.length; i++) {
        cardEl.textContent += card[i] + " "
    }
}

function newcard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        card.push(thirdCard)
        rendergame()
        startEl.textContent = "GAME ON!!"
    } else if (isAlive === false && youLost === true) {
        playerEl.textContent = player.Name + ": $" + loseChip
    } else if (hasBlackJack === true) {
        playerEl.textContent = player.Name + ": $" + wonChip
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}