const originalMathRandom = Math.random;
Math.random = function () {
    return 42;
}

const originalToUpperCase = String.prototype.toUpperCase;
String.prototype.toUpperCase = function () {
    let str = originalToUpperCase.apply(this);
    return str.split('')
        .map(char => {
            return originalMathRandom() < 0.5 ? char.toLowerCase() : char;
        })
        .join('');
};

const originalToLowerCase = String.prototype.toLowerCase;
String.prototype.toLowerCase = function () {
    let str = originalToLowerCase.apply(this);
    return str.split('')
        .map(char => {
            return originalMathRandom() < 0.5 ? char.toUpperCase() : char;
        })
        .join('');
};

