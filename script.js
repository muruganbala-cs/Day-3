// //programs in anonymous function
// //Print odd numbers in an array
// var result = [];
// var a = function(arr){
//   for (var i = 0; i < arr.length; i=i+1) {
//     if (arr[i] % 2 !== 0) 
//     {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// //Convert all the strings to title caps in a string array
// var result = [];
// var a= function (str) {
//     str = str.toLowerCase().split(' ');
//     for (let i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }
// console.log(a("hi how are you"));
// //  Sum of all numbers in an array


// var  sum = 0;
// var c =function(arr){
 
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// return sum
// }

 
// console.log(c( [4, 8, 7, 13, 12])) 
// //Return all the prime numbers in an array
function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function findPrimes(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  console.log(findPrimes(215))
////Return median of two sorted arrays of the same size.
