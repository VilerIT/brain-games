import readlineSync from 'readline-sync';

export const greetAndGetName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const getAnswer = (question) => {
  console.log(question);
  return readlineSync.question('Your answer: ');
};
