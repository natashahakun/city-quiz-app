var currentQuestion = 0;

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

var askQuestion = function(){
  document.getElementById("question").innerHTML = question.questionName;
  for (i = 0; i < question.options.length; i++) {
    document.getElementsByClassName("option")[i].innerHTML=question.options[i];
  }
}

var answerQuiz = function(question){

}

quiz[0] = {questionName: "Which city has the most miles of bike lanes?", options: ["Portland", "San Diego", "Phoenix", "New York"], correctAnswer: 1}

quiz[1] = {questionName: "Which city has the largest urban park?", options: ["Boston", "New York", "Minneapolis", "Scottsdale"], correctAnswer: 3}

quiz[2] = {questionName: "Which city has the most eateries per capita?", options: ["New York", "Seattle", "San Francisco", "Austin"], correctAnswer: 2}

quiz[3] = {questionName: "Which city has the most colleges and universities?", options: ["Philadelphia", "Boston", "Chicago", "New York"], correctAnswer: 1}

quiz[4] = {questionName: "Which city has the most trees per capita?", options: ["Sacramento", "Raleigh", "Boulder", "Portland"], correctAnswer: 0}

var question = quiz[currentQuestion];

window.onload = function(){
  askQuestion();
  var form = document.getElementById("submit");
  form.addEventListener("click", function(event) {
    event.preventDefault();
    answerQuiz(question);
  })
}
