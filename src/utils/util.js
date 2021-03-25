/**
 * Call it inside an async function and it will sleep
 * 
 * @param ms - milliseconds
 */
export const sleep = (ms = 1) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

/**
 * Returns the callee name
 * 
 * @param depth - depth
 */
export const getFunctionName = (depth = 1) => {
    const error = new Error()
    return ((((error.stack.split('at '))[1 + depth]).match(/(^|\.| <| )(.*[^(<])( \()/))[2]).split('.').pop()
}

/**
 * 
 * @param timestamp in milliseconds
 * @returns this format 2020-05-01
 */
export const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    return year + '-' + month + '-' + day
}

export const nowIsoDate = () => {
    return new Date(Date.now()).toISOString()
}

export const nowInSeconds = () => {
    return Math.floor(Date.now() / 1000)
}

export const getRandomFromList = (array) => {
    if (array && array.length === 0) return null
    const random = Math.floor(Math.random() * 10000000000000000 + 1)
    const index = random % array.length
    return array[index]
}

export const logAxiosError = (error) => {
    console.log('-- URL --')
    console.log(error.config?.url)
    console.log()

    console.log('-- REQUEST DATA --')
    console.log(error.config?.data)
    console.log()

    console.log('-- REQUEST HEADERS --')
    console.log(error.config?.headers)
    console.log()

    console.log('-- RESPONSE --')
    console.log(error.response?.data)
    console.log()
}
