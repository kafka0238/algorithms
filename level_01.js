"use strict";

/*
page 27
binary search with while
 */
function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        let mid = Math.round((low + high) / 2);
        let guess = list[mid];
        if (guess === item)
            return mid;
        if (guess > item)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return false;
}

let myList = [1, 3, 5, 7, 9];
console.log('binary search');
console.log(binary_search(myList, 3));
console.log(binary_search(myList, -1));
/*
END
page 27
binary search with while
need return 1 and false;
 */
