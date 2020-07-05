import 'regenerator-runtime/runtime'
const request = require("supertest");
const server = require("../server/index");


describe("Test root path", () => {
  test("response should get method '/test'", async () => {
    const responseTest = await request(server).get("/test");
    expect(responseTest.statusCode).toBe(200);
    expect(responseTest.body.time).toBe("now");
  });
});

describe("Test root path", () => {
  test("response should get method '/'", async () => {
    const response = await request(server).get("/");

    expect(response.statusCode).toBe(200);
  });
});




