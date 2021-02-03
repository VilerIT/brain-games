#!/usr/bin/env node

import { getAnswer } from '../src/cli.js';
import {
  playGame, randomNumber, randomOperator, evaluate,
} from '../src/index.js';

playGame(() => {
  const number1 = randomNumber(1, 30);
  const number2 = randomNumber(1, 30);
  const operator = randomOperator();

  const expression = `${number1} ${operator} ${number2}`;
  const correctAnswer = evaluate(number1, number2, operator).toString();

  const answer = getAnswer(`Question: ${expression}`);

  return { answer, correctAnswer };
}, 'What is the result of the expression?');
