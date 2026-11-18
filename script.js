
"use strict";

// =====================================
// CHEMLAB - 30 TA KIMYOVIY MISOL
// =====================================

const reactions = [
  // OSON
  { name: "Vodorod va kislorod", difficulty: "Oson", terms: ["H2", "O2", "H2O"], signs: ["+", "→"], answer: [2, 1, 2], hint: "Suv formulasida 2 ta vodorod va 1 ta kislorod bor." },
  { name: "Uglerod yonishi", difficulty: "Oson", terms: ["C", "O2", "CO2"], signs: ["+", "→"], answer: [1, 1, 1], hint: "Uglerod va kislorod atomlarini sanang." },
  { name: "Natriy va xlor", difficulty: "Oson", terms: ["Na", "Cl2", "NaCl"], signs: ["+", "→"], answer: [2, 1, 2], hint: "Xlor molekulasida 2 ta xlor atomi bor." },
  { name: "Magniy oksid", difficulty: "Oson", terms: ["Mg", "O2", "MgO"], signs: ["+", "→"], answer: [2, 1, 2], hint: "Kislorod atomlarini tenglashtiring." },
  { name: "Kaliy xlorid", difficulty: "Oson", terms: ["K", "Cl2", "KCl"], signs: ["+", "→"], answer: [2, 1, 2], hint: "Cl2 tarkibida 2 ta xlor bor." },
  { name: "Kalsiy oksid", difficulty: "Oson", terms: ["Ca", "O2", "CaO"], signs: ["+", "→"], answer: [2, 1, 2], hint: "O2 ni tenglashtirishdan boshlang." },
  { name: "Oltingugurt oksid", difficulty: "Oson", terms: ["S", "O2", "SO2"], signs: ["+", "→"], answer: [1, 1, 1], hint: "Har ikki tomonda 1 ta oltingugurt va 2 ta kislorod bor." },
  { name: "Temir sulfidi", difficulty: "Oson", terms: ["Fe", "S", "FeS"], signs: ["+", "→"], answer: [1, 1, 1], hint: "Atomlar soni allaqachon teng." },
  { name: "Vodorod xlorid", difficulty: "Oson", terms: ["H2", "Cl2", "HCl"], signs: ["+", "→"], answer: [1, 1, 2], hint: "Mahsulot tomonda HCl dan 2 ta kerak." },
  { name: "Litiy oksid", difficulty: "Oson", terms: ["Li", "O2", "Li2O"], signs: ["+", "→"], answer: [4, 1, 2], hint: "Avval kislorod, keyin litiy atomlarini tenglashtiring." },

  // O'RTA
  { name: "Ammiak hosil bo‘lishi", difficulty: "O‘rta", terms: ["N2", "H2", "NH3"], signs: ["+", "→"], answer: [1, 3, 2], hint: "2 ta azot uchun 2 ta NH3 kerak." },
  { name: "Temir oksid", difficulty: "O‘rta", terms: ["Fe", "O2", "Fe2O3"], signs: ["+", "→"], answer: [4, 3, 2], hint: "Kislorodlar sonini 6 taga tenglashtiring." },
  { name: "Alyuminiy oksid", difficulty: "O‘rta", terms: ["Al", "O2", "Al2O3"], signs: ["+", "→"], answer: [4, 3, 2], hint: "Mahsulot tomonda 6 ta kislorod bo‘lishi kerak." },
  { name: "Metan yonishi", difficulty: "O‘rta", terms: ["CH4", "O2", "CO2", "H2O"], signs: ["+", "→", "+"], answer: [1, 2, 1, 2], hint: "Avval uglerod, keyin vodorod, so‘ng kislorodni tenglashtiring." },
  { name: "Kaliy xlorat", difficulty: "O‘rta", terms: ["KClO3", "KCl", "O2"], signs: ["→", "+"], answer: [2, 2, 3], hint: "Kislorod atomlarini 6 taga tenglashtiring." },
  { name: "Natriy oksid", difficulty: "O‘rta", terms: ["Na", "O2", "Na2O"], signs: ["+", "→"], answer: [4, 1, 2], hint: "O‘ng tomonda 2 ta Na2O hosil qiling." },
  { name: "Kalsiy karbonat", difficulty: "O‘rta", terms: ["CaCO3", "CaO", "CO2"], signs: ["→", "+"], answer: [1, 1, 1], hint: "Bu tenglama allaqachon tenglashtirilgan." },
  { name: "Mis oksid", difficulty: "O‘rta", terms: ["Cu", "O2", "CuO"], signs: ["+", "→"], answer: [2, 1, 2], hint: "O2 uchun 2 ta CuO kerak." },
  { name: "Fosfor oksid", difficulty: "O‘rta", terms: ["P", "O2", "P2O5"], signs: ["+", "→"], answer: [4, 5, 2], hint: "Mahsulotda 2 ta P2O5 oling." },
  { name: "Kaliy va suv", difficulty: "O‘rta", terms: ["K", "H2O", "KOH", "H2"], signs: ["+", "→", "+"], answer: [2, 2, 2, 1], hint: "Vodorod atomlarini oxirida tekshiring." },

  // QIYIN
  { name: "Etan yonishi", difficulty: "Qiyin", terms: ["C2H6", "O2", "CO2", "H2O"], signs: ["+", "→", "+"], answer: [2, 7, 4, 6], hint: "2 ta etan uchun 4 ta CO2 va 6 ta H2O kerak." },
  { name: "Propan yonishi", difficulty: "Qiyin", terms: ["C3H8", "O2", "CO2", "H2O"], signs: ["+", "→", "+"], answer: [1, 5, 3, 4], hint: "3 ta uglerod uchun 3 ta CO2 kerak." },
  { name: "Butan yonishi", difficulty: "Qiyin", terms: ["C4H10", "O2", "CO2", "H2O"], signs: ["+", "→", "+"], answer: [2, 13, 8, 10], hint: "2 ta butan molekulasidagi vodorod 20 ta." },
  { name: "Temir xlorid", difficulty: "Qiyin", terms: ["Fe", "Cl2", "FeCl3"], signs: ["+", "→"], answer: [2, 3, 2], hint: "Mahsulotda 2 ta FeCl3 hosil qiling." },
  { name: "Ammiak reaksiyasi", difficulty: "Qiyin", terms: ["NH3", "O2", "N2", "H2O"], signs: ["+", "→", "+"], answer: [4, 3, 2, 6], hint: "Azot va vodorod atomlaridan boshlang." },
  { name: "Temir va suv bug‘i", difficulty: "Qiyin", terms: ["Fe", "H2O", "Fe3O4", "H2"], signs: ["+", "→", "+"], answer: [3, 4, 1, 4], hint: "Fe3O4 tarkibida 3 ta temir va 4 ta kislorod bor." },
  { name: "Natriy va suv", difficulty: "Qiyin", terms: ["Na", "H2O", "NaOH", "H2"], signs: ["+", "→", "+"], answer: [2, 2, 2, 1], hint: "2 ta natriy gidroksid hosil qiling." },
  { name: "Sirka kislotasi yonishi", difficulty: "Qiyin", terms: ["C2H4O2", "O2", "CO2", "H2O"], signs: ["+", "→", "+"], answer: [1, 2, 2, 2], hint: "Uglerod 2 ta, vodorod 4 ta." },
  { name: "Kalsiy va suv", difficulty: "Qiyin", terms: ["Ca", "H2O", "Ca(OH)2", "H2"], signs: ["+", "→", "+"], answer: [1, 2, 1, 1], hint: "Ca(OH)2 tarkibidagi qavs ichidagi atomlarni ham hisoblang." },
  { name: "Temir kolchedani", difficulty: "Qiyin", terms: ["FeS2", "O2", "Fe2O3", "SO2"], signs: ["+", "→", "+"], answer: [4, 11, 2, 8], hint: "Avval temir, keyin oltingugurt va kislorodni tenglashtiring." }
];

// =====================================
// HTML ELEMENTLARI
// =====================================

const $ = id => document.getElementById(id);

const ui = {
  score: $("score"),
  record: $("record"),
  timer: $("timer"),
  correctCount: $("correctCount"),
  level: $("level"),
  questionNumber: $("questionNumber"),
  difficultyTag: $("difficultyTag"),
  progressText: $("progressText"),
  progressFill: $("progressFill"),
  equation: $("equation"),
  leftAtoms: $("leftAtoms"),
  rightAtoms: $("rightAtoms"),
  balanceMessage: $("balanceMessage"),
  feedback: $("feedback"),
  questionProgress: $("questionProgress"),
  reward: $("reward"),
  checkBtn: $("checkBtn"),
  hintBtn: $("hintBtn"),
  nextBtn: $("nextBtn"),
  restartBtn: $("restartBtn"),
  soundBtn: $("soundBtn"),
  helpBtn: $("helpBtn"),
  helpModal: $("helpModal"),
  resultModal: $("resultModal"),
  toast: $("toast")
};

// =====================================
// O'YIN HOLATI
// =====================================

let currentQuestion = 0;
let score = 0;
let correctCount = 0;
let timeLeft = 300;
let timerInterval = null;
let soundEnabled = true;
let answered = false;
let hintUsed = false;
let gameFinished = false;

let record = Number(localStorage.getItem("chemlabRecord") || 0);
ui.record.textContent = record;

ui.totalQuestions && (ui.totalQuestions.textContent = reactions.length);

// =====================================
// FORMULADAGI ATOMLARNI HISOBLASH
// QAVSLAR HAM HISOBGA OLINADI
// =====================================

function parseFormula(formula) {
  let index = 0;

  function parseGroup() {
    const atoms = {};

    while (index < formula.length) {
      const char = formula[index];

      if (char === ")") {
        index++;
        break;
      }

      if (char === "(") {
        index++;
        const inside = parseGroup();

        let number = "";
        while (index < formula.length && /\d/.test(formula[index])) {
          number += formula[index++];
        }

        const multiplier = number ? Number(number) : 1;

        for (const element in inside) {
          atoms[element] = (atoms[element] || 0) + inside[element] * multiplier;
        }
        continue;
      }

      if (/[A-Z]/.test(char)) {
        let element = formula[index++];

        while (index < formula.length && /[a-z]/.test(formula[index])) {
          element += formula[index++];
        }

        let number = "";
        while (index < formula.length && /\d/.test(formula[index])) {
          number += formula[index++];
        }

        atoms[element] = (atoms[element] || 0) + (number ? Number(number) : 1);
        continue;
      }

      index++;
    }

    return atoms;
  }

  return parseGroup();
}

// =====================================
// FORMULANI EKRANGA CHIQARISH
// =====================================

function formatFormula(formula) {
  return formula.replace(/(\d+)/g, "<sub>$1</sub>");
}

function renderQuestion() {
  const reaction = reactions[currentQuestion];

  answered = false;
  hintUsed = false;

  ui.questionNumber.textContent = `${currentQuestion + 1} / ${reactions.length}`;
  ui.difficultyTag.textContent = reaction.difficulty;

  ui.difficultyTag.className = "difficulty";
  if (reaction.difficulty === "O‘rta") {
    ui.difficultyTag.style.color = "#ffd166";
  } else if (reaction.difficulty === "Qiyin") {
    ui.difficultyTag.style.color = "#ff8585";
  } else {
    ui.difficultyTag.style.color = "";
  }

  ui.equation.innerHTML = "";

  reaction.terms.forEach((term, index) => {
    const part = document.createElement("div");
    part.className = "formula-part";

    const input = document.createElement("input");
    input.className = "coefficient";
    input.type = "number";
    input.min = "1";
    input.max = "999";
    input.step = "1";
    input.value = "1";
    input.setAttribute("aria-label", `${term} koeffitsiyenti`);
    input.dataset.index = index;

    input.addEventListener("input", () => {
      updateAtomCounts();
    });

    const formula = document.createElement("span");
    formula.className = "formula";
    formula.innerHTML = formatFormula(term);

    part.appendChild(input);
    part.appendChild(formula);
    ui.equation.appendChild(part);

    if (index < reaction.signs.length) {
      const operator = document.createElement("span");
      operator.className = "operator";
      operator.textContent = reaction.signs[index];
      ui.equation.appendChild(operator);
    }
  });

  ui.feedback.className = "feedback";
  ui.feedback.textContent = "🧪 Koeffitsiyentlarni kiriting va javobni tekshiring.";
  ui.balanceMessage.className = "balance-message";
  ui.balanceMessage.textContent = "Tenglamani tenglashtirishni boshlang.";

  ui.checkBtn.disabled = false;
  ui.hintBtn.disabled = false;
  ui.nextBtn.disabled = true;

  ui.nextBtn.textContent =
    currentQuestion === reactions.length - 1
      ? "Natijani ko‘rish →"
      : "Keyingi misol →";

  updateProgress();
  updateAtomCounts();
}

// =====================================
// KOEFFITSIYENTLARNI OLISH
// =====================================

function getCoefficients() {
  return [...ui.equation.querySelectorAll(".coefficient")].map(input => {
    const value = Number(input.value);
    return Number.isInteger(value) && value > 0 ? value : 0;
  });
}

// =====================================
// ATOMLAR SONINI HISOBLASH
// =====================================

function countAtoms(terms, coefficients, start, end) {
  let total = 0;

  for (let i = start; i < end; i++) {
    const atoms = parseFormula(terms[i]);
    const coefficient = coefficients[i] || 0;

    for (const element in atoms) {
      total += atoms[element] * coefficient;
    }
  }

  return total;
}

function updateAtomCounts() {
  const reaction = reactions[currentQuestion];
  const coefficients = getCoefficients();

  const arrowIndex = reaction.signs.indexOf("→");
  const splitIndex = arrowIndex + 1;

  const left = countAtoms(
    reaction.terms,
    coefficients,
    0,
    splitIndex
  );

  const right = countAtoms(
    reaction.terms,
    coefficients,
    splitIndex,
    reaction.terms.length
  );

  ui.leftAtoms.textContent = left;
  ui.rightAtoms.textContent = right;

  if (left > 0 && left === right) {
    ui.balanceMessage.textContent = "✓ Atomlar soni teng!";
    ui.balanceMessage.className = "balance-message balanced";
  } else {
    ui.balanceMessage.textContent = "Chap va o‘ng tomon atomlari teng emas.";
    ui.balanceMessage.className = "balance-message";
  }
}

// =====================================
// BALL VA STATISTIKA
// =====================================

function updateStats() {
  ui.score.textContent = score;
  ui.correctCount.textContent = correctCount;
  ui.level.textContent = Math.floor(correctCount / 5) + 1;
  ui.questionProgress.textContent = `${correctCount} / ${reactions.length}`;

  if (correctCount >= 25) {
    ui.reward.textContent = "Kimyo ustasi";
  } else if (correctCount >= 15) {
    ui.reward.textContent = "Olim";
  } else if (correctCount >= 5) {
    ui.reward.textContent = "Tadqiqotchi";
  } else {
    ui.reward.textContent = "Boshlovchi";
  }

  if (score > record) {
    record = score;
    localStorage.setItem("chemlabRecord", record);
    ui.record.textContent = record;
  }
}

function updateProgress() {
  const completed = currentQuestion;
  const percent = (completed / reactions.length) * 100;

  ui.progressFill.style.width = percent + "%";
  ui.progressText.textContent = `${completed} / ${reactions.length}`;
}

// =====================================
// JAVOBNI TEKSHIRISH
// =====================================

function checkAnswer() {
  if (answered || gameFinished) return;

  const reaction = reactions[currentQuestion];
  const inputs = [...ui.equation.querySelectorAll(".coefficient")];
  const coefficients = getCoefficients();

  if (coefficients.some(value => value === 0)) {
    showFeedback("❗ Har bir katakka 1 yoki undan katta butun son kiriting.", "error");
    playSound(false);
    return;
  }

  const correct = reaction.answer.every(
    (answer, index) => answer === coefficients[index]
  );

  if (correct) {
    answered = true;
    correctCount++;

    const points = hintUsed ? 5 : 10;
    score += points;

    updateStats();
    updateProgress();

    showFeedback(`🎉 Barakalla! To‘g‘ri javob. +${points} ball!`, "success");
    ui.balanceMessage.textContent = "✓ Ajoyib! Tenglama to‘g‘ri tenglashtirildi.";
    ui.balanceMessage.className = "balance-message balanced";

    inputs.forEach(input => {
      input.disabled = true;
    });

    ui.checkBtn.disabled = true;
    ui.hintBtn.disabled = true;
    ui.nextBtn.disabled = false;

    playSound(true);
  } else {
    showFeedback("❌ Bu javob noto‘g‘ri. Yana bir marta urinib ko‘ring!", "error");
    playSound(false);
  }
}

// =====================================
// MASLAHAT
// =====================================

function showHint() {
  if (answered || gameFinished) return;

  const reaction = reactions[currentQuestion];

  showFeedback("💡 " + reaction.hint, "");
  hintUsed = true;
  ui.hintBtn.disabled = true;

  showToast("Maslahatdan foydalandingiz. To‘g‘ri javob uchun 5 ball.");
}

// =====================================
// KEYINGI MISOL
// =====================================

function nextQuestion() {
  if (!answered || gameFinished) return;

  if (currentQuestion >= reactions.length - 1) {
    finishGame("Barcha misollar tugadi!");
    return;
  }

  currentQuestion++;
  renderQuestion();
}

// =====================================
// FEEDBACK VA TOAST
// =====================================

function showFeedback(message, type) {
  ui.feedback.textContent = message;
  ui.feedback.className = "feedback";

  if (type) {
    ui.feedback.classList.add(type);
  }
}

let toastTimeout;

function showToast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    ui.toast.classList.remove("show");
  }, 2500);
}

// =====================================
// VAQT HISOBLAGICHI
// =====================================

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  ui.timer.textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");

  if (timeLeft <= 30) {
    ui.timer.style.color = "#ff6969";
  } else {
    ui.timer.style.color = "";
  }
}

function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (gameFinished) return;

    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      finishGame("Vaqt tugadi!");
    }
  }, 1000);
}

// =====================================
// O'YINNI TUGATISH
// =====================================

function finishGame(message) {
  if (gameFinished) return;

  gameFinished = true;
  clearInterval(timerInterval);

  $("resultTitle").textContent = message;
  $("resultText").textContent =
    `${reactions.length} ta misoldan ${correctCount} tasini to‘g‘ri yechdingiz.`;
  $("finalScore").textContent = score;

  ui.resultModal.classList.add("show");
  updateStats();
}

// =====================================
// OVOZ EFFEKTI
// =====================================

function playSound(success) {
  if (!soundEnabled) return;

  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    const audio = new AudioContextClass();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.connect(gain);
    gain.connect(audio.destination);

    oscillator.type = "sine";
    oscillator.frequency.value = success ? 700 : 220;

    gain.gain.setValueAtTime(0.12, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.2
    );

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.2);

    oscillator.onended = () => audio.close();
  } catch (error) {
    console.log("Ovoz ishlamadi:", error);
  }
}

// =====================================
// QAYTA BOSHLASH
// =====================================

function restartGame() {
  clearInterval(timerInterval);

  currentQuestion = 0;
  score = 0;
  correctCount = 0;
  timeLeft = 300;
  answered = false;
  hintUsed = false;
  gameFinished = false;

  ui.resultModal.classList.remove("show");
  ui.timer.style.color = "";

  updateStats();
  updateTimer();
  renderQuestion();
  startTimer();

  showToast("O‘yin qayta boshlandi!");
}

// =====================================
// TUGMALAR
// =====================================

ui.checkBtn.addEventListener("click", checkAnswer);
ui.hintBtn.addEventListener("click", showHint);
ui.nextBtn.addEventListener("click", nextQuestion);
ui.restartBtn.addEventListener("click", restartGame);
$("playAgainBtn").addEventListener("click", restartGame);

ui.soundBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  ui.soundBtn.textContent = soundEnabled ? "🔊" : "🔇";
  showToast(soundEnabled ? "Ovoz yoqildi" : "Ovoz o‘chirildi");
});

ui.helpBtn.addEventListener("click", () => {
  ui.helpModal.classList.add("show");
});

$("closeHelpBtn").addEventListener("click", () => {
  ui.helpModal.classList.remove("show");
});

$("closeHelpBtn2").addEventListener("click", () => {
  ui.helpModal.classList.remove("show");
});

// =====================================
// BOSHLASH
// =====================================

function initGame() {
  updateStats();
  updateTimer();
  renderQuestion();
  startTimer();
}

initGame();
