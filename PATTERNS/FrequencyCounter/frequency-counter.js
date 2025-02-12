/* Kiểm tra hai mảng có chứa cùng các số bình phương không? */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let num of arr1) {
    freqCounter1[num] = (freqCounter1[num] || 0) + 1;
  }

  for (let num of arr2) {
    freqCounter2[num] = (freqCounter2[num] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;
    if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
  }

  return true;
}

// console.log(same([1, 3, 2], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); // false

/* Kiểm tra hai chuỗi có phải là anagram không? */

const a = "hello";
const b = "lloeh";

function validAnagram(a, b) {
  if (a.length !== b.length) return false;

  const freqCounter1 = {};
  const freqCounter2 = {};

  for (let char of a) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }

  for (let char of b) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }

  console.log(freqCounter1, freqCounter2);

  for (let key in freqCounter1) {
    if (!key in freqCounter2) return false;
    if (freqCounter1[key] !== freqCounter2[key]) return false;
  }

  return true;
}

function validAnagramBetter(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freqCounter = {};

  for (let char of str1) {
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!freqCounter[char]) return false;
    freqCounter[char]--; // giảm số lần xuất hiện của char đến 0 thì sẽ không còn nữa
  }

  return true;
}

// console.log(validAnagram(a, b)); //true
console.log(validAnagram("", "")); //true
