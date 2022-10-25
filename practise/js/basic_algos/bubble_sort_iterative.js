// Iterative bubble sort
// Time complexity : O(n2)
// Auxiliary space : O(1)

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSortIterative(arr) {
  const n = arr.length;
  let i, j, isSwapped;

  for (i = 0; i < n - 1; ++i) {
    isSwapped = false;
    for (j = 0; j < n - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        if (!isSwapped) isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
}

const numbers = [9, 5, 2, 44, 1, 33, 27, 99, 17];

console.log("Before sorting : ", numbers);
bubbleSortIterative(numbers);
console.log("After sorting : ", numbers);
