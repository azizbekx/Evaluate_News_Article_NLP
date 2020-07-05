import {checkForURL} from  "../client/js/URLChecker" 

describe("Testing the URL checker function typedof and exist", () => {
    test("Testing the checkForURL() function",() => {
    
        expect(checkForURL).toBeDefined();
        expect(typeof checkForURL).toBe("function")
          
})});

describe("Testing the URL checker functionality valid url to true, invalid url to false", () => {
    test("Testing the checkForURL() function", () => {
            //input is valid url and invalid url
           const inputValid  = "https://www.valentinog.com/blog/jest"
           const inputInvalid = "https:www.en.wekpedia"
            //output valid url to true and invalid url to false
           const outputValid = true
           const outputInvalid = false

           expect(checkForURL(inputValid)).toBe(outputValid);
           expect(checkForURL(inputInvalid)).toEqual(outputInvalid)

          
})});
