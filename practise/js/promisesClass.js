// Promise Class Polyfill

class MyPromise {
  constructor(executor) {
    this.isFulfilled = false;
    this.isRejected = false;
    this.isCalled = false;
    this.onResolved = null;
    this.onRejected = null;
    this.result = null;
    this.reason = null;

    try {
      executor(this.__resolve, this.__reject);
      // throw "hello";
    } catch (error) {
      this.__reject(error);
    }
  }

  __resolve = (res) => {
    this.isFulfilled = true;
    this.result = res;

    if (typeof this.onResolved === "function") {
      this.onResolved(res);
      this.isCalled = true;
    }
  };

  __reject = (err) => {
    this.isRejected = true;
    this.reason = err;

    if (typeof this.onRejected === "function") {
      this.onRejected(err);
      this.isCalled = true;
    }
  };

  then = (thenHandler) => {
    this.onResolved = thenHandler;

    if (this.isFulfilled && !this.isCalled) {
      this.onResolved(this.result);
      this.isCalled = true;
    }
    return this;
  };

  catch = (errorHandler) => {
    this.onRejected = errorHandler;

    if (this.isRejected && !this.isCalled) {
      this.onRejected(this.reason);
      this.isCalled = true;
    }
    return this;
  };

  static resolve = (res) => {
    return new MyPromise((resolve, reject) => {
      resolve(res);
    });
  };

  static reject = (reason) => {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  };

  static all = (promises) => {
    return new MyPromise((resolve, reject) => {
      const results = [];
      let fulfilledCount = 0;

      if (promises.length === 0) {
        return resolve(results);
      }

      promises.forEach((promise, i) => {
        promise
          .then((res) => {
            results[i] = res;
            ++fulfilledCount;

            if (fulfilledCount === promises.length) {
              resolve(results);
            }
          })
          .catch((err) => reject(err));
      });
    });
  };
}

const promise1 = new MyPromise((resolve, reject) => {
  reject("first");
  // resolve(44);
  // console.log("init");
});

const promise2 = new MyPromise((resolve, reject) => {
  reject("second");
});

MyPromise.all([promise1, promise2])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// promise1.then((res) => console.log(res)).catch((err) => console.error(err));
