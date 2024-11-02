'use strict'

document.querySelectorAll('a').forEach((el) => {

    el.addEventListener('click', (event) => {

        event.preventDefault();

        chrome.tabs.query({}, (tabs) => {

            for (let tab of tabs) {

                if (tab.active) {

                    chrome.tabs.update(tab.id, {
                        url: el.href
                    })

                    return
                }
            }
        })

    }, false)
})