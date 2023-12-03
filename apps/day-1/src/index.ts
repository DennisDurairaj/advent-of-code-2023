const inputFile = "./src/input.txt";
const file = Bun.file(inputFile);

const input = await file.text();

const inputArr = input.split("\n");

let sum = 0;
let calibration_values: string[] = [];

function checkInteger(inputArr: string[]) {
  for (let char of inputArr) {
    if (Number.isInteger(parseInt(char))) {
      return char;
    }
  }
}

async function findFirstDigit(input: string) {
  const inputSplit = [...input];
  return checkInteger(inputSplit);
}

async function findLastDigit(input: string) {
  const inputSplit = [...input].reverse();
  return checkInteger(inputSplit);
}

for (let input of inputArr) {
  const first = await findFirstDigit(input);
  const last = await findLastDigit(input);
  calibration_values.push(`${first}${last}`);
}

console.log(calibration_values);

sum = calibration_values
  .map((val) => parseInt(val))
  .reduce((prev, current) => {
    return prev + current;
  }, 0);

console.log(sum);
