import React from "react";

import { useParams } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import "./single-projects.css"
const SingleProject = () => {
  const { projectName } = useParams();

  const projectData = itemData.find(
    (item) => item.project_name === projectName
  );

  if (!projectData) {
    return <div>Projekat nije pronađen.</div>;
  }

  return (
    <div className="project" style={{marginBottom: "10%"}}>
      <Header></Header>
      <div className="project-intro">
        {" "}
        <h1>{projectData.project_name}</h1>
        {/* General Information */}
        <div>
          <p>{projectData.description[0].content}</p>
        </div>
        <button>PROJECT LINK</button>
        {/* Image */}
        
          <img
            src={projectData.img}
            alt={`${projectData.project_name} Screenshot`}
          />
        
      </div>

      {/* Overview */}
      <div className="project-overview">
        <h2>{projectData.description[1].title}</h2>
        <p>{projectData.description[1].content}</p>
      </div>

      {/* Map through the description array */}
      <div className="project-rest">
      {projectData.description.slice(2).map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          {/* Check if content is an array and handle accordingly */}
          {Array.isArray(item.content) ? (
            <ul>
              {item.content.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          ) : (
            <p>{item.content}</p>
          )}
        </div>
      ))}
      </div>

      <Footer></Footer>
    </div>
  );
};

const itemData = [
  {
    img: "../bb.png",
    project_name: "Brick Breaker",
    description: [
      {
        title: "General informations",
        content:
          "Brick Breaker is a classic 2D arcade game where the player controls a paddle to bounce a ball and break bricks at the top of the screen.",
      },

      {
        title: "Overview",
        content:
          " The Brick Breaker project is a fun 2D game made in Java where players control a paddle to keep a bouncing ball from escaping the screen and break bricks. The game looks good and is easy to use thanks to Java Swing. It has many levels that get harder as you go, with different challenges and brick setups in each one. You earn points for breaking bricks, and different-colored bricks give you different points, making the game more strategic. The game also has power-ups that can change the ball's speed or the size of the paddle. Sound effects make the game more interesting, like when a brick breaks or you lose a life. This project helps developers learn important programming skills and game design concepts. In the future, improvements could include more features, better graphics, and keeping track of high scores. Overall, the Brick Breaker project is a great way to learn Java, be creative, and understand how to make user-friendly games.",
      },
      {
        title: "Gameplay",
        content:
          "Players can engage in the game either through the user interface (UI) or the console. The player maneuvers the paddle horizontally to prevent the ball from falling off the screen. The objective is to break all the bricks using the bouncing ball.",
      },
      {
        title: "Scoring",
        content:
          "Players earn points for each brick they break. Different colored bricks may have varying point values, adding a strategic element to the gameplay.",
      },
      {
        title: "Learning Objectives",
        content:
          "The project covers essential aspects such as event handling for user interactions, employing object-oriented programming principles through classes and objects for organized and modular code, implementing collision algorithms for efficient ball movement and detection, and creating a visually appealing game interface that responds well to user interactions. This approach not only showcases technical skills but also underscores the significance of user-centric design in game development",
      },
      {
        title: "Tools Used ",
        content: [
          "JAVA",
          "Java Swing Library",
          "Integrated Development Environment (IDE)",
          "Object-Oriented Programming (OOP) Principles",
          "Collision Detection Algorithms",
        ],
      },
    ],
  },
  {
    img: "../quiz.png",
    project_name: "Quiz",

    description: [

      { title: "", content : "The React.js Quiz App is an engaging and interactive application designed for users to test their knowledge across a variety of topics."}, 
      {
        title: "Overview",
        content:
          " Built using React.js, the app leverages a Trivia API to dynamically fetch questions and provide a diverse range of challenges. The game is structured with three difficulty levels, catering to users with varying expertise - easy, medium, and hard. Each level features a time-limited quiz to add an exciting element of urgency.",
      },
      {
        title: "Key Features",
        content:
          "React.js Framework: Utilizes the React.js library for building a dynamic and responsive user interface.\n- Trivia API Integration: Connects to a Trivia API to fetch and display a curated set of questions for an engaging quiz experience.\n- Multiple Difficulty Levels: Offers three difficulty levels (easy, medium, and hard) to accommodate users with different levels of knowledge.\n- Result Page: Includes a result page that showcases the user's performance after completing the quiz. Displays the user's score, correct and incorrect answers, and other relevant details.\n- Previous Answers and Scores: Enables users to review their previous answers and scores, fostering a learning experience.\n- Game Timer: Implements a timer for each quiz, adding a time constraint to enhance the challenge. Users must answer questions within the allocated time, contributing to the overall excitement.",
      },
      {
        title: "Technical Details",
        content:
          "React.js Components: Utilizes React.js components for modular and efficient code organization.\n- State Management: Implements state management to handle dynamic changes in the quiz state, user progress, and results.\n- API Fetching: Leverages asynchronous requests to fetch quiz questions from the Trivia API in real-time.\n- Timer Implementation: Integrates timer functionality to track the time remaining for each question.",
      },
      {
        title: "Learning Objectives",
        content:
          " React.js Proficiency: Enhances React.js skills through the development of interactive components and state management.\n- API Integration: Gains experience in integrating external APIs to fetch and display dynamic content.\n- Stateful Application: Develops proficiency in managing the application state to track user progress and quiz results.\n- User Interface Design: Practices creating an intuitive and visually appealing user interface for an engaging user experience.",
      },
      { title: "Tools Used ", content: ["React.js", "API", "GIT"] },
    ],
  },
  {
    img: "../triba.png",
    project_name: "Triba",

    description: [
      {title: "", content:"Welcome to the thrilling realm of Triba!"   }, 
      {
        title: "Overview",
        content:
          " Prepare for an unforgettable gaming journey that harnesses the incredible capabilities of React, a powerful JavaScript library for crafting immersive user interfaces. Triba is an engaging and dynamic game that immerses players in a world of puzzles and strategic challenges. It delivers a captivating experience to challenge your mind, sharpen thinking skills, and build friendships with players from around the world. With its intuitive and interactive interface, Triba guarantees hours of entertainment and excitement. Thanks to React's advanced features, Triba is visually stunning, responsive, and highly interactive. Whether facing powerful Artificial Intelligence or challenging minds worldwide, it ensures a seamless and enjoyable gaming experience. Beyond incredible gameplay, Triba fosters a vibrant community where players connect, chat, and engage in thrilling multiplayer battles. Brace yourself for an extraordinary gaming adventure, immerse yourself in the captivating world of Triba, test your limits, and carve out your remarkable legacy. Witness the future of gaming unfold with Triba!",
      },
      {
        title: "Main Features",
        content:
          "Experience the captivating world of Triba, a thrilling board game set on a classic 2D board. To fully immerse yourself in the game, registration is required. Once successfully registered, you gain access to five exciting modes to choose from:",
      },
      {
        title: "Modes",
        content:
          "1. Normal game\n2. Fast game\n3. AI Mode\n4. AI Fast Mode\n5. Multiplayer",
      },
      {
        title: "Mode Descriptions",
        content:
          " - Normal and fast games are split-screen multiplayer, perfect for challenging friends in real-time.\n - AI mode and AI fast mode provide engaging single-player gameplay, allowing you to sharpen your skills and become an intimidating Triba player.\n - If you prefer online play, the multiplayer mode awaits, where you can engage in thrilling battles with opponents from around the world.",
      },
      {
        title: "Board Types",
        content:
          "1. Small (4x5) \n 2. Medium (6x7)\n3. Large (8x10)\n4. Crazy (rhombus)",
      },
      {
        title: "Board Type Description",
        content:
          "Remember, the larger the board, the more challenging the game becomes. So choose wisely and prepare for an exciting journey into the depths of Triba!",
      },
      {
        title: "Gameplay",
        content:
          "The objective of the game is to create a triangle by selecting three dots that are not in a straight line. Once you make your move, it becomes your opponent's turn. Their goal is also to form a triangle. However, it is crucial to avoid creating triangles that intersect or collide with each other. The essence of the game lies in strategically preventing your opponent from making a valid move. By carefully planning your moves, you can effectively block your opponent from forming any triangles. If you successfully achieve this, you will emerge as the victorious player. However, if your opponent manages to create a triangle, you will be deemed the loser. Lastly, we would like to wish you good luck and hope you enjoy the game!",
      },

      {
        title: "Tools used",
        content: [
          "React.js: A JavaScript library for building user interfaces.",
          "Node.js: A JavaScript runtime for server-side development.",
          "Express.js: A web application framework for Node.js.",
          "MongoDB: A NoSQL database for storing game-related data.",
          "Socket.io: A library for real-time web applications, essential for multiplayer functionality.",
          "Visual Studio Code: A lightweight and powerful code editor for development.",
          "Git and GitHub: Version control and collaboration platform for project management.",
        ],
      },
    ],
  },

  {
    img: "../sildo.png",
    project_name: "Lectures/aka Slido.js",
    modules: [
      {
        title: "Project Overview",
        content:
          "The application comprises multiple modules catering to different types of users: System Administrators, Instructors, and the Audience.",
      },
      {
        title: "System Administrator",
        content:
          "Has basic control over the system, performing CRUD operations on lookup tables, managing user accounts, and viewing and deleting scheduled lectures. Multiple users can have system administrator roles, added directly through the database.",
      },
      {
        title: "Instructor",
        content:
          "Registered users with extensive system capabilities. Instructors schedule lectures, share access details with the audience, respond to questions, filter inquiries, and track reports. They can also manage their lectures and receive email reports after each session.",
      },
      {
        title: "Audience",
        content:
          "Comprising unregistered users, guests access lectures via links or codes. They can ask and approve questions, and filter and sort inquiries for a personalized experience.",
      },
      {
        title: "Features",
        content: [
          "Responsive design for both frontend and backend using Node.js.",
          "User authentication handled through MongoDB or PostgreSQL.",
          "Real-time chat functionality.",
          "Automatic page refresh for guest and instructor question pages.",
          "Lecture rating system with audience feedback sent to instructors via email.",
          "Three additional creative specifications to be devised by the student.",
        ],
      },
      {
        title: "Tools used",
        content: [
          "Node.js: A robust runtime for server-side development.",
          "MongoDB Databases for secure data storage and retrieval.",
          "EJS: A template engine for generating HTML with JavaScript.",
          "Real-time Chat: Implemented for dynamic communication within the system.",
          "Git and GitHub: Version control and collaborative development.",
        ],
      },
    ],
  },
];

export default SingleProject;
