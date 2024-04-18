class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";

        int i = 0;
        String prefix = strs[0];

        do {
            for (String s : strs)
                if (i >= s.length() || s.charAt(i) != prefix.charAt(i))
                    return prefix.substring(0, i);
        } while (i++ < prefix.length());

        return prefix;
    }
}
