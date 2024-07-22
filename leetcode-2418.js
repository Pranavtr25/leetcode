// 2418. Sort the People

var sortPeople = function (names, heights) {
    let temp
    for (i = 0; i < heights.length; i++) {
        for (j = i + 1; j < heights.length; j++) {
            if (heights[i] < heights[j]) {
                temp = heights[i];
                heights[i] = heights[j];
                heights[j] = temp;
                temp = names[i];
                names[i] = names[j];
                names[j] = temp;
            }
        }
    }
    return names
};