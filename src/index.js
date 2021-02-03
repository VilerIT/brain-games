import { greetAndGetName } from './cli.js';

const attemptsNumber = 3;
const operators = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
export const evaluate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
  }
};

export const randomNumber = (begin, end) => Math.floor((Math.random() * (end - begin + 1)) + begin);

export const randomOperator = () => operators[Math.floor((Math.random() * operators.length))];

export const findGcd = (num1, num2) => {
  let x = Math.abs(num1);
  let y = Math.abs(num2);

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
};

export const generateProgression = () => {
  const progressionLength = randomNumber(5, 10);

  const increment = randomNumber(1, 20);
  const begin = randomNumber(1, 100);

  const progression = [begin];

  for (let i = 1; i < progressionLength; i += 1) {
    const previousNumber = progression[i - 1];
    progression.push(previousNumber + increment);
  }

  return progression;
};

export const playGame = (gameFn, gameTask) => {
  const name = greetAndGetName();
  console.log(gameTask);

  for (let i = 0; i < attemptsNumber; i += 1) {
    const { answer, correctAnswer } = gameFn();

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
