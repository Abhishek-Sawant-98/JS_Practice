/**

* Write a function that takes two dates as arguments (date1, date2) and returns the number of days between each date.

*

 * The function should be able to handle leap years.

*

 * Examples:

*

 * Input: getDays( new Date( "January 1, 2020" ), new Date( "January 5, 2020" ) )

* Output: 4

*

 * Input: getDays( new Date( "February 28, 2019" ), new Date( "March 1, 2019" ) )

* Output: 1

*

 * Input: getDays( new Date( "February 28, 2020" ), new Date( "March 1, 2020" ) )

* Output: 2

*

 */

function getDays(date1, date2) {
  if (!(date1 instanceof Date && date2 instanceof Date)) return "Invalid input";
  const diff = date2.getTime() - date1.getTime();
  const days = diff / (1000 * 60 * 60 * 24);
  return days;
}

console.log(getDays(new Date("January 1, 2020"), new Date("January 5, 2020")));
