#!/usr/bin/env node

import { randomNumber, isEven } from '../src/index.js';
import playGame from '../src/game.js';

playGame(() => {
  const number = randomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return { question: number, correctAnswer };
}, 'Answer "yes" if the number is even, otherwise answer "no".');
