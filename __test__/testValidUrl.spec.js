// Import the js file to test
import { validUrl } from '../src/client/js/checkForText'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe('Testing the user input', () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.  
  test('Testing url validation functionality for VALID url', () => {
    let regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
    let urlTest = 'https://www.meaningcloud.com/' 
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    expect(regex.test(urlTest)).toBe(true)
  })
})

describe('Testing url validation functionality for INVALID url', () => {
    let url = "Hi there!"
    test('It should return true', () => {
      const res = validUrl(url)
      expect(res).toBeDefined()
      expect(res).toBeFalsy()
    })
}) 