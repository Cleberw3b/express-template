import 'jest'
import { log, printLogger } from '../src/utils/loggerUtil'

describe('Tests loggerUtil', () => {

    it('It should log Event', async (done) => {
        log('Event called', 'event')
        done()
    })

    it('Should return a log as String', async (done) => {
        const log = {
            type: 'Test',
            severity: 'Test',
            service: 'Test',
            timestamp: Date.now(),
            message: 'Test'
        }

        printLogger(log)
        done()
    })
})
