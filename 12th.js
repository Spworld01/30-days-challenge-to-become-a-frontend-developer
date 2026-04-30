// 1.For a given array with marks of students -> [85,97,44,37,76,60].Find the average marks of the entire class.
// let marks=[85,97,44,37,76,60];

// let sum=0;

// for(let val of  marks) {
//     sum+=val;
// }
// console.log(sum/marks.length);
// 2.For a given array with prices of 5 items ->[250,645,300,900,50],All items have an offer of 10% OFF oon them.Change the array to store final price after applying offer. 
// let items=[250,645,300,900,50];

// for(let i=0;i<items.length;i++) {
//     let offer=items[i]/10;
//     items[i] -=offer;
// }
// console.log(items);

// Qs.Create an array to store companies ->"Bloomberg","Microsoft","Uber","Google","IBM","Netflix";
// a.Remove the first company from the array
// b.Remove Uber & Add ola in its Place 
// c .Add Amazon at the end 

// let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(2,1,"OLa");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);

// ------------------------------------------------------------------------------------------------
// 1.Write a  programm to print a 3*3 multiplication table using for loops.  
// for(let i=1;i<=10;i++) {
//     console.log(`4 x ${i}=${4*i}`);
// }

// 2.Given an array [10,20,30,40],print its elements in reverse order using a for loop 
// let arr=[10,20,30,40];
// let reverse=[];

// for(let i=arr.length-1;i>=0;i--) {
//     reverse.push(arr[i]);
    
// }
// console.log(reverse);

// 3.Write a loop from 1 to 10 that skips the number 5 and prints the rest 

// for(let i=1;i<=10;i++) {
//     if(i===5) {
//         continue;
//     }
//     console.log(i);
// }

// 4.Write a programm that prints numbers from 1 to 10 but stops when it reaches 7 
// for(let i=1;i<=10;i++) {
//      console.log(i);
//     if(i===7) 
//         break;
    
// }

// 5.Use a for loop with two variables to print like 
// for(let i=1,j=10;i<=10,j>=1;i++,j--) {
//     console.log(`${i}${j}`);
// }
// while loop  
// 1.write a programm that keeps generating random numbers(0-9) until it gets the number 7, and count how many attempts it looks 

// while(true) {
//     let i=Math.floor(Math.random()*10);
//     console.log(i);
//     if(i===7) {
//         break;
//     }
// }
// 2.Given a queue(array) ["task1","task2","task3"].process and print each task using a while loop until the queue is empty 
// let queue =["task1","task2","task3"];
// while(queue.length>0) {
//     let task=queue.shift();
//     console.log("proocessing:",task);
// } 
// 3.simulate a password check that keeps running until the password "1234" is entered. 

// let password =1234;

// while(true) {
//     let input = prompt("enter a password");
    
//     if(input==password) {
//         console.log("You entered the correct password");
//         break;
//     }else {
//         console.log("Try again");
//     }
// }

// 4.Write a countdown programm using a while loop that prints 
// let i=3;
// while(i>=1) {
//     console.log(i);
//     i--;
// }
// console.log("Go!");


// 5.Find the first number divisible by 7 starting from 1 using a while loop
//  let i=1;
//  while(i<100) {
//     if(i%7===0){
//         console.log(i);
//     }
//     i++;
//  }

// ---------------------------------------------------------------
// Concat Method 
// let str1="Hello ";
// let str2="World ";
// let str3="Hi"
// let combinedstr=str1.concat(str2,str3);
// console.log(combinedstr);

// uppercase()
// let str="hello world 234";
// let mixedstr=str.toUpperCase();
// console.log(mixedstr);

// let mixedstr="Hello 123!";
// let upperstr=mixedstr.toUpperCase();
// console.log(upperstr);

// // Lower case 
// let str="Hello World 98777";
// let lowerstr=str.toLowerCase();
// console.log(lowerstr);

// let mixedstr="Hello 123";
// let lowerstr=mixedstr.toLocaleLowerCase();
// console.log(lowerstr);

// substr method 
// let str="Hello World!";
// let lowerstr=str.toLowerCase();
// console.log(lowerstr);

// let mixedstr="Hello 123";
// let lowerstr=mixedstr.toLowerCase();
// console.log(lowerstr);

// substr 
// let str="Hello World";
// let substr=str.substr(5,3);
// console.log(substr);

// let str="Javascript";
// let substr1=str.substr(4,6);
// let substr2=str.substr(0);

// console.log(substr1);
// console.log(substr2);

// replace 
// let str="Hello World";
// let newstr=str.replace("World","Javascript");
// console.log(newstr);

