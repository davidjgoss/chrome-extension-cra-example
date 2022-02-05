chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'CONTENT') {
        sendResponse(document.body.textContent)
    }
    return false
})
