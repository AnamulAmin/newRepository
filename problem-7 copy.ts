// Sample Output:
const logString = (value: unknown): void => {
  if (typeof value === "string") {
    console.log(value);
  } else {
    console.error("Input is not a string.");
  }
};
// Sample Input :

// logString("Hello, TypeScript!");
logString(25);
