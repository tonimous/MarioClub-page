const popupClose = document.querySelector('.popup-close');
const popup = document.querySelector('.popup-wrapper');
const body = document.querySelector('body');
const joinForm = document.querySelector('.join-form');
const feedback = document.querySelector('.feedback');
const emailPattern = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
// let shuffledQuestions, currentQuestionIndex 




// log the email to the console 

joinForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(joinForm.email.value);


    // validation of the email

    const email = joinForm.email.value;

    if (emailPattern.test(email)) {
        feedback.innerHTML = 'Thank you for joining our community!!!';
        feedback.style.color = 'inherit'
    } else {
        feedback.innerHTML = 'Please insert a valid e-mail address.'
        feedback.style.color = 'red'
    }
    joinForm.reset();
    setTimeout(() => { feedback.innerHTML = '' }, 3000)
});

// keyup event validation



joinForm.addEventListener('keyup', e => {
    if (emailPattern.test(e.target.value)) {
        joinForm.email.setAttribute('class', 'success');
    } else {
        joinForm.email.setAttribute('class', 'error');
    }
});

// popup window after pageload 

setTimeout(function removeProperty() {
    popup.style.setProperty('display', 'block')
    document.querySelector('body').style.setProperty('overflow', 'hidden')
}, 3000);

// closes the popup by clicking the x button 

popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    document.querySelector('body').style.removeProperty('overflow')
});

// closes the popup by clicking everywhere inside popup-wrapper

// popup.addEventListener('click', () => {
//     popup.style.display = 'none';
//     document.querySelector('body').style.removeProperty('overflow')
// });


// quiz functions







// quiz questions 

const questions = [
    {
        question: 'When was Nintendo founded?',
        answers: [
            { text: '23 September 1889', correct: true },
            { text: '15 October 1899', correct: false },
            { text: '01 May 1901', correct: false }
        ]
    },
    {
        question: 'Where was Nintendo founded?',
        answers: [
            { text: 'Kyoto', correct: false },
            { text: 'Saporo', correct: false },
            { text: 'Shimogyō-Ku', correct: true }
        ]
    },
    {
        question: 'Who founded Nintendo?',
        answers: [
            { text: 'Fusajiro Yamauchi', correct: true },
            { text: 'Hidetaka Miyazaki', correct: false },
            { text: 'Shigeru Miyamoto', correct: false }
        ]
    },
    {
        question: 'Which console was the successor of WiiU?',
        answers: [
            { text: 'Nintendo Switch', correct: true },
            { text: 'Nintendo Wii', correct: false },
            { text: 'Nintendo GameCube', correct: false }
        ]
    },
    {
        question: '"Yoshi&apos;s Crafted World" is exclusive to which Nintendo console?',
        answers: [
            { text: 'Nintendo GameBoy', correct: false },
            { text: 'Nintendo Switch', correct: true },
            { text: 'Nintendo 64', correct: false }
        ]
    },
    {
        question: 'Which year did Nintendo win an Emmy for their original control pad?',
        answers: [
            { text: '2006', correct: false },
            { text: '2007', correct: true },
            { text: '2008', correct: false }
        ]
    },
    {
        question: 'Which is the best-selling Nintendo exclusive game of all time?',
        answers: [
            { text: 'Wii Sports', correct: true },
            { text: 'Super Mario Bros', correct: false },
            { text: 'Pokemon Red/ Green/ Blue/ Yellow', correct: false }
        ]
    },
    {
        question: 'Luigi is what relation to Super Mario?',
        answers: [
            { text: 'His Uncle', correct: false },
            { text: 'His Brother', correct: true },
            { text: 'His Friend', correct: false }
        ]
    },
    {
        question: 'Which year did Mario go three dimensional?',
        answers: [
            { text: '1994', correct: false },
            { text: '1995', correct: false },
            { text: '1996', correct: true }
        ]
    },
    {
        question: 'Which "Legend Of Zelda" game celebrated its 20th anniversary at the end of April 2020?',
        answers: [
            { text: 'The Legend Of Zelda: Majora&apos;s Mask.', correct: true },
            { text: 'The Legend of Zelda: Breath of the Wild', correct: false },
            { text: 'The Legend of Zelda: Ocarina of Time', correct: false }
        ]
    }
];

const correctAnswers = questions.filter(c => {
    if (c.answers === true) {
        return c.answers
    }
});


