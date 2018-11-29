### 1.2018年8月13日题目
观察下面的规律，写一个函数`accum`
```
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
```
写好后请在` 201808/2018年8月13日`目录 下面建一个 `姓名.md` 的文件,请注意代码一定要用反引号包裹一下。

### 2.2018年8月14日题目
写一个函数求数组的最大值和最小值
```
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```

```js
function highAndLow(numbers){ 
    numbers = numbers.split(' ‘)
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
 }
```

### 3. 2018年8月15日题目
写一个函数判断字符串中x的数量和o的数量是否相等（忽略大小写）：
```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // 没有x也没有o，所有相等，都为0
XO("zzoo") => false
```

```js
// 答案1
function XO(str) {
  str = str.toLowerCase().split('')
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length
}

// 答案2
function XO(str) {
    return (str.match(/x/ig) || []).length === (str.match(/o/ig) || []).length;
}
```

### 4.2018年8月16日题目
写一个函数判断一个数字是不是某个整数的平方。
```js
is_square (-1) # => false
is_square   0 # => true
is_square   3 # => false
is_square   4 # => true
is_square  25 # => true
is_square  26 # => false
```

```js
// 答案1
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0
}

// 答案2
function isSquare(n) {
  return Number.isInteger(Math.sqrt(n)
}

// 答案3
function isSquare(n){
  const s = Math.sqrt(n)
  return s === (s | 0)
  // return s === ( ~~s )
}
```

### 5. 2018年8月17日题目
写一个函数，将字符串除了最后的四位，其他都变成#
```js
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
```

```js
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}
```

### 6. 2018年8月18日题目
下面三角形的数列：

```
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```

写一个函数，给定行的序号，然后求和：

```
rowSumOddNumbers(1) // 1
rowSumOddNumbers(2) // 3+5=8
rowSumOddNumbers(3) // 7+9+11=27
rowSumOddNumbers(42) // 74088
```

```js
function rowSumOddNumbers(n) {
  return n*n*n
}
```

### 7. 2018年8月19日题目
将数字的每一位求平方，然后组合成新的数字（注意：请返回一个数字）

```
squareDigits(9119) // 811181
```

```js
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('')
}
```

### 8. 2018年8月20日题目
写一个函数`solution`，求比一个数字n小的所有3和5的整数倍数和。 

比如10，比它小的3、5整数倍数有： 3,5,6,9， 所以和为23。
比如16， 比它小的3，5整数倍数有： 3,5,6,9,10,12,15，所以和为60（15只计算1次）

示例
```
solution(10) // 23
solution(16) // 60
```
注意，如果输入负数，返回0

写好后请在201808/20180820目录 下面建一个 姓名.md 的文件,请注意代码一定要用反引号包裹一下。

```js
function solution(number){
  if(number < 0) return 0
  return [...Array(number).keys()]
    .filter(n => n % 3 === 0 || n % 5 === 0)
    .reduce((a, b) => a + b,0)
}

// 另一种方法，参考周末学的等差数列求和
function solution(n) {
  const n3  = Math.floor((n-1)/3)
  const n5  = Math.floor((n-1)/5)
  const n15 = Math.floor((n-1)/15)
  return (n3+1)*(n3*3)/2 + (n5+1)*(n5*5)/2 - (n15+1)*(n15*15)/2
}
```

### 9. 2018年8月21日题目
写一个二分查找函数`bsearch`，和之前学习的二分查找函数有一定的变化。

```
function bsearch(A, x) {
  /// TODO
}

```
A是一个已排序的数组，x是目标值。

1. 如果找到目标值，返回目标值在数组中的序号。 
2. 如果没有找到目标值，返回目标值应该被插入的位置


比如数组: A=3,5,7,13,22,25

```
bsearch(A,5) // 1
bsearch(A,13) // 3
bsearch(A,4) // 1
bsearch(-1) // 0
bsearch(-10000) // 0
bsearch(30) // 6
```

写好后请在201808/20180821目录 下面建一个 姓名.md 的文件,请注意代码一定要用反引号包裹一下。

```js
function bsearch(A, x){
  let l = 0,
      r = A.length - 1,
      guess
      
  while(l<=r) {
    guess = Math.floor( (l + r) / 2 )
    if(A[guess] === x) return guess
    if(A[guess] > x) {
      if(guess === 0 || A[guess - 1] < x) {
        return guess
      }
      r = guess - 1
    } else {
      if(guess === A.length - 1 || A[guess + 1] > x) {
        return guess + 1
      }
      l = guess + 1
    }
  }
}
```
### 10. 2018年8月22日题目

在一个数组中大部分都是奇数(或偶数），只有1个可能是偶数（或奇数），写一个函数`special`找到这个不一样的值。

``` 
special( [2, 4, 0, 100, 4, 11, 2602, 36] ) // 11 唯一的奇数

special( [160, 3, 1719, 19, 11, 13, -21] ) // 160 唯一的偶数
```


答案:

```
function special(A){
  var evens = A.filter(a=>a%2==0)
  var odds = A.filter(a=>a%2!==0)
  return evens.length==1? evens[0] : odds[0]
}
```
### 11. 2018年8月23日

写一个函数`reverse`反转一个数组A

要求：

- **不可以使用Array.reverse**
- **请不要创建新数组**

答案

```javascript

function reverse(A){
  for(let i = 0; i < (A.length / 2); i++){
    const t = A[i]
    A[i] = A[A.length - i - 1]
    A[A.length - i - 1] = t
  }
}


```

### 12. 2018年8月24日题目

定义数组的旋转操作`rotate(A, amount)`，让数尾部amount个元素移动到头部。

例如数组: A=[1,2,3,4,5,6,7]

```js
rotate(A, 1) // [7,1,2,3,4,5,6]
rotate(A, 2) // [6,7,1,2,3,4,5]
rotate(A, 3) // [5,6,7,1,2,3,4]
// 以此类推
```

答案:

```js
function reverse(A, start, end){
  for(let i = 0; i < (end - start + 1) / 2; i++) {
    const t = A[start + i]
    A[start + i] = A[end - i]
    A[end-i] = t
  }
}

function rotate(A, amount){
  reverse(A, 0, A.length - 1)
  reverse(A, 0, amount - 1)
  reverse(A, amount, A.length - 1)
}
```
### 13. 2018年8月25日题目

请实现一个递归版本的reverse函数，反转一个数组。

答案:

```js
function reverse(A){
  return A.length  ? 
    reverse( A.slice(1) ).concat(A[0]) : A
}

function reverse(A){
  const [f, ...tail] = A
  return [...(tail.length ? reverse(tail) : []), f]
}

// 尾递归
function reverse(A, i = 0){
  if(i < A.length / 2) {
    const t = A[i]
    A[i] = A[A.length - i - 1]
    A[A.length - i - 1] = t
    return reverse(A, i+1)
  }
}
```
### 14. 2018年8月26日题目
 
插入排序的子过程会向一个有序数组中插入一个元素，请 利用训练9中写的bsearch方法，对这个过程进行优化：

直接利用bsearch找到需要插入元素的位置，然后执行插入

然后回答问题:

请给出变化后的插入排序代码？
请说明这种变化后，请支持新插入排序的算法复杂度？
请说明这样是变快还是变慢了？
答案：

经过优化插入排序的复杂度仍然是O(n^2)，常数执行时间也几乎没有变化（其实省略了一次比较）但太微乎其微。因此，这个优化没有意义。
```
function insert(A, i, x) {
  let idx = bsearch(A,i,x)
  let p = i - 1
  while(p >= idx) {
    A[p+1] = A[p]
    p--
  }
  A[p + 1] = x
}
function insertion_sort(A){
  for(let i = 1; i < A.length; i++) {
    insert(A, i, A[i])
  }
}
function bsearch(A, i, x){
  let l = 0,
      r = i-1,
      guess

  while(l<=r) {
    guess = Math.floor( (l + r) / 2 )
    if(A[guess] === x) return guess
    if(A[guess] > x) {
      if(guess === 0 || A[guess - 1] < x) {
        return guess
      }
      r = guess - 1
    } else {
      if(guess === i-1 || A[guess + 1] > x) {
        return guess + 1
      }
      l = guess + 1
    }
  }
}
```
### 15. 2018年8月27日题目
写一个函数`flat`展平一个数组

```
flat([1,[2,'a',[5,6]],8]) // [1,2,'a',5,6,8]
```

答案

```

function flat(arr){
  return [].concat(...arr.map(x => Array.isArray(x) ? flat(x) : x))
}

```

### 16. 2018年8月28日题目
素数是（不包括1）只能被自己1整除的数字，比如2、3、5、7、11、13……都是素数，写一个函数`is_prime`验证一个数字是否是素数。

```
is_prime(1) // false
is_prime(100) // false
is_prime(13) // true
is_prime(179426549) // true
is_prime(22801763489) // true
```

答案
``` 
const is_prime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}
```
### 17. 2018年8月29日题目
柯里化函数curry是这样一个函数，它将一个接受多参数的函数，转换成为接收连续单参数的高阶函数（可以被连续调用）。

例如：
```
function _add(a, b, c, d){
  return a + b + c + d
}

const add = curry(add)

console.log( add(1) ) // 函数
console.log( add(1)(2) ) // 函数
console.log( add(1)(2)(3) ) // 函数
console.log ( add(1)(2)(3)(4) ) // 10
```
再比如:
```
const pow = curry(Math.pow)

pow(10)(2) // 100
```
答案:
```
const curry = func => {
  const g = (...allArgs) => allArgs.length >= func.length ?
    func(...allArgs) : (...args) => g(...allArgs, ...args)
  return g
}
```

### 18. 2018年8月30日题目

写一个函数floor_power_of2，求比x小的最大二的整数次幂。

例如
```
floor_power_of2(64) // 64
floor_power_of2(63) // 32
floor_power_of2(33) // 32
floor_power_of2(32) // 32
答案:

function floor_power_of2(x){
  x = x | (x >> 1)
  x = x | (x >> 2)
  x = x | (x >> 4)
  x = x | (x >> 8)
  x = x | (x >> 16)
  x = x | (x >> 32)
  return x - (x >> 1)
}
```
参考:

算法是要取x最高位，最左边的二进制位。
x | (x >> 1)相当于将所有1位置复制到它下一个位置：
0b101010 | (0b101010 >> 1 // 0b111111

可以通过仔细分析x=0b101010和x=0b100000去理解这个算法，最终在return之前算法会得到0b11111……的二进制数

答案2：
```
function floor_power_of2(x) {
  return 1 << Math.floor( Math.log2(x) )
}
```
// 目前的大部分PC答案2更快。 因为CPU支持log等数学指令。 

### 19. 2018年8月31日题目
写一个函数`peak`寻找一个数组的峰值位置。 比如数组: 1,3,5,7,4,2有峰值7；已排序数组1,2,3,4,5,6，有峰值6。有的数组有多个峰值，这里只需要返回任何一个。比如数组[1,2,3,2,7,6]有两个峰值3和7。

如果一个元素左右元素都相同，那么这个元素就是峰值，比如数组1,1,1,1，每个元素都是峰值。

例如
```
peak([1,2,3,4,5,6])  // 5(6所在的位置）
peak([1,3,5,7,4,2]) // 3（7所在的位置）
peak([1,2,3,2,7,6]) // 2(3所在的位置)
peak([1,1,1,1,1,1]) // 任何一个都是峰值
```

如果有多个峰值，只要随便返回一个就可以，不需要考虑顺序。 



答案:

参考二分查找，如果一次猜测不是峰值，那么分成两种情况：

1. 左边数字大于猜测，那么左边一定存在峰值
2. 右边数字大于猜测，那么右边一定存在峰值
```

function is_peak(A, g) {
  return ( g === 0 || A[g] >= A[g-1] )
    && (g === A.length - 1 || A[g] >= A[g+1])
}
function peak(A) {
  let l = 0,
      r = A.length - 1,
      guess

  while(l <= r) {
    const guess = Math.floor( (l+r) / 2)
    if(is_peak(A, guess)) {
      return guess
    }

    if(A[guess] < A[guess - 1]) {
      r = guess - 1
    }
    else if(A[guess] < A[guess + 1]) {
      l = guess + 1
    }
  }
}

//尾递归版
function peak(A, l = 0, r = A.length -1) {
  if(l <= r) {
    const guess = Math.floor((l + r) / 2)
    if(is_peak(A, guess)) {
      return guess
    }
    if ( A[guess] < A[guess - 1]  ){
      return peak(A, l, guess - 1)
    }
    else if ( A[guess] < A[guess + 1]) {
      return peak(A, guess + 1, r)
    }
  }
}
```

以上复杂度O(lgn)

### 20. 2018年9月1日题目

一个数组中有0,1,2三种数字，写一个针对这个数组的排序算法。 

比如A=[0,1,2,0,1,1,2,1,1]排序完结果是[0,0,1,1,1,1,1,2,2]

要求：
1. 尽可能节省内存空间
2. 尽可能快

其他：

请按照下述步骤，最后给出自己算法在本地执行的时间：
1. 生成1亿个0-2之间的随机数字
2. 对他们进行排序
3. 统计排序的时间（不包括生成数字的时间），以毫秒计算。 
4. 在`作业`最后标注一下自己的执行时间

答案:
```

function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]]
}

function sort(A){
  let lo = 0,  
      mid = 0,
      hi = A.length - 1
      
  while(mid <= hi) {
    switch(A[mid]) {
      case 0 : 
        swap(A, lo++, mid++)
        break
       case 1:
        mid++
        break
       case 2:
        swap(A, mid, hi--)
        break
        
    }
    
    // 循环不变式
    // lo : [0, lo) 是0
    // hi : [hi+1, n) 是2
    // [lo, mid) 是 1
    // [mid, hi) 未排序
  }
}

```

// 答案在2016 mac i7上的执行时间1718.283533ms
### 21. 2018年9月2日题目

写一个函数bit_count返回一个数字中所有二进制位的和。 比如说1234的二进制表示是10011010010，总共有5个1，那么和是5。

答案:
```
function bit_count(n){
  let c = 0
  while(n >>= 1) {  
    c+=n&1
  }
  return c
}
```

### 22. 2018年9月3日题目
 封装一个函数`sequence`对一个无限序列求值。函数接收一个lambda表达式代表一个无限序列，然后提供两个操作`take`和`takeWhile`。
 
 
 例如：
 ```
 sequence( n => n * n ).take(5) // [0, 1, 4, 9, 16]
 sequence( n => n * 4 ).takeWhile( n => n < 20 ) // [0, 4, 8, 12, 16]
 ```
 
 答案：
 
 ```
 function sequence(fun) {
  return {
    take: (k) => {
      return Array(k).fill(0).map((x, i) => fun(i))
    },
    takeWhile(cond) {
      let i = 0, r = null
      let arr = []
      while(true) {
        r = fun(i++)
        if(cond(r)) { arr.push(r) }
        return arr
        } else {
          return arr
        }
      } 
    }
  }
}
```
### 23. 2018年9月4日题目
写一个函数`find_missing(A, low, high)`，给定一个范围[low,high]，寻找一个数组中缺失的元素。

```
find_missing([10, 12, 11, 15], 10, 15) // [13,14]
// 注: low=10 high = 15

find_missing([1, 14, 11, 51, 15],50, 55) // [50, 52, 53, 54]
// 注：low = 50, hight = 55
```

答案:

本题考查对算法复杂度的理解，简单两次循环或者filter/map等等嵌套循环，可以在O( (high -low) * A.length )复杂度完成，但是通过排序可以优化到O(nlgn)+O(high - low)。

``` javascript
function find_missing(A, low, high){
  const B = A.filter(x => x >= low && x < high).sort((x,y) => x - y)
  let j = 0
  return [...Array(high - low )]
    .map((_, i) => i+low)
    .filter(x => B[j] !== x ? true : !!!++j) 
}
```
### 24. 2018年9月5日题目
Codewars上面的一道最短代码训练，要求代码长度不能超过**120**个字符，可以去`https://www.codewars.com/kata/shortest-code-father-and-son`提交。


给定一个字符串，例如'AabBc'，其中大小写如果不能配对，就删除这个字符。 比如`AabBc`中缺少c的大写，就删除c，返回`AaBb`

例如:
```sc("Aab")``` 返回 ```"Aa"```

```sc("AabBc")``` 返回 ```"AabB"```

```sc("AaaaAaab")``` 返回 ```"AaaaAaa"```

```sc("aAAAaAAb")``` 返回 ```"aAAAaAA"```



答案

练习缩短代码长度，提高写代码的速度。
``` 
function sc(s){
  return [...s].filter(c=>s.includes(c.toUpperCase())&&s.includes(c.toLowerCase())).join('')
}
```

### 25.2018年9月6日题目

有同学去普华永道，面试官给了这样一道面试题：写一个函数`traverse(A)`螺旋状遍历一个二维数组。 比如 

```
// 遍历3*3
traverse([1,2,3,4,5,6,7,8,9], 3) // [1,2,3,6,9,8,7,4,5])

// 遍历4*4
traverse([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4)
// [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

```


答案:

面试题目考查对复杂问题的思考、分解抽象的能力。作为习题，主要是锻炼编程能力。自己写完会有收获。 

```
function xy(i, N){
  return [Math.floor(i / N), i % N]
}
function d(x, y, N){
  return Math.min(x, y, N - x - 1, N - y - 1)
}
function k(x, y,  N){
  return x <= y ? x + y : 4*N - (x + y)
}

function traverse(A, N) {
  return A.map((x, i) => [x, ...xy(i, N)])
    .sort(([v1, x1, y1], [v2,x2,y2]) => {
      const d1 = d(x1, y1, N)
      const d2 = d(x2, y2, N)
      const k1 = k(x1, y1, N)
      const k2 = k(x2, y2, N)

      return d1 - d2 || k1 - k2
    })
    .map(t => t[0])
}
```

答案2
```

function next(t, p, N) {
  return [x => x % N === N - 1 ? -1 : x + 1, x => x + N, x => x % N === 0 ? -1 : x - 1, x => x - N][t % 4](p)
}

function traverse(A, N) {
  const B = Array(N * N).fill(false)

  let
    i = 0, // 已遍历的个数
    p = 0, // 遍历的节点序号
    t = 0, // 方向
    r = [] // 结果
  while (i < A.length) {
    r[i++] = A[p]
    B[p] = true
    let np = next(t, p, N)
    if (B[np] === undefined || B[np] === true) {
      np = next(++t, p, N)
    }
    p = np
  }
  return r
}
```
### 26.2018年9月7日题目
一个组已经几乎被排序好了，除了部分数字外。 写一个排序算法对他们进行排序。 

```
function sort(A) {

}
```

答案：
题目可以使用插入排序解决。 插入排序在几乎被排序好的情况下，复杂度可以达到O(n)。


### 27.2018年9月8日题目
写一个函数`sort`按照元素出现的频率排序一个数组。如果数字出现频率一样，那么从小到大排序。

例如：
```
sort([1,2,3,1,1,0,5,5,5,5,7]) // [5,5,5,5,1,1,1,0,2,3,7]

```

答案：
今天题目考察多维度排序的运用
```
function sort(A) {
  const freq = {}
  A.forEach(x => freq[x] === undefined 
      ? freq[x] = 1 : freq[x]++)
  return A.sort((a, b) => freq[b]-freq[a] || a - b)
}

```
### 28.2018年9月9日题目

某AI创业公司前端团队面试题，写一个函数`sort`，对一个只有字符的数组进行排序，比如说`['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd']` 

要求： 
1. 大写在前，小写在后
2. 大小写字母之间的顺序不能改变，比如AaBbCcDd排序后应该是ABCDabcd。
3. 不能使用额外空间。 


答案：

本题考查对排序算法的理解和运用。由于不能更改元素本来的的位置，只有冒泡排序一种选择。 

虽然基于比较的排序，复杂度可以到O(nlgn)，但是在限制空间，限制稳定性的情况下，还是O(n^2)
``` 
function swap(A, i, j){
  [A[i],A[j]] = [A[j], A[i]]
}
function bubble_sort(A, compareFunc) {
  for(let i = A.length - 1; i >= 1; i--) {
    for(let j = 0; j < i; j++) {
      if(compareFunc(A[j], A[j+1]) > 0){
        swap(A, j, j + 1)
      }
    }
  }
}
function sort(A) {
  bubble_sort(A, (a, b) => {
    return (a === a.toUpperCase() ? 0 : 1)
      - (b === b.toUpperCase() ? 0 : 1)
  })
}
```
### 29.2018年9月10日题目
（非程序题）一个人在河边，带着1匹狼、一只羊、一颗卷心菜。 他需要用船将这三只生物送到对岸。因为空间有限，它一次只能携带一个生物。若他不在场看管的话，狼就会吃了羊，羊会吃卷心菜。
此人如何才能把他们都送到对岸？


答案：

其中一种答案：
1. 将羊运过河，自己回来
2. 将狼运过河，带羊回来
3. 将卷心菜运过河，自己回来
4. 将羊运过河


 **学习「计数排序」一节，写一个函数`sort`，将计数排序改写成一个可以用来排序字符串算法，忽略大小写。

### 30.2018年9月11日题目
```
sort('javascript') // aacijprstv
sort('dbca') // abcd
```

提示： 见tips.md 


答案：

自己实现一遍计数排序，排序虽然简单，但是写出来并不容易。 
```
function counting_sort(str){
  const A = [...str].map(c => c.toLowerCase().charCodeAt(0))
  const max = Math.max(...A)
  // 累计数组
  const B = Array(max + 1).fill(0)
  // 结果数组
  const C = Array(A.length)
  // 累计位递增
  A.forEach((_, i) => B[A[i]]++)
  // 累计求和
  for(let i = 1; i < B.length; i++) {
    B[i] = B[i-1] + B[i]
  }
  // 结果取出
  for(let i = 0; i < A.length; i++) {
    const p = B[A[i]] - 1 // 回写位置
    B[A[i]] -- // 新回写位置
    C[p] = str[i] // 回写结果
  }
  return C.join('')
}
```

### 31.2018年9月12日题目
写一个函数`maxk(A, k)`找到一个数组中最大的k个数字。 如：

```
maxk([3,5,8,2,1,6],2) // 8, 6 或者 6,8 （结果不要求顺序)
maxk([3,5,8,2,1,6],3) // 8,6,5
```

提示： 见tips.md

方案1，虽然简单，但是速度较慢 O(nlgn)
```
function maxk(A, k) {
  return A.sort( (a, b) => b - a ).slice(0, k)
}
```

方案2： 利用快速排序的性质，k较小时O(n)

利用快速排序的方法，利用中心点将数组分段的性质，不断缩小范围。 

经过一次partition， 数组拆被拆分成3段，中心位置为r:

1. k = hi - r ，那么刚刚好位置r向右就是最大的k个值
2. k < hi - r , 那么r向右包含最大的k个值，可以缩小查找范围
3. k > hi - r , r向右的值不足k个，需要补充， 那么递归查找将 k-> k - (hi - r)， hi = r

```
function swap(A, i, j){
  [A[i],A[j]] = [A[j], A[i]]
}
function partition(A, lo, hi) {
  const pivot = A[hi - 1]
  let i = lo, j = hi - 1
  while(i !== j) {
    A[i] <= pivot ? i++ : swap(A, i, --j)
  }
  swap(A, j, hi-1)
  return j
}

function maxk(A, k, lo = 0, hi = A.length) {
  if (k > 0 && hi - lo > 0) {
    const r = partition(A, lo, hi)
    if (k === hi - r) { // 最右边k个元素是最大值
      return A.slice(r)
    }
    else if (k > hi - r) { // 右边的元素个数不足k个，需要从左边补充 k - (hi - r - 1)个
      return maxk(A, k - (hi - r), lo, r)
    }
    else { // 右边元素大于k个，缩小范围
      return maxk(A, k, r + 1, hi)
    }

  }
  return null
}


```

其他方法：
1. 利用冒泡排序，k较大时O(n^2)
2. 利用堆（Heap)这个还没有讲到，k较小时O(n) 


### 32.2018年9月13日题目

学习radix sort实现一个字典序排序单词的算法，忽略大小写。

```
sort(['god', 'apple', 'alice', 'bob', 'boy', 'google']) // alice, apple, bob, boy, god, google
```

提示：见tips.md


答案： 

看看你对radix sort是不是真的理解了。 
```
function radix_sort(A){
  const maxLength = Math.max(...A.map(word => word.length))
  
  // 27个桶
  // 第0个桶对应空字符串
  // 1-27对应 字母A-Z
  const buckets = Array.from({ length: 27 }, () => [])
  // 有效数位

  for(let i = maxLength - 1; i >= 0; i--) {
    // 将单词放入桶中
    A.forEach( word => {
      const index = word[i] ? word[i].toUpperCase().charCodeAt(0) - 65 : 0
      buckets[index].push(word)
    })
    console.log(buckets.map(x => [...x]))
    // 从桶中取出元素
    let j = 0
    buckets.forEach(bucket => {
      while(bucket.length > 0) {
        A[j++] = bucket.shift()
      }
    })
  }
  return A
}
```
### 33.2018年9月14日题目

参考递归第一节，设计一个程序`solve_hanoi_tower(disks, from, to, use)`，打印汉诺塔的移动步骤， 比如移动3个：

```
solve_hanoi_tower(['i', 'j', 'k'],'A', 'B', 'C')
// i,j,k代表碟子，k最小，i最大
// A,B,C是三个位置
```

输出：
```
k A->B
j A->C
k B->C
i A->B
k C->A
j C->B
k A->B
```

答案：
练习在递归中生成结果。
```
function moveTower(disks, k,  n, from, to, use) {
  if(n === 1) {
    console.log(`${disks[k]} ${from}->${to}`)
    return
  }
  moveTower(disks, k + 1, n - 1, from ,use, to)
  console.log(`${disks[k]} ${from}->${to}`)
  moveTower(disks, k + 1, n - 1, use , to, from)
}

function solve_hanoi_tower(disks, from, to, use) {
  moveTower(disks, 0, disks.length, from, to, use)
}
```
### 34.2018年9月15日题目

观看「递归和穷举」一节，给定一个字符串，写一个全排列函数 `permutationn(str,...)`。后面参数可以自行设计。 

```
permutation('abc') // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
```

答案：
```
function permutation1(str, select = []) {
  if(select.length === str.length) {
    return select.map(i=>str[i]).join('')
  }

  let r = []
  for(let i = 0; i < str.length; i++) {
    if(select.indexOf(i) === -1) {
      r = r.concat( permutation1(str, select.concat(i)) )
    }
  }
  return r 
}

function permutation2(str, select = [], left = [...str]) {
  if(left.length === 0) {
    return select.join('') 
  }

  return [].concat( ...left.map( (c, i) => permutation2(
    str,
    select.concat(c),
    left.slice(0, i).concat(left.slice(i+1))
  )))
}
```

输入字符串字符不重复。 

### 35.2018年9月16日题目

分析下面两个求全排列的函数：

```
function permutation1(str, select = []) {
  if(select.length === str.length) {
    return select.map(i=>str[i]).join('')
  }

  let r = []
  for(let i = 0; i < str.length; i++) {
    if(select.indexOf(i) === -1) {
      r = r.concat( permutation1(str, select.concat(i)) )
    }
  }
  return r 
}

function permutation2(str, select = [], left = [...str]) {
  if(left.length === 0) {
    return select.join('') 
  }

  return [].concat( ...left.map( (c, i) => permutation2(
    str,
    select.concat(c),
    left.slice(0, i).concat(left.slice(i+1))
  )))
}
```

测试两个函数在输入规模在字符串长度=11和12情况下的执行时间。 说出两个函数的时间复杂度，谁更快？ 为什么？ 


答案：
两个程序复杂度相同，都是O(n!)。

`permutationn1`每次递归，需要嵌套遍历两次字符串；`permutation2`只需要遍历剩余集合1次。 permutation2比permutation1常数时间少很多，因此速度快很多。 

### 36.2018年9月17日题目

写一个递归函数`sum_of_zero(S)`，求整数集合S中和为0的子集个数（不包括空集）。 集合S中可以有整数，也可以有负数。 

```
sum_of_zero([1, -2, 2]) // 1
sum_of_zero([1, -1, 3, -2, 2]) // 4
sum_of_zero([1, -1, 3, -2, 2, 5, 3, 1, 2]) // 11
```

提示： 见tips.md

答案：
```
这是一个NP完全的问题，没有更好的解决方案，只能穷举。 因为需要去掉空集，所以内部函数_sum_of_zero_r计算完成之后需要减1.
function sum_of_zero(S) {

  function _sum_of_zero_r(S, decisions = []) {
    if (S.length === decisions.length) {
      const sum = decisions.reduce((a, b, i) => (b ? S[i] : 0) + a)
      return sum === 0 ? 1 : 0
    }

    let s = 0
    s += _sum_of_zero_r(S, decisions.concat(true))
    s += _sum_of_zero_r(S, decisions.concat(false))
    return s
  }
  return _sum_of_zero_r(S, []) - 1 
}

```
### 37.2018年9月18日题目
写一个递归函数`reverse`，反转一个链表。链表是由next和value构成的一个结构体链，next指向下一个节点，value是节点中存储的值。

链表节点结构示例：
```
class Node {
  constructor(v){
    this.next = null
    this.value = v
  }
}
```

例如:
```
// 构造一个链表
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
a.next=b
b.next=c
c.next=d

// 执行reverse函数
reverse(a) 

console.log( d.next.value ) // c
console.log( c.next.value ) // b
console.log( b.next.value ) // a


提示： 见tips.md

```

答案:

``` 
function reverse(node) {
  if(node.next) {
    reverse(node.next)
    node.next.next = node
    node.next = null
  }
}
```

### 38.2018年9月19日题目
写一个函数`is_combination`判断字符串s是不是由字符串p1,p2组成。 例如:


`googlechrome`可以由`ggrome`和`oolech`组成。

```
//例如
//s : googlechrome
//p1: g  g    rome
//p2:  oo lech
 
is_combination('googlechrome', 'ggrome', 'oolech') // true
```

要求，p1,p2组成s后所有字符的顺序仍然保持不变。

tips : 见tips.md
答案:

```
function is_combination(s, p1, p2) {
  return !s ? !(p1 || p2) :
    s[0] == p1[0] && is_combination(s.slice(1), p1.slice(1), p2) ||
    s[0] == p2[0] && is_combination(s.slice(1), p1, p2.slice(1))
}
```


### 39.2018年9月20日题目
(今日头条面试题简版）写一个函数`sum_subset(S,N)`：一个集合S里面都是正整数，求和为N的所有非空子集。 

比如{1,3,8,5,2} N=10 那么有{8, 2}, {3,5,2}

tips：见tips.md



答案：

下面这个答案利用了递归的性质，具体可以参考tips。

``` javascript
function sum_subset(S,N, path = []) {
  const head = S.slice(0, S.length - 1)
  const tail = S[S.length - 1]
  if(N === 0) {
    return [path]
  }
  if(head.length === 0) {
    return []
  }
  let r = []
  r = r.concat( sum_subset(head, N, path) )
  r = r.concat( sum_subset(head, N-tail, path.concat(tail)) )
  return r
}
```

另一种方法(暂时不需要会)

这个方法提供给目前需要去今日头条面试的同学。下面这种解法叫做动态规划，本质上和上面的解法类似。但是超出了递归知识的范围，提供给有能力学习的同学。 如果发现太难可以跳过去，后面会有专门讲动态规划的课程。 

上述递归方法有一个问题，就是sum_subset中间其实有若干可以复用的更小的步骤，但是被重复计算了。因此，可以构造一种不基于递归的方法。

设置一个二维数组 dp[i][j]代表S中前i项中存在和为j的子集的可能性，可能为1，不可能为1。

那么对于{1,3,8,5,2} N=10 ，会形成这样一个表格（左边表头代表i，上边表头代表j)

第一步：初始化
如下图：和为0的时候，总是存在子集（空集）和为0，因此dp[i][0] = 1
```
   0  1  2  3  4  5  6  7  8  9  10
0  1  0  0  0  0  0  0  0  0  0   0
1  1  
2  1 
3  1
4  1
5  1
```

第二步：继续填表

- 对于任意d[i][j]，如果j<S[i-1]，那么说明S[i]不影响最终结果，那么dp[i][j] = dp[i-1][j]
- 如果j >= S[i-1]，分成两种情况(两种情况成立任意一种，那么dp[i][j] = 1
  1. 解包含S[i] -> dp[i][j] = dp[i-1][j-S[i-1]]
  2. 解不包含S[i] -> d[i][j] = dp[i-1][j]

按照上述逻辑从第二行开始填表，直到结束（左边多增加了一列，是集合的数字，这样看起来比较方便）

```
      0  1  2  3  4  5  6  7  8  9  10
   0  1  0  0  0  0  0  0  0  0  0  0
1  1  1  1  0  0  0  0  0  0  0  0  0
3  2  1  1  0  1  1  0  0  0  0  0  0
8  3  1  1  0  1  1  0  0  0  1  1  0 
5  4  1  1  0  1  1  1  1  0  1  1  0
2  5  1  1  1  1  1  1  1  1  1  1  1 
```


第三步：构造递归解

- 第10列第5行有个1，那么2在结果集合中，记为{2}
- 第8列第3、4行各有1个1，那么{2,8}和{2,5}在结果集合中。 
- {2,8}和为10，不需要再递归。 {2,5}需要继续递归。 
- 第3行有4个1，但是只有3和{2,5}合并和为10，其他都不满足条件。 


```

function sum_subset_dp(S, N) {
  const dp = Array.from({length : S.length + 1}, () => Array(N+1).fill(0) )
  for(let i = 0; i < S.length + 1; i++ ){
    dp[i][0] = 1
  }

  for(let i = 1; i < S.length + 1; i++) {
    for(let j = 1; j < N + 1; j++) {
      if( j >= S[i-1] )  {
        dp[i][j] = dp[i-1][j] || dp[i-1][j - S[i-1]]
      }else {
        dp[i][j] = dp[i-1][j]
      }
    }
  }
  return dp
}


function read_result_recursive(S, N, dp, path = []) {
  if( N === 0) { return [path] }
  if(N < 0) { return [] }

  let r = []
  for(let i = 1; i < S.length + 1; i++) {
    if( dp[i][N] && path.indexOf(S[i-1]) === -1 ) {
      r = r.concat( read_result_recursive(S, N-S[i-1], dp, path.concat(S[i-1])) )
    }
  }
  return r

}

const S = [1,3,8,5,2]
const N = 10
const dp = sum_subset_dp(S, N)
console.log( read_result_recursive(S, N, dp) )
```
### 40.2018年9月21日题目

（包括阿里面试原题）写一个程序`clone`深度拷贝一个javascript对象。 

要求：
1. 支持对象拷贝
2. 支持函数成员拷贝
3. 支持数组拷贝
4. 支持日期对象拷贝
5. 支持Momemnt等地方库对象拷贝


答案：

```
function clone(obj)
{
  if(obj == null || typeof obj !== 'object') return obj

  let newObj = null

  // 时间对象有特殊性
  if(obj.constructor === Date){
    newObj = new obj.constructor(obj)
  } else {
    // 兼容Moments等库
    if(obj.clone) {return obj.clone() }
    newObj = new obj.constructor()
  }

  for(let key in Object.getOwnPropertyDescriptors(obj)){
    newObj[key] = clone( obj[key] )
  }
  return newObj
}

```

### 41.2018年9月22日题目
阅读递归树绘制一节，使用canvas绘制递归树。 按照自己喜欢的风格着色。 


答案

```
const canvas = document.querySelector('canvas') 
const ctx = canvas.getContext('2d')

const screenWidth = document.documentElement.clientWidth
const screenHeight = document.documentElement.clientHeight

canvas.width = screenWidth * 2
canvas.height = screenHeight * 2

function color(level) {
  const x = level * 10
  return '#'+x.toString('16') + x.toString('16') + x.toString('16')
}

function tree_plot(p, a, w, h, L) {
  if(L > 10) {return}
  const [x, y] = p 

  // 绘制一个枝干
  ctx.translate(x, y)
  ctx.rotate(a * Math.PI / 180)
  ctx.moveTo(- w/2, 0)
  ctx.lineTo(-w*0.65 / 2, - h)
  ctx.lineTo(w * 0.65/ 2, - h)
  ctx.lineTo( w / 2, 0)
  ctx.strokeStyle = color(L)
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.fill()

  const nextX = x + h * Math.sin(a * Math.PI / 180) 
  const nextY = y - h * Math.cos(a * Math.PI / 180) 
  tree_plot([nextX, nextY], a + 15, w * 0.65, h * 0.9, L + 1)
  tree_plot([nextX, nextY], a - 15, w * 0.65, h * 0.9, L + 1)
}



// 利用generator实现一步一步显示
// function * tree_plot_gen(p, a, w, h, L) {
//   if(L > 6) {return}
//   const [x, y] = p 



//   const nextX = x + h * Math.sin(a * Math.PI / 180) 
//   const nextY = y - h * Math.cos(a * Math.PI / 180) 
//   yield * tree_plot_gen([nextX, nextY], a - 15, w * 0.65, h * 0.9, L + 1)
//   // 绘制一个枝干
//   ctx.translate(x, y)
//   ctx.rotate(a * Math.PI / 180)
//   ctx.moveTo(- w / 2, 0)
//   ctx.lineTo(-w * 0.65 / 2, - h)
//   ctx.lineTo(w * 0.65 / 2, - h)
//   ctx.lineTo(w / 2, 0)
//   ctx.strokeStyle = color(L)
//   ctx.setTransform(1, 0, 0, 1, 0, 0)
//   ctx.fill()
//   yield true
//   yield * tree_plot_gen([nextX, nextY], a + 15, w * 0.65, h * 0.9, L + 1)


// }


tree_plot([screenWidth, 2*screenHeight - 200], 0, 30, 150, 0)
// const it = tree_plot_gen([screenWidth, 2*screenHeight - 200], 0, 30, 150, 0)


// 按键一步一步显示
// document.addEventListener('keyup', (e) => {
//   if(e.keyCode === 39) {
//     it.next()
//   }
// })
```
### 42.2018年9月23日题目

一个人爬一个n级楼梯，他可以一次迈1步，也可以1次迈两步，也可以一次迈三步，……也可以一次迈n步。 写一个函数`steps(n)`，求这个人一共有多少种走法？


答案：

题目选自《剑指Offer》

利用递归关系
```
function steps(n) {
 if(n === 0) return 1
 let sum = 0
 for(let i = 0; i < n; i++){
   sum += steps(i)
 }
 return sum
}
```

```
function steps(n){
  if(n === 0) {return 1}
  return [...Array(n)].map((_, i) => i).reduce( (s, i) => {
    return steps(i) + s
  }, 0)
}
```

由递归关系（自上而下），找到递推关系（自下而上），避免重复计算（也就是动态规划）
```
function steps(n){
  const s = [1, 1]
  for(let i = 2; i <= n; i++){
    s[i] = s.reduce((a, b) => a + b )
  }
  return s.pop()
}
```

发现数学关系，然后直接求解

```
function steps(n){
  return 1 << (n-1)
}
```
### 43.2018年9月25日题目
写一个程序`is_additive(s)`，判断一个字符串是不是加和序列。 如果一个字符串是一个*加和序列*，那么字符串可以被拆分成为这样一个序列，序列的相邻两项和等于下一项。

```
输入 : s = “235813”
输出 : true
2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13

输入 : s = “199100199”
输出 : true
1 + 99 = 100, 99 + 100 = 199

输入 : s = “12345678”
输出 : false
```

答案：
还是决策树模型，p代表决策，p中每一项都是从左侧选中的数字。 
```
function is_additive(s, p = []) {
  if(s.length === 0) {
    return p.length >= 3
  }

  // 递归体循环递归每种取字符的情况
  for(let i = 1; i <= s.length; i++) {
    const v = parseInt( s.slice(0, i) )
    const tail = s.slice(i)
    if (
      p.length < 2 || (
        p.length >= 2 &&
        p[p.length - 1] + p[p.length - 2] === v
      )
    ) { 
      if (is_additive(tail, decisions.concat(v))) {
        return true
      }
    }
  }
  return false
}


```

### 44.2018年9月26日题目
观看老鼠走迷宫的视频（回溯算法），写一个老鼠走迷宫算法`rat_in_maze(maze)`返回路径，再写一个函数`print`打印迷宫和走的过程，打印老鼠走的路径。 

```
const maze = [
  [0,1,0,0,0,0],
  [0,1,0,1,1,0],
  [0,0,0,1,0,1],
  [1,1,0,0,0,1],
  [0,0,0,1,1,1],
  [2,1,0,0,0,0]
]

print( rat_in_maze(maze) )

```

上述程序执行结果为:
```
x 1 0 0 0 0
x 1 0 1 1 0
x x x 1 0 1
1 1 x 0 0 1
x x x 1 1 1
x 1 0 0 0 0
```

答案：

```
/**
 * @param {*} maze //地图
 * @param {*} pos  //当前位置
 * @param {*} path //开始位置到当前位置走过的点
 * @param {*} transverse  //遍历过的节点
 */
function rat_in_maze(
  maze, 
  pos = [0, 0],
  path = [[...pos]], 
  transverse = [] 
) {
  const [x, y] = pos 
  // 如果找到终点
  if (maze[x][y] === 2) {
    return path
  }
  // 记录走过当前位置
  transverse[x * maze.length + y] = 1
  // 找到可能的选择
  const choices = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]
    // 过滤掉墙和已经遍历的地方
    .filter(([x, y]) => {
      return x >= 0 && y >= 0 && x < maze.length &&
        y < maze[0].length 
        && (maze[x][y] !== 1) &&
        !transverse[x*maze.length + y]
    })

  // 对每个选择，继续递归，寻找路径
  for(let [x, y] of choices) {
    const p = rat_in_maze(maze, [x, y], path.concat([[x, y]]), transverse)
    if(p) return p
  }
  
}

function print(maze, path) {
  maze.forEach((row, i) => {
    console.log(row.map((v, j) => {
      if (path.find(([x, y]) => ( x === i && y === j) )) {
        return 'x'
      }
      return v
    }).join(' ')
    )
  })
}

const maze = [
  [0,1,0,0,0,0],
  [0,1,0,1,1,0],
  [0,0,0,1,0,1],
  [1,1,0,0,0,1],
  [0,0,0,1,1,1],
  [2,1,0,0,0,0]
]
print( maze, rat_in_maze(maze))
```
### 45.2018年9月27日题目
给定一个集合，如 {3, 4, 5, -3, 100, 1, 89, 54, 23, 20},将它分成两个子集，每个是它的一半大小。 如果集合元素是奇数，那么有一个自己会比另一个子集大1。

集合用数组S表示，写一个方法`tug(S)`，使得S切分成两个子集后，两个子集元素和的差值（绝对值）最小。 

比如{3, 4, 5, -3, 100, 1, 89, 54, 23, 20}可以拆分成 {4, 100, 1, 23, 20}和{3, 5, -3, 89, 54}，和分别是148，148,差值为0。 

{23, 45, -34, 12, 0, 98, -99, 4, 189, -1, 4}可以拆分成{45, -34, 12, 98, -1}和{23, 0, -99, 4, 189, 4}，和分别是120和121，差值为1。

示例：
```
tug([23, 45, -34, 12, 0, 98, -99, 4, 189, -1, 4])
// [ [45 ,-34, 12 ,98 ,-1], [23, 0, -99, 4, 189 ,4] ]
```

提示：见tips.md

答案：

枚举集合S中的所有子集（可以利用类似全排列）的方法，利用决策树选中所有规模为一半的子集，然后求和。 
```
const sum = (arr) => arr.reduce((a,b) => a + b, 0)

function tug(S) {
  const total = sum(S)

  let min = Infinity
  let list = null

  /* 递归枚举所有的情况 */
  function tug_util(S, decisions = []) {

    if(decisions.length === ~~(S.length / 2)) {
      const s = sum(decisions.map(i => S[i]))
      const t = Math.abs(total - 2*s) // 两个子集和的差值（绝对值）
      if(min > t) {
        min = t
        list = [
          decisions.map(i => S[i]),
          [...Array(S.length)].map((_, i)=>i).filter(i => decisions.indexOf(i) === -1).map(i => S[i])
        ]
      }
      return
    }

    const start = decisions.length > 0 ? decisions[decisions.length - 1] : -1
    for(let i = start + 1; i < S.length; i++) {
      tug_util(S, decisions.concat(i))
    }
  }
  tug_util(S)
  return list
}


```
### 46.2018年9月28日题目

写一个函数`gcd`计算两个数字的最大公约数。比如数字12和数字8的最大公约数是4。


见tips.md
```
答案：

function gcd(a, b) {
  if(a === b ) return a
  if(a > b) return gcd(a-b, b)
  return gcd(a, b - a)
}
```

### 47 2018年10月9日

学习`链表`一节，完善双向链表的`打印`，`插入`和`合并`操作。 为了让合并操作可以在O(1)完成，除了头指针head外，还需要维护一个尾指针tail。


``` javascript
class DoubleLinkedList {
  constructor(){
    // 指向链表开头
    this.head = null
    // 指向链表末尾
    this.tail = null
  }
  
  /**
   * 打印链表
   */
  print(){
    /// TODO    
  }
  
  /**
   * 插入一个键为{key}的元素到链表头部
   */
  insert(key){
    /// TODO 
  }
  
  /**
   * 将list合并到链表末尾
   */
  merge(list) {
    /// TODO
  }
}

class ListNode {
  constructor(key){
    this.prev = null
    this.next = null
    this.key = key
  }
}
```

示例:
```
const list = new DoubleLinkedList()
list.print()
// 输出: NULL
for(let i = 0; i < 5; i++) {
  list.insert( String.fromCharCode('A'.charCodeAt(0) + i) )
}

list.print()
// 输出: E<->D<->C<->B<->A<->NULL

list.insert('X')
list.print()
// 输出: X<->E<->D<->C<->B<->A<->NULL

const list2 = new DoubleLinkedList()
list2.insert('Q')
list2.insert('P')
list2.insert('O')
list2.print()
// 输出 O<->P<->Q<->NULL


list2.merge(list)
list2.print()

// 输出 O<->P<->Q<->X<->E<->D<->C<->B<->A<->NULL
```

答案:

```
class DoubleLinkedList {
  constructor(){
    // 指向链表开头
    this.head = null
    // 指向链表末尾
    this.tail = null
  }
  
  /**
   * 打印链表
   */
  print(){
    let p = this.head
    const r = []
    while(p) {      
      r.push(p)
      p = p.next
    }
    r.push('NULL')
    console.log( r.join('<->') )
  }
  
  /**
   * 插入一个键为{key}的元素到链表头部
   */
  insert(key){
    const node = new ListNode(key)
    if(this.head){
      this.head.prev = node
      node.next = this.head
    } else {
      this.tail = node
    }
    this.head = node
  }
  
  /**
   * 将list合并到链表末尾
   */
  merge(list) {
    this.tail.next = list.head
    this.tail = list.tail
    list.head.prev = this.tail
  }
}

class ListNode {
  constructor(key){
    this.prev = null
    this.next = null
    this.key = key
  }
}
```
### 48 2018年10月10日

写一个函数`center(list)`找到一个链表的中间节点。 如果链表有基数个节点，那么返回中心节点。 如果链表有偶数个节点，返回中间偏左的节点。 

```
const list = new DoubleLinkedList()
center(list) // null
list.insert(4)
list.insert(3)
list.insert(2)
list.insert(1)
// list = 1-2-3-4
const node = center(list) // node.key = 2
list.insert(5)
// list = 5-1-2-3-4
const node2 = center(list) // node.key = 2
```

tips: 见tips.md

答案:

```
function center(list) {
  let fast = list.head,  // 快指针，每次移动两个
      slow = list.head   // 慢指针，每次移动一个

  while(fast) {
    fast = fast.next
    fast && (fast = fast.next)
    fast && (fast = fast.next)
    fast && (slow = slow.next)
  }
  return slow
}
```
### 49 2018年10月11日
写一个程序`has_cycle`检查一个链表是否有循环应用。 


见tips.md


答案:

WeakMap作用是不增加WeakMap引用对象的计数，也就是WeakMap不会引起内存溢出。 

```
function has_cycle(list, m = new WeakMap()){
  let p = list.head
  while(p) {
    if(m[p]) {return true }
    m[p] = true
    p = p.next
  }
  return false
}
```

### 50 2018年10月12日
将之前写的判断链表是否有环的方法扩展到所有对象，写一个函数has_cycle判断任何一个对象是否有循环引用的情况。

答案：

```
function has_cycle(obj, m = new WeakMap()){
  if(typeof obj !== 'object') {return false} 
  if(m[obj]) return true
  m[obj] = true
  const props = Object.getOwnPropertyNames(obj)
  return !!props.find(prop => has_cycle(obj[prop], m)) || false
}
```
### 51 2018年10月15日
观看数据结构堆一节，实现建堆build和max_heapify(i)操作，构建一个最大堆。
```

class Heap {
  constructor(data, Max = 10000){
    this.list = Array(Max)
    for(let i = 0; i < data.length; i++) {
      this.list[i] = data[i]
    }
    this.heapSize = data.length
    this.build()
  }

  build(){
    /// TODO
  }

  max_heapify(i) {
    /// TODO 
  }
}

const heap = new Heap([2,5,8,3,7,12,9,6])
console.log(heap.list)
// [ 12, 7, 9, 6, 5, 8, 2, 3, <9992 empty items> ]
```
答案:
```
function swap(A, i, j) {
  const t = A[i]
  A[i] = A[j]
  A[j] = t
}
class Heap {
  constructor(data, Max = 10000){
    this.list = Array(Max)
    for(let i = 0; i < data.length; i++) {
      this.list[i] = data[i]
    }
    this.heapSize = data.length
    this.build()
  }

  build(){
    let i = Math.floor(this.heapSize / 2) - 1
    while(i >= 0) {
      this.max_heapify(i--)
    }
  }

  max_heapify(i) {
    const leftIndex = 2*i + 1
    const rightIndex = 2*i + 2
    let maxIndex = i
    if(leftIndex < this.heapSize && this.list[leftIndex] > this.list[maxIndex]) {
      maxIndex = leftIndex
    }
    if(rightIndex < this.heapSize && this.list[rightIndex] > this.list[maxIndex]) {
      maxIndex = rightIndex
    }
    if(i !== maxIndex) {
      swap(this.list, maxIndex, i)
      this.max_heapify(maxIndex)
    }
  }
}
```

### 52 2018年10月16日
用堆实现一个排序算法`heap_sort(A)`，对数组A进行排序

答案:

```
function swap(A, i, j) {
  const t = A[i]
  A[i] = A[j]
  A[j] = t
}
class MaxHeap{
  constructor(data){
    this.list = data
    this.heapSize = data.length
    this.build()
  }

  build(){
    let i = Math.floor(this.heapSize/2) - 1
    while(i >= 0) {
      this.max_heapify(i--)
    }
  }

  extract() {
    if (this.heapSize === 0) return null
    const item = this.list[0]
    swap(this.list, 0, this.heapSize - 1)
    this.heapSize--
    this.max_heapify(0)
    return item
  }

  max_heapify(i) {
    const leftIndex = 2*i + 1
    const rightIndex = 2*i + 2
    let maxIndex = i
    if(leftIndex < this.heapSize && this.list[leftIndex] > this.list[maxIndex]) {
      maxIndex = leftIndex
    }
    if(rightIndex < this.heapSize && this.list[rightIndex] > this.list[maxIndex]) {
      maxIndex = rightIndex
    }
    if(i !== maxIndex) {
      swap(this.list, maxIndex, i)
      this.max_heapify(maxIndex)
    }
  }
}

function heap_sort(A){
  const heap = new MaxHeap(A)
  console.log(heap.list)
  while(heap.heapSize > 0){
    A[heap.heapSize-1] = heap.extract()
  }
}

```

### 53 2018年10月17日
用堆实现求一个数组前k大值的函数`maxk(A, k)`

- A : 数组
- k : 最值数目
返回： 返回前k大的值

答案：

```
function maxk(A, k) {
  const heap = new MaxHeap(A)
  const r = []
  while(k-- > 0) {
    r.push(heap.extract())
  }
  return r
}
```

### 54 2018年10月18日
学习数据结构-栈，写一个函数`match(str)`，判断一个字符串中的小括号是否匹配。

```
match('abc()def') // true
match('(1+2()') // false
match('(1+2+3+5*2*(3+7))') // true
```

答案

```
class Stack{
  constructor(max=1000){
    this.max = max
    this.sp = -1
    this.data = Array(max)
    this.size = 0
  }
  push(item){
    if(this.sp === this.max - 1) {
      throw 'Stack Overflow'
    }
    this.data[++this.sp] = item
    this.size ++
  }

  pop(){
    if(this.sp === -1) {
      //throw 'Stack Underflow'
      return null
    }
    this.size --
    return this.data[this.sp--]
  }

}


function match(str) {   
  const stack = new Stack()
  for(let c of str){
    if(c === '(') {
      stack.push('(')
    }else{
      if(stack.pop() !== '(' ){
        return false
      }
    } 
  }
  return stack.size === 0 
}

```

### 55 2018年10月19日

写一个函数，计算一个四则运算表达式的值。有加减乘除和括号，空格忽略。不许使用eval等直接求值的函数。

```
function calc(str) {
  // TODO
}

calc('1 + 2 + 3') // 6
calc('1+2+3') // 6
calc('1+2*3') // 7
calc('(1+2)*3+4') // 13
例如: 需要计算 ： 3 * (1 + 2 ) * 5 那么先计算 1+2，我们记做 1 2 + 再计算 3 * (1 + 2) 记做 3 1 2 + * 最后计算 3 * (1 + 2 ) * 5 记做 3 1 2 + * 5 * 提示：利用栈（周六课程讲解）

然后再从左到右计算。

答案:

function calc(str){
  const list = str.match(/(\d+|[+-\\*/()])/g)
  
}
答案：

// 定义操作符优先级
const precedence = {
  '+' : 1,
  '-' : 1,
  '*' : 2,
  '/' : 2,
  '(' : 0,
  ')' : 0
}


// 出栈(pop stack)直到断言函数(prediction function) 返回false
// 并返回最终的结果
function poptill(stack, prediction) {
  let o = null
  let r = []
  while(o = stack.pop()) {
    if(!prediction(o)) {
      stack.push(o)
      break
    }
    r.push(o)
  }
  return r
}

// 将中缀(infix)序列转成后缀(postfix)序列，
// 比如 A + B -> A B +
// 再比如 A + B * C -> A B C * +
// 再比如 A * (B + C) -> A B C + *
// 本质上 ABC的相对顺序不变，后缀序列的操作符会在不同的地方
function infix2postfix(list){

  // 操作符栈
  const opstack = []

  // 后缀序列结果
  let r = []

  list.forEach(c => {
    if(/(\+|-|\*|\/)/.test(c)) {
      const ops = poptill(opstack, op => precedence[op] >= precedence[c])
      r = r.concat(ops)
      opstack.push(c)
    }
    else if(c === '(') {
      opstack.push(c)
    }
    else if(c === ')') {
      const ops = poptill(opstack, op => op !== '(')
      opstack.pop()
      r = r.concat(ops)
    }
    else {
      r.push(c)
    }
  })
  opstack.reverse().forEach(x => r.push(x))
  return r
}

// 利用stack对后缀序列求值
function evaluate(list) {
  list = list.reverse()
  const stack = []
  while(list.length > 0) {
    const c = list.pop()
    if(/(\+|-|\*|\/)/.test(c)) {
      const o1 = Number(stack.pop())
      const o2 = Number(stack.pop())
      switch(c) {
        case '+' :
          stack.push(o1 + o2)
          break
        case '-' :
          stack.push(o1 - o2)
          break
        case '*' :
          stack.push(o1 * o2)
          break
        case '/' :
          stack.push(o1 / o2)
          break
      }
    }
    else {
      stack.push(c)
    }
  }
  return stack[0]
}

function calc(str) {
  const list = str.match(/(\d+|\+|-|\*|\/|[()])/g)
  const postfixs = infix2postfix(list)
  return evaluate(postfixs)
}
```