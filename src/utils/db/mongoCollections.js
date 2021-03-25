// Collections Names
const TEST_COLLECTION = 'test_collection'

// Collections Schema
let loggerCollection

/**
 * Create and set collections
 */
export const createCollections = (database) => {
    loggerCollection = database.collection(TEST_COLLECTION)
}

export {
    loggerCollection
}
