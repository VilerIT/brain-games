#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

const name = greet();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const attemptsAmount = 3;
let hasMistakes = false;

for (let i = 0; i < attemptsAmount; i += 1) {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  const isEven = (randomNumber % 2 === 0);
  const correctAnswer = isEven ? 'yes' : 'no';

  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${name}!`);
    hasMistakes = true;
    break;
  }
}

if (!hasMistakes) {
  console.log(`Congratulations, ${name}!`);
}
