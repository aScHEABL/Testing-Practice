function caesarCipher(string, shift) {
    if (shift > 25) shift %= 26;
    let encriptedString = "";
    const stringToArray = string.split("");
    stringToArray.forEach((character) => {
        let charCode = character.charCodeAt(0)
        // console.log(character)
        // console.log(charCode);
        if (shift > 25) shift %= 26;
        // If the character is not from a-z, A-Z then concat it directly.
        if (!character.match(/[a-zA-Z]/)) encriptedString += character;
        else {
            
        }
    })
    return encriptedString;
}

console.log(caesarCipher("changing", 7));

module.exports = caesarCipher;