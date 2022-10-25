// Promise Function Polyfill

function MyPromise(executor) {
  let isFulfilled = false,
    isRejected = false,
    isCalled = false,
    onResolve,
    onReject,
    result,
    reason;

  function resolve(res) {
    isFulfilled = true;
    result = res;

    if (typeof onResolve === "function") {
      onResolve(res);
      isCalled = true;
    }
  }

  function reject(err) {
    isRejected = true;
    reason = err;

    if (typeof onReject === "function") {
      onReject(err);
      isCalled = true;
    }
  }

  this.then = function (thenHandler) {
    onResolve = thenHandler;

    if (isFulfilled && !isCalled) {
      onResolve(result);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (errorHandler) {
    onReject = errorHandler;

    if (isRejected && !isCalled) {
      onReject(reason);
      isCalled = true;
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

MyPromise.resolve = function (res) {
  return new MyPromise((resolve, reject) => {
    resolve(res);
  });
};

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
};

MyPromise.all = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let fulfilledCount = 0;

    if (promises.length === 0) {
      return resolve(results);
    }

    for (let i = 0; i < promises.length; ++i) {
      promises[i]
        .then((res) => {
          results[i] = res;
          ++fulfilledCount;

          if (fulfilledCount === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

MyPromise.allSettled = function (promises) {
  return new MyPromise((resolve, reject) => {
    const results = [];
    let totalCount = 0;

    if (promises.length === 0) {
      return resolve(results);
    }

    promises.forEach((promise, i) => {
      promise
        .then((res) => {
          results[i] = { status: "fulfilled", value: res };
          ++totalCount;

          if (totalCount === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          results[i] = { status: "rejected", reason: err };
          ++totalCount;
          if (totalCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

MyPromise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; ++i) {
      promises[i]
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    }
  });
};

MyPromise.any = function (promises) {
  return new Promise((resolve, reject) => {
    const rejectedPromises = [];
    let failedCount = 0;

    if (promises.length === 0) {
      reject(
        new AggregateError(rejectedPromises, "All Promises were rejected")
      );
    }
    for (let i = 0; i < promises.length; ++i) {
      promises[i]
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          ++failedCount;
          rejectedPromises[i] = err;
          if (failedCount === promises.length) {
            reject(
              new AggregateError(rejectedPromises, "All Promises were rejected")
            );
          }
        });
    }
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("first");
  }, 20);
  // resolve(44);
  // console.log("init");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("second");
  }, 10);
});

MyPromise.any([promise1, promise2])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
