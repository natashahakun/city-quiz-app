var currentQuestion = 0;
var tally = 0;

var quiz = [
  {
    "questionName":" ",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correctAnswer": 2
  }
]

var askQuestion = function(question){
  document.getElementById("question").innerHTML = question.questionName;
  for (i = 0; i < question.options.length; i++) {
    document.getElementsByClassName("option")[i].innerHTML=question.options[i];
  }
  var oldSubmit = document.getElementById("submit");
  var newSubmit = submit.cloneNode(false);
  var form = document.getElementsByTagName("form")[0];
  form.replaceChild(newSubmit, oldSubmit);
  newSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    answerQuiz(question);
  })
}

var answerQuiz = function(question){
  var radios = document.getElementsByTagName("input");
  var answer = radios[question.correctAnswer];
  if (answer.checked == true) {
    console.log("Correct!")
    tally += 1;
    answer.checked = false;
  }
  if (currentQuestion < 4) {
    currentQuestion += 1;
    question = quiz[currentQuestion];
    askQuestion(question);
    document.getElementById("score").innerHTML = ("Current number correct: " + tally);
  } else {
      document.getElementById("score").innerHTML = ("Your score is " + tally + " out of 5!");
      document.getElementById("question-div").style.display = "none";
      var playAgain = document.createElement('button');
      playAgain.innerHTML = "Play Again";
      document.getElementsByClassName("question-container")[0].appendChild(playAgain);
      playAgain.addEventListener("click", function(event){
        tally = 0;
        currentQuestion = 0;
        question = quiz[currentQuestion];
        document.getElementById("question-div").style.display = "inline-block";
        document.getElementById("score").innerHTML = "";
        document.getElementsByClassName("question-container")[0].removeChild(playAgain);
        askQuestion(question);
      })
  }
  for ( i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
}

quiz[0] = {questionName: "Which city has the most miles of bike lanes?", options: ["Portland", "San Diego", "Phoenix", "New York"], correctAnswer: 1}

quiz[1] = {questionName: "Which city has the largest urban park?", options: ["Boston", "New York", "Minneapolis", "Scottsdale"], correctAnswer: 3}

quiz[2] = {questionName: "Which city has the most eateries per capita?", options: ["New York", "Seattle", "San Francisco", "Austin"], correctAnswer: 2}

quiz[3] = {questionName: "Which city has the most colleges and universities?", options: ["Philadelphia", "Boston", "Chicago", "New York"], correctAnswer: 1}

quiz[4] = {questionName: "Which city has the most trees per capita?", options: ["Sacramento", "Raleigh", "Boulder", "Portland"], correctAnswer: 0}

var question = quiz[currentQuestion];

window.onload = function(){
  askQuestion(question);
}
