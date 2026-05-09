export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  subtitle: string;
  email: string;
  github: string;
  linkedin: string;
  portfolioUrl: string;
  resumeUrl?: string;
}

export interface AboutText {
  paragraph1: string;
  paragraph2: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  badge: string;
  icon: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  deployUrl?: string;
  featured?: boolean;
}

export interface Education {
  degree: string;
  period: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
  date: string;
  duration?: string;
  icon: string;
  certificateUrl?: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}
