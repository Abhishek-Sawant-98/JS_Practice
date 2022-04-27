// JS Code implementation for `Iterative Insertion Sort`
// Time complexity : O(n2)
// Auxiliary space : O(1)

function iterativeInsertionSort(arr) {
  const n = arr.length;
  let i, j, key;

  for (i = 1; i < n; i++) {
    key = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
}

const arr = [38, 22, 41, 3, 13, 17, 91, 76, 55];
console.log("The original array is : " + arr);

iterativeInsertionSort(arr);
console.log("The  sorted  array is : " + arr);
