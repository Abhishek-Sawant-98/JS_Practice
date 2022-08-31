let y;
console.log(y);
y = 9;

// sum(2)(1)(4)(1)(2)(2)(3)(6)() => total
const infiniteSum1 = (a) => (b) => b ? infiniteSum1(a + b) : a;

// sum(2,3,4)(1)(3,4,1,5,6,7)(1,9)(2)(2)(3)(6,6,6,6)() => total
const infiniteSum2 = (...a) => {
  return (...b) => {
    const currSum = [...a, ...b].reduce((sum, val) => sum + val, 0);
    return b.length ? infiniteSum2(currSum) : currSum;
  };
};

const curry = function (func) {
  return function curried(...args) {
    // If no. of passed args >= expected no. of args,
    // then execute func with all the passed args,
    // else return a copy of 'curried' with args appended
    return args.length >= func.length
      ? func.apply(this, args)
      : curried.bind(this, ...args);
  };
};

const sum = (a, b, c, d) => a + b + c + d;
const curriedSum = curry(sum);
// console.log(infiniteSum2(2, 3, 4)(1)(9, 9)(3, 4, 1, 5, 6, 7)());
console.log(curriedSum(1)(2)(3)(6));
