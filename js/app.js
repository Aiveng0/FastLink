// const maxImg = document.querySelector('.right-panel img');
//const langSelect = document.querySelector('.change-lang');
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua', 'es', 'zh', 'hi', 'de'];

// document.querySelectorAll('.left-panel img').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);

//langSelect.addEventListener('click', () => {});
select.addEventListener('change', changeURLLanguage);



// перенаправити на url з вказівкою мови
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log("HASH NAME: " + hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua';
        location.reload();
    }
    // ставимо 'select' на вибраний елемент
    select.value = hash;
    // document.querySelector('title').innerHTML = langArr['unit'][hash];
    document.querySelectorAll('.lng-general').innerHTML = langArr['general'][hash];

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
            //console.log(key);
        }
    }
}

changeLanguage();
