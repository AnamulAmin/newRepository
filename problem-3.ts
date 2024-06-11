const filterEvenNumbers = (arr: number[]): number[] => {
  let initialValue = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      initialValue.push(arr[i]);
    }
  }

  return initialValue;
};

// Sample Input:
console.log(filterEvenNumbers([10, 5, 8, 20, 3]));
