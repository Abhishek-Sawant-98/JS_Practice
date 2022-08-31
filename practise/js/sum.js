// Write your code here
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  printSum(stdin_input);
});

function getSum(a, b) {
  return a + b;
}

function inputInRange(x) {
  return x >= 1 && x <= 100000;
}

function printSum(input) {
  const inputLines = input.trim().split("\n");
  let outputLines = "";
  const t = parseInt(inputLines[0]);
  if (t < 1 || t > 100) return;
  for (let i = 1; i <= t; ++i) {
    const inputs = inputLines[i].split(" ");
    const a = parseInt(inputs[0]);
    const b = parseInt(inputs[1]);
    if (inputInRange(a) && inputInRange(b)) {
      outputLines += getSum(a, b) + "\n";
    } else {
      return;
    }
  }
  process.stdout.write(outputLines);
}
