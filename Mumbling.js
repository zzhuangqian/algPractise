/**
 * This time no story, no theory.The examples below show you how to write
 function
 * 
 * accum("abcd"); // "A-Bb-Ccc-Dddd"
 accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 accum("cwAt"); // "C-Ww-Aaa-Tttt"
 */

 let str = 'abcd'
 function accum(s) {
   let pattern = /\w/gm
  let matches = pattern.exec(s);
  console.log(matches)
 }
 accum(str)