// Iterative merge sort
// Time complexity : O(nlogn)
// Auxiliary space : O(n)

function merge(arr, leftStart, mid, rightEnd) {
  // Left and right subarray sizes
  const n1 = mid - leftStart + 1;
  const n2 = rightEnd - mid;

  // Left and right subarrays
  let i,
    j,
    k,
    L = [],
    R = [];

  // Populating left and right subarrays
  for (i = 0; i < n1; ++i) {
    L[i] = arr[leftStart + i];
  }
  for (j = 0; j < n2; ++j) {
    R[j] = arr[mid + j + 1];
  }

  i = 0; // Start index of left subarray
  j = 0; // Start index of right subarray
  k = leftStart; // Start index of merged subarray

  // Adding the corresponding lower value of a subarray to the merged array
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
    } else {
      arr[k++] = R[j++];
    }
  }

  // Adding any left out subarray items to merged array
  while (i < n1) {
    arr[k++] = L[i++];
  }
  while (j < n2) {
    arr[k++] = R[j++];
  }
}

function mergeSortIterative(arr) {
  const n = arr.length;
  let leftStart, mid, rightEnd, subarraySize;

  for (subarraySize = 1; subarraySize < n; subarraySize = subarraySize * 2) {
    for (
      leftStart = 0;
      leftStart < n - 1;
      leftStart = leftStart + subarraySize * 2
    ) {
      mid = Math.min(leftStart + subarraySize - 1, n - 1);
      rightEnd = Math.min(leftStart + subarraySize * 2 - 1, n - 1);
      merge(arr, leftStart, mid, rightEnd);
    }
  }
}

const numbers = [9, 5, 2, 44, 1, 33, 27, 99, 17];

console.log("Before sorting : ", numbers);
mergeSortIterative(numbers);
console.log("After sorting : ", numbers);
