let qrPlace = document.querySelector('#qrcode');
let titlePlace = document.querySelector('.title'),
    descPlace = document.querySelector('.link');

// let qrcode = new QRCode(qrPlace, {
//     text: "Hello",
//     width: 300,
//     height: 300,
//     colorDark: "#000000",
//     colorLight: "#ffffff",
//     correctLevel: QRCode.CorrectLevel.H
// });

// Остримати ссилку
chrome.tabs.getSelected(null, function (tab) {
    let link = document.createElement('a');
    link.href = tab.url;
    console.log('Створення коду');
    // qrcode.makeCode(tab.url);
    setSize1(tab);
});

// Заголовки
chrome.tabs.getSelected(null, function (tab) {
    //console.log(tab);
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

// Зміна QRCode від введення тексту
// descPlace.addEventListener('input', function () {
//     qrcode.makeCode(descPlace.value);
//     console.log(descPlace.value);
// });


let changeColor = document.querySelector('.a');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });



function setSize1(tab) {
    chrome.storage.sync.get('size', function (data) {
        if (data.size == 1) {
            let qrcode = new QRCode(qrPlace, {
                text: "Hello",
                width: 400,
                height: 400,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M
            });
            qrcode.makeCode(tab.url);
            // Зміна QRCode від введення тексту
            inputReloadCode(qrcode);
        } else if (data.size == 2) {
            let qrcode = new QRCode(qrPlace, {
                text: "Hello",
                width: 300,
                height: 300,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M
            });
            qrcode.makeCode(tab.url);
            // Зміна QRCode від введення тексту
            inputReloadCode(qrcode);
        } else if (data.size == 3) {
            let qrcode = new QRCode(qrPlace, {
                text: "Hello",
                width: 250,
                height: 250,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M
            });
            qrcode.makeCode(tab.url);
            // Зміна QRCode від введення тексту
            inputReloadCode(qrcode);
        } else if (data.size == 4) {
            let qrcode = new QRCode(qrPlace, {
                text: "Hello",
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M
            });
            qrcode.makeCode(tab.url);
            // Зміна QRCode від введення тексту
            inputReloadCode(qrcode);
        } else {
            return;
        }
    });
}


function inputReloadCode(qrcode) {
    descPlace.addEventListener('input', function () {
        qrcode.makeCode(descPlace.value);
        console.log(descPlace.value);
    });
}

