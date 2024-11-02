'use strict'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.act === 'toggleControls') {
        document.getElementsByTagName('body')[0].classList.toggle('meow-hide-controls')
        sendResponse({meow: 'meow'})
    }
})

;(() => {
    const scriptEl = document.createElement('script')
    scriptEl.setAttribute('src', chrome.runtime.getURL('mi.js'))
    document.getElementsByTagName('body')[0].appendChild(scriptEl)
})()