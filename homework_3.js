//1. Write a recursive function to determine whether all digits of the number are odd or not.

function isAllDigitsOdd(num) {
    if (num === 0) {
        return true
    }
    else if ((num % 10) % 2 === 0) {
        return isAllDigitsOdd((num - num % 10) / 10)
    } else {
        return false
    }
}


// 2. Given an array of numbers. Write a recursive function to find its minimal positive element. (if
// such element does not exist, return -1)․

function positiveInt(arr, i) {
    if (arr.length === 0 && i === undefined) return -1
    if (arr.length === 0) {
        return i;
    }
    else {
        let first = arr.shift();
        if (first < 0) {
            i = undefined
        } else if (first < i || i === undefined) {
            i = first;
        }

        return positiveInt(arr, i);
    }
}




//  3. Given an array of numbers which is almost sorted in ascending order.  Find the index where
// sorting order is violated.

function fidingMistake(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i + 1] > 0) {
            return i + 1
        }
    }
    return -1
}

// 4. Write recursive, memorized function to get n-th Fibonacci number.

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}



// 5. Given an array. Write a recursive function that removes the first element and returns
// the given array. (without using arr.unshift(),assign second element to first, third element to
// second...)

function removingFirstEl(arr, arr1 = [], i = 1) {
    if (arr.length === 0) return []
    if (i === arr.length) return arr1
    arr1.push(arr[i])
    return removingFirstEl(arr, arr1, i + 1)


}