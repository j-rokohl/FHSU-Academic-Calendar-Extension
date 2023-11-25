# FHSU Academic Calendar Extension
A simple browser extension that displays upcoming events listed on the official FHSU Academic Calendar, which can be found here [https://www.fhsu.edu/registrar/academic-calendar/](https://www.fhsu.edu/registrar/academic-calendar/) in the form of a downloadable iCal file. The iCal file was converted into a JSON file for easier manipulation of the data.

The purpose of this browser extension is to learn the proper structure and syntax to develop Chrome Extensions, as well as to provide an easy way to quickly view the current academic calendar, without needing to log into an online account or check the website.

Events that have passed will be filtered out within the logic of the background JavaScript file, so that the event appearing at the top is either taking place today or in the future.

View the browser extension simulation website here: [https://fhsu-extension.netlify.app/](https://fhsu-extension.netlify.app/).

To install this extension:

1) Download the zipped folder.
2) Unzip the folder in your downloads.
3) Go to [chrome://extensions] within your browser.
4) Toggle the 'Developer Mode' switch in the upper right-hand corner.
5) Click the button that appears called 'Load unpacked'.
6) Select the unzipped folder you downloaded.
7) This should load the extension, but make sure it is active.
