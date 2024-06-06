// Subarray Sum Checker

function checkSubarraySum() {
  // Hardcoded array and target sum
  const arr = [4, 2, 7, 1, 9, 5];
  const target = 6;

  // Function to check for subarray sum
  const hasSubarrayWithSum = (arr, target) => {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
      currentSum += arr[end];

      // Adjust the start index to maintain the target sum or less
      while (currentSum > target && start <= end) {
        currentSum -= arr[start];
        start++;
      }

      // Check if the current sum equals the target
      if (currentSum === target) {
        return true;
      }
    }

    return false;
  };

  // Check and display result
  const result = hasSubarrayWithSum(arr, target);
  console.log(result ? "True" : "False");
}

// Run the function
checkSubarraySum();
