function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function iterativeBubbleSort(arr) {
  const n = arr.length;

  let i, j, swapped;

  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}

function recursiveBubbleSort(arr, n) {
  if (n <= 1) return;

  let i, swapped;

  for (i = 0; i < n - 1; i++) {
    swapped = false;
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
      swapped = true;
    }
  }
  if (!swapped) return;

  recursiveBubbleSort(arr, n - 1);
}

function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const L = [];
  const R = [];

  let i, j, k;

  for (i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }

  i = 0;
  j = 0;
  k = left;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
      continue;
    }
    arr[k++] = R[j++];
  }

  while (i < n1) {
    arr[k++] = L[i++];
  }
  while (j < n2) {
    arr[k++] = R[j++];
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];

  let i, j;

  i = low - 1;

  for (j = low; j < high; j++) {
    if (arr[j] < pivot) {
      swap(arr, ++i, j);
    }
  }
  swap(arr, ++i, high);
  return i;
}

function iterativeMergeSort(arr) {
  const n = arr.length;

  let currSize, leftStart, mid, rightEnd;

  for (currSize = 1; currSize < n; currSize *= 2) {
    for (leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
      mid = Math.min(leftStart + currSize - 1, n - 1);
      rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

      merge(arr, leftStart, mid, rightEnd);
    }
  }
}

function recursiveMergeSort(arr, left, right) {
  if (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    recursiveMergeSort(arr, left, mid);
    recursiveMergeSort(arr, mid + 1, right);

    merge(arr, left, mid, right);
  }
}

function recursiveQuickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);

    recursiveQuickSort(arr, low, pi - 1);
    recursiveQuickSort(arr, pi + 1, high);
  }
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
    swap(arr, minIndex, i);
  }
}

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
      arr[minIndex] = arr[minIndex - 1];
      minIndex--;
    }

    arr[i] = minValue;
  }
}

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

function recursiveInsertionSort(arr, n) {
  if (n <= 1) return;

  recursiveInsertionSort(arr, n - 1);

  let j, last;

  last = arr[n - 1];
  j = n - 2;

  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = last;
}

/**********          Driver code           *********/

const arr = [38, 22, 41, 3, 13, 17, 91, 76, 55];
const n = arr.length;
console.log("The original array is : " + arr);

/* Comment all the below sorting algos except one
   and run this code */

// iterativeInsertionSort(arr);
// recursiveInsertionSort(arr, n);

// iterativeBubbleSort(arr);
// recursiveBubbleSort(arr, n);

// iterativeMergeSort(arr);
// recursiveMergeSort(arr, 0, n - 1);

// stableSelectionSort(arr);
// unstableSelectionSort(arr);

recursiveQuickSort(arr, 0, n - 1);

console.log("The  sorted  array is : " + arr);
