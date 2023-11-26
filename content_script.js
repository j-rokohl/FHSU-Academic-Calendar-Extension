// FOR NOTES ONLY:
// Content scripts are JavaScript files that run in the context of web pages. 
// By using the standard Document Object Model (DOM), they can read details of 
// the web pages the browser visits, or make changes to them. The background
// script does not have access to the DOM elements 'window' or 'document' and will
// result in errors if used. 

// Info on how content scripts and background scripts work together:
// https://developer.chrome.com/docs/extensions/reference/runtime/#example-content-msg

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dateObject = new Date();
const date = new Date().toLocaleDateString();

const spellMonth = months[dateObject.getMonth()];
const theDay = date.split("/",2);
const year = date.split("/",3);

function addDate () {
    window.addEventListener("DOMContentLoaded", function (){
        const dInfo = document.querySelector("#date");
        if(document.querySelector("#date") != null){
            dInfo.innerHTML += spellMonth + " " + theDay[1] + ", " + year[2];
        }
    })
}
addDate();

let json = document.querySelector("#json");
function addData () {
    window.addEventListener("DOMContentLoaded", function (){
        chrome.runtime.sendMessage('get-data', (response) => {
            // console.log('received data', response);
            if(response != null){
                json.innerHTML += response;
            }
            else if(response != undefined){
                json.innerHTML += response;
            }
            else {
                window.location.reload(); // Refresh popup
            }
            return true;
        });
    })
}
addData();