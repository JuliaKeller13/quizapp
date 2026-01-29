let currentQuestionIndex = 0;

function init(){
    updateProgress(currentQuestionIndex);
}

function updateProgress(currentIndex) {
    const currentNumber = currentIndex + 1;
    const allQuestions = questions.length;
    let progressContainer = document.getElementById("progress");
    progressContainer.innerHTML = `<span>${currentNumber} von ${allQuestions} Fragen</span>`;

    const progressPercent = (currentNumber / allQuestions) * 100;
    
    let barFill = document.getElementById("progressBarFill");
    barFill.style.width = progressPercent + "%";

}