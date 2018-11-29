/**
 * 
 * GetSum(1, 0) == 1 // 1 + 0 = 1
 GetSum(1, 2) == 3 // 1 + 2 = 3
 GetSum(0, 1) == 1 // 0 + 1 = 1
 GetSum(1, 1) == 1 // 1 Since both are same
 GetSum(-1, 0) == -1 // -1 + 0 = -1
 GetSum(-1, 2) == 2 // -1 + 0 + 1 + 2 = 2
 */
function GetSum(a, b) {
  //Good luck!
  
  if(a === b ) return a;
  let max = Math.max(a,b)
  let min = Math.min(a,b)
  let n = max - min + 1
  return n * min + (n) * (n - 1) / 2
}
 console.log(GetSum(1, 0) == 1 )// 1 + 0 = 1
 console.log(GetSum(1, 2) == 3 )// 1 + 2 = 3
 console.log(GetSum(0, -1) == -1) // 0 + 1 = 1
 console.log(GetSum(1, 1) == 1) // 1 Since both are same
 console.log(GetSum(-1, 0) == -1 )// -1 + 0 = -1
 console.log(GetSum(-1, 2) == 2) // -1 + 0 + 1 + 2 = 2