// Import the js file to test
import { getApiKey } from "../src/client/js/getMeaning"

const dotenv = require('dotenv')
dotenv.config()

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
describe("Testing the hidden api key fetch from server", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing getApiKey function to return the key", () => {
        // Define the expected output in the form of variables/array
        const output = process.env.API_KEY
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        expect(getApiKey()).resolves.toBe(output)
    })
})