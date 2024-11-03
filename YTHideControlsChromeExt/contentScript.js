'use strict'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.act === 'toggleControls') {
        document.getElementsByTagName('body')[0].classList.toggle('meow-hide-controls')
        sendResponse({meow: 'meow toggleControls'})
    }
    else if (request.act === 'changeWidth') {
        const vidEl = document.querySelector('#ytd-player #container video.video-stream')
        vidEl.style.left = '0'
        vidEl.style.width = request.val + '%'
        vidEl.style.height = 'auto'
        document.querySelector('#ytd-player #container').style.height = vidEl.offsetHeight + 'px'
        document.querySelector(
            '#single-column-container'
        ).style.height = vidEl.offsetHeight - document.querySelector(
            '#full-bleed-container'
        ).offsetHeight + 'px'
        sendResponse({meow: 'meow changeWidth'})
    }
})

;(() => {
    const scriptEl = document.createElement('script')
    scriptEl.setAttribute('src', chrome.runtime.getURL('mi.js'))
    document.getElementsByTagName('body')[0].appendChild(scriptEl)
})()