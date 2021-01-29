//1. Given an array of nested arrays. Write a recursive function
//that flattens it. (Hint create function that concats arrays).


function clearNestedArrs(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr1 = arr1.concat(clearNestedArrs(arr[i]))
        } else {
            arr1.push(arr[i])
        }
    }
    return arr1
}


//2. Given a number. Write a function that calculates its sum of
//the digits and if that sum has more than 1 digit find the sum of
//digits of that number. Repeat that process if needed and return
//the result.

function sumOfDigits(num) {
    let sum = 0;
    num = num.toString()
    for (let i = 0; i < num.length; i++) {

        sum += (+num[i])
    }

    if (sum < 10 && sum !== 0) {
        return sum
    }
    return sumOfDigits(sum)
}

// 3. Given an array and a number N.  Write a recursive function that rotates an array N places to the left.
//  (Hint: to add element to the beginning use arr.unshift())

function recursionReverse(arr, N) {
    if (N === 0) {
        return arr

    } else {
        arr.unshift(arr.pop())
        return recursionReverse(arr, N - 1)
    }

}


// 4. Given an object. Invert it (keys become values and values become keys). 
// If there is more than key for that given value
//     create an array.

function reversing(obj) {
    const values = Object.values(obj);
    const keys = Object.keys(obj);
    const result = {}
    
    values.forEach(function (value, index) {
          if (!result.hasOwnProperty(value)) {
            result[value] = keys[index]
        } else {
            if (Array.isArray(result[value])) {
                result[value].push(keys[index]);
            } else {
                result[value] = [result[value], keys[index]];
            }
        }

    });
    return result
}

// 5. Given the list of the following readers:
// sorting([
// { book: "Catcher in the Rye", readStatus: true, percent: 40},
// { book: "Animal Farm", readStatus: true, percent: 20},
// { book: "Solaris", readStatus: false, percent: 90 },
// { book: "The Fall", readStatus: true, percent: 50 },
// { book: "White Nights", readStatus: false, percent: 60 } ,
// { book: "After Dark", readStatus: true, percent: 70 }
// ])
// Output the books sorted by the percent in descending order which readStatus is true.
    

function sorting (arr) {
    let arr1 = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].readStatus ) {
             arr1.push(arr[i])
        }
    } 
    arr1.sort((a,b)=>{return b.percent - a.percent})
    return arr1
}

