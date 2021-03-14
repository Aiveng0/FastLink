let qrPlace = document.querySelector('#qrcode');
let titlePlace = document.querySelector('.title'),
    descPlace = document.querySelector('.link');

// Остримати ссилку
chrome.tabs.getSelected(null, function (tab) {
    let link = document.createElement('a');
    link.href = tab.url;
    console.log('Створення коду');
    createCode(tab);
    history(tab.title, tab.url);
});

// Заголовки
chrome.tabs.getSelected(null, function (tab) {
    titlePlace.textContent = tab.title;
    descPlace.value = tab.url;
});

// Кнопка Завантажити
let a = document.querySelector('.a');

a.addEventListener('click', function (e) {
    let img = document.getElementsByTagName('img')[0];
    a.download = titlePlace.textContent.replace('.', '');
    a.href = img.src;
});

let changeColor = document.querySelector('.a');

function inputReloadCode(qrcode) {
    descPlace.addEventListener('input', function () {
        qrcode.makeCode(descPlace.value);
        console.log(descPlace.value);
    });
}

// Визначення параметрів для створення

function createCode(tab) {
    let getSize;
    let getCorrection;

    chrome.storage.sync.get('size', function (data) {
        getSize = data.size;
        console.log("size === " + getSize);

        chrome.storage.sync.get('corectionlevel', function (data) {
            getCorrection = data.corectionlevel;
            console.log("corectionlevel === " + getCorrection);

            if (getSize == 1 && getCorrection == 'H') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 400,
                    height: 400,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
                qrcode.makeCode(tab.url);
                // Зміна QRCode від введення тексту
                inputReloadCode(qrcode);
            } else if (getSize == 1 && getCorrection == 'Q') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 400,
                    height: 400,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.Q
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else if (getSize == 1 && getCorrection == 'M') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 400,
                    height: 400,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.M
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else if (getSize == 1 && getCorrection == 'L') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 400,
                    height: 400,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.L
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
                // size = 2
            } else if (getSize == 2 && getCorrection == 'H') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 300,
                    height: 300,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else if (getSize == 2 && getCorrection == 'Q') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 300,
                    height: 300,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.Q
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else if (getSize == 2 && getCorrection == 'M') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 300,
                    height: 300,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.M
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else if (getSize == 2 && getCorrection == 'L') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 300,
                    height: 300,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.L
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
                // size = 3
            } else if (getSize == 3 && getCorrection == 'H') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 250,
                    height: 250,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else if (getSize == 3 && getCorrection == 'Q') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 250,
                    height: 250,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.Q
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else if (getSize == 3 && getCorrection == 'M') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 250,
                    height: 250,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.M
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else if (getSize == 3 && getCorrection == 'L') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 250,
                    height: 250,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.L
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
                // size = 4
            } else if (getSize == 4 && getCorrection == 'H') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 200,
                    height: 200,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else if (getSize == 4 && getCorrection == 'Q') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 200,
                    height: 200,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.Q
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else if (getSize == 4 && getCorrection == 'M') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 200,
                    height: 200,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.M
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else if (getSize == 4 && getCorrection == 'L') {
                let qrcode = new QRCode(qrPlace, {
                    text: "Hello",
                    width: 200,
                    height: 200,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.L
                });
                qrcode.makeCode(tab.url);
                inputReloadCode(qrcode);
            } else {
                return;
            }
        });
    });




}



