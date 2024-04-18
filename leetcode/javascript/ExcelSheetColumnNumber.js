const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const count = columnTitle.length - 1;
    const lastItemCharacter = columnTitle[count];
    let result = alphabet.indexOf(lastItemCharacter) + 1;
    
    for (let i = count - 1; i >= 0; i--) {
        const character = columnTitle[i];
        const index = alphabet.indexOf(character) + 1;
        result += index * Math.pow(26, count - i);
    }

    return result;
};

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumberExtra = function(columnTitle) {
    let result = 0;
    let length = columnTitle.length;
    for(let i = 0; i < length; i++){
        result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, length - (i + 1));
    }
    return result;
};