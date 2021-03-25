import { findErrorByStatus, notFound, createHttpStatus } from './httpStatus.js'
import { log } from './loggerUtil.js'
import morgan from 'morgan'

/**
 * Middleware to capture not found routes and send error
 */
export const notFountMiddleware = (req, res, next) => {
    next(createHttpStatus(notFound))
}

/**
 * Exports middleware para tratar erros internos do servidor express
 */
export const errorMiddleware = (error, req, res, next) => {

    res.statusMessage = error.message

    return res
        .status(error.status)
        .send(createHttpStatus(findErrorByStatus(error.status), error.message))
}

/**
 * Middleware function to handle authorization
 */
export const corsMiddleware = (req, res, next) => {
    // Allow Origins
    res.header('Access-Control-Allow-Origin', '*')
    // Allow Methods
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    // Allow Headers
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization')
    // Handle preflight, it must return 200
    if (req.method === 'OPTIONS') {
        // Stop the middleware chain
        return res.status(200).end()
    }
    // Call next middleware 
    next()
}

/**
 * Middleware to handle authorization
 */
export const authMiddleware = async (req, res, next) => {
    // get token from request header Authorization
    // const token = req.headers.authorization

    // TODO
    // Token verification
    // Catch the JWT Expired or Invalid errors
    // return res.status( 401 ).send( { msg: err.message } )

    // Call next middleware
    next()
}

/**
 * Middleware log requests
 */
export const loggerRequest = morgan('from :remote-addr - :method :url HTTP/:http-version', {
    immediate: true,
    stream: {
        write: (message) => {
            log(message.trim(), 'request')
        }
    }
})

/**
 * Middleware log responses
 */
export const loggerResponse = morgan('to :remote-addr - STATUS :status in :response-time ms', {
    stream: {
        write: (message) => {
            log(message.trim(), 'response')
        }
    }
})
