#!/usr/bin/env node

import { greetAndGetName, getAnswer } from '../src/cli.js';
import {
  playGame, randomNumber, randomOperator, evaluate,
} from '../src/index.js';

const name = greetAndGetName();

console.log('What is the result of the expression?');

playGame(() => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const operator = randomOperator();

  const expression = `${number1} ${operator} ${number2}`;
  const correctAnswer = `${evaluate(number1, number2, operator)}`;

  const answer = getAnswer(`Question: ${expression}`);

  return { answer, correctAnswer };
}, name);
