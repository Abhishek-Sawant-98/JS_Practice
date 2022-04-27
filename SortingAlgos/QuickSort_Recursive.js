// JS Code implementation for `Recursive Quick Sort`
// Time complexity : O(nlogn)
// Auxiliary space : O(logn)

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {
  const pivot = arr[high];

  let j;
  let i = low - 1;

  for (j = low; j < high; j++) {
    if (arr[j] < pivot) {
      swap(arr, ++i, j);
    }
  }
  // Insert pivot at its correct position by swapping
  swap(arr, ++i, high);
  return i; // Correct position of pivot
}

function recursiveQuickSort(arr, low, high) {
  if (low < high) {
    // Partition index (correct position of the pivot)
    const pi = partition(arr, low, high);

    recursiveQuickSort(arr, low, pi - 1); // Sort left subarray of pivot
    recursiveQuickSort(arr, pi + 1, high); // Sort right subarray of pivot
  }
}

const arr = [38, 22, 41, 3, 13, 17, 91, 76, 55];
console.log("The original array is : " + arr);

recursiveQuickSort(arr, 0, arr.length - 1);
console.log("The  sorted  array is : " + arr);
