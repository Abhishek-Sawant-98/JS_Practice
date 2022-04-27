// JS Code implementation for `Iterative Bubble Sort`
// Time complexity : O(n2)
// Auxiliary space : O(1)

// Swapping 2 elements
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function iterativeBubbleSort(arr) {
  if (!Array.isArray(arr)) {
    return console.error("Invalid input");
  }
  let swapped,
    count = 0,
    n = arr.length;

  if (n < 2) {
    return console.error("Please enter atleast 2 array elements");
  }

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
      count++;
    }
    if (!swapped) break;
  }
  console.log(`Total no of iterations : ${count}`);
  return arr;
}

console.log(iterativeBubbleSort([9, 4, 6, 3, 2, 88, 5]));
