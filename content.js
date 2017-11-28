document.querySelector("body").addEventListener("contextmenu", function (e) {
	// send reference to e.target to background script
	console.log(e.target);
});