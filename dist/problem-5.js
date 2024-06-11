"use strict";
// Sample Input:
const student1 = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
};
// Sample Output:
const calculateAverageGrade = (obj) => {
    const grades = obj.grades;
    const reducedValue = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return reducedValue / grades.length;
};
// Sample Input:
const averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob);
