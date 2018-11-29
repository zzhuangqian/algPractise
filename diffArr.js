/**
 * Your goal in this kata is to implement a difference
 function, which subtracts one list from another and returns the result.
 * array_diff([1, 2], [1]) == [2]
 * 
 * array_diff([1, 2, 2, 2, 3], [2]) == [1, 3]
 */

 function array_diff1(a,b){
   if(a.length === 0 || b.length === 0) return []
   b.forEach(element => {
     a = a.filter(item =>{
       return item !== element
     })
   });
   console.log(a)

 }
 function array_diff2(a,b){
   return a.filter(item => {return !b.includes(item)})
 }

let arr1 = [3, 4]
 let arr2 =[3]

 console.log(array_diff2(arr1,arr2))