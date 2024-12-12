package exercicies

import kotlin.math.pow

object ArmstrongNumber {
  fun check(input: Int) : Boolean {
    val numDigits = input.toString().length.toDouble()
    var temp = input
    var sum = 0

    while (temp > 0) {
      val currentDigit = temp % 10
      // sum += Math.pow(currentDigit.toDouble(), numDigits).toInt()
      sum += currentDigit.toDouble().pow(numDigits).toInt()
      temp /= 10
    }

    return sum == input
  }

  fun test () {
    val values = mutableMapOf(
      0 to true,
      5 to true,
      10 to false,
      153 to true,
      100 to false,
      9474 to true,
      9475 to false,
      9926315 to true,
      9926314 to false
    )

    values.forEach { ( numValue, testValue) ->
      val armstrongNumberValue = check(numValue)
      val isEquals = armstrongNumberValue == testValue

      println("$isEquals, $armstrongNumberValue = $testValue")
    }
  }
}
