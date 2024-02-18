
const students=[
  'Tina',
   'Raj',
   'Bobby',
   'Seema',
   'Alex',
   'Sita',
]
for(let i=0;i<students.length;i++){
    console.log(`Roll No  ${i+1}:${students[i]}`);
}

//for..in loop
//iterator is the index number
for(let i in students){
   console.log(`Roll No  ${Number(i) + 1}:${students[i]}`);
}
//for...of loop
//iterator is the element itself
for(let student of students){
    console.log(student);
}