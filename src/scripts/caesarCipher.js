function caesarCipher(string, shift) {
    if (shift > 25) shift %= 26;
    let encriptedString = "";
    const stringToArray = string.split("");
    stringToArray.forEach((character) => {
        let charCode = character.charCodeAt(0)
        // console.log(charCode);
        if (shift > 25) shift %= 26;
        // If the character is not from a-z, A-Z then concat it directly.
        if (!character.match(/[a-zA-Z]/)) encriptedString += character;
        else {
            let upperOrLower = (charCode <= 90) ? "upperCase" : "lowerCase";
            // console.log(`Initial character: ${character}`);
            // console.log(`Shift: ${charCode} + ${shift}`);
            if (upperOrLower === "upperCase") {
                if (charCode + shift > 90 || charCode < 65) {
                    encriptedString += String.fromCharCode((charCode + shift + 65) % 26 + 65);
                } else encryptedString += String.fromCharCode(charCode + shift);
            } else if (upperOrLower === "lowerCase") {
                if (charCode + shift > 122 || charCode + shift < 97) {
                    encriptedString += String.fromCharCode((charCode + shift + 97) % 26 + 97);
                } else encriptedString += String.fromCharCode(charCode + shift);
            }
        }
    })
    return encriptedString;
}

console.log(caesarCipher("changing", 7));

module.exports = caesarCipher;