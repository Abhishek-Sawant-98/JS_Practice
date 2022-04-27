// JS Code implementation for `Stable Selection Sort`
// Time complexity : O(n2)
// Auxiliary space : O(1)

// This implementation is 'stable' as it shifts the lower elements
// one index above instead of swapping

function stableSelectionSort(arr) {
  const n = arr.length;
  let i, j, minIndex, minValue;

  for (i = 0; i < n - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    minValue = arr[minIndex];

    while (minIndex > i) {
      arr[minIndex] = arr[--minIndex];
    }
    arr[i] = minValue;
  }
}

const arr = [38, 22, 41, 3, 13, 17, 91, 76, 55];
console.log("The original array is : " + arr);

stableSelectionSort(arr);
console.log("The  sorted  array is : " + arr);
