// //programs in anonymous function
 //Print odd numbers in an array
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
// var a=function(arr){
//    var res = arr.toString();
//    var data = res.toLowerCase().split(" ");
//    for(var i=0;i<data.length;i++){
//        data[i]= data[i].charAt(0).toUpperCase()+data[i].slice(1)
//    }
//    return data.join(" ")
// }
// console.log(a(["Hi HOW Are"]))
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
// var result = []
// var a=function (arr){
//    for(var i=0;i<arr.length;i++){
//     var count = 0
//     for(var j =2;j<arr[i];j++){
//         if(arr[i]%j===0)
//         {
//             count = 1;
//         }
//     }
//     if(count ===0)
//     {
//         result.push(arr[i])
//     }
//    }
//    return result;
// }
// console.log(a([1,2,3,4,5,6,7,8,9,10]));
// //    Return all the palindromes in an array
// var g=function(arr){
//    var result = []
//    for(var i=0;i<arr.length;i++){
//        var data = arr[i].split("").reverse().join("")
//        if(data===arr[i]){
//            result.push(arr[i])
//        }
//    }
//    return result
// }
// console.log(g(["green","red","dad","akka"]));
// //Return median of two sorted arrays of the same size.
// let arr1 = [5,9,4,6,74];
// let arr2 = [4,6,7,8,10,78];
// let q=function (arr1, arr2) {
//   let arr = [...arr1, ...arr2];

//   arr.sort((a, b) => a - b);
//   let n = arr.length;
// if (n % 2 === 0) {
//     return ((arr[n / 2] + arr[n - 1 ]/ 2) / 2);
//   } else {
//     return arr[Math.floor(n / 2)];
//   }
// }
// console.log(q(arr1, arr2));
// //Remove duplicates from an array
// let arr3=[1,2.3,4,1,1,5,4,7,5,]

// var s=function s(arr) {
//    return arr3.filter((item,
//        index) => arr3.indexOf(item) === index);
// }
// console.log(s(arr3));
// //Rotate an array by k times
// let arr4 = [1,2,3,4,5]
// let K =2;
// let b=function (arr4,K){
//    for(var i=0;i<K;i++){
//     arr4.push(arr4[i])
//    }
//    for(var i=0;i<K;i++){
//     arr4.shift()
//    }
//    return arr4
// } 
// console.log(b(arr4,K));

 // //programs in IIFE function

//   //Print odd numbers in an array
// var result = [];
//  (function(arr){
//   for (var i = 0; i < arr.length; i=i+1) {
//     if (arr[i] % 2 !== 0) 
//     {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result)
// })([1,2,3,4,5,6,7,8,9])

// //Convert all the strings to title caps in a string array
// var result = [];
// (function(arr){
//    var res = arr.toString();
//    var data = res.toLowerCase().split(" ");
//    for(var i=0;i<data.length;i++){
//        data[i]= data[i].charAt(0).toUpperCase()+data[i].slice(1)
//        result.push(data[i])
//    }
   
//    console.log(result.join(" "))
// })("HI HoW Are")

// //  Sum of all numbers in an array

// var  sum = 0;
// (function(arr){
 
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
//  console.log(sum)
// })( [4, 8, 7, 13, 12])

 
//
// //Return all the prime numbers in an array

// (function(arr){
//    var result = []
//    for(var i=0;i<arr.length;i++){
//     var count = 0
//     for(var j =2;j<arr[i];j++){
//         if(arr[i]%j===0)
//         {
//             count = 1;
//         }
//     }
//     if(count ===0)
//     {
//         result.push(arr[i])
//     }
    
//    }
//    console.log(result)
// })([1,2,3,4,5,6,7,8,9,10]);

// //    Return all the palindromes in an array
// (function(arr){
//    var result = []
//    for(var i=0;i<arr.length;i++){
//        var data = arr[i].split("").reverse().join("")
//        if(data===arr[i]){
//            result.push(arr[i])
//        }
//    }
//    console.log(result)
// })(["green","red","dad","akka"])
// //Return median of two sorted arrays of the same size.
// let arr1 = [5,9,4,6,74];
// let arr2 = [4,6,7,8,10,78];
// (function (arr1, arr2) {
//   let arr = [...arr1, ...arr2];

//   arr.sort((a, b) => a - b);
//   let n = arr.length;
// if (n % 2 === 0) {
//     consle.log ((arr[n / 2] + arr[n - 1 ]/ 2) / 2);
//   } else {
//     console.log(arr[Math.floor(n / 2)])
//   }
// })(arr1,arr2)
//;
// //Remove duplicates from an array
// (function(arr) {
//    console.log(arr.filter((item,
//        index) => arr.indexOf(item) === index));
// })([1,2,3,4,1,1,5,4,7,5])
// //Rotate an array by k times
// let arr4 = [1,2,3,4,5]
// let K =2;
// (function (arr4,K){
//    for(var i=0;i<K;i++){
//     arr4.push(arr4[i])
//    }
//    for(var i=0;i<K;i++){
//     arr4.shift()
//    }
//   console.log(arr4)
// })(arr4,K)



// //programs in arrow functions.

// //Print odd numbers in an array
// var result = [];
// var a =(arr)=>{
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
// var a=(arr)=>{
//    var res = arr.toString();
//    var data = res.toLowerCase().split(" ");
//    for(var i=0;i<data.length;i++){
//        data[i]= data[i].charAt(0).toUpperCase()+data[i].slice(1)
//    }
//    return data.join(" ")
// }
// console.log(a(["Hi HOW Are"]))

// // //  Sum of all numbers in an array

// var  sum = 0;
// var c =(arr)=>{
 
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// return sum
// }

 
// console.log(c( [4, 8, 7, 13, 12])) 
// //Return all the prime numbers in an array
// var result = []
// var a=(arr)=>{
//    for(var i=0;i<arr.length;i++){
//     var count = 0
//     for(var j =2;j<arr[i];j++){
//         if(arr[i]%j===0)
//         {
//             count = 1;
//         }
//     }
//     if(count ===0)
//     {
//         result.push(arr[i])
//     }
//    }
//    return result;
// }
// console.log(a([1,2,3,4,5,6,7,8,9,10]));
// //    Return all the palindromes in an array
// var g=(arr)=>{
//    var result = []
//    for(var i=0;i<arr.length;i++){
//        var data = arr[i].split("").reverse().join("")
//        if(data===arr[i]){
//            result.push(arr[i])
//        }
//    }
//    return result
// }  
// console.log(g(["green","red","dad","akka"]));