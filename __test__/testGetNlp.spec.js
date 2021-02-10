const dotenv = require('dotenv')
dotenv.config()

// Import the js file to test
import { getNlp } from '../src/client/js/getMeaning'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
describe("Testing the API call", () => {
     
    // The test() function has two arguments - a string description, and an actual test as a callback function
     test("Test getNlp to make successful API call", async () => {
        
        // Define the expected output in the form of variables/array
        let encodeURI = 'This is just a text for testing'
        const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
        const apiKey = process.env.API_KEY
        const uri = '&lang=en&of=json&txt=' + encodeURI 

        const res = getNlp(baseURL + apiKey + uri)
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        expect(res).toBeTruthy()   
    })
    
})