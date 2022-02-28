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
    lastname: "Parker",
    age: 34
  },
  {
    name: "Elon",
    lastname: "Mask",
    age: 34
  },
  {
    name: "Sadyr",
    lastName: "Japarov",
    age: 45
  },
  {
    name: "Sam",
    lastname: "Parker",
    age: 57
  },
]
let container = document.querySelector("#container")

people.forEach((item) => {
  let person = document.createElement('div');
  let name = `${item.name}, `;
  let lastname = `${item.lastname}, `;
  let age = `${item.age}, `
  person.append(name);
  person.append(lastname);
  person.append(age);
});