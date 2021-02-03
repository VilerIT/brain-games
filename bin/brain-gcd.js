#!/usr/bin/env node

import { randomNumber, findGcd } from '../src/index.js';
import playGame from '../src/game.js';

playGame(() => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);

  const correctAnswer = findGcd(number1, number2).toString();

  const question = `${number1} ${number2}`;

  return { question, correctAnswer };
}, 'Find the greatest common divisor of given numbers.');
