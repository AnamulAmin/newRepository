const reverseArray = <T>(arr: T[]): T[] => {
  return arr.reverse();
};

// Sample Input:
console.log(reverseArray<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseArray<string>(["apple", "banana", "cherry"]));
