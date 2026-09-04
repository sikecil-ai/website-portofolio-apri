export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  category: 'Otomasi Google Sheets (GAS)' | 'Kasir & Operasional Bisnis' | 'AI & Bot Cerdas' | string;
  tags: string[];
  image: string;
  heroMobileImage?: string;
  heroDesktopImage?: string;
  appIcon?: string;
  rating?: string;
  reviewCount?: string;
  developer?: string;
  verifiedBadge?: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
  date: string;
  role: string;
  stats?: {
    label: string;
    value: string;
    icon?: string;
  }[];
  features?: string[];
  featureBenefits?: {
    feature: string;
    benefit: string;
    tag?: string;
  }[];
  screenshots?: {
    title: string;
    description: string;
    tag: string;
    image?: string;
    statsHighlight?: string;
  }[];
  technologies: {
    name: string;
    icon?: string;
  }[];
  systemSpecs?: {
    label: string;
    value: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  articleSlug?: string;
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
