let currentQuestionIndex = 0;
let rightQuestions = 0;

function init() {
  showProgress(currentQuestionIndex);
}

function showProgress(currentIndex) {
  const currentNumber = currentIndex + 1;
  const allQuestions = questions.length;
  document.getElementById("progress").innerHTML =
    `<span>${currentNumber} von ${allQuestions} Fragen</span>`;
  document.getElementById("progressBarFill").style.width =
    (currentNumber / allQuestions) * 100 + "%";

  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestionIndex];

  document.getElementById("questionBox").innerHTML = question.question;
  document.getElementById("option1").innerHTML = question.options[0].text;
  document.getElementById("option2").innerHTML = question.options[1].text;
  document.getElementById("option3").innerHTML = question.options[2].text;
  document.getElementById("option4").innerHTML = question.options[3].text;
}

function answer(selection) {
  let question = questions[currentQuestionIndex];
  let selectedOption = question.options[selection];
  let selectedElement = document.getElementById(`option${selection + 1}`);

  if (selectedOption.isCorrect) {
    selectedElement.classList.add("correct");
    rightQuestions++;
  } else {
    selectedElement.classList.add("wrong");
  }

  selectedElement.innerHTML = selectedOption.feedback;

  document.getElementById("nextBtn").disabled = false;

  lockAnswers();
}

function nextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    document.getElementById("nextBtn").disabled = true;
    document.getElementById("feedbackBox").classList.add("d-none");
    resetClasses()
    showProgress(currentQuestionIndex);
  } else {
    showEndScreen();
  }
}

function lockAnswers() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`option${i}`).parentElement.style.pointerEvents = "none";
  }
}

function resetClasses() {
  for (let i = 1; i <= 4; i++) {
    let el = document.getElementById(`option${i}`);
    el.classList.remove("correct", "wrong");
    el.parentElement.style.pointerEvents = "auto";
  }
}

function showEndScreen() {
    document.getElementById("feedbackBox").classList.add("d-none");
    document.getElementById("nextBtn").classList.add("d-none");

    for (let i = 1; i <= 4; i++) {
        document.getElementById(`option${i}`).parentElement.classList.add("d-none");
    }

    document.getElementById("questionBox").innerHTML = getResultHtml();
}

function getResultHtml(){
    return `
        <div class="text-center">
            <h2>Quiz beendet!</h2>
            <p>Vielen Dank fürs Mitmachen.</p>
            <div class="cup">
                <img src="./imgs/cup.PNG" alt="Ein Pokal">
            </div>
            <button class="main-btn shadow" onclick="location.reload()">Nochmal spielen</button>
        </div>
    `;
}