const fs = require("fs");
const modules = fs.readFileSync("./input.txt", "utf8").split("\n");

const estFuelNeeded = modules.reduce(
  (acc, mass) => acc + Math.floor(mass / 3) - 2,
  0
);

const fuelNeededReducer = (acc, mass) => {
  let sum = 0;
  while (mass > 0) {
    mass = Math.floor(mass / 3) - 2;
    mass > 0 && (sum += mass);
  }
  return acc + sum;
};

const actualFuelNeeded = modules.reduce(fuelNeededReducer, 0);

console.log("Part 1:", estFuelNeeded);
console.log("Part 2:", actualFuelNeeded);
