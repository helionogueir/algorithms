const ROMAN_CARDINAL_REFERENCE = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    let accumulator = 0;
  
    for (let i = 0; i < s.length; i++) {
        const currentSymbol = s[i];
        const currentValue = ROMAN_CARDINAL_REFERENCE[currentSymbol];
      
        if (i + 1 < s.length
                && ROMAN_CARDINAL_REFERENCE[s[i + 1]] > currentValue) {
            accumulator -= currentValue;
        } else {
            accumulator += currentValue;
        }
    }
  
    return accumulator;
};
