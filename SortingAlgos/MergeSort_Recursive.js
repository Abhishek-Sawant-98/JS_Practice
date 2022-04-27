// JS code implementation for `Recursive Merge Sort`
// Time complexity : O(nlogn)
// Auxiliary space : O(n)

// Function to merge 2 subarrays
function merge(arr, left, mid, right) {
  let i, j, k;

  // Length of the 2 subarrays
  let n1 = mid - left + 1;
  let n2 = right - mid;

  // Declaring the left and right subarray
  const L = [];
  const R = [];

  // Populating the left and right subarray
  for (i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }
  i = 0; // Initial index of left subarray
  j = 0; // Initial index of right subarray
  k = left; // Initial index of merged subarray

  // Comparing the elements from both subarrays and
  // adding them to the merged subarray in order
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
    } else {
      arr[k++] = R[j++];
    }
  }

  // Add the remaining elements of L[] and R[] (if any)
  while (i < n1) {
    arr[k++] = L[i++];
  }
  while (j < n2) {
    arr[k++] = R[j++];
  }
}

function recursiveMergeSort(arr, left, right) {
  // Base case
  if (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    // Recursively splitting the array into 2 subarrays
    recursiveMergeSort(arr, left, mid);
    recursiveMergeSort(arr, mid + 1, right);

    // Merging the subarrays
    merge(arr, left, mid, right);
  }
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("The original array is : " + arr);

// Sorting the array
recursiveMergeSort(arr, 0, arr.length - 1);
console.log("The  sorted  array is : " + arr);
