//q1
// let multiArray = [
//     [],
//     [],
//     []
// ];

// multiArray[0].push(1, 2);
// multiArray[1].push(3, 4);
// multiArray[2].push(5, 6);

// console.log(multiArray);

//q2
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// console.log(matrix);


//q3
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


//q4
// let number = parseInt(prompt("Enter the number for which you want the multiplication table:"));
// let length = parseInt(prompt("Enter the length of the multiplication table:"));

// console.log(`Multiplication Table of ${number}:`);
// for (let i = 1; i <= length; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }


//q5
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


//q6
// a. Counting
// let counting = [];
// for (let i = 1; i <= 15; i++) {
//     counting.push(i);
// }
// console.log("Counting: " + counting.join(", "));

// // b. Reverse counting
// let reverseCounting = [];
// for (let i = 10; i >= 1; i--) {
//     reverseCounting.push(i);
// }
// console.log("Reverse counting: " + reverseCounting.join(", "));

// // c. Even
// let even = [];
// for (let i = 0; i <= 20; i += 2) {
//     even.push(i);
// }
// console.log("Even: " + even.join(", "));

// // d. Odd
// let odd = [];
// for (let i = 1; i < 20; i += 2) {
//     odd.push(i);
// }
// console.log("Odd: " + odd.join(", "));

// // e. Series
// let series = [];
// for (let i = 1; i <= 20; i++) {
//     series.push(i * 2 + "k");
// }
// console.log("Series: " + series.join(", "));


//q7
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt user for input
// let userInput = prompt("Enter an item to search in the bakery:");

// // Check if the item exists in the array
// let index = A.indexOf(userInput);

// if (index !== -1) {
//     console.log(`${userInput} is available at index ${index} in our bakery.`);
// } else {
//     console.log(`We are sorry, ${userInput} is not available in our bakery.`);
// }


//q8
// let A = [24, 53, 78, 91, 12];
// let largest = A[0];
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// console.log("The largest number in the array is: " + largest);

//q9
// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];
// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// console.log("The smallest number in the array is: " + smallest);


//q10

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }
