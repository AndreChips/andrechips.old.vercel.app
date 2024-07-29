import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  teaterkatak,
  umn,
  centralai,
  atm,
  anugerah,
  genshintinder,
  mathfantasy,
  orangeburger,
  seiyou,
  travelokie,
  panin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Panin Dai-ichi Life",
    role: "Full Time",
    icon: panin,
    iconBg: "#ffffff",
    date: "Oct 2023 - Present",
    points: [
      "Handle requests related to maintaining and enhancing Cordova-based mobile application, SQLCipher-based database management, including adding desired features and fixing existing bugs, while ensuring seamless integration with SQL Server",
      "Manage ongoing development and support for web applications utilizing Spring Tool Suite, including adding new features, troubleshooting issues, and maintaining connections to SQL Server databases and REST APIs.",
      "Support and improve a hybrid application using the Ionic Angular framework, focusing on implementing requests that involve calling REST APIs and Firebase APIs for real-time data synchronization.",
    ],
  },
  {
    title: "Lab Assistant",
    company_name: "Lab FTI Universitas Multimedia Nusantara",
    role: "Volunteer",
    icon: umn,
    iconBg: "#ffffff",
    date: "Feb 2023 - June 2023",
    points: [
      "Taught `Introduction to Internet Technology` at Universitas Multimedia Nusantara (UMN) to a class of 20+ students.",
      "Created basic websites using HTML, CSS, JavaScript, jQuery, and built websites using ReactJS and Bootstrap.",
      "Integrated APIs using Axios for data fetching and dynamic content updates.",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "PT Central Artificial Intelligence",
    role: "Internship",
    icon: centralai,
    iconBg: "#ffffff",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Developed one of the company's product which is Central POS (Point of Sales) within 4 months using JavaScript as the main programming language with React Native Framework.",
      "Led one of Central AI`s Mobile Developer Teams, assigning tasks to other developers and collaborating with the UI/UX Designer Team to improve the application interface.",
      "Implemented all of the application interface based on the mockup provided by the UI/UX Designed Team.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Anugerah Teknik Mandiri",
    role: "Part Time",
    icon: atm,
    iconBg: "#ffffff",
    date: "Aug 2020 - Mar 2021",
    points: [
      "Developed Anugerah Teknik Mandiri's company website using HTML and CSS.",
      "Implemented and designed the user interface of the company's website to be used for commercial purposes.",
    ],
  },
  {
    title: "Sound Technician",
    company_name: "Teater KataK UMN",
    role: "Organization",
    icon: teaterkatak,
    iconBg: "#ffffff",
    date: "Oct 2019 - Dec 2019",
    points: [
      "Was involved in some of the plays of Teater Katak, one of the extracurricular activities in Multimedia Nusantara University.",
      "Collaborated with the actors and directors of the plays to managed what sound was needed for the plays.",
      "Contributed in helping the other crew when setting up the stage play.",
    ],
  },
];

const projects = [
  {
    name: "Math Fantasy",
    description:
      "Math Fantasy, is a statistics mathematic learning game with a 2D Top Down Syle.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "csharp",
        color: "green-text-gradient",
      },
    ],
    image: mathfantasy,
    source_code_link: "https://github.com/AndreChops/MathFantasy",
    live_demo_link: "",
  },
  {
    name: "SeiYou",
    description:
      "Application for people that like voice acting. People can upload their voice acting and search other people's voice acting.",
    tags: [
      {
        name: "ionic",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: seiyou,
    source_code_link: "https://github.com/IArnFredo/WeHearYouAll-SeiYou",
    live_demo_link: "https://sei-you.vercel.app/welcome",
  },
  {
    name: "Travelokie",
    description:
      "Hotel booking system built with Laravel, which focuses on registration functionality of a hotel booking.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: travelokie,
    source_code_link: "https://github.com/AndreChops/Travelokie",
    live_demo_link: "",
  },
  {
    name: "Anugerah Teknik Mandiri",
    description:
      "Company website for Anugerah Teknik Mandiri, made for commercial purposes.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: anugerah,
    source_code_link: "https://cv-atm.com",
    live_demo_link: "https://cv-atm.com",
  },
  {
    name: "Orange Burger",
    description:
      "A restaurant website, where users can make food orders. Also includes admin dashboard, where admin can manage transactions.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: orangeburger,
    source_code_link: "https://github.com/AndreChops/OrangeBurger",
    live_demo_link: "",
  },
  {
    name: "Genshin Tinder",
    description: "Dating-like application made using Ionic React.",
    tags: [
      {
        name: "ionic",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: genshintinder,
    source_code_link: "https://github.com/AndreChops/GenshinTinder",
    live_demo_link: "",
  },
];

export { services, technologies, experiences, projects };
