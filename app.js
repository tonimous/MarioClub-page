// Get elements
const popupWrapper = document.querySelector(".popup-wrapper");
const popupClose = document.querySelector(".popup-close");
const joinForm = document.querySelector(".join-form");
const feedback = document.querySelector(".feedback");
const emailPattern =
  /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

// Show the popup
document.addEventListener("DOMContentLoaded", function () {
  // Check if user has visited before
  if (!sessionStorage.getItem("visited")) {
    // Show the popup
    setTimeout(() => {
      popupWrapper.style.display = "block";
      popupWrapper.classList.add("show");
    }, 2000); // Adjust the timeout as needed

    // Mark that the user has visited
    sessionStorage.setItem("visited", "true");
  }

  // Hide the popup
  popupClose.addEventListener("click", function () {
    popupWrapper.style.display = "none";
    popupWrapper.classList.remove("show");
  });

  // Optional: hide popup when clicking outside of it
  // popupWrapper.addEventListener("click", function (event) {
  //   if (event.target === popupWrapper) {
  //   popupWrapper.style.display = 'none';
  // popupWrapper.classList.remove("show");
  // }
  // });
});

// Email validation
joinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = joinForm.email.value;

  // Log the email to the console
  console.log(email);

  if (emailPattern.test(email)) {
    feedback.innerHTML = "Thank you for joining our community!!!";
    feedback.style.color = "inherit";
  } else {
    feedback.innerHTML = "Please insert a valid e-mail address.";
    feedback.style.color = "red";
  }

  joinForm.reset();
  setTimeout(() => {
    feedback.innerHTML = "";
  }, 3000);
});

// Keyup event validation
joinForm.addEventListener("keyup", (e) => {
  if (emailPattern.test(e.target.value)) {
    joinForm.email.classList.add("success");
    joinForm.email.classList.remove("error");
  } else {
    joinForm.email.classList.add("error");
    joinForm.email.classList.remove("success");
  }
});

// Image Zoom
document.querySelectorAll(".images li img").forEach((img) => {
  img.addEventListener("mousedown", function () {
    this.style.zIndex = 10; // Set higher z-index immediately
    this.classList.add("zoomed");
  });

  img.addEventListener("mouseup", function () {
    clearTimeout(this.zoomTimeout);
    if (this.classList.contains("zoomed")) {
      this.classList.remove("zoomed");
    }
  });

  img.addEventListener("mouseleave", function () {
    clearTimeout(this.zoomTimeout);
    this.classList.remove("zoomed");
    this.style.zIndex = 1; // Reset z-index
  });
});

// quiz functions

// quiz questions

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
    question:
      '"Yoshi&apos;s Crafted World" is exclusive to which Nintendo console?',
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
      'Which "Legend Of Zelda" game celebrated its 20th anniversary at the end of April 2020?',
    answers: [
      { text: "The Legend Of Zelda: Majora&apos;s Mask.", correct: true },
      { text: "The Legend of Zelda: Breath of the Wild", correct: false },
      { text: "The Legend of Zelda: Ocarina of Time", correct: false },
    ],
  },
];

const correctAnswers = questions.filter((c) => {
  if (c.answers === true) {
    return c.answers;
  }
});
