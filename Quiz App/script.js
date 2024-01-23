const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1923", "1931"],
        correctAnswer: "1912"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    }
];


let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.innerHTML = questions[currentQuestion].question;

    optionsContainer.innerHTML = "";
    for (const option of questions[currentQuestion].options) {
        optionsContainer.innerHTML += `
            <input type="radio" name="option" value="${option}" id="${option}">
            <label for="${option}">${option}</label><br>
        `;
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].correctAnswer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }

        selectedOption.checked = false;
    } else {
        alert("Please select an option.");
    }
}

function showResult() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `You scored ${score} out of ${questions.length}.`;
}

// Initial load
loadQuestion();
