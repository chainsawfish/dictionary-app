export const debounce = (handler: any, timeout: number = 500) => {
    let timer = null
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            handler.apply(this, args)
        }, timeout)
    }
}