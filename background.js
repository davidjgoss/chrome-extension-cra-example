chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'CONTENT') {
        chrome.tabs.query({active: true, currentWindow: true}, ([currentTab]) => {
            chrome.tabs.sendMessage(currentTab.id, request, sendResponse)
        })
        return true
    }
    return false
})
