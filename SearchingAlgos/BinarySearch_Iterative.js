// JS code implementation for `Iterative Binary Search`
// Time complexity : O(logn)
// Auxiliary space : O(1)

function iterativeBinarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (x === arr[mid]) return mid;

    if (x < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  // 'x' doesn't exist in arr[], if it reaches this point
  return -1;
}

// Sorted array
const arr = [1, 3, 5, 7, 17, 23, 33, 77, 81, 90];
console.log(iterativeBinarySearch(arr, 90));
