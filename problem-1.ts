const repeatString = (value1: string, value2: number): String => {
  let emptyString = "";
  for (let i = 0; i < value2; i++) {
    emptyString += value1;
  }

  return emptyString;
};

// Sample Input:
console.log(repeatString("Hello!", 15));
