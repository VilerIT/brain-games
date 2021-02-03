#!/usr/bin/env node

import { getAnswer } from '../src/cli.js';
import { randomNumber, playGame, findGcd } from '../src/index.js';

playGame(() => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);

  const correctAnswer = `${findGcd(number1, number2)}`;

  const answer = getAnswer(`Question: ${number1} ${number2}`);

  return { answer, correctAnswer };
}, 'Find the greatest common divisor of given numbers.');
