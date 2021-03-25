import 'jest'
import { load, save } from '../src/services/someService'

describe('Teste isolado ', () => {

    beforeAll(async () => {

    })

    afterAll(async () => {

    })

    it('Should ...', async (done) => {
        save()
        load()

        done()
    })
})
