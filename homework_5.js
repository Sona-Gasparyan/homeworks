//1. Create a function that builds a tree like object given an array with object which
// contains parent and id properties.


// 2. Write a JavaScript function to get all possible subsets of given length of the given array.
// Assume that all elements in the array are unique.

function getCombinations(array, n) {
    let result = [];

    function getSubArray(index, arr1) {
        if (n === arr1.length) {
            result.push(arr1);
            return;
        } else if (index === array.length) {
            return;
        } else {
            getSubArray(index + 1, arr1.concat([array[index]]));
        }
        getSubArray(index + 1, arr1);
    }
    getSubArray(0, []);
    return result;
}

getCombinations([1, 2, 3, 4], 2)




//3. Create constructor function which instances would be objects with already
// implemented method &quot;map&quot; (like Array.map)

function MyOwnProp() {
    this.map = function(fn) {
        let obj = {};
        for (let key in obj) {
            if (key === 'map') continue
            const newProp = fn(this[key], key, this)
            obj[key] = newProp
        }
        return obj
    }

}