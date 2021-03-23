function setThemePopup() {
    chrome.storage.sync.get('colortheme', function (data) {
        includeCSS(`css/qr-theme_${data.colortheme}.css`);

        let theme = data.colortheme;

        removeTheme();
        switch (theme) {
            case 'white':
                includeCSS("css/qr-theme_white.css");
                break;
            case 'black':
                includeCSS("css/qr-theme_black.css");
                break;
            case 'blue':
                includeCSS("css/qr-theme_blue.css");
                break;
            case 'darkIOS':
                includeCSS("css/qr-theme_darkIOS.css");
                break;
            case 'test':
                includeCSS("css/qr-theme_white.css");
                break;
            default:
                alert("Error");
        }
    });

    // Додаємо тег 'link' з відповідним шляхом до стилів
    function includeCSS(aFile, aRel) {
        let head = window.document.getElementsByTagName('head')[0];
        let style = window.document.createElement('link');
        style.rel = aRel || 'stylesheet';
        style.href = aFile;
        style.classList.add("qr-color-theme");
        head.appendChild(style);
    }

    function removeTheme() {
        let colorTheme = window.document.querySelectorAll('.qr-color-theme');
        colorTheme.forEach((item) => {
            item.remove();
        });
    }
}
