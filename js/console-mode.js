document.onkeydown = function (event) {
    if (event.code == 'AltLeft') {
        document.onkeyup = function (event) {
            if (event.code == 'KeyT') {
                console.log('======= INFO =======');
                //chrome.tabs.create({url: "chrome-extension://igcccablbnhhhjhjfbcafhdmiiefaejj/_generated_background_page.html"});
                testInfo();
            } else {
                document.onkeyup = null;
            }
        };
    }
};


// Вивід в консоль деякої інформації про налаштування
function testInfo() {
    chrome.tabs.getSelected((info) => {
        console.log("Tab title: " + info.title + "\nURL: " + info.url + "\nStatus: " + info.status + "\nTab Id: " + info.id);
    });

    chrome.storage.sync.get('colortheme', function (data) {
        console.log("Theme: " + data.colortheme);
    });

    chrome.storage.sync.get('size', function (data) {
        console.log("QRCode size: " + data.size);
    });

    chrome.storage.sync.get('corectionlevel', function (data) {
        console.log("Corection level: " + data.corectionlevel);
    });
}