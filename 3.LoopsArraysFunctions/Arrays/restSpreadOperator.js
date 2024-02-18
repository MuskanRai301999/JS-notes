const aprilBatch = ["Tina", "Madhur"];
const mayBatch = ["Ritik", "Deepak", "Shalini"];
const juneBatch = ["Saba", "Shivani"];
const julyBatch = [];

// function addStudent(batch, student) {
//   batch.push(student);
//   console.log(batch);
// }
// addStudent(aprilBatch, 'Ritu');
// addStudent(mayBatch, 'Sunny');

//Rest ...added by ES-5
//by this we can add as many students to a particular batch
//number does not matter, it will think that all the elements belongs to the batch array
function addStudents(batch, ...students) {
  for (let i of students) {
    batch.push(i);
  }
  console.log(batch);
}

addStudents(aprilBatch, "Sunny", "Ritu", "Sheena");

// Spread ...
//To spread all the elements of the array

const newBatch = [...mayBatch];//all the elements of the maybatch can be spreaded
// const newBatch = ['Ritik', 'Deepak', 'Shalini']
console.log(newBatch);

mayBatch.push("newStudent");
console.log(mayBatch);//shallow copy ,it wont alter the original array
console.log(newBatch);

//uses of spread operator
//1.to expand the array
//2.to make a shallow copy of the array
//3.to concatenate
//you can merge 2 arrays using spread operator
const mergedBatch =[...mayBatch, ...juneBatch];
console.log(mergedBatch);//6