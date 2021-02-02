#!/usr/bin/env node

import { greetAndGetName, getAnswer } from '../src/cli.js';
import { randomNumber, playGame, findGcd } from '../src/index.js';

const name = greetAndGetName();

console.log('Find the greatest common divisor of given numbers.');

playGame(() => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);

  const correctAnswer = `${findGcd(number1, number2)}`;

  const answer = getAnswer(`Question: ${number1} ${number2}`);

  return { answer, correctAnswer };
}, name);
