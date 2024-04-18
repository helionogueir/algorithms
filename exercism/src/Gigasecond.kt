import java.time.LocalDate
import java.time.LocalDateTime
import java.time.LocalTime
import java.time.Month

class Gigasecond {

    constructor(birthDate: LocalDate): this(birthDate.atTime(LocalTime.MIDNIGHT))

    constructor(birthDate: LocalDateTime) {
        date = birthDate.plusSeconds(1_000_000_000L)
    }

    val date: LocalDateTime

    fun gigaSecond() {
        val gigaSecond1 = Gigasecond(LocalDate.of(2011, Month.APRIL, 25))
        val gigaSecond2 = Gigasecond(LocalDateTime.of(2015, Month.JANUARY, 24, 22, 0, 0))

        println(gigaSecond1.date)
        println(gigaSecond2.date)
    }
}
