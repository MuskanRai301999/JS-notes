//How arrays are different in JS
//1.Arrays are heterogeneous in nature as explained in arrays.js
//2.Arrays are dynamic in nature
//while declaring or defining the array , in other languages you can predetermined the size of the array
//but in JS adding and removing of elements are allowed .. the size of the arrray can be changed

const cities = ["mumbai", "delhi", "kolkata", "jaipur", "chennai"];

//accessing the length of the array
console.log(cities.length);//5
//updating the city name
cities[2]="calcutta";
console.log(cities);//(5) ['mumbai', 'delhi', 'calcutta', 'jaipur', 'chennai']

//here arises the question how const keyword is letting us to make the changes
//const keyword only restricts the primitive datatypes to make changes on it
//we can make changes on const in arrays

//Methods on arrays

//1.Adding an element
//a.using push()
const teams=['CSK<','RCB','MI','LSG'];
teams.push('GT');
console.log(teams);
const pushedArray = teams.push('RA');
console.log(pushedArray);//6
//the return type of push operation is the length of the array
//(5) ['CSK<', 'RCB', 'MI', 'LSG', 'GT']
//pushes the element on the end of the array

//b.using unshift()
teams.unshift('KKR');
console.log(teams);

//Add the element on the start of the array
//(6) ['KKR', 'CSK<', 'RCB', 'MI', 'LSG', 'GT']

//Removing an element
//a.using pop()
teams.pop();
console.log(teams);
//(5) ['KKR', 'CSK<', 'RCB', 'MI', 'LSG']
//Remove the element from the end

//using shift
teams.shift();
console.log(teams);
//(4) ['CSK<', 'RCB', 'MI', 'LSG']
//Remove the element from the last

//Check the element is present or not
//1.indexOf()
const RCBIndex =teams.indexOf('RCB');
console.log(RCBIndex);//1 returns the index number

const RAIndex = teams.indexOf('RA');
console.log(RAIndex);//IF any element is not present on the array it will return -1.

//2.includes()
const RCBincludes =teams.includes('RCB');
console.log(RCBincludes);//returns the boolean value if exists then return true
const RAIncludes = teams.includes("RA");
console.log(RAIncludes);//returns false

//slice() and splice()
console.log(teams);//(5) ['CSK<', 'RCB', 'MI', 'LSG', 'GT']
console.log(teams.slice(2));//(3) ['MI', 'LSG', 'GT']
//removes the first 2 elements 
console.log(teams);//(5) ['CSK<', 'RCB', 'MI', 'LSG', 'GT']
//does not alter the original array just creates a shallow copy of it
console.log(teams.slice(-2));//(2) ['LSG', 'GT']
//negative values only leave the last 2 elements on the array

//splice() it will let u to add the element on the array at the same time remove the element from the array
//teams.splice(start:Number,deleteCount:number,array u want to insert)
teams.splice(2,0,'KCR');
console.log(teams);//(6) ['CSK<', 'RCB', 'KCR', 'MI', 'LSG', 'GT']
teams.splice(2, 1,"kCE", 'LSG');
console.log(teams);

//concat()
const teams2=["india","australia",'newzealand'];
const mergedTeams=teams.concat(teams2)
console.log(mergedTeams);//(10) ['CSK<', 'RCB', 'kCE', 'LSG', 'MI', 'LSG', 'GT', 'india', 'australia', 'newzealand']
//if u want to merge 2 or 3 arrays together we can use concat
console.log(teams);//merge will create a shallow array it won't alter the original array


