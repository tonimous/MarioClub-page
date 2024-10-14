// Quiz functions

// Ensure 'DOMContentLoaded' fires
document.addEventListener("DOMContentLoaded", function () {
  // Render quiz
  renderQuiz();
});

// Function to render quiz questions and answers
const questions = [
  {
    question: "When was Nintendo founded?",
    answers: [
      { text: "23 September 1889", correct: true },
      { text: "15 October 1899", correct: false },
      { text: "01 May 1901", correct: false },
    ],
  },
  {
    question: "Where was Nintendo founded?",
    answers: [
      { text: "Kyoto", correct: false },
      { text: "Saporo", correct: false },
      { text: "Shimogyō-Ku", correct: true },
    ],
  },
  {
    question: "Who founded Nintendo?",
    answers: [
      { text: "Fusajiro Yamauchi", correct: true },
      { text: "Hidetaka Miyazaki", correct: false },
      { text: "Shigeru Miyamoto", correct: false },
    ],
  },
  {
    question: "Which console was the successor of WiiU?",
    answers: [
      { text: "Nintendo Switch", correct: true },
      { text: "Nintendo Wii", correct: false },
      { text: "Nintendo GameCube", correct: false },
    ],
  },
  {
    question: "Yoshi's Crafted World is exclusive to which Nintendo console?",
    answers: [
      { text: "Nintendo GameBoy", correct: false },
      { text: "Nintendo Switch", correct: true },
      { text: "Nintendo 64", correct: false },
    ],
  },
  {
    question:
      "Which year did Nintendo win an Emmy for their original control pad?",
    answers: [
      { text: "2006", correct: false },
      { text: "2007", correct: true },
      { text: "2008", correct: false },
    ],
  },
  {
    question: "Which is the best-selling Nintendo exclusive game of all time?",
    answers: [
      { text: "Wii Sports", correct: true },
      { text: "Super Mario Bros", correct: false },
      { text: "Pokemon Red/ Green/ Blue/ Yellow", correct: false },
    ],
  },
  {
    question: "Luigi is what relation to Super Mario?",
    answers: [
      { text: "His Uncle", correct: false },
      { text: "His Brother", correct: true },
      { text: "His Friend", correct: false },
    ],
  },
  {
    question: "Which year did Mario go three dimensional?",
    answers: [
      { text: "1994", correct: false },
      { text: "1995", correct: false },
      { text: "1996", correct: true },
    ],
  },
  {
    question:
      "Which Legend Of Zelda game celebrated its 20th anniversary at the end of April 2020?",
    answers: [
      { text: "The Legend Of Zelda: Majora's Mask.", correct: true },
      { text: "The Legend of Zelda: Breath of the Wild", correct: false },
      { text: "The Legend of Zelda: Ocarina of Time", correct: false },
    ],
  },
];

// Function to get random questions
function getRandomQuestions(array, num) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

// Function to render quiz
function renderQuiz() {
  const quizContainer = document.getElementById("quiz");
  const randomQuestions = getRandomQuestions(questions, 4); // Get 4 random questions

  randomQuestions.forEach((questionObj, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-block");

    const question = document.createElement("h2");
    question.textContent = `${index + 1}. ${questionObj.question}`;
    questionDiv.appendChild(question);

    questionObj.answers.forEach((answerObj) => {
      const answerDiv = document.createElement("div");
      answerDiv.classList.add("answer-block");

      const answer = document.createElement("button");
      answer.textContent = answerObj.text;
      answer.classList.add("answer-button");
      answer.dataset.correct = answerObj.correct;
      answer.onclick = checkAnswer;

      answerDiv.appendChild(answer);
      questionDiv.appendChild(answerDiv);
    });

    quizContainer.appendChild(questionDiv);
  });
}

let score = 0;
let answeredQuestions = 0;

// Function to check the answer
function checkAnswer(event) {
  const button = event.target;
  const correct = button.dataset.correct === "true";
  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("incorrect");
  }
  answeredQuestions++;

  // Disable all buttons after answer is selected
  const allButtons =
    button.parentElement.parentElement.querySelectorAll(".answer-button");
  allButtons.forEach((btn) => {
    btn.disabled = true;
  });

  // Show score after answering all questions
  if (answeredQuestions === 4) {
    const scoreDisplay = document.getElementById("score");
    if (score < 3) {
      scoreDisplay.textContent = `You need to study more. You scored ${score} out of 4!`;
    } else {
      scoreDisplay.textContent = `Great job! You scored ${score} out of 4!`;
    }
  }
}

// Ensure the quiz renders on page load
document.addEventListener("DOMContentLoaded");
