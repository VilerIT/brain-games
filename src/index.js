import readlineSync from 'readline-sync';

const attemptsNumber = 3;

export const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < attemptsNumber; i += 1) {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    const isEven = (randomNumber % 2 === 0);
    const correctAnswer = isEven ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }
  }

  return true;
};
