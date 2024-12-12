package exercicies

import java.util.HashMap

object ScrabbleScore {

    private val letterValues = HashMap<String, Int>().apply {
        put("A, E, I, O, U, L, N, R, S, T", 1)
        put("D, G", 2)
        put("B, C, M, P", 3)
        put("F, H, V, W, Y", 4)
        put("K", 5)
        put("J, X", 8)
        put("Q, Z", 10)
    }

    fun scoreLetter(c: Char): Int {
        for ((key, value) in letterValues) {
            val letterPattern = Regex(c.toString(), RegexOption.IGNORE_CASE)
            if (letterPattern.containsMatchIn(key)) return value
        }

        return 0;
    }

    fun scoreWord(word: String): Int {
        var result = 0

        for (c in word)
            result += scoreLetter(c)

        return result
    }

    fun show(){
        print(scoreWord("abcdefghijklmnopqrstuvwxyz"))
    }
}
