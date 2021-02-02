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

export const randomNumber = () => Math.floor((Math.random() * 20) + 1);

export const randomOperator = () => operators[Math.floor((Math.random() * operators.length))];

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
