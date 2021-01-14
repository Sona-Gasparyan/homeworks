// 1. Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers
// by the given num length over the specified interval (from a to b).


function evenlySpacedArr(a, b, num) {
    let arr = [];
    let n = b - a
    let count = n / (num - 1)
    for (let i = a; i <= b; i = a + count) {
        arr.push(i)
        a = i
    } return arr
}


// 2.Given an array of numbers. Find the index of the second maximum element.

function secondMaxValue(arr) {
    let max2 = -Infinity;
    let max = -Infinity;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]

        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > max2 && arr[j] !== max) {
            max2 = arr[j]
            index = arr.indexOf(arr[j])
        }

    } return index
}


//3. Given an array of numbers, padding amount and repeat count. Pad the array in the
// following way: the padding amount specifies how many elements should be taken from
// the array edges, the repeat amount specifies how many times the pad should be
// repeated. Also, you should check that padding amount &lt;= length of array.


function repeat(arr, padAmount, repeat) {
    if (padAmount > arr.length) return `Invalid padding amount`
    let a = [];
    let b = [];
    let result1 = [];
    let result2 = []
    let pad = []
    a = "" + arr.slice(0, padAmount)
    b = "" + arr.slice(-padAmount)
    for (let i = 0; i < repeat; i++) {
        result1.push(a)
        result2.push(b)
    }
    pad = result1.concat(arr, result2)
    return pad
}


// 4.Write a function which receives an array and a number as arguments and returns a new array 
// from the elements of the given array which are larger than the given number.

function greaterValues(arr, num) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            arr1.push(arr[i])
        }
    }
    if (arr1.length === 0) {
        return `Such values don't exist`
    } else {
        return arr1
    }
}

console.log(greaterValues([1, 1, 2, -3, 0, 8, 4, 0], 9))



// 5.Write a function, which receives two numbers as arguments and finds all numbers between
// them such that each digit of the number is even. The numbers obtained should be printed in a
// comma-separated sequence on a single line.

function middeleNum(min, max) {
    let arr = []
    let evenDigit;
    for (let j = min; j <= max; j++) {
        let str = "" + j
        for (let i = 0; i < str.length; i++) {
            evenDigit = str[i] % 2 === 0
            if (evenDigit === false) break
        }
        if (evenDigit) arr.push(j)
    }
    if (arr.length === 0) {
        return `Such numbers does not exist.`

    }
    return arr
}