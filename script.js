let responses = {};

function startQuiz() {
    document.getElementById("home-page").style.display = "none";
    document.querySelector(".quiz-container").style.display = "block";
}

function nextQuestion(questionNumber, answer) {
    responses[`question${questionNumber}`] = answer;

    document.getElementById(`question${questionNumber}`).style.display = 'none';
    document.getElementById(`options${questionNumber}`).style.display = 'none';

    let nextQuestion = questionNumber + 1;

    if (responses.question1 === '0-10') {
        if (questionNumber === 1) {
            document.getElementById(`question2`).style.display = 'block';
            document.getElementById(`options2`).style.display = 'block';
        } else if (questionNumber === 9) {
            showResult();
        }
    } else if (responses.question1 === '11-20') {
        if (questionNumber === 1) {
            document.getElementById(`question3`).style.display = 'block';
            document.getElementById(`options3`).style.display = 'block';
        } else if (questionNumber === 11) {
            showResult();
        }
    } else if (responses.question1 === '21-30') {
        if (questionNumber === 1) {
            document.getElementById(`question4`).style.display = 'block';
            document.getElementById(`options4`).style.display = 'block';
        } else if (questionNumber === 13) {
            showResult();
        }
    }
}

function showResult() {
    let recommendation = "Based on your answers, we recommend the following product(s): ";

    if (responses.question1 === '0-10') {
        recommendation += `<br><strong>Nintendo Switch</strong>`;
    } else if (responses.question1 === '11-20') {
        recommendation += `<br><strong>Apple AirPods Pro</strong>`;
    }

    document.getElementById("result").innerHTML = recommendation;
    document.getElementById("result").style.display = 'block';
}

function restartQuiz() {
    location.reload();
}
