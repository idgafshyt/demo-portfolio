import type { LucideIcon } from "lucide-react";
import {
  Code2,
  LayoutTemplate,
  Server,
  Palette,
  Database,
  Wrench,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

export const SITE = {
  name: "Chesda Pich",
  role: "Data Engineer",
  tagline:
    ".",
  email: "chesdapich45@gmail.com",
  phone: "(+855)92-46-99-69",
  location: "Cambodia-Phnom Penh",
};

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  { label: "Facebook", href: "https://facebook.com/", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/", icon: Instagram },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "End-to-end builds from architecture to deployment, with clean, maintainable code as the default, not an afterthought.",
  },
  {
    icon: LayoutTemplate,
    title: "Frontend Development",
    description:
      "Interfaces built with React and Next.js that feel fast, stay accessible, and hold up across every screen size.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "APIs and services designed for clarity and reliability, with sensible data models and predictable behavior.",
  },
  {
    icon: Palette,
    title: "UI/UX Development",
    description:
      "Interfaces shaped around how people actually use them — clear hierarchy, purposeful motion, no guesswork.",
  },
  {
    icon: Database,
    title: "Database Development",
    description:
      "Schemas and queries built for the access patterns you actually have, not the ones a template assumes.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Ongoing upkeep — dependency updates, monitoring, and fixes — so the site stays fast and secure long after launch.",
  },
];

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "REST API", "Supabase"],
  },
  {
    label: "Database",
    skills: ["PostgreSQL", "Supabase"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export type SkillLevel = {
  name: string;
  percent: number;
};

export const SKILL_LEVELS: SkillLevel[] = [
  { name: "TypeScript", percent: 85 },
  { name: "React", percent: 85 },
  { name: "Next.js", percent: 80 },
  { name: "Tailwind CSS", percent: 90 },
];

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export const STATS: Stat[] = [
  { label: "Projects Completed", value: 24, suffix: "+" },
  { label: "Technologies", value: 16, suffix: "+" },
  { label: "Years Learning", value: 3, suffix: "+" },
  { label: "Happy Clients", value: 12, suffix: "+" },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    description:
      "A modern inventory management system designed to manage products, stock, users, and inventory operations efficiently.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/projects/inventory-system.svg",
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "A personal developer portfolio built to showcase projects, skills, and services with a fast, accessible interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/personal-portfolio.svg",
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    slug: "student-management-system",
    title: "Student Management System",
    description:
      "A system for tracking student records, enrollment, and academic progress with role-based access.",
    technologies: ["React", "TypeScript", "Supabase"],
    image: "/projects/student-system.svg",
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    slug: "ecommerce-website",
    title: "E-Commerce Website",
    description:
      "A storefront with product catalog, cart, and checkout flow, built for speed on both desktop and mobile.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    image: "/projects/ecommerce.svg",
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
];
