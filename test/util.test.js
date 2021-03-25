import 'jest'
import { findError, voidError } from '../src/utils/errors/errors'
import { getFunctionName, sleep, formatDate, nowIsoDate, nowInSeconds, logAxiosError, getRandomFromList } from '../src/utils/util'

describe('Tests util', () => {

    it('Tests sleep function', async (done) => {
        const ms = 100
        const initTime = Date.now()
        const sum = initTime + ms
        await sleep(ms)
        const afterTime = Date.now()
        expect(sum).toBeLessThanOrEqual(afterTime)
        done()
    })

    it('Tests sleep function', async (done) => {
        await sleep()
        done()
    })

    it('Tests getFunctionName', async (done) => {
        let functionName
        const func = () => functionName = getFunctionName()
        func()
        expect(functionName).toEqual('func')
        done()
    })

    it('Tests findError', async (done) => {
        const error = findError(0)
        expect(error).toStrictEqual(voidError)
        done()
    })

    it('Tests formatDAte', async (done) => {
        const timeStamp = 1577883600000

        const formated = formatDate(timeStamp)

        expect(formated).toBe('2020-01-01')
        done()
    })

    it('Tests getRandomFromList with empty array', async (done) => {

        const list = []

        const result = getRandomFromList(list)

        expect(result).toBeNull()

        done()
    })

    it('Tests getRandomFromList with list', async (done) => {

        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        const result = getRandomFromList(list)

        const expected = list.some(item => item === result)

        expect(expected).toBeTruthy()
        done()
    })

    it('Tests nothing', async (done) => {

        const config = {
            url: 'Test URL',
            data: 'Test data',
            headers: 'Test headers'
        }

        const response = { data: config.data }

        nowIsoDate()
        nowInSeconds()
        logAxiosError({ config, response })
        done()
    })
})
