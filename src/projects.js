import diceGameImage from "./components/dicegame.png";
import weatherAppImage from "./components/weatheapp.png";
import noteKeeperApp from "./components/noteKeeperApp.png";
import contactApp from "./components/contactApp.png";
import cryptoapp from "./components/cryptoapp.png";
import todo from "./components/todo.png";

const projects = [
  {
    id: 1,
    title: "Dice Game",
    description:
      'The Dice Game is a simple and interactive JavaScript project that brings the excitement of rolling dice to your browser. Built using HTML, CSS, and JavaScript, this project allows users to simulate a classic dice game between two players. Upon clicking the "Roll Dice" button, random dice values are generated for each player, and the winner is determined based on the higher roll. The project not only demonstrates basic web development skills but also incorporates interactivity and randomness. Check out the live demo to experience the thrill of the dice roll!',
    img: diceGameImage,
    languages: ["HTML", "CSS", "Javascript"],
    gitpage: "https://github.com/Babina081/simple-dice-game",
    demo: "https://babina081.github.io/simple-dice-game/",
  },
  {
    id: 2,
    title: "Weather App",
    description: `The Weather App is a simple and responsive web application built using HTML, CSS, and JavaScript. It provides users with real-time weather information for a specified location by leveraging a weather API. The user interface is clean and user-friendly, allowing users to easily check the current weather conditions, temperature, and other relevant details. Users can input a city name or choose their current location to receive accurate and up-to-date weather updates. The project demonstrates my skills in front-end development, including DOM manipulation, asynchronous JavaScript (fetching data from an API), and creating an engaging user experience. The app's responsive design ensures a seamless experience across various devices. Explore the live demo to see the Weather App in action and stay informed about the weather in your favorite locations!`,
    img: weatherAppImage,
    languages: ["HTML", "CSS", "Javascript", "API"],
    gitpage: "https://github.com/Babina081/weatherApp",
    demo: "https://babina081.github.io/weatherApp/",
  },
  {
    id: 3,
    title: "Note Keeping App",
    description: `Simple Note Keeper is a no-frills app for jotting down and organizing thoughts and ideas. With a user-friendly interface, it allows easy note creation and deletion. This straightforward approach ensures quick and efficient note-taking, making it an ideal solution for those who value simplicity in managing their thoughts and inspirations.`,
    img: noteKeeperApp,
    languages: ["React", "JSX", "CSS", "Hooks"],
    gitpage: "https://github.com/Babina081/note-keeper-react-project",
    demo: "https://babina081.github.io/note-keeper-react-project/",
  },
  {
    id: 4,
    title: "Crypto App",
    description:
      "Introducing my crypto app, a dynamic platform offering a comprehensive view of various cryptocurrencies. Explore detailed information on each crypto, accompanied by interactive charts that reflect their performance over customizable time periods. This user-friendly application is tailored for crypto enthusiasts and investors, providing a seamless experience for staying informed and making data-driven decisions.",
    img: cryptoapp,
    languages: ["React", "Hooks", "chart.js", "API", "Redux", "ant design"],
    gitpage: "https://github.com/Babina081/cryptocurrency-api-react-project",
    demo: "https://crypto-app-101.netlify.app/",
  },
  {
    id: 5,
    title: "TODO App",
    description:
      "Explore my Todo App project, a straightforward demonstration of my web development skills. This application allows users to seamlessly add, edit, and delete tasks, showcasing my proficiency in creating practical and user-friendly software solutions.",
    img: todo,
    languages: [
      "React",
      "NodeJs",
      "ExpressJs",
      "PostgresSQL",
      "Bootstrap",
      "Render",
      "Netlify",
      "States & Props",
      "Hooks",
    ],
    gitpage: "https://github.com/Babina081/pern-todo",
    demo: "https://65b0b4260badb2000845982b--pern-todo-102.netlify.app/",
  },
  {
    id: 6,
    title: "Contact Manager",
    description:
      "The Contact Manager project is a comprehensive application designed to streamline and organize the management of personal and professional contacts. It serves as a centralized hub for storing, retrieving, and updating contact information, providing users with a user-friendly interface to efficiently manage their network.",
    img: contactApp,
    languages: [
      "React",
      "Hooks",
      "JSX",
      "API",
      "Semantic UI",
      "States & Props",
    ],
    gitpage: "https://github.com/Babina081/react-contact-manager.git",
    demo: "https://babina081.github.io/react-contact-manager/",
  },
];

export default projects;
