# FastLink
Web extension to generate qr code with a link to the active site.

<h2>Підключення</h2> 
<ol>
  <li>Завантажте та розпакуйте архів</li>
  <li>Перейдіть на сторінку <code>chrome://extensions</code>
  <ul>
    <li>Крім того, ви можете відкрити цю сторінку натисканням кнопки
      меню Розширення і <strong>вибором пункту Керування розширеннями</strong> внизу меню.</li>
    <li>Або відкрийте цю сторінку, натиснувши на меню Chrome, навівши курсор на <strong>інші інструменти</strong>, а потім <strong>вибравши Розширення</strong></li>
  </ul>
  </li>
  <li>Увімкніть режим розробника, натиснувши перемикач поруч із пунктом "Режим розробника".
</li>
  <li>Натисніть на "Завантажити розпаковане розширення" та виберіть папку з розпакованим архівом</li>
</ol>
<p>Розширення успішно інстальовано.</p>

<h2>Список файлів</h2>
<h4>HTML</h4>
<ul>
  <li>popup.html – головне вікно програми в якому створюється qr код</li>
  <li>option.html – сторінка з усіма налаштуваннями</li>
</ul>
<h4>JS</h4>
<ul>
  <li>qrcode.min.js – бібліотека для створення qr кодів </li>
  <li>background.js – збереження налаштувань в глобальному сховищі Google Chrome</li>
  <li>popup.js – тут ініціалізовано створення коду, пошук, отримання посилань та заголовків, зміна коду при
            введенні з живому часі та завантаження зображення коду</li>
  <li>option.js – ініціалізовані налаштування зміни розміру та рівня корекції, основний функціонал сторінки
            налаштувань</li>
  <li>history.js – збереження історії (сайти на яких використано розширення) та пошук в історії</li>
  <li>theme.js – вибір кольорових тем для сторінки налаштувань</li>
  <li>app.js – зміна мови (7 міжнародних мов)</li>
  <li>lang.js – файл перекладу</li>
  <li>сonsole-mod.js – вивід в консоль деякої інформації про налаштування</li>
</ul>
<h4>JSON</h4>
<ul>
  <li>manifest.json – інформація про розфирення та запит всіх потрібних дозволів для роботи з браузером</li>
</ul>
<h4>CSS</h4>
<ul>
  <li>main.css – стилі для popup.html</li>
  <li>option.css – стилі для option.html</li>
  <li>input-radio.css – зміна стилів для радіокнопок</li>
  <li>trash.css – порожній файл, потрібний для зміни теми</li>
  <li>theme_ … .css – стилі для різних кольорових тем (black, blue, darkIOS, white, test)</li>
</ul>

