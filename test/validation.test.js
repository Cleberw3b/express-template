import 'jest'
import { check } from '../src/utils/validations/requestValidation'

describe('Validations Test Suit ', () => {

    it('Should return true', async (done) => {
        let expected = check(true)

        expect(expected).toBeTruthy()
        done()
    })

    it('Should return false', async (done) => {
        let expected = check(false)

        expect(expected).toBeFalsy()
        done()
    })
})
