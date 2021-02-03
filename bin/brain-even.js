#!/usr/bin/env node

import { getAnswer } from '../src/cli.js';
import { playGame, randomNumber } from '../src/index.js';

playGame(() => {
  const number = randomNumber(1, 100);
  const isEven = (number % 2 === 0);
  const correctAnswer = isEven ? 'yes' : 'no';

  const answer = getAnswer(`Question: ${number}`);

  return { answer, correctAnswer };
}, 'Answer "yes" if the number is even, otherwise answer "no".');
