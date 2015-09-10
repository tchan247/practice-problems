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
  while (tens % gcd !== 0 || right % gcd !== 0 && gcd > 1) {
    gcd--;
  }
  
  den = tens/gcd;
  num = right/gcd;
  // handle numbers above 1 and do sign logic
  num = left >= 0 && strArr[0] !== '-0'?  (left * den) + num : (left * den) - num;

  return num + '/' + den;
};

// Time: O(n)
// Space: O(1)


/** 
 * Rotate an NxN matrix 90 degrees
 * 
 * Example:
 *
 * var matrix = 
 *  [[1,2],
 *   [3,4]];
 *
 * rotateMatrix(matrix) ->
 *  [[3,1]]  
 *   [4,2]];
 * 
 * Extra: 
 * - Make function able to rotate MxN rectangles
 * - Make function accept extra parameter: 1 for clockwise & -1 for counterclockwise
*/

var rotateMatrix = function(matrix, direction) {
 var newMatrix = [];
 var len1 = matrix.length;
 var i, j, dest, x, y, len2;
 
 // handle size 0 matrix
 if(len1 === 0) {
   return [];
 }
 
 len2 = matrix[0].length;
 
 // check for valid direction. default to 1 (clockwise)
 direction = direction === 1 || direction === -1? direction : 1;
 
 for(i = 0; i < len1; i++) {
   for(j = 0; j < len2; j++) {
     // create an object with indicies depending on direction
     dest = {
       '1': {x: j, y: len1 - i - 1},
       '-1': {x: len2 - j - 1, y: i}
     };
     
     x = dest[direction].x;
     y = dest[direction].y;
     
     // initialize array for index if not already there
     if(!Array.isArray(newMatrix[x])) {
       newMatrix[x] = [];
     }
     
     newMatrix[x][y] = matrix[i][j];
   }
 }
 
 return newMatrix;
};

// Time: O(mn)
// Space: O(mn)

