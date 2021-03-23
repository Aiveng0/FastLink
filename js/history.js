let histName;
let histLink;
let date = new Date();
const historyWrapper = document.querySelector('.cards');
const historyBtn = document.querySelector('.hist-btn');

let hists = [];
let hists1;

// клас конструктор для передаці записів в локальне сховище
function Task(name, link, date) {
    this.name = name;
    this.link = link;
    this.date = date;
}

const updatelocal = () => {
    localStorage.setItem('hists', JSON.stringify(hists1));
};

function history(b, c) {
    // отримуємо дату
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

    // переводимо дату в зразок США
    let date = time.toLocaleString("en", options);

    histName = b;
    histLink = c;

    // оновлюємо локальне сховище (додаємо записи)
    hists.push(new Task(histName, histLink, date));
    let ttt = localStorage.getItem('hists');
    let mas = JSON.parse(ttt);
    hists1 = hists.concat(mas);
    updatelocal();
}



const createHist = data => {
    if (data == null) {
        return ` `;
    }
    // створюємо блоки історії
    return `
        <div class="card">
            <div class="card-info">
                <p class="card-title">${data.name}</p>
                <a href="${data.link}" class="card-link lng-card-link" target="_blank">${data.link}</a>
                <p class="card-date">${data.date}</p>
            </div>
            <div class="card-qr"></div>
        </div>
    `;
};

function addHist() {
    // записуємо в масим значення з локального сховища
    let ttt = localStorage.getItem('hists');
    let mas = JSON.parse(ttt);
    // очищуємо поле з блоками історї
    historyWrapper.innerHTML = '';
    // передаємо дані з масиву для сторення нових блоків історії
    if (mas) {
        mas.forEach(item => {
            historyWrapper.innerHTML += createHist(item);
        });
    }
}

historyBtn.addEventListener('click', () => {
    addHist();
    histQR();
});



//   ==== Пошук в історії ====

let searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', () => {
    // перезаписуємо значення при вводі тексту
    let searchName = searchInput.value.trim();
    searchHist(searchName);
});


function searchHist(searchName) {
    // всі блоки з історією пошуку
    let searchList = document.querySelectorAll('.card');

    if (searchList) {
        searchList.forEach(item => {
            // переводимо все в нижній регістр та шукаємо збіги
            if (item.innerText.toLowerCase().search(searchName.toLowerCase()) == -1) {
                // приховуємо блок якщо немає збігу
                item.classList.add("hide");
            }
            else {
                // показуємо блок якщо є збіг
                item.classList.remove("hide");
            }
        });
    } else {
        searchList.forEach(item => {
            item.classList.remove("hide");
        });
    }
}

function histQR() {
    let cardList = document.querySelectorAll('.card');

    cardList.forEach((item) => {
        item.addEventListener('click', function() {
            item.querySelector('.card-info').classList.add('card-info-width');
            let a = item.querySelector('.card-qr');
            a.classList.add('active-card-qr');
    
            let link = item.querySelector('.card-info .card-link').href;
            console.log(item);
            console.log(a);
            

            let qrcode = new QRCode(a, {
                text: link,
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.L
            });
        });
    });
}
