var _contextNode = null;
document.querySelector("body").addEventListener("contextmenu", function (e) {	
	_contextNode = e.target;
});

browser.runtime.onMessage.addListener(function (msg) {
	if (msg.hideElement && _contextNode) {
		_contextNode.className += " gn-hidden";
	}
});