//  1.create a const object called "product" to store information shown in the picture 
// const product ={
//     title:"Ball Pen",
//     rating:4,
//     offer:5,
//     price:270
// };
// console.log(product);
// 2.making a instagram profile 
// const profile ={
//     username:"Sandeep Patil",
//     isfollow:false,
//     followers:123,
//     following:123,
// };
// console.log(profile);
// // 3.Get user to input using prompt("enter a number:").Check if the number is a multiple of 55 or Not 
//  let input=prompt("enter a number");
// if(input%5===0) {

//     console.log("it is multiple of 5");
// }else {
//     console.log("It is not multiple of 5");
// }
// 4.write a code which can give grades to student accourding to their scores  
// let marks=prompt("enter your marks");
// if(marks>=80 && marks<=100) {
//     console.log("Grade A");
// }else if(marks>=70 && marks<=89) {
//     console.log("Grade B") ;
// }else if(marks>=60 && marks<=69) {
//     console.log("Grade c");
// }else if(marks>=50 && marks<=59) {
//     console.log("grade D");
// }else {
//     console.log("grade F");
// }


// Indecing 
// const arr=["Sandeep","abcd",1,"False","zzzz","again","1337","true","1.4"];
// arr[3.5]="ABCD Greeks";
// console.log(arr[4]);
// console.log(arr[7]);
// console.log(arr[6-2]);
// console.log(arr[6]-arr[2]);
// console.log(arr[6]+arr[0]);
// console.log(arr[7/2]);
// console.log(arr[100000000000000]);

// const arr=["A","B","C"];
// console.log(arr[1]);

// const arr=["A","B","C"];
// arr[1]="D";
// console.log(arr);

// const arr=["A","B","C"];
// let removed=arr.pop();
// console.log(removed);
// console.log(arr);

// const user ={
//     name:"Alice",
//     age:25,
//     active:true,
// }
// console.log(user);

// const obj ={
//     key1:value1,
//     key2:value2,
// };
// console.log(obj);

// const keyname="username";
// const obj={
//     [keyname]:"Alice",
// };
// console.log(obj.username);
// construction Apporach 

// let username="Name";
// let obj={
//     [username]:"Rahul",
// };
// console.log(obj);

// let user={
//     "first_name":"Sandeep",
//     "Last_name":"Patil",
//     "Age":19,
//     "Occuption":"Student",
//     "Gender":"Male",
// }
// console.log(user);

// const user={name:"Alice",age:25,city:"NewYork"};

// Object.keys(user).forEach(key=>{
//     console.log(user[key]);
// });

// Object.values(user).forEach(value=>{
//     console.log(value);
// });

const grade="grade2";

switch(grade) {
    case "distincation" :
        console.log("Marks greater than or equal to 85");
        break;
    case "grade1":
        console.log("Marks are  greater than 70 but less than 85");
        break;
    case "grade2":
        console.log("Marks are greater than 60 but less than 70");
        break;
    case "grade3":
        console.log("Marks are greater than 50 but less than 60");
        break;
    case "grade4":
        console.log("Marks are greater than 40 but less than 50");
        break;
    
    default:
        console.log("You have failed");
}