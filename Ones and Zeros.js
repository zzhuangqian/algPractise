/**
 * Given an array of one 's and zero'
 s convert the equivalent binary value to an integer.

 Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
 * 
 * Testing: [0, 0, 0, 1] == > 1
 Testing: [0, 0, 1, 0] == > 2
 Testing: [0, 1, 0, 1] == > 5
 Testing: [1, 0, 0, 1] == > 9
 Testing: [0, 0, 1, 0] == > 2
 Testing: [0, 1, 1, 0] == > 6
 Testing: [1, 1, 1, 1] == > 15
 Testing: [1, 0, 1, 1] == > 11
 */
const binaryArrayToNumber = arr => {
  let num = 0
  arr.forEach((item, index) => {
      num += item * Math.pow(2, arr.length-index-1)
  });
  console.log(num)
}

function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => a << 1 | b);
}
const binaryArrayToNumber = arr => {
  return parseInt(Number(arr.join('')), 2)
};
const binaryArrayToNumber = arr => {
  return arr.reduce((a, b) => (a << 1 | b), 0);
};
binaryArrayToNumber([0, 0, 0, 1])