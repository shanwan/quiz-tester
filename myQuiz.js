/*
Create your quiz in this file.
Note the tests will only work if you name your functions accordingly based on the instructions.
*/
var question1 = {
  prompt: "When did Singapore become independent?",
  options: ["9 March 1954", "3 April 1984", "9 August 1965", "16 November 1975"],
  correctAnswerIndex: 2
}

var question2 = {
  prompt: "Which country is to the north of Singapore?",
  options: ["Australia", "Malaysia", "Philippines", "Sri Lanka"],
  correctAnswerIndex: 1
}

var question3 = {
  prompt: "What does Singapore mean?",
  options: ["Garden City", "Yengema", "Freetown", "Lion City"],
  correctAnswerIndex: 3
}

var question4 = {
  prompt: "Which is the capital of Singapore?",
  options: ["Bukum", "Tekong", "Singapore", "Ubin"],
  correctAnswerIndex: 2
}

var question5 = {
  prompt: "Which is the currency of Singapore?",
  options: ["Dollar", "Lats", "Pound", "Baht"],
  correctAnswerIndex: 0
}

var question6 = {
  prompt: "Which of the following is not an official language of Singapore?",
  options: ["Chinese", "English", "Urdu", "Malay"],
  correctAnswerIndex: 2
}

var question7 = {
  prompt: "When did Thomas Stamford Raffles land on Singapore?",
  options: ["29 January 1819", "10 May 1800", "4 July 1865", "18 October 1905"],
  correctAnswerIndex: 0
}

var question8 = {
  prompt: "When did Singapore become a crown colony?",
  options: ["1936", "1946", "1922", "1912"],
  correctAnswerIndex: 1
}

var question9 = {
  prompt: "What is the symbolism of crescent on Singapore’s flag?",
  options: ["Growth of a young country", "Islam", "Hinduism", "Judaism"],
  correctAnswerIndex: 0
}

var question10 = {
  prompt: "Who was Singapore’s first prime minister?",
  options: ["Lee Hsien Loong", "Goh Chok Tong", "Ong Teng Cheong", "Lee Kuan Yew"],
  correctAnswerIndex: 3
}

var quiz = {
  questions: [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10], // question1 and question2 were defined above!
  isGameOver: false,
  currentQuestion: 0,
  player1Points: 0,
  player2Points: 0
}

var quizlength = 0;
var player = 1;
// var result = false;

// It should return an integer that is the number of questions in a game
function numberOfQuestions() {
  quizlength = quiz.questions.length;
  return quizlength // notetoself = if do not return, no number given
}

// console.log("total number of questions = " + numberOfQuestions());

// It should return an integer that is the zero-based index of the current question in the quiz
function currentQuestion() {
  return quiz.currentQuestion
}

// It should return an integer that is the zero-based index the correct answer for the current question
function correctAnswer() {
  // console.log("correct" + quiz.questions[quiz.currentQuestion].correctAnswerIndex);
  return quiz.questions[quiz.currentQuestion].correctAnswerIndex
}

// console.log("the correct answer is " + quiz.questions[0].correctAnswerIndex);

// It should return an integer that is the number of choices for the current question
function numberOfAnswers() {
  return quiz.questions[quiz.currentQuestion].options.length
}

// console.log("no of options for this question is " + quiz.questions[0].options.length);

// It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
function playTurn(choice) {
  if (isGameOver()) {
    console.log("check for whether game is over" + isGameOver())
    return false
  }
  console.log("player turn = " + player);
  console.log(quiz.player1Points);
  console.log(quiz.player2Points);
  var result = false;
  if (choice === quiz.questions[quiz.currentQuestion].correctAnswerIndex) {
    result = true
    if (player === 2) {
      quiz.player2Points++
    } else {
      quiz.player1Points++
    }
    // if (quiz.currentQuestion % 2) {
    //   quiz.player2Points++
    // } else {
    //   quiz.player1Points++
    // }
  }
  quiz.currentQuestion = quiz.currentQuestion + 1
  if (player === 2) {
    player = 1
  } else {
    player = 2
  }
  drawNextQuestion()
  // whoWon()
  // isGameOver()
  return result
}

// It should return a true or false if the quiz is over.
function isGameOver() {
  if (currentQuestion() === numberOfQuestions()) {
    quiz.isGameOver = true;
    return true;
  } else {
    quiz.isGameOver = false;
    return false;
  }
}

// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.
function whoWon() {
  if ((quiz.currentQuestion + 1) < quiz.questions.length && isGameOver() === false) {
    console.log("game is ongoing");
    return 0
  } else if (quiz.player1Points> quiz.player2Points && isGameOver() === true) {
    alert("Player 1 wins!");
    return 1
  } else if (quiz.player2Points> quiz.player1Points && isGameOver() === true) {
    alert("Player 2 Wins!")
    return 2
  } else {
    alert("It's a draw!")
    return 3
  }
}

function restart() {
  quiz.isGameOver = false
  quiz.currentQuestion = 0
  quiz.player1Points = 0
  quiz.player2Points = 0
  $("#question").html("Get Ready!")
  $("#qNum").html(0)
  $("#optA").html("option a:")
  $("#optB").html("option b:")
  $("#optC").html("option c:")
  $("#optD").html("option d:")
  player = 1
}

function drawNextQuestion() {
  if (isGameOver()) {
    $("#question").text("Gameover")
   }
  $("#question").html(quiz.questions[currentQuestion()].prompt)
  $("#qNum").html(currentQuestion()+1)
  $("#optA").html(quiz.questions[currentQuestion()].options[0])
  $("#optB").html(quiz.questions[currentQuestion()].options[1])
  $("#optC").html(quiz.questions[currentQuestion()].options[2])
  $("#optD").html(quiz.questions[currentQuestion()].options[3])
  $('h3').eq(0).text("Player 1: " + quiz.player1Points)
  $('h3').eq(1).text("Player 2: " + quiz.player2Points)
}

// $("#playerOne").html(quiz.player1Points)
// $("#playerTwo").html(quiz.player2Points)
$("#startButton").click(drawNextQuestion)
$("#resetButton").click(restart)
$("#optA").click(function () {
  playTurn()
})
$("#optB").click(function () {
  playTurn()
})
$("#optC").click(function () {
  playTurn()
})
$("#optD").click(function () {
  playTurn()
})
