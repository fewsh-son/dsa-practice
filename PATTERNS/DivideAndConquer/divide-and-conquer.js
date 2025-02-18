function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
  else return binarySearch(arr, target, mid + 1, right);
}

let arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7)); // 3
console.log(binarySearch(arr, 2)); // -1
