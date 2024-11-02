'use strict'

document.querySelectorAll('a').forEach((el) => {

    el.addEventListener('click', (event) => {

        event.preventDefault();

        chrome.tabs.query({}, (tabs) => {

            for (const tab of tabs) {

                if (tab.active) {

                    chrome.tabs.sendMessage(tab.id, {act: 'toggleControls'}, (response) => {
                        if (!chrome.runtime.lastError) {
                            console.log(response, 'Meow response')
                        }
                    })

                    return
                }
            }
        })

    }, false)
})