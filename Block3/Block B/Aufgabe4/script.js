var letters = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
};

var specialCases = {
    "DCCCC": "CM",
    "CCCC": "CD",
    "LXXXX": "XC",
    "XXXX": "XL",
    "VIIII": "IX",
    "IIII": "IV"
};

function toRomanNumerals(remainder, result) {
    for (const letter in letters) {
        const letterValue = letters[letter];
        if(remainder >= letterValue) {
            const newResult = result + letter;
            const newRemainder = remainder - letterValue;
            if(newRemainder === 0) {
                let resultWithSpecialCases = newResult;
                for (const wordToMatch in specialCases) {
                    resultWithSpecialCases = resultWithSpecialCases
                        .replace(wordToMatch, specialCases[wordToMatch]);
                }
                return resultWithSpecialCases;
            } else {
                return toRomanNumerals(newRemainder, newResult);
            }
        }
    }
}

console.log(toRomanNumerals(911, ""));