"use strict";

/*
page 64
countdown with recursion
 */
function countdown(i) {
    console.log(i);
    if (i > 1)
        countdown(i - 1);
}
console.log('countdown');
countdown(3);
/*
END
page 64
countdown with recursion
 */

/*
page 69
stack call with recursion
 */
function fact(x) {
    if (x === 1)
        return 1;
    else
        return x * fact(x - 1);
}
console.log('stack call with recursion');
console.log(fact(3));
/*
END
page 69
stack call with recursion
need return 6;
 */
