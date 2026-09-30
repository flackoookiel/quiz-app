(() => {
  'use strict';

  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  const screens = {
    start: document.getElementById('start-screen'),
    quiz:  document.getElementById('quiz-screen')
  };

  const questionCountEl = document.getElementById('question-count');
  const startBtn        = document.getElementById('start-btn');
  const questionText    = document.getElementById('question-text');
  const optionsEl       = document.getElementById('options');

  let questions = [];
  let current = 0;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(name) {
    Object.keys(screens).forEach((key) => {
      screens[key].classList.toggle('hidden', key !== name);
    });
  }

  function prepareQuestions(raw) {
    return shuffle(raw).map((q) => {
      const correctText = q.options[q.answer];
      const options = shuffle(q.options);
      return {
        question: q.question,
        options,
        answerIndex: options.indexOf(correctText)
      };
    });
  }

  function startQuiz() {
    if (!Array.isArray(QUESTIONS) || QUESTIONS.length === 0) {
      alert('No questions found. Add some to questions.js');
      return;
    }
    questions = prepareQuestions(QUESTIONS);
    current = 0;

    showScreen('quiz');
    renderQuestion();
  }

  function renderQuestion() {
    const q = questions[current];
    questionText.textContent = q.question;

    optionsEl.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option';

      const key = document.createElement('span');
      key.className = 'key';
      key.textContent = LETTERS[i] || String(i + 1);

      const text = document.createElement('span');
      text.className = 'option-text';
      text.textContent = opt;

      btn.append(key, text);
      optionsEl.appendChild(btn);
    });
  }

  startBtn.addEventListener('click', startQuiz);

  questionCountEl.textContent = Array.isArray(QUESTIONS) ? QUESTIONS.length : 0;
  startBtn.focus();
})();
