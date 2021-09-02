# FastLink
Web extension to generate qr code with a link to the active site.

<h2>Підключення</h2> 
<ol>
  <li>Download and unzip the archive</li>
  <li>Go to the page <code>chrome://extensions</code>
  <ul>
    <li>Also, you can access the page by pressing
       Extensions menu and <strong>by selecting Extension Management</strong> at the bottom of the menu.</li>
    <li>Or open this page by clicking the Chrome menu, hovering over <strong> other tools </strong>, then <strong> selecting Extensions</strong></li>
  </ul>
  </li>
  <li>Enable Developer Mode by clicking the radio button next to Developer Mode.
</li>
  <li>Click on "Download unpacked extension" and select the folder with the unpacked archive.</li>
</ol>
<p>Extension successfully installed.</p>

<h2>List of files</h2>
<h4>HTML</h4>
<ul>
  <li>popup.html – the main window of the program in which the qr code is generated</li>
  <li>option.html – page with all settings</li>
</ul>
<h4>JS</h4>
<ul>
  <li>qrcode.min.js – library for creating qr codes </li>
  <li>background.js – save settings in the Google Chrome global storage</li>
  <li>popup.js – here is initialized code creation, search, getting links and headings, changing the code when
             live input and code image download</li>
  <li>option.js – initialized settings for resizing and correction level, the main functionality of the page
             settings</li>
  <li>history.js – save history (sites that use extensions) and search history</li>
  <li>theme.js – select color themes for the settings page</li>
  <li>language.js – language change (7 international languages)</li>
  <li>lang.js – translation file</li>
  <li>сonsole-mod.js – output to the console some information about the settings</li>
</ul>
<h4>JSON</h4>
<ul>
  <li>manifest.json – information about the extension and request all the necessary permissions to work with the browser</li>
</ul>
<h4>CSS</h4>
<ul>
  <li>main.css – styles for popup.html</li>
  <li>option.css – styles for option.html</li>
  <li>input-radio.css – change styles for radio buttons</li>
  <li>trash.css – an empty file needed to change the theme</li>
  <li>theme_ … .css – styles for different color themes (black, blue, darkIOS, white, test)</li>
</ul>

