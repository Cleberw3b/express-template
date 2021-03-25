import logger from 'morgan'
import { ENABLE_LOG } from './consts.js'
import { nowIsoDate } from './util.js'

/**
 * Function responsible for pretty log events
 * 
 * @param message 
 * @param type 
 * @param eventType 
 */
export const log = (
    message,
    type,
    service = 'server',
    severity = 'info'
) => {

    const timestamp = Date.now()

    const log = { type, severity, service, timestamp, message }

    if (ENABLE_LOG) printLogger(log)
}

const loggerToString = (log) => {

    const severity = log.severity.toUpperCase()
    const time = nowIsoDate()
    const type = log.type.toUpperCase()
    const service = log.service
    const message = log.message

    return `${severity} - ${time} -  ${type} - ${service} - ${message}`

}

export const printLogger = (log) => {
    console.info(loggerToString(log))
}

export { logger }
