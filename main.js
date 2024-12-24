// chapter 4:

// question 1:
// let name,age,gender;

// question 2:
// let info,email,address,number,color;
// let 12,alert,prompt,break,null;

// question 3:

// document.write("<h2>Rules for naming JS variables</h2>")
// document.write("<p>Variable names can only contain , numbers, $and _. For example: $my_1stvariable</p>")
// document.write("<p>Variable must begin with a letter, $ or _ .For example: $name,_name or name</p>")
// document.write("<p>Variable names are case sensitive</p>")
// document.write("<p>Variable names should not be JS keywords</p>")

// chapter 5:

// question 1:

// let num1= +prompt("Enter number one");
// let num2= +prompt("Enter number two");
// let sum = num1+num2;
// document.write(`Sum of ${num1} and ${num2} is ${sum}`);

// question 2:

// let num1= +prompt("Enter number one");
// let num2= +prompt("Enter number two");
// let subtract = num1-num2;
// let multiply = num1*num2;
// let divide= num1/num2;
// let modulus= num1%num2;
// document.write(`Subtraction of ${num1} and ${num2} is ${subtract}`);
// document.write(`Multiplication of ${num1} and ${num2} is ${multiply}`);
// document.write(`Division of ${num1} and ${num2} is ${divide}`);
// document.write(`Modulus of ${num1} and ${num2} is ${modulus}`);

// question 3:

// let num;
// document.write(`Value after variable declaration is : ${num}`);
// num = 20;
// document.write(`Initial value : ${num}`)

// num++;
// document.write(`Value after increment is : ${num}`)
// num = num + 7;
// document.write(`Value after addition is : ${num}`)
// num--;
// document.write(`Value after decrement is : ${num}`)
// num = num % 3;
// document.write(`The reminder is : ${num}`)

// question 4:

// let cost = 600;
// let quantity = prompt("How many movie tickets you want : ?")
// let sum = cost*quantity
// document.write(`The cost of ${quantity} tickets to a movie is : ${sum}`)

// question 5:

// let table = +prompt("Enter the number for table")
// let multiply = table * 1
// let multiplyone = table * 2
// let multiplytwo = table * 3
// let multiplythree = table * 4
// let multiplyfour = table * 5
// let multiplyfive = table * 6
// let multiplysix = table * 7
// let multiplyseven = table * 8
// let multiplyeight = table * 9
// let multiplynine = table * 10

// document.write(`Table of ${table}<br>`);
// document.write(`${table} * 1 = ${multiply} <br>`);
// document.write(`${table} * 2 = ${multiplyone} <br>`);
// document.write(`${table} * 3 = ${multiplytwo} <br>`);
// document.write(`${table} * 4 = ${multiplythree} <br>`);
// document.write(`${table} * 5 = ${multiplyfour} <br>`);
// document.write(`${table} * 6 = ${multiplyfive} <br>`);
// document.write(`${table} * 7 = ${multiplysix} <br>`);
// document.write(`${table} * 8 = ${multiplyseven} <br>`);
// document.write(`${table} * 9 = ${multiplyeight} <br>`);
// document.write(`${table} * 10 = ${multiplynine}<br>`);


// question 6:

// let celcius = prompt("Enter your temperature in celcius : ");
// let f = (celcius *9/5)+32;
// document.write(`Your ${celcius}C in Fahrenheit is ${f}F <br>`)
// let fahrenheit= prompt("Enter your temperature in Fahrenheit")
// let c = (fahrenheit-32) *5/9;
// document.write(`Your ${fahrenheit}F in Celcius is ${celcius}C <br>`)

// question 7:

// let item1 = prompt("Enter the price of Item 1")
// let item2 = prompt("Enter the price of Item 2");
// let quantity = prompt("Enter the quantity of Item 1");
// let quantity2 = prompt("Enter the quantity of Item 2");;
// let charges = prompt("Shipping Charges");

// document.write(`Price of Item 1 is ${item1} <br>`)
// document.write(`Quantity of Item 1 is ${quantity} <br>`)
// document.write(`Price of Item 2 is ${item2} <br>`)
// document.write(`Quantity of Item 2 is ${quantity} <br>`)
// document.write(`Shipping Charges ${charges} <br>`)

// question 8:

// let totalmarks = prompt("Enter Total marks");
// let marksobtained = prompt("Enter Obtained marks");
// let percentage = marksobtained/totalmarks*100;
// document.write("<h2>Marks Sheet</h2>")
// document.write(`Total marks : ${totalmarks} <br>`)
// document.write(`Marks obtained : ${marksobtained}<br>`)
// document.write(`Percentage: ${percentage}<br>`)

// question 9:

// 10 dollars and 15 saudi riyals

// let exchangerate_dollar = 104.80
// let exchangerate_riyal = 28
// let totaldollar = 10 * exchangerate_dollar
// let totalriyal = 25 * exchangerate_riyal
// let sum= totaldollar+totalriyal
// document.write("<h2>Currency in PKR</h2>")
// document.write(`Total currency in PKR :${sum}<br>`)

// question 10:

// let num = prompt("Enter a number")
// let newnum = ((num + 5) * 10) / 2;
// document.write(`answer would be : ${newnum}`)

// question 11:

// let currentyear = 2024;
// let birthyear= prompt("Enter Your Birth Year")
// document.write(`Current Year : ${currentyear} <br>`)
// document.write(`Birth Year : ${birthyear}<br>`)
// document.write( "Your age :",currentyear-birthyear)

// question 12:

// let radius = prompt("Enter the radius of circle")
// let circumference = 2 * 3.142 * radius
// let area = 3.142 * radius * radius
// document.write("<h2>The Geometrizer</h2>")
// document.write(`Radius of circle is : ${radius}<br>`)
// document.write(`Circumference of circle is : ${circumference} <br>`)
// document.write(`Area of circle is : ${area}`)


// question 13:

// let snack = prompt("Enter your favourite snack name")
// let age = +prompt("Enter your current age")
// let maximumage = +prompt("Enter your estimated maximum age")
// let amount = +prompt("Enter estimated amount per day")
// let total = prompt("How many would you eat for the rest of your life")

// document.write("<h2>The Lifetime Supply Calculator</h2>")
// document.write(`Current age : ${age}<br>`)
// document.write(`Estimated Maximum Age : ${maximumage}<br>`)
// document.write(`Amount of Snakcs per day : ${amount}<br>`)
// document.write("You will need ", age * 10, snack, "to last you until the ripe old age of", maximumage)


// chapter 6-9:

// question 1:

// let num = prompt("Enter a number")
// document.write(`Result <br>`)
// document.write(`The value of a is : ${num} <br>`)

// ++num;
// document.write(`The value of ++a is : ${num} <br>`)
// document.write(`Now the value of a is : ${num} <br>`)

// num++;
// document.write(`The value of a++ is : ${num} <br>`)
// document.write(`Now the value of a is : ${num} <br>`)

// --num;
// document.write(`The value of --a is : ${num} <br>`)
// document.write(`Now The value of a is : ${num} <br>`)

// document.write(`The value of a-- is : ${num} <br>`)
// document.write(`Now the value of a is : ${num} <br>`)


// question 2:

// var a = 2;
// var b = 1;
// var result = (--a - --b) + (++b + b--);

// document.write("--a : ", --a, "<br>");
// document.write("(--a - --b) :", --a - --b, "<br>");
// document.write("(--a - --b) + (++b) :", (--a - --b) + (++b), "<br>");
// document.write("(--a - --b) + (++b + b--) :", (--a - --b) + (++b + b--), "<br>");

// question 3:

// let name = prompt("Enter Your name :")
// document.write(`Salam ${name}`)

// question 5:

// let number = +prompt("Enter a number for the multiplication table:");

// document.write(`<h3>Multiplication Table of ${number}</h3>`);

// for (let i = 1; i <= 10; i++) {
//     document.write(`${number} * ${i} = ${number * i}<br>`)
// }

// question 6:

// let subject = prompt("Enter name if Subject one:");
// let subject_two = prompt("Enter name if Subject two:");
// let subject_three = prompt("Enter name if Subject three:");
// let totalmarks = 100;
// let subjectmarks = prompt("Enter Subject one marks:");
// let subjecttwo_marks = prompt("Enter Subject two marks:");
// let subjectthree_marks = prompt("Enter Subject three marks:");

// let resultone = subjectmarks / totalmarks * 100;
// let resulttwo = subjecttwo_marks / totalmarks * 100;
// let resultthree = subjectthree_marks / totalmarks * 100;

// document.write('<table border="1" cellspacing="0">');
// document.write('<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>');
// document.write(`<tr><td>${subject}</td><td>${totalmarks}</td><td>${subjectmarks}</td><td>${resultone}%</td></tr>`);
// document.write(`<tr><td>${subject_two}</td><td>${totalmarks}</td><td>${subjecttwo_marks}</td><td>${resulttwo}%</td></tr>`);
// document.write(`<tr><td>${subject_three}</td><td>${totalmarks}</td><td>${subjectthree_marks}</td><td>${resultthree}%</td></tr>`);
// document.write('</table>');
