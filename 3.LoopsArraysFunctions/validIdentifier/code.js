/*Problem statement
Create a function to check whether the input passed as string is a valid identifier or not.


Requirements

Name the function as isValidIdentifier.
It should check all the conditions for a variable to be valid.
If the input is a valid Identifier, it should console "${input} is a valid Identifier."
else it should console "${input} is not a valid identifier"

Input:

 isValidIdentifier("9name");
isValidIdentifier("$first_name");

Output:

9name is not a valid identifier.
$first_name is a valid identifier.

Hint:
You can use Unicode to solve the problem.*/

//Create the isValidIdentifier function
function isValidIdentifier(input) {
  // Regular expression to check if the input is a valid identifier
  const identifierRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

  if (identifierRegex.test(input)) {
    console.log(`${input} is a valid identifier.`);
  } else {
    console.log(`${input} is not a valid identifier.`);
  }
}

isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.
