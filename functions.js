/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

const { arrayify } = require("babel-core/lib/util");

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */
function sumOdds(numbers) {
  // Your code here
  // #1 filter odd numbers and copy them into an array
  // #2 return sum of filtered numbers

  // failed attempts
  // function odd (sumOdds) {
  //   number.filter(number % 2 === 1)
  // }
  // let num = 0;
  // let odds = numbers.filter((number) => number % 2 === 1);
  // let sum = odds.forEach((number) => num + number);
  // return num;
  // return sum = sum + numbers.filter(number => number % 2 === 1 )
  // return sum = sum + numbers
  // return numbers.reduce(numbers, numbers[0])
  // numbers.forEach(number =>
  // console.log(number + number))

  // for some reason line 41 fails the test when const is removed
  const odds = numbers.filter((n) => n % 2 === 1);
  let num = 0;
  odds.forEach((n) => (num += n));
  return num;
}
// console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));

/**
 * characterCount(string, c):
 * - receives a string and a character
 * - returns the number of times `c` occurs in the string
 * - note: this has to be case-insensitive
 *
 * e.g.
 * characterCount("Michael Stephenson", "e") -> 3
 * characterCount("Character Count is clever", "c") -> 4
 *
 * Hint: You need to turn the string into an array first
 * Another Hint: Use string methods to make it case-insensitive
 */
function characterCount(string, c) {
  // Your code here
  // string.toLowerCase().indexOf(c.toLowerCase());
  // string.toLowerCase().match(c);

  const low = string.toLowerCase();
  const count = low.split(c).length - 1;
  return count;
}
// console.log(characterCount("Character Count is clever", "c"));

/**
 * largestIncrement(numbers):
 * - receives an array of numbers
 * - returns the largest difference between two consecutive numbers in the array
 * - see example below for clarification
 * - assume all differences are positive numbers
 * e.g.
 * largestIncrement([1, 3, 7, 9, 12]) -> 4
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 * largest: 4
 *
 * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
 */
function largestIncrement(numbers) {
  // Your code here
  // when using map it returns undefined. laaaaaiiiiiish maaa nadri eeee minuuuuuu maaa nadri
  // diff = numbers.map((n) => {
  // removing diff returns undefined
  // diff = numbers.at(numbers.indexOf(n)+1) - n
  // to remove any Nan wayid feeh su3rat 5aa3 5aa3 5aa3 5aa3
  // if (diff){return diff}
  // })
  // diff.sort((first, second) => second - first)
  // il3od = diff.at(0)
  // console.log(il3od)

  // adding the if statement returns an undefined array
  // diff = numbers.map((n, i, arr) => {if(i < arr.length){ numbers[i+1] - n}})
  // console.log(diff)

  let diff = numbers.map((n, i, arr) => arr[i+1] - n)
  diff.sort((first, second) => second - first)
  diff.splice(1,diff.length)
  return diff.toString()
}
// console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));

/**
 * afterX(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns an array of every number in `numbers` that occurs after `x`.
 *
 * - assume there are no duplicate numbers.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */
function afterX(numbers, x) {
  // Your code here
  //   numbers.forEach(number => {
  //     // if (number[] > number.indexOf(x)){
  //       return number
  //     }
  //   });

  const after = numbers.filter((num) => num > x);
  return after;
}
// console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */
function abbreviate(firstName, lastName) {
  // Your code here
  let firstLetter = firstName.slice(0, 1).toUpperCase();
  let lastLetter = lastName.slice(0, 1).toUpperCase();
  return firstLetter + lastLetter;
}
// console.log(abbreviate("miss", "Stephane"));

/**
 * isUpperCase(string):
 * - receives a string
 * - returns true if the string is uppercase, false otherwise
 *
 * e.g.
 * isUpperCase("Mickey S") -> false
 * isUpperCase("JCREW") -> true
 *
 */
function isUpperCase(string) {
  // Your code here
  if (string === string.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
// console.log(isUpperCase("JCREW"));

/**
 * elementInArray(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns true if `x` is found in the array, false otherwise
 *
 * e.g.
 * elementInArray([5, 6, 7], 6) -> true
 * elementInArray([5, 6, 7], 8) -> false
 *
 */
function elementInArray(numbers, x) {
  // Your code here
  // numbers.forEach(number => {
  //   if (number.indexOf(x)){
  //     return true
  //   } else {
  //     return false
  //   }
  // })

  return numbers.some((num) => num === x);
}
// console.log(elementInArray([5, 6, 7], 8));

module.exports = {
  sumOdds,
  characterCount,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
};
