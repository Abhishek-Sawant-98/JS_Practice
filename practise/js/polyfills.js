// Polyfill for map()

const arr = [11, 2, 3, 4];

// arr.myMap(cb) => mapped arr
Array.prototype.myMap = function (cb) {
  const inputArr = this;
  const outputArr = [];
  const len = inputArr.length;
  for (let i = 0; i < len; ++i) {
    outputArr.push(cb(inputArr[i], i, inputArr));
  }
  return outputArr;
};

const cb = (x) => x * 5;

// console.log(arr.map(cb));
// console.log(arr.myMap(cb));

// Polyfill for filter()

// arr.filter(cb) => filtered arr
// cb: (el,i,arr) => {if()}
Array.prototype.myFilter = function (cb) {
  const inputArr = this;
  const outputArr = [];
  const len = inputArr.length;
  for (let i = 0; i < len; ++i) {
    if (cb(inputArr[i], i, inputArr)) outputArr.push(inputArr[i]);
  }
  return outputArr;
};

const isOdd = (x) => x % 2;

// console.log(arr.filter(isOdd));
// console.log(arr.myFilter(isOdd));

// Polyfill for reduce()

Array.prototype.myReduce = function (cb, initialVal) {
  let acc = initialVal;
  const inputArr = this;
  const len = inputArr.length;
  // If no initialVal passed, take first element as initialVal
  // If initialVal passed, start from 1st element,
  // else start from 2nd
  for (let i = 0; i < len; ++i) {
    acc = acc !== undefined ? cb(acc, inputArr[i], i, inputArr) : inputArr[i];
  }
  return acc;
};

const cb2 = (acc, curr) => acc * curr;

// console.log(arr.reduce(cb2));
// console.log(arr.myReduce(cb2));

const user = {
  name: "Abhishek",
  logMessage() {
    console.log(this);
  },
  execCb(cb) {
    cb();
  },
};

function callback() {
  "use strict";
  console.log(this);
}

// user.execCb(callback.bind(null));
// setTimeout(user.logMessage, 1000);

// Polyfill for call(), apply(), bind()

const user2 = {
  name: "Abhishek",
  func() {
    console.log("this is func");
  },
};

const myFunc = function (city, country) {
  console.log(`${this.name} is from ${city}, ${country}.`);
};

// myFunc.call(context, 1,2,3) => context.myFunc(...args)
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable");
  }
  if (typeof context !== "object") {
    throw new Error(context + " can't be the context");
  }
  // To prevent overriding of existing context method with same name
  const uniqueFuncName = "func--" + Date.now();
  context[uniqueFuncName] = this; // temporarily adding it to context
  const result = context[uniqueFuncName](...args); // invoking it
  delete context[uniqueFuncName]; // deleting it
  return result;
};

// console.log(user2);
// myFunc.myCall(user2, "Mumbai", "India");
// console.log(user2);

// myFunc.apply(context, [1,2,3]) => context.myFunc(...args)
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable");
  }
  if (typeof context !== "object") {
    throw new Error(context + " can't be the context");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  const uniqueFuncName = "func--" + Date.now();
  context[uniqueFuncName] = this;
  const result = context[uniqueFuncName](...args);
  delete context[uniqueFuncName];
  return result;
};

// console.log(user2);
// myFunc.myApply(user2, ["Mumbai", "India"]);
// console.log(user2);

// const boundFunc = myFunc.bind(context, 1,2,3) =>
// context.boundFunc(...args, ...funcArgs)
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "isn't a function and cannot be bound");
  }
  if (typeof context !== "object") {
    throw new Error(context + " can't be the context");
  }
  return (...funcArgs) => {
    const uniqueFuncName = "func--" + Date.now();
    context[uniqueFuncName] = this;
    const result = context[uniqueFuncName](...args, ...funcArgs);
    delete context[uniqueFuncName];
    return result;
  };
};

// console.log(user2);
// const boundFunc = myFunc.myBind(user2, "Mumbai");
// boundFunc("India");
// console.log(user2);
