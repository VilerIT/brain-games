import { checkAnswerAndPrint } from './cli.js';

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

export const randomNumber = (begin, end) => Math.floor((Math.random() * (end + 1)) + begin);

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

export const playGame = (gameFn, name) => {
  for (let i = 0; i < attemptsNumber; i += 1) {
    const { answer, correctAnswer } = gameFn();

    if (!checkAnswerAndPrint(answer, correctAnswer)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
