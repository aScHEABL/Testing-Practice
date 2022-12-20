const caesarCipher = require("./caesarCipher");

describe("A function that takes a string and returns it with each character “shifted”.", () => {
    test("Character wrapping from z to a", () => {
        expect(caesarCipher("by changing the order", 7)).toBe("if johunpun aol vykly");
    })
    test("Character keeps the same case", () => {
        expect(caesarCipher("BBBbbb", 5)).toBe("GGGggg");
    })
    test("String keeps punctuation and special symbols", () => {
        expect(caesarCipher("that is,", 3)).toBe("wkdw lv,");
    })
})