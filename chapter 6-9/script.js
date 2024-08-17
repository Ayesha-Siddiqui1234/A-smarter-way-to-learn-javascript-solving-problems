//QUESTION:1
// var a=10;
// document.write(`Result: <br>`);
// document.write(`The value of a is: ${a}<br>`);
// document.write(`.................................................<br><br><br>`);
// ++a;
// document.write(`The value of ++a is: ${a}<br>`);
// document.write(`Now the value of a is: ${a}<br><br><br> `);
// var b=a++;
// document.write(`The value of a++ is: ${b}<br>`);
// document.write(`Now the value of a is: ${a}<br><br><br>  `);
// --a;
// document.write(`The value of --a is: ${a}<br>`);
// document.write(`Now the value of a is: ${a}<br><br><br> `);
// var b=a--;
// document.write(`The value of a-- is: ${b}<br>`);
// document.write(`Now the value of a is: ${a}<br> `);




//QUESTION:2
// var a=2; 
// var b=1;
// var result= --a - --b + ++b + b--;
// document.write(`a is: ${a}<br>`);  //1
// document.write(`b is: ${b}<br>`);   //0 bcz ++b is 1 and b-- is 0 but first it execute then print so when it executng it take it as 1 so 1+1 is 2 so b is 2 at the time of execution but at the time of printing it would be 0 bcz due to b-- b would be 0
// document.write(` result is: ${result}<br>`); //result is 3

//Output at each stage
// as a=2 is b=1 so 
// --a=1;
// --a - --b= 0
// --a - --b + ++b= 0
// --a - --b + ++b +b= -1



//QUESTION:3
// var name=prompt("Enter a name");
// alert(`Hello ${name} nice to meet you!!`);



//QUESTION:5
// var num=prompt(`Enter a number`);
// num = num ? parseInt(num) : 5; //ternary operator used here as if no value is enter as prompt for printing table so table of 5 would be printing here
//  document.write(`Table of ${num}<br> `);
// document.write(`${num} x 1 = ${num*1}  <br>`);
// document.write(`${num} x 2 = ${num*2}  <br>`);
// document.write(`${num} x 3 = ${num*3}  <br>`);
// document.write(`${num} x 4 = ${num*4}  <br>`);
// document.write(`${num} x 5 = ${num*5}  <br>`);
// document.write(`${num} x 6 = ${num*6}  <br>`);
// document.write(`${num} x 7 = ${num*7}  <br>`);
// document.write(`${num} x 8 = ${num*8}  <br>`);
// document.write(`${num} x 9 = ${num*9}  <br>`);
// document.write(`${num} x 10 = ${num*10}  <br>`);


//QUESTION:6
// var sub1="English";
// var sub2="Math";
// var sub3="Urdu";
// var marks_English=54;
// var marks_Math=54;
// var marks_Urdu=48;
// var total_Marks=100;
// var per_English=marks_English*100/total_Marks;
// var per_Math=marks_Math*100/total_Marks;
// var per_Urdu=marks_Urdu*100/total_Marks;
// var total_Obtained_Marks=marks_English+marks_Math+marks_Urdu;
// var totalMarksOfThreeSubject=total_Marks*3;
// var total_Per_Of_Three_Sub=total_Obtained_Marks*100/totalMarksOfThreeSubject;
// document.write(`<b>Subject</b>&nbsp;`);
// document.write(`<b>Total Marks</b>&nbsp`);
// document.write(`<b>Obtained Marks</b>&nbsp`);
// document.write(`<b>Percentage</b><br>&nbsp`);
// document.write(`<br>`)
// document.write(`${sub1}&nbsp &nbsp`);
// document.write(`${total_Marks}&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp`);
// document.write(`${marks_English}&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp `);
// document.write(`${per_English}%<br>`);



// document.write(`&nbsp${sub2}&nbsp &nbsp`);
// document.write(`&nbsp&nbsp&nbsp&nbsp${total_Marks}&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp`);
// document.write(`${marks_Math}&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp `);
// document.write(`${per_Math}%&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp<br>`);


// document.write(`&nbsp${sub3}&nbsp &nbsp`);
// document.write(`&nbsp&nbsp&nbsp&nbsp${total_Marks}&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp`);
// document.write(`${marks_Urdu}&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp `);
// document.write(`${per_Urdu}%&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp<br>`);



// document.write(`&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp<b> ${totalMarksOfThreeSubject}</b>&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp<b> ${total_Obtained_Marks}</b>&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp &nbsp<b>${total_Per_Of_Three_Sub}%</b>`);
