// A grading system needs to be implemented for a school based on the marks obtained by the students on a test. Write a JS program to determine the grades of the students using conditional statements.

// The grades will be assigned in the result variable based on the following criteria:

// 1- If the value of the marks variable is greater than or equal to 90, the value of the result variable should be "A grade"
// 2- If the marks are between 80 and 89, the value of the result variable should be "B grade".
// 3- If the marks are between 70 and 79, the value of the result variable should be "C grade".
// 4- If the marks are between 60 and 69, the value of the result variable should be "D grade".
// 5- If the marks are less than 60, the value of the result variable should be "F grade".
// Expected Input
// 89
// Expected Output
// B
// Expected Input
// 93
// Expected Output
// A
// Test Cases
// Grade Evaluation Check

// 1- If the value of the marks variable is greater than or equal to 90, the value of the result variable should be "A grade"
// 2- If the marks are between 80 and 89, the value of the result variable should be "B grade".
// 3- If the marks are between 70 and 79, the value of the result variable should be "C grade".
// 4- If the marks are between 60 and 69, the value of the result variable should be "D grade".
// 5- If the marks are less than 60, the value of the result variable should be "F grade".

function main(marks) {
  let result;
  if (marks >= 90) {
    result = "A grade";
  } else if (marks <= 89 && marks >= 80) {
    result = "B grade";
  } else if (marks <= 79 && marks >= 70) {
    result = "C grade";
  } else if (marks <= 69 && marks >= 60) {
    result = "D grade";
  } else {
    result = "F grade";
  }
  return result;
}
