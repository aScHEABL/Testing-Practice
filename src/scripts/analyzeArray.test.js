const analyzeArray = require("./analyzeArray");
const input = analyzeArray([1,8,3,4,2,6]);

describe("An analyzeArray function that takes an array of numbers and returns an object with the following properties: \
average, min, max, and length."
, () => {
    test("Match the exact output", () => {
        expect(analyzeArray(input)).toBe(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        })
    })
})