// 1502. Can Make Arithmetic Progression From Sequence

var canMakeArithmeticProgression = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    let diff = arr[1] - arr[0]
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== diff) {
            return false
        }

    }
    return true
};