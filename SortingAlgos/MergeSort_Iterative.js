// JS code implementation for `Iterative Merge Sort`
// Time complexity : O(nlogn)
// Auxiliary space : O(1)

function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const L = [];
  const R = [];

  let i, j, k;

  // Populate the left and right subarrays
  for (i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }

  i = 0; // Initial index of left subarray
  j = 0; // Initial index of right subarray
  k = left; // Initial index of merged subarray

  // To compare and merge the 2 subarrays
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
      continue;
    }
    arr[k++] = R[j++];
  }

  // To fill L[] and R[] with remaining subarray elements (if any)
  while (i < n1) {
    arr[k++] = L[i++];
  }
  while (j < n2) {
    arr[k++] = R[j++];
  }
}

// Iterative Merge Sort function
function iterativeMergeSort(arr) {
  let subarraySize, leftStart, mid, rightEnd;

  const n = arr.length;

  // Doubling 'currSize' after merging all subarrays of one level
  for (currSize = 1; currSize < n; currSize *= 2) {
    // Traversing through all the subarrays of 'currSize' from left to right
    for (leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
      // Setting the mid and right indices of the subarrays to be merged
      mid = Math.min(leftStart + currSize - 1, n - 1);
      rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

      merge(arr, leftStart, mid, rightEnd);
    }
  }
}

const arr = [38, 22, 41, 3, 13, 17, 91, 76, 55];
console.log("The original array is : " + arr);

iterativeMergeSort(arr);

console.log("The  sorted  array is : " + arr);
