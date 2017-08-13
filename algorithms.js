function testing() {
  return "testing 123"
}

// ##### - ##### - ##### - ##### - ##### - ##### - ##### - ##### - #####
// Determine if Palindrome
// If the string is a palindrome, return true. Else, return false.
// Disregard all non-alphanumeric characters
// i.e. "pop", "racecar", "i didi" should return true

function parseStr(str) {
  var alphaNums = "abcdefghijklmnopqrstuvwxyz1234567890"
  return str.split("").filter(function(char) {
    return alphaNums.includes(char.toLowerCase())
  })
  .join("")
}

function reverseStr(str) {
  return str.split("").reverse().join("")
}

function palindrome(str) {
  return parseStr(str).toLowerCase() === reverseStr(parseStr(str).toLowerCase())
}

// ##### - ##### - ##### - ##### - ##### - ##### - ##### - ##### - #####
// Largest Nums in Arrays
// When given an array of arrays, return the greatest number from each subarray
// You can assume that arrays will have a minimum length of 1

function largestNums(arr) {
  return arr.map( (subArr) => subArr.sort( (a, b) => b - a )[0] )
}

// ##### - ##### - ##### - ##### - ##### - ##### - ##### - ##### - #####
// Includes Substring
// When given two strings, return true if the first str includes the second str
// Otherwise, return false

function includesSubstr(str1, str2) {
  return str1.includes(str2)
}

// ##### - ##### - ##### - ##### - ##### - ##### - ##### - ##### - #####
// confirmEnding
// When given a string and a target, return true if the string ends with the target
// Otherwise, return false
function confirmEnding(str, target) {
  var end = "";
  for(var i = str.length - target.length; i < str.length; i++) {
    end += str[i];
  }
  return end === target;
}

// ##### - ##### - ##### - ##### - ##### - ##### - ##### - ##### - #####
//chunkArrayInGroups
// Given an array and number, return a new array with groups of arrays whose size
// is equal to the number passed. If there are not enough numbers to create an array
// of a size equal to number, return each number
// i.e chunkArrayInGroups([1,2,3,4], 2) === [[1,2], [3,4]]
// i.e chunkArrayInGroups([1,2,3,4], 3) === [[1,2,3], [4]]

function chunkArrayInGroups(arr, size) {
  var groups = [];
  for(var i = 0; i < arr.length; i += size) {
    groups.push(arr.slice(i, i + size));
  }
  return groups;
}

exports._test = {
  testing: testing,
  palindrome: palindrome,
  largestNums: largestNums,
  includesSubstr: includesSubstr,
  confirmEnding: confirmEnding,
  chunkArrayInGroups: chunkArrayInGroups
}
