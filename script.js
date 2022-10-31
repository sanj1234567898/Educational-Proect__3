const btn = document.getElementById('check');
const input = document.querySelector('.number-input');
const message = document.querySelector('.guess-message');
let score = document.querySelector('.score');
const body = document.querySelector('body');
const question = document.querySelector('.question');
const again = document.querySelector('.again');
const highScore = document.querySelector('.highscore');

let secretNumber = randomNum();
console.log(secretNumber);

let getScore = 20;
let betterScore = 0;

btn.addEventListener('click', () => {
  const guessNum = input.value;

  if (guessNum == secretNumber) {
    message.textContent = 'Молоток';

    getScore++;

    score.textContent = getScore;
    body.style.backgroundColor = 'green';
    question.style.width = '50rem';
    question.textContent = secretNumber;

    if (getScore > betterScore) {
      betterScore = getScore;
      highScore.textContent = betterScore;
    }
  } else if (!guessNum) {
    message.textContent = 'Пробуй еще раз';
    body.style.backgroundColor = 'red';
  } else if (guessNum !== secretNumber) {
    if (getScore > 1) {
      message.textContent =
        guessNum > secretNumber
          ? 'Слишком большое число'
          : 'Слишком маленькое число';

      getScore--;

      score.textContent = getScore;
      body.style.backgroundColor = 'red';
    } else {
      alert('GAME OVER');
      message.textContent = 'GAME OVER';
      score.textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  secretNumber = randomNum();
  getScore = 20;

  score.textContent = getScore;
  question.textContent = '???';
  body.style.backgroundColor = 'black';
  message.textContent = 'Начни угадывать';
  input.value = '';
  question.style.width = '25rem';
});

function randomNum() {
  return Math.trunc(Math.random() * 20) + 1;
}
