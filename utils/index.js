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
      "Automated Testing with Github Actions",
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
      "I have great knowledge with CSS Rules, how to style an element add animations / tranisitions to an element. Working with different types of element display such as Flexbox and Grid. Working with variables to allow for easier coding and future editing.",
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
      "Object manipulation",
    ],
  },
  {
    title: "Postgresql",
    description:
      "I'm great at developing SQL databases. formulating precise queries to write, read, update or delete data stored in a postgres database. writing using raw SQL or using an ORM, creating related tables of data and declaring appropriate keys to sort and filter them. Validating data on CRUD operations",
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
      "I have a great understanding of Python data types, loops, control statements, and methods used in Python. I can write efficient code, debug effectively, and utilize Python libraries to enhance functionality in various projects.",
    bullets: [
      "Data types",
      "Loops",
      "Control statements",
      "Methods",
      "Libraries",
      "Debugging & testing",
    ],
  },
  {
    title: "React",
    description:
      "I am proficient in React, capable of building dynamic and responsive user interfaces. I have experience with React hooks, state management, and component-based architecture. I can integrate APIs and manage application state efficiently to create seamless user experiences.",
    bullets: [
      "Hooks",
      "Statement management",
      "Redux",
      "Component Based Coding",
      "Dynamic UI",
      "API Intergration",
      "Responsive Design",
    ],
  },
  {
    title: "MongoDB",
    description:
      "I have a solid understanding of MongoDB, including how to design schemas and perform CRUD operations. I can effectively use MongoDB for data storage in full-stack applications and ensure efficient data retrieval and manipulation.",
    bullets: [
      "Schema Design",
      "CRUD operations",
      "Queries",
      "Data manipulation",
    ],
  },
  {
    title: "NodeJS",
    description:
      "I am skilled in NodeJS, able to create server-side applications using Express.js. I understand asynchronous programming, event-driven architecture and I can build RESTful APIs. My experience includes handling databases, managing sessions, implementing authentication and deployment to AWS",
    bullets: [
      "Server-side Development",
      "ExpressJs",
      "Asynchronous programming",
      "RestfulAPI's",
      "Authentication",
      "Deployment to AWS",
    ],
  },
  {
    title: "NextJS",
    description:
      "I am always interested in exploring new and emerging techonolgies, I have writing applications in both vite and NextJs, I capable of building server-side rendered and statically generated React applications with both of these frameworks. I understand the benefits that NextJs and Vite can offer us in terms of SEO and performance.",
    bullets: ["Server-side rendering", "SEO", "Routing"],
  },
  {
    title: "Sass (Syntactically Awesome Style Sheets)",
    description:
      "I have a good knowledge of SASS syntax including nesting elements, variables, mixins and Inheritance. As of 2024 SASS has become a more obsolete because normal CSS allows us to use almost all the same features. But if I see SASS I know what it's, how it's written, how it's compile and how to structure it in a project. ",
    bullets: [
      "Nesting Elements",
      "Variables",
      "Mixins",
      "Inheritance",
      "Compiling",
      "Project Intergration",
    ],
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

// Images for the slider
const scubaImage = new Image();
scubaImage.src = "./utils/images/scubagame.png";

const reactChatAppImage = new Image();
reactChatAppImage.src = "./utils/images/reactchatapp.png";

const dealOrNoDealImage = new Image();
dealOrNoDealImage.src = "./utils/images/dealornodeal.png";

const flaskImage = new Image();
flaskImage.src = "./utils/images/flask.svg";

const trelloImage = new Image();
trelloImage.src = "./utils/images/trello.png";

const cssThemeGen = new Image();
cssThemeGen.src = "./utils/images/css-theme-gen.png";

// slider element
const slider = document.querySelector(".slider");
const sliderObject = [
  {
    img: `${reactChatAppImage.src}`,
    title: "Realtime Chat Application",
    description:
      "I developed a real-time chat application similar to WhatsApp. This application allows users to create accounts, log in, add contacts, send and receive messages, and block other users. This major project highlights my skills in creating styled, dynamic React components, managing persistent data storage in a database, implementing authentication and handling global state management.",
    techStack: ["ReactJS", "HTML", "CSS", "Google Firebase", "Netlify"],
    link: "https://insta-chat2024.netlify.app/",
    repository: "https://github.com/BenDavies1218/react-realtime-chatapp",
  },
  {
    img: `${dealOrNoDealImage.src}`,
    title: "Python Deal or No Deal Game",
    description:
      "This is a pure python terminal application, it shows my strengths with functions and control flow in python. After completing this I deploy this using a Node Express server an AWS EC2 instance, so now we can enjoy it in the browser too.",
    techStack: ["Python", "AWS & Express (for deployment)"],
    link: "http://13.211.129.98:3000/",
    repository: "https://github.com/BenDavies1218/pythongame",
  },
  {
    img: `${cssThemeGen.src}`,
    title: "CSS Theme Generator",
    description:
      "I developed a free theme generator for front-end web development. This tool enables individuals to accelerate their development process by generating a color palette based on their chosen color. This project demonstrates my proficiency in using local storage, Node packages, React component-based UI and modern coding principles.",
    techStack: ["ReactJS", "ViteJS", "HTML", "CSS", "Node", "Netlify"],
    link: "https://css-colour-palette-generator.netlify.app/",
    repository: "https://github.com/BenDavies1218/css-colour-palette-generator",
  },
  {
    img: `${flaskImage.src}`,
    title: "Recipe Webserver Api",
    description:
      "Inspired by my background in hospitality, this API allows users to store there recipes. Users can also write reviews for other peoples recipes as well. This API taught me about applying decorator functions (Middleware functions) in pyhton, creating Restful API's that allow for all full CRUD operations and working with PostgresQl / SQL databases.",
    techStack: [
      "Python",
      "SQL",
      "Flask",
      "Postgres",
      "SQLAlchmey",
      "Marshmallow",
    ],
    link: "",
    repository: "https://github.com/BenDavies1218/Flask_Recipe_Webserver",
  },
  {
    img: `${scubaImage.src}`,
    title: "ScubaEscape Game",
    description:
      "HTML5 canvas game build with javascript!<br> The inspiration for the game comes from my love of scuba diving. Players are trapped in a submersible with there air rapidly running out, you must find a way out before you run out of air. Like real diving as you verture deeper the air you consume increases. This project demonstrates my vanilla javascript knowledge of classes and how I can create functions within these class.",
    techStack: ["HTML", "CSS", "Javascript"],
    link: "https://scuba-escape.netlify.app/",
    repository: "https://github.com/BenDavies1218/ScubaEscape",
  },
  {
    img: `${trelloImage.src}`,
    title: "Agile Managment Python Webserver",
    description:
      "Bases on the application trello this API allows users to create cards and tasks, this includes adding users to cards and creating a list tasks. This API demonstrates the my use a SQL databases and adding validation to JSON data, CRUD operations and creating Restful API's.",
    techStack: [
      "Python",
      "SQL",
      "Flask",
      "Postgres",
      "SQLAlchmey",
      "Marshmallow",
    ],
    link: "",
    repository:
      "https://github.com/BenDavies1218/Agile_management_system_Webserver",
  },
  // {
  //   img: `${scubaImage.src}`,
  //   title: "Blog Creator",
  //   description: "",
  //   techStack: ["HTML", "CSS", "Javascript"],
  //   link: "https://scuba-escape.netlify.app/",
  //   repository: "https://github.com/BenDavies1218/ScubaEscape",
  // },
];

window.addEventListener("load", initializeSlider());

function initializeSlider() {
  let content = [];
  for (let index in sliderObject) {
    let techStackItems = sliderObject[index].techStack;
    techStackItems = techStackItems.map((tech) => `<li>${tech}</li>`).join("");
    let slideContent = `
      <div class="slide">
        ${
          sliderObject[index].link
            ? `<a href="${sliderObject[index].link}" target="_blank">`
            : `<a href="${sliderObject[index].repository}" target="_blank">`
        }
        <img src="${sliderObject[index].img}" alt="image">
        ${
          sliderObject[index].link || sliderObject[index].repository
            ? `</a>`
            : ""
        }
        <br><br>
        <div>
          <h3>${sliderObject[index].title}</h3>
          <p>${sliderObject[index].description}</p>
          <ul>
            ${techStackItems}
          </ul>
          ${
            sliderObject[index].link
              ? `<a href="${sliderObject[index].link}"> Deployment Link`
              : ""
          }
          <br><br>
          ${
            sliderObject[index].repository
              ? `<a href="${sliderObject[index].repository}" target="_blank">Repository Link</a>`
              : ""
          }
        </div>
      </div>
    `;
    content.push(slideContent);
  }
  slider.innerHTML = content.join("");
}

// Slider configuration
// Stupid little error with tns package if the width is over 1438px then the autowidth must be set to false or it breaks everything
const tnslider = tns({
  autoWidth: false,
  items: 1.3,
  gutter: 25,
  mouseDrag: true,
  swipeAngle: false,
  container: ".slider",
  speed: 600,
  controlsContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".next",
});
