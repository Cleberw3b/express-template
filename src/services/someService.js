//
//     Serviços oferecidos para trabalhar com Log
//

import * as  repository from '../repository/someRepository.js'

export const save = (param) => {
    repository.save(param)
}

export const load = (param) => {
    return repository.load(param)
}
