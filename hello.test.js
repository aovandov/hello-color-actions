const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Cambio saludo Alvaro Ovando2");
  });
});
