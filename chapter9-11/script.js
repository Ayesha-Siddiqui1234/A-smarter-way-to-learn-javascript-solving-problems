//QUESTION:1
// var cityName=prompt(`Enter city name`);
// if(cityName==="Karachi"){
//     document.write(`Welcome to the city of lights<br>`);
// }
// else{
//     document.write(`Invalid input<br>`);
// }

//QUESTION:2
// var gender=prompt(`Enter your gender`);
// if(gender==="male"){
//     document.write(`Good Morning Sir<br>`);
// }
// else if(gender==="female"){
//     document.write(`Good Morning Ma'am<br>`);
// }
// else{
//     document.write(`Invalid input<br>`);
// }

//QUESTION:3
// var color=prompt(`Enter color of road traffic signal`);
// if(color==="Red"){
//     document.write(`Must Stop<br>`);
// }
// else if(color==="Yellow"){
//     document.write(`Ready to move<br>`);
// }
// else if(color==="Green"){
//     document.write(`Move now<br>`);
// }
// else{
//     document.write(`Invalid input<br>`);
// }

//QUESTION:4
// var quantityOfFuel=+prompt(`Enter the quantity of fuel in liters`);
// if(quantityOfFuel<0.25){
//     document.write(`Please refill the fuel in your car<br>`);
// }
// else{
//     document.write(`Invalid input<br>`);
// }

//QUESTION:5
//(a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//OUTPUT: the condition is true alert is showing on output screen

//(b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//OUTPUT: the condition is false alert is not showing on output screen

//(c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//OUTPUT: Alert is showing for condition 2 and 4

//(d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//OUTPUT: alert is showing on output screen The cost equals

//(e)
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//OUTPUT: alert is showing for true

//(f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
//OUTPUT: alert is howing that car is smaller than cat


//QUESTION:6

// var marks_Of_English=+prompt(`Enter marks of english`);
// var marks_Of_Urdu=+prompt(`Enter marks of Urdu`);
// var marks_Of_Maths=+prompt(`Enter marks of maths`);
// var totalMarks=+prompt(`Enter total marks of 3 subjects`);
// var marksObtained=marks_Of_English+marks_Of_Maths+marks_Of_Urdu;
// var percentage=(marksObtained*100)/totalMarks;
// document.write(`<h1>Marks Sheet</h1>`)
// document.write(`Total marks: ${totalMarks}<br>`);
//     document.write(`Marks obtained: ${marksObtained}<br>`);
//     document.write(`Percentage: ${percentage}%<br>`);

// if(percentage>=80){
//     document.write(`Grade: A-one<br>`);
//     document.write(`Remarks: Excellent<br>`);
// }
// else if(percentage>=70){
//     document.write(`Grade: A<br>`);
//     document.write(`Remarks: Good<br>`);
// }
// else if(percentage>=60){
//     document.write(`Grade: B<br>`);
//     document.write(`Remarks: You need to improve<br>`);
// }
// else if(percentage<60){
//     document.write(`Grade: Fail<br>`);
//     document.write(`Remarks: Sorry<br>`);
// }
// else{
//     document.write(`Inavlid input`);
// }

//QUESTION:7

// var secretNumber=4;
// num=+prompt(`Guess the secret number`);
// document.write(`<h2>Guess game</h2>`);
// if(num===secretNumber){
//     document.write(`Bingo! Correct answer<br>`);
// }
// else if(num+1 === secretNumber){
//     document.write(`Close enough to correct answer<br>`);
// }
// else{
//     document.write(`Inavlid input<br>`);
// }

//QUESTION:8
// var num = +prompt(`Enter number`);
// if (num % 3 === 0) {
//     document.write(`Number is divisible by 3<br>`);
// }

// else {
//     document.write(`Number is not divisible by 3 <br>`);
// }

//QUESTION:9
// var num=+prompt(`Enter the number`);
// if(num%2==0){
//     document.write(`Even number<br>`);
// }
// else{
//     document.write(`Odd number<br>`);
// }

//QUESTION:10

// var temp=+prompt(`Enter the temperature`);
// if(temp>40){
//     document.write(`It is too hot outside<br>`);
// }
// else if(temp>30){
//     document.write(`The weather today is normal<br>`);
// }
// else if(temp>20){
//     document.write(`Today's weather is cool<br>`);
// }
// else if(temp>10){
//     document.write(`OMG! Today's Weather is so cool<br>`);
// }
// else{
//     document.write(`Inavlid input<br>`);
// }



//QUESTION:11
// var result;
// var num1=+prompt(`Enter the first number`);
// var num2=+prompt(`Enter the second number`)
// var operator=prompt(`Enter the operator which has to be performed(+,-,*,/,%)`);
// if(operator=='+'){
//      result=num1+num2;
//     document.write(`The sum of ${num1} and ${num2} is ${result}<br>`);
// }
// else if(operator=='-'){
//      result=num1-num2;
//     document.write(`The subtraction of ${num1} and ${num2} is ${result}<br>`);
// }

// else if(operator=='*'){
//     result=num1*num2;
//     document.write(`The product of ${num1} and ${num2} is ${result}<br>`);
// }
// else if(operator=='/'){
//     if(num2 !==0){
//        result=num1/num2;
//        document.write(`The division of ${num1} and ${num2} is ${result}<br>`);
//     }
//    else{
//     document.write(`invalid input<br>`);
//    }
    
// }
// else if(operator=='%'){
//     if(num2 !==0){
//        result=num1%num2;
//        document.write(`The division of ${num1} and ${num2} is ${result}<br>`);
//     }
//    else{
//     document.write(`invalid input<br>`);
//    }
    
// }
// else{
//     document.write(`Invalid input<br>`);
// }