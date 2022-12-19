function caesarCipher(string, shift) {
    if (shift > 25) shift %= 26;
    let encriptedString = "";
    const stringToArray = string.split("");
    stringToArray.forEach((character) => {
        // Get the ASCII code of every character of the array.
        let charCode = character.charCodeAt(0);
        // If the character is not a-z || A-Z then just concat into the string.
        if (!character.match(/[a-zA-Z]/)) encriptedString =+ character;
        else {
            let upperOrLower = (charCode <= 90) ? "upperCase" : "lowerCase";
            console.log(`Character: ${character}`);
            console.log(`Shift: ${charCode} + ${shift}`);
            if (upperOrLower === "upperCase") {
                if (charCode + shift > 90 || charCode + shift < 65) {
                    encryptedString += String.fromCharCode((charCode + shift + 65) % 26 + 65);
                }
            } else if (upperOrLower === "lowerCase") {
                if (charCode + shift > 122 || charCode + shift < 97) {
                    encriptedString += String.fromCharCode((charCode + shift + 97) % 26 + 97);
                }
            }
        }
    })
    return encriptedString;
}

module.exports = caesarCipher;