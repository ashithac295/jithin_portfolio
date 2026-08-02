export interface Project {
  id: string;
  title: string;
  category: 'films' | 'branding' | 'creative-direction';
  client: string;
  year: string;
  role: string;
  thumbnail: string;
  summary: string;
  fullDescription: string;
  deliverables: string[];
  featured?: boolean;
  videoUrl?: string;
  gallery?: string[];
  metrics?: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar?: string;
}

export interface ProjectInquiry {
  serviceType: string;
  budgetRange: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  details: string;
}
