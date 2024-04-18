class Solution {

    /**
    * @param String[] $strs
    * @return String
    */
    function longestCommonPrefix($strs) {
        if (!count($strs)) return "";

        $i = 0;
        $prefix = $strs[0];

        do {
            foreach ($strs as $s)
                if ($i >= strlen($s) || $s[$i] !== $prefix[$i])
                    return substr($prefix, 0, $i);
        } while ($i++ < strlen($prefix));
    }
}
