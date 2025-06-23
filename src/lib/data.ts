import { User, Code2, Briefcase, Wrench, Trophy, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { Atcoder } from "@/components/Atcoder";

export const sections = [
  { id: "introduction", label: "Introduction", icon: User },
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "tools", label: "Tools & Technologies", icon: Wrench },
  { id: "extras", label: "Competitive Programming", icon: Trophy },
];
export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/biniyamNegasa", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/biniyamnegasa",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/biniyamnegasa",
    label: "Twitter",
  },
  {
    icon: FaTelegram,
    href: "https://t.me/biniyamnegasa",
    label: "Telegram",
  },
  { icon: Mail, href: "mailto:biniyamnegasa17@gmail.com", label: "Email" },
];

export const projects = [
  {
    title: "OdinBook",
    description:
      "A Facebook-inspired social media app built with Ruby on Rails. Features user authentication, following, posting, and a personalized feed.",
    tech: [
      "Ruby on Rails",
      "Devise",
      "GitHub OAuth",
      "HTML",
      "JavaScript",
      "Docker",
    ],
    github: "https://github.com/biniyamNegasa/odin-odinbook",
    demo: "https://odinbook.koyeb.app/",
    image: "",
  },
  {
    title: "Odin Where's Waldo",
    description:
      "A modern, responsive web app for playing 'Where's Waldo'. Users search for hidden characters in large images, get instant feedback, and compete on leaderboards. Features a React frontend and a Ruby backend.",
    tech: ["React", "JavaScript", "CSS", "HTML", "Vite", "Ruby", "Docker"],
    github: "https://github.com/biniyamNegasa/odin-where-s-waldo-frontend",
    demo: "https://odinwhereswaldo.netlify.app/",
    image: "",
  },
  {
    title: "A2SV G5 Starter Project Phase",
    description:
      "A collection of starter projects developed during the A2SV project phase, showcasing various tech stacks and collaborative learning.",
    tech: ["TypeScript", "CSS", "JavaScript"],
    github:
      "https://github.com/RealEskalate/a2sv-g5-project-phase-starter-project/tree/astu.web.g2.main",
    demo: "",
    image: "",
  },
  {
    title: "Odin Memory Card",
    description:
      "A memory card game built with React and the AniList API, created as part of The Odin Project.",
    tech: ["React", "JavaScript", "CSS", "HTML", "AniList API", "Vite"],
    github: "https://github.com/biniyamNegasa/odin-memory-card",
    demo: "https://odin-memorycard-game.netlify.app/",
    image: "",
  },
  {
    title: "Odin Shopping Cart",
    description:
      "A simple shopping cart web app built with React as part of The Odin Project.",
    tech: ["React", "JavaScript", "CSS", "HTML", "Vite"],
    github: "https://github.com/biniyamNegasa/odin-shopping-cart",
    demo: "https://odin-shop-cart.netlify.app/",
    image: "",
  },
  {
    title: "Odin Battleship",
    description:
      "A classic Battleship game built with JavaScript as part of The Odin Project.",
    tech: ["JavaScript", "HTML", "CSS", "Webpack"],
    github: "https://github.com/biniyamNegasa/odin-battleship",
    demo: "https://biniyamnegasa.github.io/odin-battleship/",
    image: "",
  },
  {
    title: "Odin Weather App",
    description:
      "A weather app that displays current conditions using the Visual Crossing API, built with JavaScript, HTML, and CSS.",
    tech: ["JavaScript", "HTML", "CSS", "Visual Crossing API"],
    github: "https://github.com/biniyamNegasa/odin-weather-app",
    demo: "https://biniyamnegasa.github.io/odin-weather-app/",
    image: "",
  },
  {
    title: "Odin CV Application",
    description:
      "A simple web app to create and display your CV, built as part of The Odin Project.",
    tech: ["JavaScript", "CSS", "HTML", "Vite"],
    github: "https://github.com/biniyamNegasa/odin-cv-application",
    demo: "https://odincvgen.netlify.app/",
    image: "",
  },
  {
    title: "Odin Homepage",
    description:
      "A responsive single-page website built with HTML and CSS, created as part of The Odin Project.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/biniyamNegasa/odin-homepage",
    demo: "https://biniyamnegasa.github.io/odin-homepage/",
    image: "",
  },
  {
    title: "Odin Admin Dashboard",
    description:
      "A responsive admin dashboard layout built with HTML and CSS, inspired by a design challenge from The Odin Project.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/biniyamNegasa/odin-admin-dashboard",
    demo: "https://biniyamnegasa.github.io/odin-admin-dashboard/",
    image: "",
  },
  {
    title: "Odin Restaurant Page",
    description:
      "A restaurant landing page built with JavaScript, HTML, and CSS as part of The Odin Project.",
    tech: ["JavaScript", "HTML", "CSS", "Webpack"],
    github: "https://github.com/biniyamNegasa/odin-restaurant-page",
    demo: "https://biniyamnegasa.github.io/odin-restaurant-page/",
    image: "",
  },
  {
    title: "Odin Todo List",
    description:
      "A simple todo list app with projects, completion tracking, and local storage, built as part of The Odin Project.",
    tech: ["JavaScript", "HTML", "CSS", "Webpack"],
    github: "https://github.com/biniyamNegasa/odin-todo-list",
    demo: "https://biniyamnegasa.github.io/odin-todo-list/",
    image: "",
  },
  {
    title: "Odin Search Flickr",
    description:
      "A web app that searches Flickr photos using the Flickr API, built as part of The Odin Project.",
    tech: ["Ruby", "HTML", "JavaScript", "CSS", "Docker"],
    github: "https://github.com/biniyamNegasa/odin-search-flickr",
    demo: "",
    image: "",
  },
  {
    title: "Odin Calculator",
    description:
      "A simple calculator web app built with JavaScript, HTML, and CSS as part of The Odin Project.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/biniyamNegasa/odin-calculator",
    demo: "https://biniyamnegasa.github.io/odin-calculator/",
    image: "",
  },
  {
    title: "Etch-a-Sketch",
    description:
      "A browser-based Etch-a-Sketch drawing app built with JavaScript, HTML, and CSS.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/biniyamNegasa/etch-a-sketch",
    demo: "https://biniyamnegasa.github.io/etch-a-sketch/",
    image: "",
  },
  {
    title: "Odin Landing Page",
    description:
      "A sample landing page recreated from a design image, built with HTML and CSS as part of The Odin Project.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/biniyamNegasa/odin-landing-page",
    demo: "https://biniyamnegasa.github.io/odin-landing-page/",
    image: "",
  },
  {
    title: "Odin Recipes",
    description:
      "A simple website for displaying recipes, built with HTML and CSS as part of The Odin Project.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/biniyamNegasa/odin-recipes",
    demo: "https://biniyamnegasa.github.io/odin-recipes/",
    image: "",
  },
  {
    title: "Odin Sign Up Form",
    description:
      "A responsive sign-up form replica built with HTML and CSS as part of The Odin Project.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/biniyamNegasa/odin-sign-up-form",
    demo: "https://biniyamnegasa.github.io/odin-sign-up-form/",
    image: "",
  },
  {
    title: "Odin Tic Tac Toe",
    description:
      "A simple Tic Tac Toe game built with JavaScript, HTML, and CSS as part of The Odin Project.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/biniyamNegasa/odin-tic-tac-toe-js",
    demo: "https://biniyamnegasa.github.io/odin-tic-tac-toe-js/",
    image: "",
  },
  {
    title: "Odin Chess",
    description:
      "A terminal-based chess game for two players, built with Ruby.",
    tech: ["Ruby"],
    github: "https://github.com/biniyamNegasa/odin-chess",
    demo: "",
    image: "",
  },
  {
    title: "Odin Connect Four",
    description:
      "A terminal-based Connect Four game for two players, built with Ruby.",
    tech: ["Ruby"],
    github: "https://github.com/biniyamNegasa/odin-connect_four",
    demo: "",
    image: "",
  },
  {
    title: "Odin Hangman",
    description:
      "A terminal-based implementation of the classic Hangman word game, built with Ruby.",
    tech: ["Ruby"],
    github: "https://github.com/biniyamNegasa/odin-hangman",
    demo: "",
    image: "",
  },
  {
    title: "Odin Mastermind",
    description:
      "A terminal-based implementation of the classic Mastermind code-breaking game, built with Ruby.",
    tech: ["Ruby"],
    github: "https://github.com/biniyamNegasa/odin-mastermind",
    demo: "",
    image: "",
  },
  {
    title: "Odin Tic Tac Toe (Ruby)",
    description:
      "A terminal-based Tic Tac Toe game for two players, built with Ruby.",
    tech: ["Ruby"],
    github: "https://github.com/biniyamNegasa/odin-tic-tac-toe",
    demo: "",
    image: "",
  },
  {
    title: "Odin Binary Search Trees",
    description:
      "A Ruby implementation of a binary search tree with basic operations.",
    tech: ["Ruby"],
    github: "https://github.com/biniyamNegasa/odin-binary_search_trees",
    demo: "",
    image: "",
  },
  {
    title: "Odin HashMap",
    description: "A Ruby implementation of a HashMap data structure.",
    tech: ["Ruby"],
    github: "https://github.com/biniyamNegasa/odin-HashMap",
    demo: "",
    image: "",
  },
  {
    title: "Odin Linked Lists",
    description: "A Ruby implementation of linked list data structures.",
    tech: ["Ruby"],
    github: "https://github.com/biniyamNegasa/odin-linked_lists",
    demo: "",
    image: "",
  },
  {
    title: "Odin Caesar Cipher",
    description:
      "A Ruby script that encrypts text using the Caesar cipher technique, shifting characters by a given amount.",
    tech: ["Ruby"],
    github: "https://github.com/biniyamNegasa/odin-caesar-cipher",
    demo: "",
    image: "",
  },
  {
    title: "Odin Knight's Travails",
    description:
      "A Ruby script that finds the shortest path for a knight on a chessboard from one square to another.",
    tech: ["Ruby"],
    github: "https://github.com/biniyamNegasa/odin-knights_travails",
    demo: "",
    image: "",
  },
];

export const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description:
      "Led frontend development for multiple client projects, mentored junior developers, and implemented modern React patterns.",
  },
  {
    title: "Full Stack Developer",
    company: "Startup XYZ",
    period: "2020 - 2022",
    description:
      "Built scalable web applications using Next.js and Node.js, collaborated with design team to implement pixel-perfect UIs.",
  },
];

export const tools = {
  Frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
  ],
  Backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "Docker", "Vercel", "AWS", "Figma", "VS Code"],
};

export const achievements = [
  {
    icon: SiLeetcode,
    platform: "LeetCode",
    stats: process.env.NEXT_PUBLIC_LEETCODE_STATS || "1713",
    url: "https://leetcode.com/u/biniyamnegasa17/",
  },
  {
    icon: SiCodeforces,
    platform: "Codeforces",
    stats: process.env.NEXT_PUBLIC_CODEFORCES_STATS || "1554",
    url: "https://codeforces.com/profile/biniyamnegasa",
  },
  {
    icon: Atcoder,
    platform: "AtCoder",
    stats: process.env.NEXT_PUBLIC_ATCODER_STATS || "937",
    url: "https://atcoder.jp/users/biniyam",
  },
];
