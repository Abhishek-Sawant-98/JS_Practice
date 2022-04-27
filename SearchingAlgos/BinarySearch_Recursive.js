// JS code implementation for `Recursive Binary Search`
// Time complexity : O(logn)
// Auxiliary space : O(1) => Only one subproblem at each step

function recursiveBinarySearch(arr, low, high, x) {
  if (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (x === arr[mid]) return mid;

    if (x < arr[mid]) return recursiveBinarySearch(arr, low, mid - 1, x);
    else return recursiveBinarySearch(arr, mid + 1, high, x);
  }
  // 'x' doesn't exist in arr[], if it reaches this point
  return -1;
}

// Sorted array
const arr = [1, 3, 5, 7, 17, 23, 33, 77, 81, 90];
console.log(recursiveBinarySearch(arr, 0, arr.length - 1, 33));
