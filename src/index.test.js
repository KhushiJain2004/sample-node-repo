const greet = require("./index");

test("greets properly", () => {
  expect(greet("Khushi")).toBe("Hello, Khushi!");
});
