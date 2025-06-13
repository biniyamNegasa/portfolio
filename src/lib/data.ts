import { User, Code2, Briefcase, Wrench, Trophy, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import atcoder from "@/../public/atcoder.svg";
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
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
];

export const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with Next.js, TypeScript, and Stripe integration",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://your-ecommerce-demo.vercel.app",
    image: "",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/taskmanager",
    demo: "https://your-taskmanager-demo.vercel.app",
    image: "",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts",
    tech: ["Vue.js", "TypeScript", "Chart.js", "OpenWeather API"],
    github: "https://github.com/yourusername/weather",
    demo: "https://your-weather-demo.vercel.app",
    image: "",
  },
  {
    title: "Personal Blog",
    description:
      "Static blog built with Next.js and MDX for technical articles",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/yourusername/blog",
    demo: "https://your-blog-demo.vercel.app",
    image: "",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with Next.js, TypeScript, and Stripe integration",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://your-ecommerce-demo.vercel.app",
    image: "",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/taskmanager",
    demo: "https://your-taskmanager-demo.vercel.app",
    image: "",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts",
    tech: ["Vue.js", "TypeScript", "Chart.js", "OpenWeather API"],
    github: "https://github.com/yourusername/weather",
    demo: "https://your-weather-demo.vercel.app",
    image: "",
  },
  {
    title: "Personal Blog",
    description:
      "Static blog built with Next.js and MDX for technical articles",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/yourusername/blog",
    demo: "https://your-blog-demo.vercel.app",
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
    stats: "1713",
    url: "https://leetcode.com/u/biniyamnegasa17/",
  },
  {
    icon: SiCodeforces,
    platform: "Codeforces",
    stats: "1554",
    url: "https://codeforces.com/profile/biniyamnegasa",
  },
  {
    icon: Atcoder,
    platform: "AtCoder",
    stats: "937",
    url: "https://atcoder.jp/users/biniyam",
  },
];
