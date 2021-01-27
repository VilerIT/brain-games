#!/usr/bin/env node

import greet from '../src/cli.js';
import { brainEven } from '../src/index.js';

const name = greet();
const isGameSuccessful = brainEven();

if (isGameSuccessful) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
