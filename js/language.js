const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua', 'es', 'zh', 'hi', 'de'];
select.addEventListener('change', changeURLLanguage);

// перенаправити на url з вказівкою мови
function changeURLLanguage() {
    let lang = select.value;
    setLanguage(lang);
    location.href = window.location.pathname + '#' + lang; // додаемо хеш до шляху
    location.reload(); // оновлюємо сторінку
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log("HASH NAME: " + hash);
    if (!allLang.includes(hash)) {
        // Зчитуємо мову з глобального сховища та встановлюємо її
        chrome.storage.sync.get('language', function (data) {
            location.href = window.location.pathname + '#' + data.language;
            console.log(location.href);
            location.reload();
        });

    }
    // ставимо 'select' на вибраний елемент
    select.value = hash;
    document.querySelectorAll('.lng-general').innerHTML = langArr['general'][hash];

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

// Встановлення вибраної мови в глобальне сховище
function setLanguage(newLanguage) {
    chrome.storage.sync.set({ language: newLanguage }, function () {
        console.log('NEW LANGUAGE SELECTED: ' + newLanguage);
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

changeLanguage();
