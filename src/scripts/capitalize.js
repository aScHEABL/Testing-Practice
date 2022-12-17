function capitalizeString (string) {
    const firstChacater = string.charAt(0);
    const capFirstChacater = firstChacater.toUpperCase();
    const slicedString = string.slice(1, string.length);

    const result = capFirstChacater + slicedString;
    return result;
}

module.exports = capitalizeString;