import { handleResponse } from "../server/mainRequestAPI";



describe("Testing the handleResponse funtion is functiom and exist", () => {
  test("Testing the handleResponse() function", () => {
    expect(handleResponse).toBeDefined();
    expect(typeof handleResponse).toEqual("function");
  });
});
