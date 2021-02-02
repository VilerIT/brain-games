#!/usr/bin/env node

import { greetAndGetName, getAnswer } from '../src/cli.js';
import { playGame, randomNumber } from '../src/index.js';

const name = greetAndGetName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

playGame(() => {
  const number = randomNumber(1, 100);
  const isEven = (number % 2 === 0);
  const correctAnswer = isEven ? 'yes' : 'no';

  const answer = getAnswer(`Question: ${number}`);

  return { answer, correctAnswer };
}, name);
