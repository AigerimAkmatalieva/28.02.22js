let fruits = ["apple", "banana", "giwi", "peach"];

fruits.forEach((item) => {
  console.log(item)
});


let word = ["apple", "banana",
 false, 13,
"hello", 
["1", "2", "3"], 
{ name: "Peter", 
Lastname:"Parker" },
 12345];

word.forEach((item) => {
  console.log(typeof(item))
});



let people = [
  {
    name: "Peter",
    lastName: "Parker",
    age: 34
  },
  {
    name: "Elon",
    lastName: "Mask",
    age: 34
  },
  {
    name: "Sadyr",
    lastName: "Japarov",
    age: 45
  },
  {
    name: "Sam",
    lastName: "Parker",
    age: 57
  },
]

people.forEach((item) => {
  const div = document.createElement('div');
  document.write(item);
});