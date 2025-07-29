//Map method
//array iig ooriig ni oorchlohgui
//map neg function avna, tuhaon function bas neg utga avna
//map method shine array uusgej ogno, shine array n huuchin tei lenght ijil baina
//tmar array uusgehee map iin return eer shiiden
let ages = [10, 12, 20, 30, 45];

let duu = ages.map((a) => {
  return {
    value: 10 * a,
  };
});
console.log(duu);

let students = [
  {
    name: "boldo",
    age: 20,
    grade: 11,
  },
  {
    name: "dorjo",
    age: 20,
    grade: 11,
  },
];
let newStudents = students.map((student) => {
  return {
    name: student.name,
    age: student.age,
    grade: student.grade + 1,
  };
});
console.log(students);
console.log(newStudents);

//filter
//filter ooriig n oorchohgui
//shine array uusgej ogno
//filter method. neg function avna. tuhaon function neg utga avna
//reeturn deer true baih buh element iig tsugluulaad array butsaana
sturdents = [
  {
    name: "boldo",
    age: 20,
    grade: 11,
    gender: "male",
  },
  {
    name: "tsetsge",
    age: 20,
    grade: 11,
    gender: "female",
  },
  {
    name: "dulma",
    age: 20,
    grade: 11,
    gender: "female",
  },
  {
    name: "dorjo",
    age: 20,
    grade: 11,
    gender: "male",
  },
];
const filtered = ages.filter((age) => {
  return age % 2 == 0;
});
console.log(ages);
console.log(filtered);

//sort method
//sort method function avna
//avjgaa function n 2 utga orj irne
//return deer + esvel - too butsaana
//sort method n array iig ooriig n oorchlono
console.log("======Sort=====");
ages.sort((age2, age1) => {
  return age2 - age1;
});
console.log(ages);
ages.sort((a, b) => {
  return -1;
});
console.log(ages);

console.log(students);
students.sort((student2, student1) => {
  return student2.age - student1.age;
});
console.log(students);
students.sort((student2, student1) => {
  if (student2.gender - student1.gender) {
    return 1;
  } else {
    return -1;
  }
});
console.log(students);
