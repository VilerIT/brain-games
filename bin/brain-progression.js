#!/usr/bin/env node

import { getAnswer } from '../src/cli.js';
import { playGame, generateProgression, randomNumber } from '../src/index.js';

playGame(() => {
  const progression = generateProgression();

  const indexOfHidden = randomNumber(0, progression.length - 1);

  const correctAnswer = progression[indexOfHidden].toString();
  progression[indexOfHidden] = '..';

  const answer = getAnswer(`Question: ${progression.join(' ')}`);

  return { answer, correctAnswer };
}, 'What number is missing in the progression?');
