const contentDiv = document.querySelector("#content");
const skillsData = [
  {
    title: "Discord",
    description: "I can do react",
    bullets: ["Team Work", "Communication", "Memes"],
  },
  {
    title: "GitHub",
    description:
      "I've used Github as my repository for all of my projects and understand Project control flow, branch management and pull request. Working in developer branches before testing pulling/merging to the production branches.",
    bullets: [
      "Control Workflow",
      "Branch Management",
      "Commit Documentation",
      "Deployment from Git",
    ],
  },
  {
    title: "Visual Studio Code",
    description:
      "I use VScode as my default IDE, I'm familiar with all the emmit abbreviations and keyboard shortcuts to make that code practically write itself. I pride myself of Dry readable code and finding the optimal solution to every problem.",
    bullets: [
      "Dry Coding Principles",
      "Algorithmic Thinking to find the optimal solution",
      "No spaghetti code",
    ],
  },
  { title: "AWS Web Services", description: "I can do react" },
  { title: "HTML", description: "I can do react" },
  { title: "CSS", description: "I can do react" },
  { title: "Javascript", description: "I can do react" },
  { title: "Postgresql", description: "I can do react" },
  { title: "Terminal", description: "I can do react" },
  { title: "Python", description: "I can do react" },
  { title: "React", description: "I can do react" },
  { title: "MongoDB", description: "I can do react" },
  { title: "NodeJS", description: "I can do react" },
  {
    title: "NextJS",
    description: "Next JS ",
  },
  {
    title: "Sass (Syntactically Awesome Style Sheets)",
    description: "I can do react",
  },
];

function updateContent(title, description, bullets) {
  const titleElement = document.querySelector("#title");
  const contentElement = document.querySelector("#textContent");

  titleElement.innerHTML = title;

  contentElement.innerHTML = "";

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = description;
  contentElement.appendChild(descriptionParagraph);

  // Add bullets points if available
  if (bullets && bullets.length > 0) {
    const bulletsList = document.createElement("ul");

    bullets.forEach((bullet) => {
      const listItem = document.createElement("li");
      listItem.textContent = bullet;
      bulletsList.appendChild(listItem);
    });

    contentElement.appendChild(bulletsList);
  }
}

const skillElements = document.querySelectorAll(".skill");
skillElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    const { title, description, bullets } = skillsData[index];
    updateContent(title, description, bullets);
  });
});
