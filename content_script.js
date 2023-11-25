// FOR NOTES ONLY:
// A content script is not needed in this extension.

// Content scripts are JavaScript files that run in the context of web pages. 
// By using the standard Document Object Model (DOM), they can read details of 
// the web pages the browser visits, or make changes to them. Additionally,
// content script only has limited access to Chrome api, mostly chrome.runtime event.

// A common need for extensions is to have a single long-running script to 
// manage some task or state. The background script exists for the lifetime of your 
// extension, and only one instance of it at a time is active. The background script, 
// unlike the content script has access to a full array of Chrome APIs, including 
// the fetch API, which is used in the background script of THIS extension. Calling the 
// fetch api in THIS content script results in a 404 error within the console.

// Since this can be confusing, I am including this file clarify the structure
// of this extension.