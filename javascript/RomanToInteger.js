/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    let accumulator = 0;
  
    for (let i = 0; i < s.length; i++) {
        const currentSymbol = s[i];
        const currentValue = ROMAN_CARDINAL_REFERENCE[currentSymbol];
      
        if (i + 1 < s.length && ROMAN_CARDINAL_REFERENCE[s[i + 1]] > currentValue) {
            accumulator -= currentValue;
        } else {
            accumulator += currentValue;
        }
    }
  
    return accumulator;
};
