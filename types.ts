export interface Project {
  title: string;
  url?: string;
  description: string;
  techStack: string[];
  features: string[];
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
