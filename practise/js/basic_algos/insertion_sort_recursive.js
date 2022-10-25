// Recursive insertion sort
// Time complexity : O(n2)
// Auxiliary space : O(1)

function insertionSortRecursive(arr, n) {
  if (!Array.isArray(arr) || !Number.isInteger(n)) {
    return console.error("Invalid input");
  }

  if (n < 0 || n > arr.length) {
    return console.error("'n' out of bounds");
  }

  if (n <= 1) return;

  insertionSortRecursive(arr, n - 1);

  let j = n - 2,
    last = arr[n - 1];

  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    --j;
  }
  arr[j + 1] = last;
}

const numbers = [9, 5, 2, 44, 1, 33, 27, 99, 17];

console.log("Before sorting : ", numbers);
insertionSortRecursive(numbers, numbers.length);
console.log("After sorting : ", numbers);
