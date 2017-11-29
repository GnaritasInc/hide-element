window.browser = window.browser || window.chrome;
function showElements () {
    browser.tabs.executeScript({
        code: "document.querySelectorAll('.gn-hidden').forEach(function (elem) {elem.className = elem.className.replace('gn-hidden', '')});"
    });
}

function hideElement (tab) {
    if (tab) {
        browser.tabs.sendMessage(tab.id, {"hideElement":true});
    }
}

browser.contextMenus.create({
    id: "gn-hide",
    title: "Hide Element",
    contexts: ["page"]
});

browser.contextMenus.create({
    id: "gn-show",
    title: "Show Hidden Elements",
    contexts: ["page"]
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId){
        case "gn-show":
            showElements();
            break;
        case "gn-hide":
            hideElement(tab);
            break;
    }    
});

