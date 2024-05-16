const contentDiv = document.querySelector("#content");
const skillsData = [
  {
    title: "Discord",
    description:
      "I enjoy working in team enviroments where everyone can contribute to reaching the end goal. I'm a very easy person to get along with and enjoy casual conversation amounst co-workers.",
    bullets: [
      "Communication",
      "Collaboration",
      "Trust",
      "Respect",
      "Accounability",
      "Memes",
    ],
  },
  {
    title: "GitHub",
    description:
      "I've used Github as my repository for all of my projects and understand Project control flow, branch management, pull request and all other aspects of a Git Workflow. Working in developer branches before testing pulling/merging to the production branches. Things That make me a great with Github",
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
      "I use VScode as my default IDE, I'm familiar with all the emmit abbreviations and keyboard shortcuts to make that code practically write itself. I pride myself of readable and documented Dry code, I love researching and problem solving to find the optimal solution to every problem.",
    bullets: [
      "Code Documentation",
      "Use of current / lastest coding methods",
      "Algorithmic Thinking to find the optimal solution",
      "No spaghetti code",
    ],
  },
  // { title: "AWS Web Services", description: "I can do react" },
  {
    title: "HTML",
    description:
      "I have a great understanding of HTML semantic tags, The structure of a HTML document and how it is used with the react Library. How to create dymanic elements on the page using hooks, state and or vanilla javascript.",
    bullets: [
      "Semantic Tags",
      "How it's used with React",
      "Building dymanic elements",
      "Proper document structure",
      "Use of id's and classes / classNames",
    ],
  },
  {
    title: "CSS",
    description:
      "I have great knowledge with CSS Rules, how to style an element add animations / tranisitions to an element. Working with different types element display such as Flexbox and Grid. Working with variables to allow for easier coding and future editing.",
    bullets: [
      "CSS Variables",
      "Flexbox and Grid",
      "Psuedo classes i.e Hover and active",
      "Nesting and inheritance",
      "Use of meaningful classNames to identify elements",
    ],
  },
  {
    title: "Javascript",
    description:
      "I am great at javascript and have a handle on Javacript classes, functions, Variable Scope, Asynchronous programming, callbacks, Arrow functions and control flow in javacript.",
    bullets: [
      "Variable Scope",
      "Classes",
      "Asynchronous Programming",
      "Callbacks",
      "Arrow Functions",
      "Control Flow",
      "object manipulation",
    ],
  },
  {
    title: "Postgresql",
    description:
      "I'm great at developing SQL databases. formulating precise queries to write, read, update or delete data stored in a postgres database. writing using raw SQL or using an ORM, creating related tables of data and declaring appropriately keys to sort and filter them. Validating data on CRUD operations",
    bullets: [
      "SQL CRUD Methods",
      "Raw SQL",
      "ORM queries",
      "Database Relationships",
      "Primary and Foriegn Key",
      "Data validation",
    ],
  },
  {
    title: "Terminal",
    description:
      "I use Linux for my operating system and have extensive knowledge on how to develop applications in Linux using WSL.",
    bullets: ["Linux Developer"],
  },
  {
    title: "Python",
    description:
      "I have great understanding of python data types, loops, control statements and methods used in python.",
  },
  { title: "React", description: "I can do react" },
  { title: "MongoDB", description: "I can do react" },
  { title: "NodeJS", description: "I can do react" },
  {
    title: "NextJS",
    description: "Next JS ",
  },
  {
    title: "Sass (Syntactically Awesome Style Sheets)",
    description:
      "I have a good knowledge of SASS syntax including nesting elements, variables, mixins and Inheritance. As of 2024 SASS has become a little obsolete though because normal CSS does allow us to use almost all the same features. But if I see SASS I know what it's, how it's written and how it's compile it in a project. ",
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

const slider = document.querySelector(".slider");
const carsObject = [
  {
    img: "https://images.pexels.com/photos/9784188/pexels-photo-9784188.jpeg?cs=srgb&dl=pexels-mathias-reding-9784188.jpg&fm=jpg",
    model: "FERRARI 296 GTS",
    type: "coupe",
  },
  {
    img: "https://images.pexels.com/photos/10292234/pexels-photo-10292234.jpeg?cs=srgb&dl=pexels-yoshi-10292234.jpg&fm=jpg",
    model: "FERRARI SF90",
    type: "coupe",
  },
  {
    img: "https://images.pexels.com/photos/11202306/pexels-photo-11202306.jpeg?cs=srgb&dl=pexels-prat-clement-11202306.jpg&fm=jpg",
    model: "FERRARI F60 America",
    type: "coupe",
  },
  {
    img: "https://images.pexels.com/photos/8171898/pexels-photo-8171898.jpeg?cs=srgb&dl=pexels-eriks-abzinovs-8171898.jpg&fm=jpg",
    model: "FERRARI F8",
    type: "hatchback",
  },
];

window.addEventListener("load", initializeSlider());

function initializeSlider() {
  let cars = "";
  for (let car in carsObject) {
    cars += `<div class="slide">
              <img src="${carsObject[car].img}"
                alt="image">
              <br><br>
              <div>
                <h3>${carsObject[car].model}</h3>
                <p>${carsObject[car].type}</p>
              </div>
            </div>`;
  }
  slider.innerHTML = cars;
}

// stupid little error with tns package if the width is over 1438px then the autowidth must be set to true or it breaks everything
const tnslider = tns({
  autoWidth: true,
  items: 3.3,
  gutter: 10,
  mouseDrag: true,
  swipeAngle: false,
  container: ".slider",
  speed: 600,
  controlsContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".next",
});
