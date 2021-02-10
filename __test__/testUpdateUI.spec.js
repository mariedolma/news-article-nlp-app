import { updateUI } from "../src/client/js/formHandler"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.     
describe("Testing the UI functionality", () => {  
     // The test() function has two arguments - a string description, and an actual test as a callback function.  
     test("Testing the updateUI() is defined", () => {
          // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output   
          expect(updateUI).toBeDefined()
        })
        
        test("Testing the updateUI function", async () => {    
            expect (typeof updateUI).toBe('function')
    })
})
