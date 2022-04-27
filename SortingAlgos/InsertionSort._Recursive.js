// JS Code implementation for `Recursive Insertion Sort`
// Time complexity : O(n2)
// Auxiliary space : O(logn)

function recursiveInsertionSort(arr, n) {
  // Base case
  if (n <= 1) return;

  // Recursively sort first n-1 elements
  recursiveInsertionSort(arr, n - 1);

  let last = arr[n - 1];
  let j = n - 2;

  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j--];
  }
  arr[j + 1] = last;
}

const arr = [38, 22, 41, 3, 13, 17, 91, 76, 55];
console.log("The original array is : " + arr);

recursiveInsertionSort(arr, arr.length);
console.log("The  sorted  array is : " + arr);
