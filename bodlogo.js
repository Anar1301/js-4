let data = [
  {
    name: "Amar",
    age: 18,
    gender: "male",
    high: 175,
    weight: 68,
    eyesColor: "black",
    balance: 12323653,
    hobby: "football",
  },
  {
    name: "Tsetseg",
    age: 20,
    gender: "female",
    high: 165,
    weight: 48,
    eyesColor: "brown",
    balance: 3538736,
    hobby: "art",
  },
  {
    name: "tengis",
    age: 21,
    gender: "gay",
    high: 185,
    weight: 72,
    eyesColor: "blue",
    balance: 9282085,
    hobby: "write of code",
  },
  {
    name: "Anhuush",
    age: 17,
    gender: "male",
    high: 180,
    weight: 82,
    eyesColor: "azure",
    balance: 1845710,
    hobby: "sleep",
  },
  {
    name: "Mungun",
    age: 14,
    gender: "female",
    high: 138,
    weight: 47,
    eyesColor: "pink",
    balance: 19348210,
    hobby: "eat fast food",
  },
  {
    name: "Suldee",
    age: 34,
    gender: "gay",
    high: 205,
    weight: 102,
    eyesColor: "green",
    balance: 35629633,
    hobby: "listen to music",
  },
];
//1
const findAdultStudents = (students) => {
  let filtered = students.filter((student) => {
    return student.age > 18;
  });
  return filtered;
};
let adultStudents = findAdultStudents(data);
console.log(adultStudents);
//2
const findGenderStudents = (students, gender) => {
  let filtered = students.filter((student) => {
    return student.gender === gender;
  });
  return filtered;
};
let genderStudents = findGenderStudents(data, "male");
console.log("gender student = ", genderStudents);
//3
data = [
  {
    name: "Amar",
    age: 18,
    gender: "male",
    high: 175,
    weight: 68,
    eyesColor: "black",
    balance: 12323653,
    hobby: "football",
  },
  {
    name: "Tsetseg",
    age: 20,
    gender: "female",
    high: 165,
    weight: 48,
    eyesColor: "brown",
    balance: 3538736,
    hobby: "art",
  },
  {
    name: "tengis",
    age: 21,
    gender: "gay",
    high: 185,
    weight: 72,
    eyesColor: "blue",
    balance: 9282085,
    hobby: "write of code",
  },
  {
    name: "Anhuush",
    age: 17,
    gender: "male",
    high: 180,
    weight: 82,
    eyesColor: "azure",
    balance: 1845710,
    hobby: "sleep",
  },
  {
    name: "Mungun",
    age: 14,
    gender: "female",
    high: 138,
    weight: 47,
    eyesColor: "pink",
    balance: 19348210,
    hobby: "eat fast food",
  },
  {
    name: "Suldee",
    age: 34,
    gender: "gay",
    high: 205,
    weight: 102,
    eyesColor: "green",
    balance: 35629633,
    hobby: "listen to music",
  },
];
const findAgeStudents = (students, age) => {
  let filtered = students.sort((data2, data1) => {
    return data2.age - data1.age;
  });
  return filtered;
};
let ageStudents = findAgeStudents(data, 20);
console.log(ageStudents);
//4
data = [
  {
    name: "Amar",
    age: 18,
    gender: "male",
    high: 175,
    weight: 68,
    eyesColor: "black",
    balance: 12323653,
    hobby: "football",
  },
  {
    name: "Tsetseg",
    age: 20,
    gender: "female",
    high: 165,
    weight: 48,
    eyesColor: "brown",
    balance: 3538736,
    hobby: "art",
  },
  {
    name: "tengis",
    age: 21,
    gender: "gay",
    high: 185,
    weight: 72,
    eyesColor: "blue",
    balance: 9282085,
    hobby: "write of code",
  },
  {
    name: "Anhuush",
    age: 17,
    gender: "male",
    high: 180,
    weight: 82,
    eyesColor: "azure",
    balance: 1845710,
    hobby: "sleep",
  },
  {
    name: "Mungun",
    age: 14,
    gender: "female",
    high: 138,
    weight: 47,
    eyesColor: "pink",
    balance: 19348210,
    hobby: "eat fast food",
  },
  {
    name: "Suldee",
    age: 34,
    gender: "gay",
    high: 205,
    weight: 102,
    eyesColor: "green",
    balance: 35629633,
    hobby: "listen to music",
  },
];
const findMaxBalanceStudent = (data, minbalance) => {
  return data.filter((data) => data.balance > minbalance);
};
result = findMaxBalanceStudent(data, 1000000);
console.log(result);
