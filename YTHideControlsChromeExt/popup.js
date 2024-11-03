'use strict'

document.querySelectorAll('a').forEach((el) => {

    el.addEventListener('click', (event) => {

        event.preventDefault();

        chrome.tabs.query({}, (tabs) => {

            for (const tab of tabs) {

                if (tab.active) {

                    chrome.tabs.sendMessage(tab.id, {act: 'toggleControls'}, (response) => {
                        if (!chrome.runtime.lastError) {
                            console.log(response, 'Meow response toggleControls')
                        }
                    })

                    return
                }
            }
        })

    }, false)
})

const setParams = (varName, val) => {

    chrome.tabs.query({}, (tabs) => {

        for (const tab of tabs) {

            if (tab.active) {

                localStorage.setItem('yt-val-' + varName, val)

                chrome.tabs.sendMessage(tab.id, {act: 'changeWidth', val: val}, (response) => {
                    if (!chrome.runtime.lastError) {
                        console.log(response, 'Meow response changeZoom')
                    }
                })

                return
            }
        }
    })
}

['width'].forEach((varName) => {
    document.querySelector('#' + varName + 'Inp').addEventListener('input', (e) => {
        setParams(varName, e.currentTarget.value)
    })
    if (localStorage.getItem('yt-val-' + varName) !== null) {
        document.querySelector('#' + varName + 'Inp').value = localStorage.getItem('yt-val-' + varName)
        setParams(varName, localStorage.getItem('yt-val-' + varName))
    }
})