// Recursive binary search
// Time complexity : O(logn)
// Auxiliary space : O(1) => Only 1 subproblem at each step

function binarySearchRecursive(arr, x, low, high) {
  if (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) return mid;

    if (x < arr[mid]) {
      return binarySearchRecursive(arr, x, low, mid - 1);
    } else {
      return binarySearchRecursive(arr, x, mid + 1, high);
    }
  }
  return -1;
}

const numbers = [2, 3, 8, 11, 14, 22, 51, 67];

const element = 51;
const index = binarySearchRecursive(numbers, element, 0, numbers.length - 1);
console.log(
  index !== -1
    ? `👉 Index of ${element} : ${index}`
    : `👉 ${element} not found in array`
);
