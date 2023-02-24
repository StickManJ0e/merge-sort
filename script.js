function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    let leftSide = array.slice(0, (Math.ceil(array.length / 2)));
    let rightSide = array.slice((Math.ceil(array.length / 2)), array.length);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(leftSide, rightSide) {
    let result = [];
    let iL = 0;
    let iR = 0;

    while (leftSide.length > iL && rightSide.length > iR) {
        if (leftSide[iL] < rightSide[iR]) {
            result.push(leftSide[iL]);
            iL++;
        }

        else {
            result.push(rightSide[iR]);
            iR++
        }
    }

    while (rightSide.length > iR) {
        result.push(rightSide[iR]);
        iR++;
    }

    while (leftSide.length > iL) {
        result.push(leftSide[iL]);
        iL++;
    }

    return result;
}

console.log(mergeSort([32, 6]));
console.log(mergeSort([32, 6, 76]));
console.log(mergeSort([32, 6, 86, 231, 3]));
