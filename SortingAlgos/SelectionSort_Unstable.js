// JS Code implementation for `Unstable Selection Sort`
// Time complexity : O(n2)
// Auxiliary space : O(1)

// This implementation is 'unstable' as it swaps 'non-adjacent' elements

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function unstableSelectionSort(arr) {
  const n = arr.length;
  let i, j, minIndex;

  for (i = 0; i < n - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
}

const arr = [38, 22, 41, 3, 13, 17, 91, 76, 55];
console.log("The original array is : " + arr);

unstableSelectionSort(arr);
console.log("The  sorted  array is : " + arr);
