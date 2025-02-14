// Tìm tổng lớn nhất của dãy con có độ dài k

function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // Tính tổng của cửa sổ đầu tiên
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Trượt cửa sổ từ vị trí thứ k trở đi
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i]; // Trừ số cũ, cộng số mới
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 3, 4, 1, 5, 6, 1, 2, 8], 3)); // Output: 15 (5+6+4)

// Độ dài dãy con nhỏ nhất có tổng ≥ S

function minSubarrayLen(arr, S) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right]; // Mở rộng cửa sổ

    while (sum >= S) {
      minLength = Math.min(minLength, right - left + 1); // Cập nhật độ dài nhỏ nhất
      sum -= arr[left]; // Thu nhỏ cửa sổ
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // Output: 2 ([4,3] hoặc [3,4])

// Độ dài chuỗi con dài nhất có tối đa k ký tự khác nhau

function longestSubstringKDistinct(s, k) {
  let charCount = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);

    while (charCount.size > k) {
      charCount.set(s[left], charCount.get(s[left]) - 1);
      if (charCount.get(s[left]) === 0) charCount.delete(s[left]);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestSubstringKDistinct("araaci", 2)); // Output: 4 ("araa")
console.log(longestSubstringKDistinct("araaci", 1)); // Output: 2 ("aa")
console.log(longestSubstringKDistinct("cbbebi", 3)); // Output: 5 ("cbbeb" hoặc "bbebi")
