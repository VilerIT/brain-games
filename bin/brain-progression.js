#!/usr/bin/env node

import { generateProgression, randomNumber } from '../src/index.js';
import playGame from '../src/game.js';

playGame(() => {
  const progression = generateProgression();

  const indexOfHidden = randomNumber(0, progression.length - 1);

  const correctAnswer = progression[indexOfHidden].toString();
  progression[indexOfHidden] = '..';

  const question = `${progression.join(' ')}`;

  return { question, correctAnswer };
}, 'What number is missing in the progression?');
