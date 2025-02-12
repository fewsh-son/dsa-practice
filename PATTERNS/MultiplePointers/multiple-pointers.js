//Tìm cặp số trong mảng có tổng bằng 0

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--; // Giảm tổng
    else left++; // Tăng tổng
  }

  return null;
}

// Đếm số lượng phần tử duy nhất trong mảng đã sắp xếp

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

console.log(countUniqueValues([1, 1, 2, 2, 3, 4, 4, 5])); // 5
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// Kiểm tra chuỗi con (Subsequence) trong chuỗi

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    while (j < str2.length) {
        if (str1[i] === str2[j]) i++;
        if (i === str1.length) return true;
        j++;
    }

    return false;
}

console.log(isSubsequence("abc", "aebdc")); // true
console.log(isSubsequence("axc", "aebdc")); // false
console.log(isSubsequence("hello", "he l l o world")); // true
