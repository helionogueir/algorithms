class Solution {

    private static final Map<Character, Integer> ROMAN_CARDINAL_REFERENCE = new HashMap<>();

    static {
        ROMAN_CARDINAL_REFERENCE.put('I', 1);
        ROMAN_CARDINAL_REFERENCE.put('V', 5);
        ROMAN_CARDINAL_REFERENCE.put('X', 10);
        ROMAN_CARDINAL_REFERENCE.put('L', 50);
        ROMAN_CARDINAL_REFERENCE.put('C', 100);
        ROMAN_CARDINAL_REFERENCE.put('D', 500);
        ROMAN_CARDINAL_REFERENCE.put('M', 1000);
    }

    public int romanToInt(String s) {
        int accumulator = 0;

        for (int i = 0; i < s.length(); i++) {
            char currentSymbol = s.charAt(i);
            int currentValue = ROMAN_CARDINAL_REFERENCE.get(currentSymbol);

            if (i + 1 < s.length() && ROMAN_CARDINAL_REFERENCE.get(s.charAt(i + 1)) > currentValue) {
                accumulator -= currentValue;
            } else {
                accumulator += currentValue;
            }
        }

        return accumulator;
    }
}
