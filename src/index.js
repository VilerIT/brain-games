export const evaluate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

export const randomNumber = (begin, end) => Math.floor((Math.random() * (end - begin + 1)) + begin);

export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);

  return operators[randomIndex];
};

export const findGcd = (num1, num2) => {
  let x = Math.abs(num1);
  let y = Math.abs(num2);

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
};

export const generateProgression = () => {
  const progressionLength = randomNumber(5, 10);

  const increment = randomNumber(1, 20);
  const begin = randomNumber(1, 100);

  const progression = [begin];

  for (let i = 1; i < progressionLength; i += 1) {
    const previousNumber = progression[i - 1];
    progression.push(previousNumber + increment);
  }

  return progression;
};

export const isEven = (num) => (num % 2 === 0);

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
