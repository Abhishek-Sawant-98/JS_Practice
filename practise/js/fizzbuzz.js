// Write your code here
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input;
});

process.stdin.on("end", function () {
  printNumbers(stdin_input);
});

function getNumString(x) {
  return x % 15 === 0
    ? "FizzBuzz"
    : x % 3 === 0
    ? "Fizz"
    : x % 5 === 0
    ? "Buzz"
    : x;
}

function printNumbers(input) {
  const inputLines = input.split("\n");
  let outputLines = "";
  const t = parseInt(inputLines[0]);
  if (t < 1 || t > 10) return;
  const nums = inputLines[1].trim().split(" ");
  for (let i = 0; i < nums.length; ++i) {
    const num = parseInt(nums[i]);
    if (!Number.isInteger(num)) return;
    for (let j = 1; j <= num; ++j) {
      outputLines += getNumString(j) + "\n";
    }
  }
  process.stdout.write(outputLines);
}
