const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dateObject = new Date();
const date = new Date().toLocaleDateString();
const month = date.split("/", 1);
const spellMonth = months[dateObject.getMonth()];
const theDay = date.split("/",2);
const year = date.split("/",3);
const data = document.getElementById("json");

function fetcher (){
    fetch('calendar.json')
        .then(response => response.json())
        .then(json => toHTML(json))
        .catch()
        return true;
}

function toHTML(json) {
    json.forEach((e) => {
        const eventMonth = e.Start.split("/", 1);
        const eventDay = e.Start.split("/", 2);
        console.log(Number(theDay[1]) +","+ Number(eventDay[1]));
        if (Number(month) > Number(eventMonth)){
            //nothing
        }
        else if (Number(month) == Number(eventMonth) && Number(theDay[1]) > Number(eventDay[1])) {
            //nothing
        }
        else {
            data.innerHTML +=
            `<div class="event">
            <div class="book">
                <img src="./cal-icon-top.svg" width="50" class="cal">
                <div class="div"><div class="mt-3">${eventMonth}/${eventDay[1]}</div></div>
            </div>
            <p class="main">${e.Title}</p>
            <p class="nextDate">${e.Start}</p>
            </div>`
        }
    });
}


function addDate () {
    window.addEventListener("DOMContentLoaded", function (){
        const dInfo = document.getElementById("date");
        dInfo.innerHTML += spellMonth + " " + theDay[1] + ", " + year[2];
    })
}


    fetcher();
    addDate();


// To handle Chromium bug 'Uncaught (in promise) Error: A listener indicated 
// an asynchronous response by returning true, but the message channel closed 
// before a response was received':

if (browser.runtime.lastError) {
    console.error(browser.runtime.lastError);
    }

