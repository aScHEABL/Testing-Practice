function analyzeArray(array) {
    const averageValue = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })

    const sortedArray = array.sort((a, b) => a - b)
    // const minValue = sortedArray[0];
    // const maxValue = sortedArray[sortedArray.length - 1];
    const minValue = Math.min(...array);
    const maxValue = Math.max(...array);
    const arrayLength = sortedArray.length;

    return {
        average: averageValue,
        min: minValue,
        max: maxValue,
        length: arrayLength
    }
}

console.log(analyzeArray([1,8,3,4,2,6]));
module.exports = analyzeArray;