import { greetAndGetName, getAnswer } from './cli.js';

const attemptsNumber = 3;

export default (gameFn, gameTask) => {
  const name = greetAndGetName();
  console.log(gameTask);

  for (let i = 0; i < attemptsNumber; i += 1) {
    const { question, correctAnswer } = gameFn();

    const answer = getAnswer(question);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
