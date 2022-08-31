const expensiveFunc = () => {
  console.log("Expensive func called...");
};

const throttle = function (func, interval) {
  let shouldInvoke = true;
  return function (...args) {
    if (shouldInvoke) {
      func.apply(this, args);
      shouldInvoke = false;
      let timeout = setTimeout(() => {
        shouldInvoke = true;
        clearTimeout(timeout);
      }, interval);
    }
  };
};

const debounce = function (func, delay) {
  let timeout;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const throttledFunc = throttle(expensiveFunc, 1000);
const debouncedFunc = debounce(expensiveFunc, 1000);

document
  .getElementById("throttleDemo")
  .addEventListener("click", throttledFunc);
