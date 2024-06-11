const findLargestNumber = (arr: number[]): number => {
  let initialValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (initialValue < arr[i]) {
      initialValue = arr[i];
    }
  }

  return initialValue;
};

// Sample Input:
console.log(findLargestNumber([10, 5, 8, 20, 3]));
