//
//     Errors
//

/**
 * Exemple
 */
export const voidError = {
    errorCode: 0x000,
    description: 'It should never happen, miss developed',
    tip: 'Never use, call the developer',
    example: ['Do not use!']
}

/**
 * List of all errors
 */
export const allErrors = [

]

/**
 * Return an error object when error code matches
 * 
 * @param errorCode 
 */
export const findError = (errorCode) => {
    return allErrors.find(error => error.errorCode === errorCode) || voidError
}
