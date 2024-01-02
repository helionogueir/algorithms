/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = [];

    if (numRows > 0) triangle.push([1]);
    if (numRows > 1) triangle.push([1, 1]);

    for (let row = 3; row <= numRows; row++) {
        const newRow = [1];
        const lastRow = triangle[triangle.length - 1];
        for (let i = 0; i < lastRow.length - 1; i++)
            newRow.push(lastRow[i] + lastRow[i + 1]);
        newRow.push(1);
        triangle.push(newRow);
    }

    return triangle;
};
