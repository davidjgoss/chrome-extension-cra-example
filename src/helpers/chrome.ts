export function resolveContent(): Promise<string> {
    if (process.env.NODE_ENV === 'production') {
        return new Promise<string>(resolve => {
            chrome.runtime.sendMessage({ type: 'CONTENT' }, (content) => resolve(content))
        })
    }
    return Promise.resolve('Hello world!')
}
