let histName;
let histLink;
let date = new Date();
const historyWrapper = document.querySelector('.cards');
const historyBtn = document.querySelector('.hist-btn');

let hists = [];
let hists1;

function Task(name, link, date) {
    this.name = name;
    this.link = link;
    this.date = date;
}

const updatelocal = () => {
    localStorage.setItem('hists', JSON.stringify(hists1));
};

function history(b, c) {
    let time = new Date();

    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    let date = time.toLocaleString("en", options);

    histName = b;
    histLink = c;

    hists.push(new Task(histName, histLink, date));
    let ttt = localStorage.getItem('hists');
    let mas = JSON.parse(ttt);
    hists1 = hists.concat(mas);
    updatelocal();
}



const createHist = data => {
    return `
        <div class="card">
            <p class="card-title">${data.name}</p>
            <a href="${data.link}" class="card-link lng-card-link" target="_blank">${data.link}</a>
            <p class="card-date">${data.date}</p>
        </div>
    `;
};

function addHist() {
    let ttt = localStorage.getItem('hists');
    let mas = JSON.parse(ttt);
    historyWrapper.innerHTML = '';
    if (mas) {
        mas.forEach(item => {
            historyWrapper.innerHTML += createHist(item);
        });
    }
}

historyBtn.addEventListener('click', () => {
    addHist();
});


// let histQR = document.querySelector('.histqr');
// historyBtn.onmouseover = function () {

//     let qrcode = new QRCode(histQR, {
//         text: "Hello",
//         width: 150,
//         height: 150,
//         colorDark: "#000000",
//         colorLight: "#ffffff",
//         correctLevel: QRCode.CorrectLevel.L
//     });

//     // Остримати ссилку
//     chrome.tabs.getSelected(null, function (tab) {
//         let link = document.createElement('a');
//         link.href = tab.url;
//         console.log('Створення коду');
//         qrcode.makeCode(tab.url);
//     });

// };

// historyBtn.onmouseout = function () {
//     histQR.innerHTML = '';
// };













//Зберігання історії в локальне сховище
// function history(b, c) {
//     let date = new Date();

//     let codeHistory = {
//         name: b,
//         link: c,
//         date: date
//     };

//     codeHistory.push(new createHistory(b, c));

//     //let storageID = localStorage.length + 1;
//     localStorage.setItem('history', JSON.stringify(codeHistory));
//     addHistory();
// }

// function CreateHist(b,c) {
//     this.b = b;
//     this.c = c;
// }

// // Заповнення історії
// const historyWrapper = document.querySelector('.cards');

// const createHistory = data => {
//     return `
//     <div class="card">
//         <p class="card-title">${data.name}</p>
//         <a href="${data.link}" class="card-link lng-card-link">Перейти на сайт</a>
//         <p class="card-date">${data.date}</p>
//     </div>
//     `;
// };

// let historyData;
// localStorage.length < 1 ? historyData = [] : historyData = JSON.parse(localStorage.getItem('history'));


// function addHistory() {
//     historyWrapper.innerHTML = '';
//     if (historyData) {
//         historyData.forEach(item => {
//             console.log(item);
//             historyWrapper.innerHTML += createHistory(item);
//         });
//     }
// }
// // addHistory();
// console.log(historyData);



