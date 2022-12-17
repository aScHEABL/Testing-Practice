const reverseString = require("./reverseString");

test("A function that takes a string and returns it reversed.", () => {
    expect(reverseString("Alphabet")).toBe("tebahplA");
})