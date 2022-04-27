// JS code implementation for `Recursive Bubble Sort`
// Time complexity : O(n2)
// Auxiliary space : O(1) => Only 1 sub-problem at each step

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let count = 0;

function recursiveBubbleSort(arr, n) {
  if (!Array.isArray(arr) || !Number.isInteger(n)) {
    console.error("Invalid input");
    return false;
  }
  if (n < 0 || n > arr.length) {
    console.error(
      `The 2nd argument of 'recursiveBubbleSort()' function should be >1 and <= length of array`
    );
    return false;
  }

  // Base case (to terminate recursion)
  if (n === 1) {
    return console.log(`Total no of recursions : ${count}`);
  }

  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
      swapped = true;
    }
    count++;
  }
  if (!swapped) {
    return console.log(`Total no of recursions : ${count}`);
  }
  recursiveBubbleSort(arr, n - 1);
}

const arr = [1, 2, 3, 4, 9, 8, 7, 6, 5];
const result = recursiveBubbleSort(arr, arr.length);

// Result will be 'undefined' when array is sorted
if (result === undefined) {
  console.log(arr);
}
