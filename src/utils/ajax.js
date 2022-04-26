
// 简单的ajax 封装
export const ajax = (url, { data, method = "GET", config }) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()
        request.open(method, url, true)
        request.setRequestHeader('Content-Type', 'application/json')
        if (config) {
            request.setRequestHeader(config.header)
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300 || request.status === 304) {
                    resolve(request.responseText)
                } else {
                    reject(request.status)
                }
            }
        }
        request.send(JSON.stringify(data))
    })
}