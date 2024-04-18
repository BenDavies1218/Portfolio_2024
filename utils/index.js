const contentDiv = document.querySelector("#content");
const skillsData = [
  { title: "Discord", description: "I can do react", bullets: [""] },
  { title: "GitHub", description: "I can do react" },
  { title: "VsCode", description: "I can do react" },
  { title: "AWS Web Services", description: "I can do react" },
  { title: "HTML", description: "I can do react" },
  { title: "CSS", description: "I can do react" },
  { title: "Javascript", description: "I can do react" },
  { title: "Postgresql", description: "I can do react" },
  { title: "Terminal", description: "I can do react" },
  { title: "Python", description: "I can do react" },
  { title: "React", description: "I can do react" },
  { title: "Jest", description: "I can do react" },
  { title: "MongoDB", description: "I can do react" },
  { title: "NextJS", description: "I can do react" },
  {
    title: "Sass (Syntactically Awesome Style Sheets)",
    description: "I can do react",
  },
];

function updateContent(title, description) {
  const titleElement = document.querySelector("#title");
  const contentElement = document.querySelector("#textContent");

  titleElement.innerHTML = title;
  contentElement.innerHTML = description;
}

// Attach click event listener to each skill element
const skillElements = document.querySelectorAll(".skill");
skillElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    updateContent(skillsData[index].title, skillsData[index].description);
  });
});

console.log(skillElements);
