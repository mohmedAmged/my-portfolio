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
  git,
  figma,
  threejs,
  valkii,
  eraasoft,
  freelance,
  reach,
  circle,
  ooners
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
    title: "React.js & Next.js Developer",
    icon: mobile,
  },
  {
    title: "UI/UX & Interactive Designer",
    icon: creator,
  },
  {
    title: "3D Web Experiences (Three.js)",
    icon: backend,
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
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Valkii",
    icon: valkii, 
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Developing and maintaining high-performance web applications using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Translating Figma and XD designs into responsive, reusable components and dynamic interfaces.",
      "Collaborating with backend developers to integrate REST APIs with secure data flow.",
      "Optimizing performance through lazy loading, code splitting, and dependency management — improving Lighthouse scores by 40%.",
      "Building and maintaining real-time features such as chat and notifications using Pusher.",
      "Participating in Agile sprints, code reviews, and brainstorming sessions to enhance product UX and functionality.",
    ],
  },
  {
    title: "Front-End Developer (Internship)",
    company_name: "EraaSoft Academy",
    icon: eraasoft, 
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Completed an intensive front-end development program focused on modern technologies such as HTML5, CSS3, JavaScript, and React.js.",
      "Developed multiple responsive projects applying best UI/UX and performance practices.",
      "Collaborated with peers and mentors to simulate real-world development workflows.",
      "Gained hands-on experience with Git, GitHub, and version control for collaborative coding.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Independent Projects",
    icon: freelance,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Designed and developed interactive web platforms including B2B, restaurant, and real estate projects.",
      "Implemented role-based dashboards, form validation, and package-based features using React and Zustand.",
      "Delivered optimized and accessible web experiences tailored for diverse client requirements.",
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
    name: "ReachMagnet",
    description:
      "A B2B networking platform that connects companies and users through real-time chat, multi-role dashboards, and a complete quotation system, delivering a seamless communication experience with optimized performance and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image: reach, 
    source_code_link: "https://github.com/mohmedAmged/ReachMagent-V01",
  },
  {
    name: "Circle-G",
    description:
      "A modern business platform designed to help users discover, filter, and engage with companies and offers through an intuitive, high-performance, and responsive web experience built with scalable architecture and optimized workflows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "zustand",
        color: "orange-text-gradient",
      },
    ],
    image: circle,
    source_code_link: "https://github.com/mohmedAmged/Circle-G", 
  },
  {
    name: "Ooners",
    description:
      "A real estate investment platform that connects property owners and investors, enabling them to manage shares, view returns, and track investments through interactive dashboards and a fast, responsive, and secure user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "zustand",
        color: "orange-text-gradient",
      },
    ],
    image: ooners, 
    source_code_link: "https://github.com/mohmedAmged/Ooners-V01/tree/main",
  },
];


export { services, technologies, experiences, testimonials, projects };
