export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  category: 'Web App' | 'Mobile App' | 'Fullstack' | 'AI & Data' | 'Open Source';
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
  date: string;
  role: string;
  stats?: {
    label: string;
    value: string;
  }[];
  features?: string[];
  technologies: {
    name: string;
    icon?: string;
  }[];
}

export interface SkillItem {
  name: string;
  icon: string;
  level: string; // e.g. 'Advanced', 'Proficient', 'Experienced'
  experienceYears?: number;
  highlight?: boolean;
}

export interface SkillGroup {
  category: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Part-time' | 'Freelance' | 'Contract' | 'Education';
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  url: string;
  ogImage: string;
  author: string;
  status: {
    available: boolean;
    text: string;
  };
  socialLinks: SocialLink[];
  navLinks: {
    name: string;
    href: string;
  }[];
  keywords: string[];
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalURL?: string;
  type?: 'website' | 'article' | 'profile';
  publishDate?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverEmoji: string;
  projectRelation: string;
  author?: string;
  editor?: string;
  publishedDate?: string;
  updatedDate?: string;
  views?: number;
}
