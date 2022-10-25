// Recursive bubble sort
// Time complexity : O(n2)
// Auxiliary space : O(1)

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSortRecursive(arr, n) {
  if (!Array.isArray(arr) || !Number.isInteger(n)) {
    console.error("Invalid input");
    return false;
  }

  if (n < 0 || n > arr.length) {
    console.error("'n' out of bounds");
    return false;
  }

  if (n <= 1) return;

  let i;

  for (i = 0; i < n - 1; ++i) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
  bubbleSortRecursive(arr, n - 1);
}

const numbers = [9, 5, 2, 44, 1, 33, 27, 99, 17];

console.log("Before sorting : ", numbers);
const result = bubbleSortRecursive(numbers, numbers.length);

if (result === undefined) {
  console.log("After sorting : ", numbers);
}
