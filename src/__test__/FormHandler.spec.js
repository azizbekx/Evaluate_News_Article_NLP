import {handleSubmit} from "../client/js/formHandler"


describe("Testing the handleSubmit funtion is functiom and exist", () => {
    
    test("Testing the handleSubmit() function", () => {

           expect(handleSubmit).toBeDefined();
           expect(typeof handleSubmit).toEqual("function")

})});