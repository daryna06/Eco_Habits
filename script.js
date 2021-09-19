function home() {
	window.location.href = "homepage.html";
}

document.getElementById("logo")
	.addEventListener("click", home);

function change() {
	document.getElementById("check-link")
		.setAttribute('style', 'color: red');
}

document.getElementById("check-link")
	.addEventListener("click", change);