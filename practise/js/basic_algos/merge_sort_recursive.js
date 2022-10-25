// Recursive merge sort
// Time complexity : O(nlogn)
// Auxiliary space : O(n)

function merge(arr, leftStart, mid, rightEnd) {
  // subarray sizes
  const n1 = mid - leftStart + 1;
  const n2 = rightEnd - mid;

  // left and right subarrays
  const L = [],
    R = [];

  let i, j, k;

  // Initializing left and right subarrays
  for (i = 0; i < n1; ++i) {
    L[i] = arr[leftStart + i];
  }
  for (j = 0; j < n2; ++j) {
    R[j] = arr[mid + 1 + j];
  }

  // Start values of left, right and merged subarrays
  i = 0;
  j = 0;
  k = leftStart;

  // Adding corresponding lower value in the merged subarray
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
    } else {
      arr[k++] = R[j++];
    }
  }

  while (i < n1) {
    arr[k++] = L[i++];
  }
  while (j < n2) {
    arr[k++] = R[j++];
  }
}

function mergeSortRecursive(arr, leftStart, rightEnd) {
  if (leftStart < rightEnd) {
    let mid = leftStart + Math.floor((rightEnd - leftStart) / 2);

    // Splitting the array into 2 subarrays
    mergeSortRecursive(arr, leftStart, mid);
    mergeSortRecursive(arr, mid + 1, rightEnd);

    // Merging the subarrays
    merge(arr, leftStart, mid, rightEnd);
  }
}

const numbers = [9, 5, 2, 44, 1, 33, 27, 99, 17];

console.log("Before sorting : ", numbers);
mergeSortRecursive(numbers, 0, numbers.length - 1);
console.log("After sorting : ", numbers);
