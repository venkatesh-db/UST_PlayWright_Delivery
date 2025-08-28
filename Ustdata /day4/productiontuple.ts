
// A tuple for storing [statusCode, message]
let response: [number, string] = [200, "OK"];


// 3. Array of objects (students with id and name)
interface Student {
  id: number;
  name: string;
}

let students: Student[] = [
  { id: 1, name: "Anu" },
  { id: 2, name: "Raj" },
  { id: 3, name: "Meera" },
];
console.log("Students:", students);

// 4. Tuple array (id + name + active flag)
let studentTuples: [number, string, boolean][] = [
  [1, "Anu", true],
  [2, "Raj", false],
  [3, "Meera", true],
];
console.log("Student Tuples:", studentTuples);


