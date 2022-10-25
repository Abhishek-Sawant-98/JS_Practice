// Quick sort
// Time complexity : O(nlogn)
// Auxiliary space : O(logn)

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1,
    j;

  for (j = low; j < high; ++j) {
    if (arr[j] < pivot) {
      ++i;
      swap(arr, i, j);
    }
  }
  ++i;
  // Insert pivot at its correct position by swapping
  swap(arr, i, high);
  return i;
}

function quickSort(arr, low, high) {
  if (low < high) {
    // Partition index : correct position of pivot
    const pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1); // sort left subarray
    quickSort(arr, pi + 1, high); // sort right subarray
  }
}

const numbers = [9, 5, 2, 44, 1, 33, 27, 99, 17];

console.log("Before sorting : ", numbers);
quickSort(numbers, 0, numbers.length - 1);
console.log("After sorting : ", numbers);
