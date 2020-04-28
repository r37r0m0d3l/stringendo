const {
  stringendo,
  textCharCount,
  textHasEmoji,
  textHasNonASCII,
  textIsMultiline,
  textIsNormalized,
  textIsTrimmed,
  textLength,
  textLineCount,
  textListChars,
  textListCodes,
  textToURI,
  textToURL,
} = require("../dist/stringendo.cjs");

describe("Imported functions", () => {
  it("stringendo", () => {
    expect(typeof stringendo).toBe("function");
  });
  it("textCharCount", () => {
    expect(typeof textCharCount).toBe("function");
  });
  it("textHasEmoji", () => {
    expect(typeof textHasEmoji).toBe("function");
  });
  it("textHasNonASCII", () => {
    expect(typeof textHasNonASCII).toBe("function");
  });
  it("textIsMultiline", () => {
    expect(typeof textIsMultiline).toBe("function");
  });
  it("textIsNormalized", () => {
    expect(typeof textIsNormalized).toBe("function");
  });
  it("textIsTrimmed", () => {
    expect(typeof textIsTrimmed).toBe("function");
  });
  it("textLength", () => {
    expect(typeof textLength).toBe("function");
  });
  it("textLineCount", () => {
    expect(typeof textLineCount).toBe("function");
  });
  it("textListChars", () => {
    expect(typeof textListChars).toBe("function");
  });
  it("textListCodes", () => {
    expect(typeof textListCodes).toBe("function");
  });
  it("textToURI", () => {
    expect(typeof textToURI).toBe("function");
  });
  it("textToURL", () => {
    expect(typeof textToURL).toBe("function");
  });
});

