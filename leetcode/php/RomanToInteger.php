class Solution {
    const ROMAN_CARDINAL_REFERENCE = [
        'I' => 1, 'V' => 5, 'X' => 10, 'L' => 50, 'C' => 100, 'D' => 500, 'M' => 1000
    ];

    /**
    * @param String $s
    * @return Integer
    */
    function romanToInt($s) {
        $accumulator = 0;
        $symbolSize = strlen($s);

        for ($i = 0; $i < $symbolSize; $i++) {
            $currentSymbol = $s[$i];
            $currentValue = Solution::ROMAN_CARDINAL_REFERENCE[$currentSymbol];

            if ($i + 1 < $symbolSize
                && Solution::ROMAN_CARDINAL_REFERENCE[$s[$i + 1]] > $currentValue) {
                    $accumulator -= $currentValue;
            } else {
                $accumulator += $currentValue;
            }
        }

        return $accumulator;
    }
}