/**

* Given any number, we can create a new number by adding the sums of squares of digits of that number.

 * For example, given 203, our new number is: (2*2) + (0*0) + (3*3) = 4 + 0 + 9 = 13.

*

 * If we repeat this process, we get a sequence of numbers:

* 203 -> 13 -> 10 -> 1 -> 1

*

 * Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.

*

 * Not all numbers are happy. If we started with 11, the sequence would be:

* 11 -> 2 -> 4 -> 16 -> ...

*

 * This sequence will never reach 1, and so the number 11 is called unhappy.

*

 * Given a positive whole number, you have to determine whether that number is happy or unhappy.

*

 * Write a function that takes a positive whole number (num) and returns a value for happy (true) or unhappy (false)

*

 * Examples:

*

 * Input: isHappy( 203 )

* Output: true

* 

 * Input: isHappy( 11 )

* Output: false

*

 * Input: isHappy( 107 )

107 => 50 => 25 => 4+25 => 29 => 81+4 => 85 => 25 + 64 => 89=> 81 + 64 => 145 => 42 => 20 => 4 => 16 37 58
* Output: true

*

 */

// 11 , 203
// * 203 -> 13 -> 10 -> 1 -> 1

// 11 -> 2 -> 4 -> 16 -> ...

function isHappy(num) {
  if (!Number.isInteger(num)) return "The number is invalid";
  if (num < 10) return "unhappy";
  let digits = num.toString().split("");
  let sum = 0;
  digits.forEach((digit) => {
    let d = parseInt(digit);
    sum += d * d;
  });
  if (sum === 1) return "happy";
  else {
    return isHappy(sum);
  }
}

// console.log(isHappy(203));
