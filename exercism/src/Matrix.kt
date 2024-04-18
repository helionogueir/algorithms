/*

    val matrixAsString = """
            89 1903   3
            18    3   1
             9    4 800
            """.replace(Regex(" +"), " ").trimIndent()
*/

class Matrix(private val matrixAsString: String) {

    val rowMatrix: ArrayList<ArrayList<Int>> = ArrayList()
    val columnMatrix: ArrayList<ArrayList<Int>> = ArrayList()

    init {
        val breakLinePattern = Regex("(\\n|\\r)")
        var currentRow: Int = 0
        var currentColumn: Int = 0
        var currentValue = ""

        for (value in matrixAsString) {
            if (value.isDigit()) {
                currentValue += value
                continue
            }

            addRow(currentRow, currentValue)
            addColumn(currentColumn++, currentValue)
            currentValue = ""

            if (breakLinePattern.containsMatchIn(value.toString())) {
                currentRow++
                currentColumn = 0
            }
        }

        addRow(currentRow, currentValue)
        addColumn(currentColumn++, currentValue)
    }

    private fun addRow(currentRow: Int, value: String) {
        if (rowMatrix.getOrNull(currentRow) == null) rowMatrix.add(currentRow, ArrayList())

        rowMatrix.get(currentRow).add(value.toInt())
    }

    private fun addColumn(currentColumn: Int, value: String) {
        if (columnMatrix.getOrNull(currentColumn) == null) columnMatrix.add(currentColumn, ArrayList())

        columnMatrix.get(currentColumn).add(value.toInt())
    }

    fun column(colNr: Int): List<Int> {
        return columnMatrix.get(colNr - 1)
    }

    fun row(rowNr: Int): List<Int> {
        return rowMatrix.get(rowNr - 1)
    }
}
