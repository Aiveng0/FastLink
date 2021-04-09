//let general = document.getElementById('general');
let codeSize = document.getElementById('codesize'),
    corection = document.getElementById('corection'),
    generalBtn = document.getElementById('general'),
    codeSizeBtn = document.getElementById('codesize'),
    corectionBtn = document.getElementById('corection'),
    codeSizeDesc = document.getElementById('codesize_about'),
    corectionDesc = document.getElementById('corection_about'),
    aboutExe = document.getElementById('aboutextension'),
    messageBox = document.querySelector('.message-container'),
    termofservice = document.getElementById('termofservice'),
    hist = document.getElementById('history'),
    privacy = document.getElementById('privacy');

let btns = document.querySelectorAll('.tablink');
let settingsArray = [codeSize, corection, privacy, termofservice, aboutExe, hist, codeSizeDesc, corectionDesc];

function resetActive() {
    settingsArray.forEach(item => {
        item.classList.remove('active');
    });
}

function removeActiveBtn() {
    btns.forEach((item) => {
        item.classList.remove('nav-active-btn');
    });
}

const showMessageSetings = (i) => {
    return `
        <div class="message-box">
           <p class="lng-settingMessage">Налаштування "${i}" оновлено</p>
        </div>
    `;
};

// Оновлення стилів активних елементів
btns.forEach((item) => {
    item.addEventListener('click', function () {
        removeActiveBtn();
        resetActive();

        if (item.attributes[0].value == "#general") {
            item.classList.add('nav-active-btn');
            codeSize.classList.add('active');
            corection.classList.add('active');
        } else if (item.attributes[0].value == "#codesize") {
            item.classList.add('nav-active-btn');
            codeSizeDesc.classList.add('active');
            codeSize.classList.add('active');
        } else if (item.attributes[0].value == "#corection") {
            item.classList.add('nav-active-btn');
            corectionDesc.classList.add('active');
            corection.classList.add('active');
        } else if (item.attributes[0].value == "#aboutextension") {
            item.classList.add('nav-active-btn');
            aboutExe.classList.add('active');
        } else if (item.attributes[0].value == "#privacy") {
            item.classList.add('nav-active-btn');
            privacy.classList.add('active');
        } else if (item.attributes[0].value == "#history") {
            item.classList.add('nav-active-btn');
            hist.classList.add('active');
        } else if (item.attributes[0].value == "#termofservice") {
            item.classList.add('nav-active-btn');
            termofservice.classList.add('active');
        } else {
            return;
        }

    });
});


/*========================*/
/*     Зміна розміру      */
/*========================*/

// Масив усіх радіокнопок зміни розміру
let radioBtns = document.querySelectorAll('.code-size-list-general > li > input');

// Вибір нового розміру
radioBtns.forEach((item) => {
    item.addEventListener('change', function () {
        if (item.attributes.id.value == 'code-size-1') {
            setSize("1");
            sizeExample1.style.display = 'inline-block';
        } else if (item.attributes.id.value == 'code-size-2') {
            setSize("2");
        } else if (item.attributes.id.value == 'code-size-3') {
            setSize("3");
        } else if (item.attributes.id.value == 'code-size-4') {
            setSize("4");
        } else {
            return;
        }
        let i = "Розмір QR коду";
        mess(i);
        showExample();
    });
});

/*============================*/
/*   Приклад розміру вікна    */
/*============================*/

// Елементи size-example
let sizeExample1 = document.querySelector('.size-example__size400'),
    sizeExample2 = document.querySelector('.size-example__size300'),
    sizeExample3 = document.querySelector('.size-example__size250'),
    sizeExample4 = document.querySelector('.size-example__size200');

//Масив з елементами size-example
let sizeExampleArray = [sizeExample1, sizeExample2, sizeExample3, sizeExample4];

// Приховати всі елементи size-example
function resetVisibile() {
    sizeExampleArray.forEach(item => {
        item.style.display = 'none';
    });
}

function showExample() {
    resetVisibile();
    
    chrome.storage.sync.get('size', function (data) {
        // активуємо відповідний елемент
        switch (data.size) {
            case '1':
                sizeExample1.style.display = 'inline-block';
                break;
            case '2':
                sizeExample2.style.display = 'inline-block';
                break;
            case '3':
                sizeExample3.style.display = 'inline-block';
                break;
            case '4':
                sizeExample4.style.display = 'inline-block';
                break;
            default:
                alert("Error");
        }
    });
}

showExample();

/*========================*/
/*   Блок повідомлення    */
/*========================*/
let timer1 = window.setTimeout(messEasyClear, 2000);
let timer2 = window.setTimeout(messClear, 3000);

function messClear() {
    messageBox.innerHTML = "";
    messageBox.classList.remove('yellow-bg');
    messageBox.classList.remove('message-clear');
}

function messEasyClear() {
    messageBox.classList.add('message-clear');
    timer2 = window.setTimeout(messClear, 3000);
}

function mess(i) {
    window.clearTimeout(timer1);
    window.clearTimeout(timer2);
    messClear();
    messageBox.innerHTML = showMessageSetings(i);
    messageBox.classList.add('yellow-bg');
    timer1 = window.setTimeout(messEasyClear, 1000);
}

// Додати чекед після оновлення сторінки на потрібний елемент
function setCheckedSize() {
    removeCheckedSize();
    radioBtns.forEach((item) => {
        chrome.storage.sync.get('size', function (data) {
            if (item.attributes.id.value == 'code-size-1' && data.size == 1) {
                item.setAttribute('checked', 'checked');
            } else if (item.attributes.id.value == 'code-size-2' && data.size == 2) {
                item.setAttribute('checked', 'checked');
            } else if (item.attributes.id.value == 'code-size-3' && data.size == 3) {
                item.setAttribute('checked', 'checked');
            } else if (item.attributes.id.value == 'code-size-4' && data.size == 4) {
                item.setAttribute('checked', 'checked');
            } else {
                return;
            }
        });
    });
}

// Установка нового розміру
function setSize(newSize) {
    chrome.storage.sync.set({ size: newSize }, function () {
        console.log('Size: ' + newSize);
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'developer.chrome.com' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
}

// Забрати чекед з усього
function removeCheckedSize() {
    radioBtns.forEach((item) => {
        item.removeAttribute('checked');
    });
}

setCheckedSize();

/*========================*/
/*    Рівень корекції     */
/*========================*/

// Масив усіх радіокнопок зміни корекції
let radioCrectBtns = document.querySelectorAll('.corection-list-general > li > input');

// Вибір нової корекції
radioCrectBtns.forEach((item) => {
    item.addEventListener('change', function () {
        if (item.attributes.id.value == 'corection-level-1') {
            setCorectionLevel("H");
        } else if (item.attributes.id.value == 'corection-level-2') {
            setCorectionLevel("Q");
        } else if (item.attributes.id.value == 'corection-level-3') {
            setCorectionLevel("M");
        } else if (item.attributes.id.value == 'corection-level-4') {
            setCorectionLevel("L");
        } else {
            return;
        }
        let i = "Рівень корекції";
        mess(i);
    });
});

// Додати чекед після оновлення сторінки на потрібний елемент корекції
function setCheckedSizeCorection() {
    removeCheckedSizeCorection();
    radioCrectBtns.forEach((item) => {
        chrome.storage.sync.get('corectionlevel', function (data) {
            if (item.attributes.id.value == 'corection-level-1' && data.corectionlevel == "H") {
                item.setAttribute('checked', 'checked');
            } else if (item.attributes.id.value == 'corection-level-2' && data.corectionlevel == "Q") {
                item.setAttribute('checked', 'checked');
            } else if (item.attributes.id.value == 'corection-level-3' && data.corectionlevel == "M") {
                item.setAttribute('checked', 'checked');
            } else if (item.attributes.id.value == 'corection-level-4' && data.corectionlevel == "L") {
                item.setAttribute('checked', 'checked');
            } else {
                return;
            }
        });
    });
}

// Установка нового рівня корекції
function setCorectionLevel(newLevel) {
    chrome.storage.sync.set({ corectionlevel: newLevel }, function () {
        console.log('Corection level: ' + newLevel);
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'developer.chrome.com' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
}

// Забрати чекед з усього корекції
function removeCheckedSizeCorection() {
    radioCrectBtns.forEach((item) => {
        item.removeAttribute('checked');
    });
}

setCheckedSizeCorection();



