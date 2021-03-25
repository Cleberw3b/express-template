//
//      Root Router
//

import express from 'express'
const router = express.Router()

/**
 * GET -> Redirects to health check.
 */
router.get('/', (req, res, next) => {
	res.writeHead(302, {
		Location: '/healthcheck'
	}).end()
})

export { router as rootRouter }
