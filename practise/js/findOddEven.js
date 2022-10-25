function findOdd(number) {
  return (number & 1) === 0 ? "even" : "odd";
}

console.log(findOdd(2));
