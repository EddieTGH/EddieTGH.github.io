/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Edmond Niu",
  title: "Hi all, I'm Edmond Niu",
  subTitle: emoji(
    "A student at Duke University double majoring in Computer Science and Psychology. Passionate about utilizing AI/ML and software engineering to facilitate human productivity and develop better mental health resources."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ucn6U_zzdxMRmsPi4hRy8rDGp3Za9v61/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/EddieTGH",
  linkedin: "https://www.linkedin.com/in/edmond-niu",
  gmail: "edmond.niu@gmail.com",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DEVELOPER EXPLORING AI, DATA ENGINEERING, AND BUILDING FULL-STACK APPLICATIONS",
  skills: [
    emoji("⚡ Develop full-stack web applications to increase productivity and efficiency"),
    emoji("⚡ Utilize AI/ML to analyze data and develop better mental health resources"),
    emoji("⚡ Design ETL pipelines and optimize data engineering workflows")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Duke University",
      logo: require("./assets/images/dukeLogo.png"),
      subHeader: "B.S. in Computer Science and B.S. in Psychology",
      duration: "August 2022 - Present",
      desc: "Concentration in AI/ML",
      descBullets: [
        "Data Structures and Algorithms",
        "Advanced Algorithms and Design",
        "Elements of Machine Learning",
        "Intro to Statistical Science",
        "Building full-stack web applications",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Vanguard",
      companylogo: require("./assets/images/vanguardLogo.png"),
      date: "June 2024 – August 2024",
      desc: "Designed automated, real-time ETL pipelines with AWS cloud computing, increasing efficiency by 75% and eliminating human error."
    },
    {
      role: "Data Engineering Research Assistant",
      company: "Duke University",
      companylogo: require("./assets/images/dukeLogo.png"),
      date: "May 2023 – May 2024",
      desc: "Developed data processing pipelines for experiments on Duke's high-performance computing cluster, saving 180+ hours."
    },
    {
      role: "Software Engineering Intern",
      company: "Tetherview",
      companylogo: require("./assets/images/tetherviewLogo.jpeg"),
      date: "June 2022 – August 2022",
      desc: "Programmed a web scraping script to retrieve information for over 3000 potential clients."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/gemLearnerLogo2.png"),
      projectName: "Gem Learn",
      projectDesc:
        "AI-powered flashcard creation app for personalized learning with analytics and career chatbot.",
      footerLink: [
        {
          name: "Demo",
          url: "https://youtu.be/DuvRhxeNME4?si=sNSlhMnEYoftspKo"
        },
        {
          name: "GitHub",
          url: "https://devpost.com/software/geminilearner"
        }
      ]
    },
    {
      image: require("./assets/images/dukeLineLogo.png"),
      projectName: "DukeLine Call Summaries",
      projectDesc:
        "Platform for anonymous peer mental health support integrating OpenAI GPT for client call summaries.",
      footerLink: [
        {
          name: "Demo",
          url: "https://youtu.be/PcFwff8aUT0"
        },
        {
          name: "GitHub",
          url: "https://github.com/EddieTGH/DukeLine-Call-Summaries"
        }
      ]
    },
    {
      image: require("./assets/images/atmCoinMachineLogo.png"),
      projectName: "ATM Coin Machine",
      projectDesc:
        "A 5-stage pipelined CPU and ATM coin machine built in Verilog for secure coin transactions.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/EddieTGH/ATM-Coin-Machine"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Awards 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "2024 SteelHacks XI Hackathon Winner",
      subtitle:
        "Best Pitt Inspired Demo powered by Gemini API",
      image: require("./assets/images/gemLearnerLogo2.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "DevPost",
          url: "https://devpost.com/software/geminilearner"
        },
        {
          name: "GitHub",
          url: "https://github.com/EddieTGH/gem-learner"
        }
      ]
    },
    {
      title: "2024 Duke ASA DataFest Finalist",
      subtitle:
        "Utilizes PyTorch deep learning feedforward neural network ML model to predict student scores on CourseKata chapter tests.",
      image: require("./assets/images/CourseKataLogo.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/EddieTGH/ASA_DataFest_ML_NeuralNetwork"
        }
      ]
    },

    {
      title: "2021 HTHS.Hacks() Hackathon Winner",
      subtitle:
        "Best Gaming Hack",
      image: require("./assets/images/HTHSHacks.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Devpost",
          url: "https://devpost.com/software/aim-analyzer-j05v1o"
        },
        {
          name: "GitHub",
          url: "https://github.com/EddieTGH/ML-Aim-Analyzer"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "", // Set your phone number if you want to display
  email_address: "edmond.niu@gmail.com" // Replace with your email
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};