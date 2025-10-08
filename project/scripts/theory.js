const quizData = [
    {
        question: "What is the basic 12-bar blues progression?",
        options: [
            "I–IV–V",
            "I–II–V",
            "I–V–VI",
            "I–III–V"
        ],
        answer: "I–IV–V"
    },
    {
        question: "Which note gives the 'blues' feeling?",
        options: [
            "Minor third",
            "Perfect fifth",
            "Major second",
            "Major sixth"
        ],
        answer: "Minor third"
    },
    {
        question: "What scale is often used for blues solos?",
        options: [
            "Major scale",
            "Minor pentatonic scale",
            "Chromatic scale",
            "Whole tone scale"
        ],
        answer: "Minor pentatonic scale"
    },
    {
        question: "Who is known as the 'King of the Blues'?",
        options: [
            "Robert Johnson",
            "Muddy Waters",
            "W.C. Handy",
            "B.B. King"
        ],
        answer: "B.B. King"
    },
    {
        question: "What is a 7th chord made of?",
        options: [
            "Root, 3rd, 5th, 7th",
            "Root, 2nd, 4th, 6th",
            "Root, 5th, 7th, 9th",
            "3rd, 5th, 7th, 9th"
        ],
        answer: "Root, 3rd, 5th, 7th"
    }
];

let currentQuestion = 0;
let score = 0;

let savedScore = localStorage.getItem("bluesQuizScore");
if (savedScore) score = parseInt(savedScore);

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const resultDiv = document.getElementById("result");

function showQuestion() {
    const q = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h3>${q.question}</h3>
        ${q.options.map((opt, i) => `
            <label>
                <input type="radio" name="option" value="${opt}">
                ${opt}
            </label><br>
        `).join("")}
    `;
    resultDiv.textContent = "";
}

function checkAnswer() {
    const selected = document.querySelector("input[name='option']:checked");
    if (!selected) {
        resultDiv.textContent = "Please select an answer!";
        return false;
    }

    const answer = selected.value;
    const correct = quizData[currentQuestion].answer;

    if (answer === correct) {
        score++;
        resultDiv.innerHTML = `<p>✅ Correct! "${answer}" is the right answer.</p>`;
    } else {
        resultDiv.innerHTML = `<p>❌ Incorrect! The correct answer is "${correct}".</p>`;
    }

    localStorage.setItem("bluesQuizScore", score);
    return true;
}

nextBtn.addEventListener("click", () => {
    if (!checkAnswer()) return;

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        setTimeout(showQuestion, 800);
    } else {
        quizContainer.innerHTML = `<h3>Quiz Complete!</h3>`;
        resultDiv.innerHTML = `<p>Your final score: ${score} / ${quizData.length}<br><br>Refresh the page to try again</p>`;
        nextBtn.style.display = "none";
        localStorage.removeItem("bluesQuizScore"); // reset for next visit
    }
});

showQuestion();

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("burguer-menu");
    const menu = document.getElementById("main-menu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});

const date = document.querySelector("#currentyear")

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
