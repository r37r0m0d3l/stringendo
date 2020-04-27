const { stringendo } = require("../dist/stringendo.cjs");

describe("Imported functions", () => {
  it("stringendo", () => {
    expect(typeof stringendo).toBe("function");
  });
});

