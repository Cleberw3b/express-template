//
//      Health Check Router
//

import express from 'express'
const router = express.Router()

/**
 * GET -> Verifies whether the application is running or not  
 */
router.get('/', (req, res, next) => {
    res.status(200)
        .send({
            name: 'MY APP',
            uptime: process.uptime(),
            live: "UP"
        })
})

export { router as healthCheckRouter }
