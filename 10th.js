// for(let i=1;i<=5;i++) {
//     console.log(i);
// // }
// let sum=0;
// for(let i=1;i<=5;i++) {
//     sum=sum+i;
//     console.log(i);
// }
// console.log(sum);

// for(let i=10;i>=1;i--) {
//     console.log(i);
// }

// let arr=["A","B","C"];
// for(let i=0;i<arr.length;i++) {
//     console.log(arr[i]);
// }
// let arr=[5,10,2,20,8];
// let max=arr[0];

// for(let i=1;i<arr.length;i++) {
//     if(arr[i]>max) {
//         max=arr[i];
//     }
// }
// console.log(max);

// let arr=[5,10,20,30,40];
// let max=arr[0];

// for(let i=1;i<arr.length;i++) {
//     if(arr[i]>max) {
//         max=arr[i];
//     }
// }
// console.log(max);
  
// let num=3;

// for(let i=1;i<=10;i++) {
//     console.log(num*i);
// }
// -----------------------------------------------------------------------
// let arr=[5,10,2,20,8];
// let max=arr[0];

// for(let i=1;i<arr.length;i++) {
//     if(arr[i]>max) {
//         max=arr[i];
//     }
// }
// console.log(max);

// let num=3;

// for(let i=1;i<=10;i++) {
//     console.log(num*i);
// }

// for(let i=1;i<=3;i++) {
//     let row="";
// for(let j=1;j<=3;j++) {
//     row +="*";
// }
// console.log(row);
// }

// let str="hello";
// let count=0;

// for(let i=0;i<=str.length;i++) {
// if("aeiou".includes(str[i])) {
//     count++;
// }
// }
// console.log(count);

// for(let i=1;i<=109;i++) {
//     if(i%5==0) continue;
//     if(i===100) break;

//     console.log(i);
// }

// let sum=0;
// for(let i=2;i<=100;i+=2) {
//     sum=sum+i;
// }
// console.log(sum);

// for(let i=5;i<=120;i++) {

// }

// let num=5;
// let fact=1;

// for(let i=1;i<=num;i++) {
//     fact*=i;
// }
// console.log(fact);

//  let num=Number(prompt("Enter the  number for factorial"));
//  let fact=1;
// for(let i=1;i<=num;i++) {
//     fact*=i;
// }
// console.log(fact);


// let num=Number(prompt("Enter the number for factorial"));
// let fact=1;

// for(let i=1;i<=num;i++) {
//     fact*=i;
// }
// console.log(fact);

// let input=prompt("Enter your string");
// let reversed ="";

// for( let i=input.length-1;i>=0;i--) {
//   reversed +=input[i];
// }
// console.log(reversed);
// let count=0;
// for(let i=1;i<=5;i++) {
//     count++;
// }
// console.log(count);

// let arr = [10, 5, 8, 20, 15];

// let max = -Infinity;
// let secondMax = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondMax = max;
//         max = arr[i];
//     } else if (arr[i] > secondMax && arr[i] !== max) {
//         secondMax = arr[i];
//     }
// }

// console.log(secondMax);
// ----------------------------------------------------------------------
// let i=1;
// while (i<=5) {
//     console.log(i);
//     i++;
// }

// let i=5;
// while(i>=1) {
//     console.log(i);
//     i--;
// }

// let i=2;
// while(i<=100) {
//     console.log(i);
//     i+=2;
// }

// let i=1;
// let sum=0;
// while(i<=100) {
//     i++;
//     sum=sum+i;    
// }
// console.log(sum);

// let num=5;
// let i=1;
// let fact=1;

// while(i<=num){
//     fact*=i;
//     i++;
// }
// console.log(fact);

// let str="hello";
// let i=str.length-1;
// let reversed="";

// while(i>=0) {
//     reversed+=str[i];
//     i--;
// }
// let secret=7;
// let guess;

// while(guess !==secret) {
//     guess=Number(prompt("Guess number"));
// }
// console.log("Correct!");

// --------------------------------------------------------------------------

// Prompt the user to enter their full name.Generate a username for them based on the Inpu.Start username with @AbortController.followed by their fullname and ending with the fullame length. 
// ex:username="Shradhakhapra",usernam should be "@Shradhakhapra13"

// let fullname=prompt("Enter your fullname without spaces in the middle");
// username="@"+fullname+fullname.length;
// console.log(username);


// let user={name:"Sandeep",age:20,city:"Delhi"};

// for(let obj in user) {
//     console.log(obj);
// }

// let user={name:"Sandeep",age:20};

// for(let key in user) {
//     console.log(key,user[key]);
// }

// let obj={a:1,b:2,c:3};
// let count=0;

// for(let key in obj) {
//     count++;
// }
// console.log(count);

// let obj={a:10,b:20,c:30};
// let sum=0;

// for(let key in obj) {
//     sum+=obj[key];
// }
// console.log(sum);

// let obj={ name:"Sandeep",age:20};
// let found=false;

// for(let key in obj) {
//     if(key==="age") {
//         found=true;
//     }

// }
// console.log(found);

// let obj={a:1,b:2,c:3};
// let arr=[];

// for(let key in obj) {
//     arr.push(obj[key]);
// }
// console.log(arr);

// let arr=[10,20,30];

// for(let index in arr){
//     console.log(index,arr[index]);
// }
// -----------------------------------------------------------------
// let arr=[10,20,30];

// for(let value of arr) {
//     console.log(value);
// }

// let arr=[1,2,3,4];
// let sum=0;
// for(let num of arr) {
//     sum+=num;
// }
// console.log(sum);

// let str="hello";
// for(let ch of str) {
//     console.log(ch);
// }

