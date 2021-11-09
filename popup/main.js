function sendMail(subject, yourMessage) {
    return "mailto:"+document.getElementById("recip").value+"?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(yourMessage);
}

document.getElementById("link").value = "AIIII";

chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
    var tab = tabs[0];
    document.getElementById("link").value = JSON.stringify(tab);
});

document.getElementById("send").onclick = () => {
    let e = JSON.parse(document.getElementById("link").value);
    document.getElementById("send").href = sendMail(e.title, e.url);
}