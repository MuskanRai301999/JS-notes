//Email Verification
//Input and Email
//Length of Email >11
//after dot only 2 or 3 characters are allowed
// minimum 3 characters between @ and .

const email = prompt("Enter the email address");
const emailLen = email.length;
//console.log(emailLen);
const dotIndex = email.lastIndexOf(".");
const atIndex = email.lastIndexOf("@");
const lastIndex = emailLen - 1;
//Checking the conditions for in valid email

if (
  emailLen < 11 ||
  lastIndex - dotIndex < 2 ||
  lastIndex - dotIndex > 3 ||
  dotIndex - atIndex < 3
) {
  console.log("Invalid Email");
} else {
  console.log("Valid Email");
}
