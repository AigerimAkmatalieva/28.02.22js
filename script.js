

let person = [
  {
    name: "Peter",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
    profession: "java"
  },
  {
    name: "Elon",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
    profession: "java"
  },
  {
    name: "Sadyr",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
    profession: "java"
  },
  {
    name: "Sam",
    lastname: "Parker",
    age: 57
  },
]

const resume1 = document.querySelector('#container');
resume1.forEach(item => {
  let resume1 = document.createElement('div');
  let name = `${item.name}, `;
  let resume = `${item.resume}, `;
  let profession = `${item.profession}, `

  articleElement.append(name);
  articleElement.append(resume);
  articleElement.append(profession);
  resume1.append(div);
});

