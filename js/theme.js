const themeSelect = document.querySelector('.change-theme');

// Зчитуємо назву теми з глобального сховища та встановлюємо її
chrome.storage.sync.get('colortheme', function (data) {
    includeCSS(`css/theme_${data.colortheme}.css`);
    // ставимо 'select' на вибраний елемент
    themeSelect.value = data.colortheme;
});

themeSelect.addEventListener('change', changeColor);

function changeColor() {
    let theme = themeSelect.value;
    //console.log(theme);

    removeTheme();
    switch (theme) {
        case 'white':
            includeCSS("css/theme_white.css");
            setTheme("white");
            break;
        case 'black':
            includeCSS("css/theme_black.css");
            setTheme("black");
            break;
        case 'blue':
            includeCSS("css/theme_blue.css");
            setTheme("blue");
            break;
        case 'darkIOS':
            includeCSS("css/theme_darkIOS.css");
            setTheme("darkIOS");
            break;
        case 'test':
            includeCSS("css/theme_test.css");
            setTheme("test");
            break;
        default:
            alert("Error");
    }

}

// Додаємо тег 'link' з відповідним шляхом до стилів
function includeCSS(aFile, aRel) {
    let head = window.document.getElementsByTagName('head')[0];
    let style = window.document.createElement('link');
    style.rel = aRel || 'stylesheet';
    style.href = aFile;
    style.classList.add("color-theme");
    head.appendChild(style);
}

function removeTheme() {
    let colorTheme = window.document.querySelectorAll('.color-theme');
    colorTheme.forEach((item) => {
        item.remove();
    });
}

// Встановлення нової кольорової теми в глобальне сховище
function setTheme(newTheme) {
    chrome.storage.sync.set({ colortheme: newTheme }, function () {
        console.log('NEW COLOR THEME SELECTED: ' + newTheme);
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


