// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

// const filterOutOdds = nums => nums.filter((...nums)=> num % 2 === 0);
// const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

 const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

//  findMin
//  Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
 
//  Make sure to do this using the rest and spread operator.
 
 // -3
//  findMin(1,-1) // -1
//  findMin(3,1) // 1

const findMin = (...nums) => Math.min(...nums)
console.log(findMin(1,4,12,-3));


// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// 
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// 
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr,...args) => [...arr, ...args.map(v => v *2)]
console.log(doubleAndReturnArgs([1,2,3],4,4));

/** remove a random element in the items array
and return a new array without that item. */

const array1words =[ "Jan", "feb", "march"];
const array2num =[1,2,3,4];
const array3mix =[1, "a", 3, "c"];
function removeRandom(items) {
   const ranElem = [Math.floor(Math.random() * items.length)]
   return console.log([...items.slice(0,ranElem), ...items.slice(ranElem + 1)]);
  
}

 removeRandom(array1words);
/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => array3 = [...array1, ...array2];

console.log(extend(array1words, array2num));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const Jan = {
    weeks : 5,
    days : 31
};

const Feb = {
    rainDays: 4,
    saturdays: 4

};

function addKeyVal(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    console.log(newObj)


}

addKeyVal(Jan, "Fridays", 5);

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let obj12 = {...obj}; 
    delete obj12[key];
    return obj12
}
 console.log(removeKey(Jan, "weeks"));

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return obj13 = {...obj1, ...obj2};

}
console.log(combine(Jan, Feb));

/** Return a new object with a modified key and value. */

function update(obj, key, val) {

    let newObj = {...obj};
    newObj[key] = val;
    console.log(newObj)


}
update(Feb, "mondays", 7);
//this is the same? as addKeyVal()
