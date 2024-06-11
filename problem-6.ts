type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

// Sample Input:
const book1: Book = {
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2022,
};

// Sample Output:
const isRecentBook = (obj: Book): boolean => {
  const currentYear = new Date().getFullYear();

  const publishedYear = obj?.publishedYear;

  if (publishedYear - (currentYear - 5) < 0) {
    return true;
  } else {
    return false;
  }
};
// Sample Input :

console.log(isRecentBook(book1));
