"use strict";

/*
page 85
sum array with recursion
 */
function sum(arr) {
    if (arr.length <= 0)
        return 0;
    else
        return arr.pop() + sum(arr);
}
console.log('sum array with recursion');
console.log(sum([1, 2, 3]));
/*
END
page 85
sum array with recursion
need return 6;
 */

/*
page 85
sum count element in array with recursion
 */
function sumCountElement(arr) {
    if (arr.length <= 0)
        return 0;
    else
        return 1 + sumCountElement(arr.slice(1));
}
console.log('sum count elements in array with recursion');
console.log(sumCountElement([1, 2, 3, 4]));
/*
END
page 85
sum count element in array with recursion
need return 4;
 */

/*
page 85
find high number in list
 */
function findHighNumber(list) {
    let el = list.pop();
    if (list.length > 0) {
        let nextEl = findHighNumber(list);
        return el > nextEl ? el : nextEl;
    }
    else {
        return el;
    }
}
console.log('find high number in list');
console.log(findHighNumber([45, 32, 78, 105, 6]));
/*
END
page 85
find high number in list
need return 105;
 */

/*
page 85
binary search with recursion
 */
function binarySearch(list, item) {
    if(list.length === 1) {
        return list[0] === item;
    }
    else {
        let mid = Math.round((list.length - 1) / 2);
        let guess = list[mid];
        if (guess > item) {
            return binarySearch(list.slice(0, mid), item);
        }
        else {
            return binarySearch(list.slice(mid), item);
        }
    }

}
console.log('binary search');
console.log(binarySearch([6, 32, 45, 78, 105], 78));
console.log(binarySearch([6, 32, 45, 78, 105], 6));
console.log(binarySearch([6, 32, 45, 78, 105], 105));
console.log(binarySearch([6, 32, 45, 78, 105], 34));
/*
END
page 85
binary search with recursion
need return true, true, true and false;
 */
