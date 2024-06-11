"use strict";
// Sample Input:
const book1 = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022,
};
// Sample Output:
const isRecentBook = (obj) => {
    const currentYear = new Date().getFullYear();
    const publishedYear = obj === null || obj === void 0 ? void 0 : obj.publishedYear;
    if (publishedYear - (currentYear - 5) < 0) {
        return true;
    }
    else {
        return false;
    }
};
// Sample Input :
console.log(isRecentBook(book1));
