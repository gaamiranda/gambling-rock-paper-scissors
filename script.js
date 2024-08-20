document.getElementById('login-button').addEventListener('click', function(e) {
	e.preventDefault()
	let name = document.getElementById("login-name").value
	let password = document.getElementById("login-password").value
	if (name === "admin" && password === "admin") window.location.href = "main.html"
	else alert("Invalid username or password!")
});
