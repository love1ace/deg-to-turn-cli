#!/usr/bin/env node

const degToTurn = (degrees) => {
  return degrees / 360;
};

const [degrees] = process.argv.slice(2).map(Number);

if (isNaN(degrees)) {
  console.error("Invalid input. Please provide a valid number for degrees.");
  console.error("Usage: deg-to-turn-cli <degrees>");
  process.exit(1);
}

const turns = degToTurn(degrees);

console.log(`Degrees: ${degrees}°`);
console.log(`Turns: ${turns} turn(s)`);