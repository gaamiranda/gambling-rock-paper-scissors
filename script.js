let yourScore = 0
let computerScore = 0
let betGlobal = 0


function play_game(user_choice) {
	if (document.getElementById("your_score").textContent == 3 || document.getElementById("computer_score").textContent == 3)
		return
	let computer_num = Math.floor(Math.random() * 3)
	const possibilities = ["rock", "paper", "scissors"]
	let computer_choice = possibilities[computer_num]
	switch(computer_choice) {
		case "rock":
			document.getElementById("computer_emoji").textContent = "🪨"
			break
		case "paper":
			document.getElementById("computer_emoji").textContent = "🧻"
			break
		case "scissors":
			document.getElementById("computer_emoji").textContent = "✂️"
			break
	}
	if (user_choice === computer_choice)
		return
	else if (user_choice === "rock" && computer_choice === "scissors") {
		document.getElementById("your_score").textContent = Number(document.getElementById("your_score").textContent) + 1
	}
	else if (user_choice === "paper" && computer_choice === "rock") {
		document.getElementById("your_score").textContent = Number(document.getElementById("your_score").textContent) + 1 
	}
	else if (user_choice === "scissors" && computer_choice === "paper") {
		document.getElementById("your_score").textContent = Number(document.getElementById("your_score").textContent) + 1
	}
	else {
		document.getElementById("computer_score").textContent = Number(document.getElementById("computer_score").textContent) + 1
	}
	if (document.getElementById("computer_score").textContent == 3) {
		setTimeout(showPopup, 1000)
		return
	}
	if (document.getElementById("your_score").textContent == 3) {
		document.getElementById("current-amount").textContent = Number(document.getElementById("current-amount").textContent) + betGlobal * 2
		setTimeout(showPopup, 1000)
		return
	}
}

document.getElementById('rock-button').addEventListener('click', function() {
    document.getElementById("your_emoji").textContent = "🪨"
	play_game("rock")
});

document.getElementById('paper-button').addEventListener('click', function() {
    document.getElementById("your_emoji").textContent = "🧻"
	play_game("paper")
});

document.getElementById('scissors-button').addEventListener('click', function() {
    document.getElementById("your_emoji").textContent = "✂️"
	play_game("scissors")
});

//show popup
function showPopup() {
	document.getElementById("your_emoji").textContent = "🤑"
	document.getElementById("computer_emoji").textContent = "🤑"
	document.getElementById("your_score").textContent = 0
	document.getElementById("computer_score").textContent = 0
	const popup = document.getElementById("bet-popup")
	popup.style.display = "flex"
	document.getElementById("bet-amount").value = '';
    document.getElementById("bet-amount").focus();
}

//close popup when submit is pressed
document.getElementById("submit-bet").addEventListener("click", function() {
	const betAmount = document.getElementById("bet-amount").value
	if (!betAmount) {
		alert("Insert a value!")
		return
	} else if (betAmount <= 0) {
		alert("You can't bet 0 or less!")
		return
	} else if (betAmount > Number(document.getElementById("current-amount").textContent)) {
		alert("You can't bet more than what you have!")
		return
	}
	document.getElementById("current-amount").textContent -= betAmount
	betGlobal = betAmount
	const popup = document.getElementById("bet-popup")
	popup.style.display = "none"
})

showPopup()


