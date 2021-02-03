#!/usr/bin/env node

import { getAnswer } from '../src/cli.js';
import { playGame, randomNumber, isPrime } from '../src/index.js';

playGame(() => {
  const number = randomNumber(1, 100);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  const answer = getAnswer(`Question: ${number}`);

  return { answer, correctAnswer };
}, 'Answer "yes" if given number is prime. Otherwise answer "no".');
