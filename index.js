var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + " to 'COMPLETE THE MOVIE NAME' Game.... are you excited 😋🤩🙈 ? ");

// cosole.log("For every correct answer there is +5 marks and for every Wrong answer there is -1 Marking !")

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("You are Right 👏");
    
    score = score + 5;
    console.log("+5");

  
  } else{
    console.log("You are wrong ✖");
    console.log("The right answer is 👉 ", answer)
    score = score - 1;
    console.log("-1");

  }
    console.log("total score:",score);
    console.log("--------------")
    // console.log("Total score:" ,score)
}

var questions = [{
  question:"01. roop Ki rani______________?",
  answer:"choron ka raja"
}, {
  question:"02. hello! hum lallan_____________?",
  answer:"bol rahe hain"
},{
  question:"03. luv shuv tey____________?",
  answer: "chicken khurana"
},{
  question:"04. kaala___________?",
  answer:"kaandi"
}];

// loop

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}


console.log("YAY 🥳 You played well ! Your total SCORE is:" , score)

