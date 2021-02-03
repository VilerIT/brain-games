#!/usr/bin/env node

import { randomNumber, randomOperator, evaluate } from '../src/index.js';
import playGame from '../src/game.js';

playGame(() => {
  const number1 = randomNumber(1, 30);
  const number2 = randomNumber(1, 30);
  const operator = randomOperator();

  const expression = `${number1} ${operator} ${number2}`;
  const correctAnswer = evaluate(number1, number2, operator).toString();

  return { question: expression, correctAnswer };
}, 'What is the result of the expression?');
