const Questions = [
  {
    que: "Which of the following is a scripting language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "c",
  },
  {
    que: "Which of the following is a scripting language?",
    a: "HTML",
    b: "CSS",
    c: "PHP",
    d: "JavaScript",
    correct: "d",
  },
  {
    que: "Which of the following is a scripting language?",
    a: "JavaScript",
    b: "HTML",
    c: "CSS",
    d: "PHP",
    correct: "a",
  },
  {
    que: "Which of the following is a scripting language?",
    a: "HTML",
    b: "JavaScript",
    c: "CSS",
    d: "PHP",
    correct: "b",
  },
];

let index = 0;
let total = Questions.length;
let right = 0,
  wrong = 0;
const QuesBox = document.getElementById("QuesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  }
  reset();
  const data = Questions[index];
  QuesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
  //   console.log(data);
};

const submitQuiz = () => {
  const data = Questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3>Thanks for participating! </h3>
        <h2> Your score : ${right}/${total} </h2>
    </div>
    `;
};

loadQuestion();
// getAnswer()
