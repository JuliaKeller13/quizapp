let currentQuestionIndex = 0;
let rightQuestions = 0;
let questions = [];
const quizContainer = document.getElementById("quizContainer");
let audioRight = new Audio('audio/right.mp3');
let audioWrong = new Audio('audio/wrong.mp3');
let audioConfetti = new Audio('audio/confetti.mp3');

function init() {
  renderQuizStartCard();
}

function renderQuizStartCard() {
  quizContainer.innerHTML = `
        <div class=" card card-body shadow">
            <h1 class="text-center mt-4">Willkommen beim Quiz! <img class="small-icon" src="./imgs/rocket.PNG" alt="Rakete-Emoji"></h1>
            <p class="text-center fs-5">Wähle ein Thema aus, um zu starten:</p>
            <div class="topics">
              <button class="main-btn shadow flex-grow-1" onclick="startQuiz('html')">HTML</button>
              <button class="main-btn shadow flex-grow-1" onclick="startQuiz('css')">CSS</button>
              <button class="main-btn shadow flex-grow-1" onclick="startQuiz('js')">JavaScript</button>
            </div>
        </div>
    `;
}

function startQuiz(topic) {
  questions = allTopicQuestions.filter((q) => q.topic === topic);
  totalQuestionsCount = questions.length;
  currentQuestionIndex = 0;
  rightQuestions = 0;
  renderQuizCard(currentQuestionIndex);
  showProgress(0);
  showQuestion();
}

function renderQuizCard() {
  quizContainer.innerHTML = `
    <div class="card">
          <div class="progress" id="progress"></div>
          <div id="progress-bar-container">
            <div id="progressBarFill" class="progress-bar-fill"></div>
          </div>
          <div class="card-body shadow">
            <h5 class="card-title" id="questionBox">Frage</h5>
            <div class="card" onclick="answer(0)">
              <div class="card-body shadow-sm answer-card" id="option1">Antwort</div>
            </div>
            <div class="card" onclick="answer(1)">
              <div class="card-body shadow-sm answer-card" id="option2">Antwort</div>
            </div>
            <div class="card" onclick="answer(2)">
              <div class="card-body shadow-sm answer-card" id="option3">Antwort</div>
            </div>
            <div class="card" onclick="answer(3)">
              <div class="card-body shadow-sm answer-card" id="option4">Antwort</div>
            </div class="topic-section">
            <button disabled type="button" class="main-btn shadow" id="nextBtn" onclick="nextQuestion()">Weiter</button>
            <div class="card-body shadow-sm answer-card d-none" id="feedbackBox">Feedback</div>
          </div>
        </div>
  `;
}

function showQuestion() {
  let question = questions[currentQuestionIndex];
  document.getElementById("questionBox").innerHTML = question.question;
  document.getElementById("option1").innerHTML = question.options[0].text;
  document.getElementById("option2").innerHTML = question.options[1].text;
  document.getElementById("option3").innerHTML = question.options[2].text;
  document.getElementById("option4").innerHTML = question.options[3].text;
}

function showProgress(currentIndex) {
  const currentNumber = currentIndex + 1;
  const oneTopicQuestions = questions.length;
  document.getElementById("progress").innerHTML =
    `<span>${currentNumber} von ${oneTopicQuestions} Fragen</span>`;
  document.getElementById("progressBarFill").style.width =
    (currentNumber / oneTopicQuestions) * 100 + "%";
}

function answer(selection) {
  let question = questions[currentQuestionIndex];
  let selectedOption = question.options[selection];
  let selectedElement = document.getElementById(`option${selection + 1}`);

  if (selectedOption.isCorrect) {
    selectedElement.classList.add("correct");
    audioRight.play();
    rightQuestions++;
  } else {
    selectedElement.classList.add("wrong");
    audioWrong.play();
  }

  selectedElement.innerHTML = selectedOption.feedback;
  document.getElementById("nextBtn").disabled = false;
  lockAnswers(selection + 1);
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    document.getElementById("nextBtn").disabled = true;
    document.getElementById("feedbackBox").classList.add("d-none");
    resetClasses();
    showProgress(currentQuestionIndex);
    showQuestion();
  } else {
    showEndScreen();
    audioConfetti.play();
    congratulations();
  }
}

function lockAnswers(selectedNumber) {
  for (let i = 1; i <= 4; i++) {
    let parentCard = document.getElementById(`option${i}`).parentElement;
    parentCard.classList.add("no-pointer");
    if (i !== selectedNumber) {
      parentCard.classList.add("is-inactive");
    }
  }
}

function resetClasses() {
  for (let i = 1; i <= 4; i++) {
    let el = document.getElementById(`option${i}`);
    let parentCard = el.parentElement;
    el.classList.remove("correct", "wrong");
    parentCard.classList.remove("no-pointer", "is-inactive");
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

function getResultHtml() {
  return `
        <div class="text-center">
            <h2>Quiz beendet</h2>
            <p>Du hast <b>${rightQuestions}</b> von <b>${questions.length}</b> Fragen richtig beantwortet</p>
            <div class="cup">
                <img src="./imgs/cup.PNG" alt="Ein Pokal">
            </div>
            <button class="main-btn shadow" onclick="location.reload()">Nochmal spielen</button>
        </div>
    `;
}

function congratulations() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 },
    zIndex: 9999,
  });
}
