package exercicies

object Acronym {
  fun generate(phrase: String) : String {
    return phrase
      .replace(Regex("[^a-zA-Z -]"), "")
      .split(Regex("[^a-zA-Z']"))
      .filter { it.isNotBlank() }
      .fold("") { acc, word -> acc + word.first().uppercase() }
  }

  fun test () {
    val values = mutableMapOf(
      "Portable Network Graphics" to "PNG",
      "Ruby on Rails" to "ROR",
      "First In, First Out" to "FIFO",
      "GNU Image Manipulation Program" to "GIMP",
      "Complementary metal-oxide semiconductor" to "CMOS",
      "Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me" to "ROTFLSHTMDCOALM",
      "Something - I made up from thin air" to "SIMUFTA",
      "Halley's Comet" to "HC",
      "The Road _Not_ Taken" to "TRNT",
    )

    values.forEach { (phrase, acronym) ->
      val generatedAcronym = generate(phrase)
      val isEquals = acronym == generatedAcronym

      println("$isEquals, $acronym = $generatedAcronym")
    }
  }
}
