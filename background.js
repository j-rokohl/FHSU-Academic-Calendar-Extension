// FOR NOTES ONLY:
// A common need for extensions is to have a single long-running script to 
// manage certain tasks. The background script exists for the lifetime of your 
// extension, and only one instance of it at a time is active. The background script, 
// unlike the content script has access to a full array of Chrome APIs, including 
// the fetch API, which is used in this extension. Calling the fetch API in 
// the content script results in a 404 error within the console.

// Info on how content scripts and background scripts work together:
// https://developer.chrome.com/docs/extensions/reference/runtime/#example-content-msg

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dateObject = new Date();
const date = new Date().toLocaleDateString();
const month = date.split("/", 1);
const spellMonth = months[dateObject.getMonth()];
const theDay = date.split("/",2);
const year = date.split("/",3);

function fetcher (){
    fetch('calendar.json')
        .then(response => response.json())
        .then(json => toHTML(json))
        .catch()
        return true;
}

let data = "";
function toHTML(json) {
    json.forEach((e) => {
        const eventMonth = e.Start.split("/", 1);
        const eventDay = e.Start.split("/", 2);
        if (Number(month) > Number(eventMonth)){
            // do nothing.
        }
        else if (Number(month) == Number(eventMonth) && Number(theDay[1]) > Number(eventDay[1])) {
            // do nothing.
        }
        else {
            data = data +
            `<div class="event">
            <div class="book">
                <img src="./cal-icon-top.svg" width="50" class="cal">
                <div class="div"><div class="mt-3">${eventMonth}/${eventDay[1]}</div></div>
            </div>
            <p class="main">${e.Title}</p>
            <p class="nextDate">${e.Start}</p>
            </div>`;
            chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                if (message === 'get-data') {
                  sendResponse(data);
                }
              });
        }
    });
}

// Run function:
fetcher();