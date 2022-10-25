// Iterative binary search
// Time complexity : O(logn)
// Auxiliary space : O(1)

function binarySearchIterative(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) return mid;

    if (x < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  // Control reaches here if element is not found
  return -1;
}

const numbers = [2, 3, 8, 11, 14, 22, 51, 67];

const element = 12;
const index = binarySearchIterative(numbers, element);
console.log(
  index !== -1
    ? `👉 Index of ${element} : ${index}`
    : `👉 ${element} not found in array`
);
