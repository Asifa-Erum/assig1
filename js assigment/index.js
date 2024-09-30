                                            // Alert Chapter  //

// Qno:1;
//What does alert do in js?
//Ans:
// Alert shows our message by pop up as.
// alert("Hello it's me Asifa Erum!");

//Qno2:
// alert("Welcome to my website.");

//Qno:3
// ALERT("hello");
// when we write alert in capital letter it does'nt show the alert.

// Qno:4
// alert("Hello, world!");

// Qno:5
// We use alert for showing pop up to user like low charging alert, etc.



                                        //    Variables for strings       //

// Qno:1
// var message="Hello , world";
// alert(message);

// Qno:2
// var age;
// twentyFive=30;
// alert(twentyFive)

// Qno:3
// var greetings="Good morning!";
// greetings="Good evening!"
// alert(greetings);


// Qno:4;
// var favouriteColor="blue";
// alert("my favourite color is " + favouriteColor);

// Qno:5
// var age;
// twentyFive=30;
// alert(twentyFive);



                                        // Variables of number  //
 
//  Qno:1
// var height=170;
// var newHeight=10;
// var result =height+newHeight;
// alert(result);

//  Qno:2

// var num1=50;
// var num2=30;
// var result =num1+num2;
// alert(num1+num2);

//  Qno:3





//  Qno:4

// var price=120;
// var newPrice=12;
// var total=price+newPrice
// alert(total);               



          
                                            // Alert Chapter  //

//  Qno:1
//  var myAddres ="karachi";
//  alert(myAddres);


//  Qno:2

// var userName=" asifa";
// var userEmail="abc@gmail.com";
// var userPassword=304466;
// var userData="Username: " +userName+ " userEmail: "+userEmail + " Userpassword:" + userPassword;
// alert(userData);

//  Qno:3
// var user adress;
// when we write variable like this it gives error that's why we use camelCase while assiging variable
// var userAddress="Lahore";
// alert(userAddress);

// Qno:4
// var rose='Floribundas';
// var Rose='Floribundas';
// alert(rose);
// alert(Rose);
// Both are doing work same!



                        //    Math expression : Fimilar operators  //

//   Qno:1
// var num1 = 25;
// var num2 = 30;
// var sum = num1 + num2;
// alert(sum);                      

// Qno:2

// var num1=25;
// var num2= 5;
// var sum =num1+num2;
// alert(sum);

// Qno:3

// var num =27%4;
// alert(num);



                        //    Math expression : Unfamilar operators  //
               
// Qno:1
// var num =3;
// num++;
//  var newNum = num;
//  alert(num);
//  alert(newNum);


// Qno:2

// var counter= 10;
// counter++;
// alert(counter);

// Qno:3

// var point =20;
// point--;
// ++point;
// alert(point);

// Qno:4

// var number=0;
// ++ number;
// ++ number;
// ++ number;
// alert(number);




                        //    Math expression : eliminating ambiguity  //

//   Qno:1

// var num =20%6;
// console.log(num);

//   Qno:2

//var expressionValue =(6+2)*(5-3);
// alert(expressionValue);
// it solved by dmas rule
//First divide , multiply , addition and then subtraction





                        //   Prompt  //


//  Qno:1

// var userName=prompt("what is your name?");
// alert("hello " + userName);

// Qno:2;

// var userAge=prompt("how old are you?");
// var ans=" you are " +   userAge + " year old.";
// alert(ans);

// Qno:3;

// var user=prompt("How many pets do you have?");
// var value = user;
// if (user==value) {
//     alert(value);
// }else if (user =="nothing"){
//     alert("You don't have anything")
// }

// Qno4:

// var user=prompt("Enter the number");
// alert(user*2);

// Qno:5;

// var user = prompt("What's your favourite number?");
// var defaultNumber = 7;
// if (user === "") {
//     alert(defaultNumber);
// } else {
//     alert(user);
// }



                //  If statements //

//   Qno:1;
// var user = prompt("What's the capital of france?");
// if (user === "Paris") {
//     alert("Correct")
// } else {
//     alert("Try again!")
// }

//   Qno:2;

// var user = prompt("What's the capital of the United Kingdom?");
// var london = "London";
// var uk = "The United Kingdom";

// if (user === london || user === uk) {
//     alert("Correct");
// } else {
//     alert("Wrong");
// }


// Qno:3;

// var questions = [
//     "What's the capital of the United Kingdom?",
//     "What's 2 + 2?",
//     "What's the color of the sky?",
//     "What's 5 - 3?",
//     "What's the largest planet in our solar system?",
//     "What's 10 divided by 2?",
//     "What's the capital of France?",
//     "What's 3 times 3?",
//     "What's the first month of the year?",
//     "What's the sum of 1 and 1?"
// ];

// var answers = [
//     "London",
//     "4",
//     "blue",
//     "2",
//     "Jupiter",
//     "5",
//     "Paris",
//     "9",
//     "January",
//     "2"
// ];

// var no = 0; 

// for (var i = 0; i < questions.length; i++) {
//     var userAnswer = prompt(questions[i]);
    
//     if (userAnswer === answers[i]) {
//         alert("Correct");
//     } else {
//         alert("Wrong");
//         no++; 
//     }
// }
// alert("Total wrong answers: " + no);


// Qno:4
// var question1 = "What is 10 + 10?";
// var question2 = "What is the capital of germany?";
// var answer1 = "20"; 
// var answer2 = "Berline"; 

// var score = 0; 

// var userAnswer1 = prompt(question1);
// if (userAnswer1 === answer1) {
//     score++;
// }

// var userAnswer2 = prompt(question2);
// if (userAnswer2 === answer2) {
//     score++;
// }

// if (score === 2) {
//     alert("Good!");
// } else {
//     alert("You got " + score + " marks.");
// }
