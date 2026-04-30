// Function in JS 
// function myFunction() {
//     console.log("Welcome to Apna college");
//     console.log("We are learning JS");
// }
// myFunction();


// function myFunction(msg) {
//     // parameter ->input 
//     console.log(msg);
// }
// myFunction("I love JS");

// function sum(x,y) {
//     s=x+y;
//     return s;
// }
// let val =sum(3,4);
// console.log(val);

// Arrow Functions 
// const arrowsum=(a,b)=>{
//     console.log(a+b);
// };

// const arroemul=(c,d)=>{
//     console.log(a*b);
// };

// qs 1.Create a function using the "function" keyword that takes a string as an argument & returns the number of vowles in the string 
// function countVowels(str) {
//     let count = 0;
//     for(const char of str) {
//         if(char ==="a" ||char ==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);

// }

// const vowels=(str)=>{
//     let count =0;
//     for(const char of str){
//       if(char ==="a" ||char ==="e"||char==="i"||char==="o"||char==="u"){
//             count++; 
//       } 
//     }
//     console.log(count);
// }

// let arr=["Pune","delhi","Mumbai"];
// arr.forEach((val) =>{
//     console.log(val.toUpperCase());
// });
// 1.For a given array of numbers ,print the square of each value using the forEach loop 
// let nums=[67,52,39];

// nums.forEach((num)=>{
//     console.log(num*num);
// });

// qs1.We are given array of marks of students.Filter out of the marks of students that scored 90+.
// let marks=[97,64,32,49,99,86];

// let toppers=marks.filter((val) =>{
//     return val>90;
// });
// console.log(toppers);

// 2.Take a number n as input from User . create an array of numbers from 1 to n. 
// use the reduce method to calculate sum of all numbers in the array . 
// Use the reduce method to calculate  product of all numbers in the array 

// let n=prompt("enter a number:");

// let arr=[];

// for(let i=1;i<=n;i++) {
//     arr[i-1]=i;
// }
// console.log(arr);

// let sum=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(sum);

// -----------------------------------------------------------------------
// let colors=["red","green","blue"];

// for(let[index,value]of colors.entries()){
//     console.log(index,value);
// }
// 2.Given a nested array[[1,2],[3,4]],print all elements using for...of  
// let arr=[5,12,8,20];
// for(let val of arr){
//     if(val>10) {
//         console.log(val);
//     }
// }
3.
arr=[[1,2],[3,4]];
let arr2=[];
for(let val of arr) {
    arr2
    console.log(arr2);
}