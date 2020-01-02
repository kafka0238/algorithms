"use strict";

/*
page57
selection sort
 */
function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}
function selectionSort(arr) {
    let newArr = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1)[0]);
    }
    return newArr;
}
let page57Arr = [5, 3, 6, 2, 10];
console.log('selection sort');
console.log(selectionSort(page57Arr));
/*
END
page 57
selection sort
need return [ 2, 3, 5, 6, 10 ];
 */
