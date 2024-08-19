let yourScore = 0
let computerScore = 0

yourScore++
computerScore++
document.getElementById("your_score").textContent = yourScore
document.getElementById("computer_score").textContent = computerScore


document.getElementById('rock-button').addEventListener('click', function() {
    document.getElementById("your_emoji").textContent = "🪨"
});

document.getElementById('paper-button').addEventListener('click', function() {
    document.getElementById("your_emoji").textContent = "🧻"
});

document.getElementById('scissors-button').addEventListener('click', function() {
    document.getElementById("your_emoji").textContent = "✂️"
});

document.getElementById("computer_emoji").textContent = "✂️"

