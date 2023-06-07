import {
  backend,
  frontend,
  app,
  reactnative,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  jquery,
  netlify,
  heroku,
  firebase,
  started,
  intern,
  taught,
  win,
  ibsywlc,
  devoutlooks,
  textutils,
  todolist,
  tilegame,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Work",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    id: "web-developer",
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    icon: backend,
  },
  {
    id: "react-native-developer",
    title: "React Native Developer",
    icon: reactnative,
  },
  {
    id: "app-developer",
    title: "Application Developer",
    icon: app,
  },
];

const technologies = [
  {
    name: "html5",
    icon: html,
  },
  {
    name: "css3",
    icon: css,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "jquery",
    icon: jquery,
  },
  {
    name: "reactjs",
    icon: reactjs,
  },
  {
    name: "tailwindcss",
    icon: tailwind,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "threejs",
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
    name: "netlify",
    icon: netlify,
  },
  {
    name: "heroku",
    icon: heroku,
  },
];

const experiences = [
  {
    title: "Journey Started",
    company_name: "For Web Development",
    icon: started,
    iconBg: "#1d1836",
    date: "February 2020",
    points: [
      "I started my Web Development journey with HTML, CSS & JavaScript.",
      "Then I learned a framework i.e. ReactJS.",
    ],
  },
  {
    title: "Selfcare Apparels Intern",
    company_name: "Internship",
    icon: intern,
    iconBg: "#1d1836",
    date: "November 2021 - March 2022",
    points: [
      "I was led to update the official website of the company on the daily basis.",
      "I used to co-ordinate between my manager and a senior website developer to update the website.",
    ],
  },
  {
    title: "Taught Students",
    company_name: "Online & Offline",
    icon: taught,
    iconBg: "#1d1836",
    date: "2022 - 2023",
    points: [
      "I taught Web Development, and App Development to over 100+ students online.",
      "Also taught about Web Development to more than 60+ students offline.",
    ],
  },
  {
    title: "Winner at HACKATHON",
    company_name: "TECHNOTHON",
    icon: win,
    iconBg: "#1d1836",
    date: "April 2023",
    points: [
      "Me and my team won a hackathon i.e. 'TECHNOTHON' which was conducted by VES Polytechnic.",
    ],
  },
  {
    title: "Winner at Joint SB Contest",
    company_name: "SMELT 4.1",
    icon: win,
    iconBg: "#1d1836",
    date: "May 2023",
    points: [
      "My team won a Joint SB Contest i.e. 'SMELT 4.1' in which 2 IEEE SB's came together and proposed an event for the betterment of students.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IBSYWLC ",
    description:
      "I developed IBSYWLC website which is a website which was made for an event named 'IBSYWLC' conducted by IEEE Bombay Section's Student Activities Committee.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "text-[#ffd500]",
      },
    ],
    image: ibsywlc,
    source_live_link: "https://ieeebombay.org/ibsywlc23/",
  },
  {
    name: "Dev Outlooks",
    description:
      "Dev Outlooks is a community where I teach Web Development and App Development for free for the students who are very motivated to learn web development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image: devoutlooks,
    source_live_link: "https://devoutlook.netlify.app/",
  },
  {
    name: "TextUtils",
    description:
      "TextUtils is a tool which is used to play with texts. This tool helps us to capitalize letters, change the sentence to lowercase, remove extra space, and count the letter and words used in the sentence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: textutils,
    source_live_link: "https://hetref.github.io/textutils/",
  },
  {
    name: "Todo List",
    description:
      "It is a tool which helps us to add todo list for a day with the saved todo's for a specific user.",
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
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_live_link: "https://hetref.github.io/yourtodo/",
  },
  {
    name: "Tile Game",
    description:
      "Tile Game is a game which was was developed for fun purpose, and to strenthen my JavaScript skills, which is purely created JavaScript.",
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
    image: tilegame,
    source_live_link: "https://hetref.github.io/tilesgame/",
  },
];

export { services, technologies, experiences, testimonials, projects };
