const capitalize = require("./capitalize");

test("function that takes a string and returns it with the first character capitalized.", 
() => {
    expect(capitalize("expectation")).toBe("Expectation");
})