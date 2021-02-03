#!/usr/bin/env node

import { randomNumber, isPrime } from '../src/index.js';
import playGame from '../src/game.js';

playGame(() => {
  const number = randomNumber(1, 100);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question: number, correctAnswer };
}, 'Answer "yes" if given number is prime. Otherwise answer "no".');
