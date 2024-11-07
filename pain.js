const originalToUpperCase = String.prototype.toUpperCase;

// Overwrite the toUpperCase function
String.prototype.toUpperCase = function () {
    let str = originalToUpperCase.apply(this);
    return str.split('')
        .map(char => {
            return Math.random() < 0.5 ? char.toLowerCase() : char;
        })
        .join('');
};
