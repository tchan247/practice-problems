/** 
 * Convert a number to a simplified fraction string 
 * 
 * Example: toFraction(.4) -> '2/5'
 *
 * Example: toFraction(-1.5) -> '-3/2'
 *
*/

var toFraction = function(number) {
  var left, right, tens, gcd, den, num;
  var strArr = number.toString().split('.');
  
  // return integers
  if(strArr.length === 1) {
      return strArr[0];
  }
  
  left = Number(strArr[0]);  // get number left and right of decimal point
  right = Number(strArr[1]);
  tens = Math.pow(10, strArr[1].length);  // create a power of 10 number to make an unsimplified denominator
  gcd = right;
  
  // find greatest common denominator
  while (tens % gcd !== 0 || right % gcd !== 0 && gcd > 0) {
    gcd--;
  }
  
  den = tens/gcd;
  num = right/gcd;
  // handle numbers above 1 and do sign logic
  num = left >= 0 && strArr[0] !== '-0'?  (left * den) + num : (left * den) - num;

  return num + '/' + den;
};

