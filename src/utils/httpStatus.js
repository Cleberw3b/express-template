//
//     Declare HTTP Status codes
//


/**
 * HttpStatus Ok
 */
export const ok = { status: 200, message: 'Ok' }

/**
 * HttpStatus Created
 */
export const created = { status: 201, message: 'Created' }

/**
 * HttpStatus No Content
 */
export const noContent = { status: 204, message: 'No Content' }

/**
 *  HttpStatus Found
 */
export const found = { status: 302, message: 'Found' }

/**
 *  HttpStatus Permanent Redirect
 */
export const permanentRedirect = { status: 302, message: 'Permanent Redirect' }

/**
 * HttpStatus Bad Request
 */
export const badRequest = { status: 400, message: 'Bad Request' }

/**
 * HttpStatus Unauthorized
 */
export const unauthorized = { status: 401, message: 'Unauthorized' }

/**
 * HttpStatus Forbidden
 */
export const forbidden = { status: 403, message: 'Forbidden' }

/**
 * HttpStatus Not Found
 */
export const notFound = { status: 404, message: 'Not Found' }

/**
 * HttpStatus Request Timeout
 */
export const requestTimeout = { status: 408, message: 'Request Timeout' }

/**
 * HttpStatus Internal Server Error
 */
export const internalServerError = { status: 500, message: 'Internal Server Error' }

/**
 * HttpStatus Response timeout Error
 */
export const responseTimeoutError = { status: 503, message: 'Response timeout' }

/**
 * HttpStatus Gateway Timeout Error
 */
export const gatewayTimeoutError = { status: 504, message: 'Gateway Timeout' }

/**
 * HttpStatus Internal Server Error
 */
export const serviceUnavailable = { status: 508, message: 'Service Unavailable' }

/**
 * Cria um http error
 * 
 * @param HttpStatus 
 * @param error 
 * @param message 
 */
export const createHttpStatus = (httpStatus, message, errors) => {
    const newError = {
        status: httpStatus.status,
        message: message || httpStatus.message,
        errors
    }

    return newError
}

/**
 * List of Http Error
 */
const errorHttpStatusList = [
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    requestTimeout,
    internalServerError,
    responseTimeoutError,
    gatewayTimeoutError,
    serviceUnavailable
]

/**
 * Retorna erro com o código `HttpStatusCode`
 */
export const findErrorByStatus = (errorCode) => {
    return errorHttpStatusList.find(httpStatus => httpStatus.status === errorCode) || internalServerError
}
