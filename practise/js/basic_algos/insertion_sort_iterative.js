// Iterative insertion sort
// Time complexity : O(n2)
// Auxiliary space : O(1)

// Insert the last element in its correct position in
function insertionSortIterative(arr) {
  const n = arr.length;
  let i, j, last;

  for (i = 1; i < n; ++i) {
    last = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > last; --j) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = last;
  }
}

const numbers = [9, 5, 2, 44, 1, 33, 27, 99, 17];

console.log("Before sorting : ", numbers);
insertionSortIterative(numbers);
console.log("After sorting : ", numbers);
