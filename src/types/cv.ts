export interface CVProfile {
  name: string;
  title: string;
  location: string;
  summary: string;
  photo: string;
  links: CVLinks;
}

export interface CVLinks {
  email: string;
  phone?: string | null;
  github?: string | null;
  linkedin?: string | null;
  website?: string | null;
}

export interface CVSkillCategory {
  category: string;
  items: string[];
}

export interface CVExperience {
  role: string;
  company: string;
  period: CVPeriod;
  project?: string | null;
  highlights: string[];
  logo?: string | null;
  demoVideo?: string | null;
  description?: string | null;
}

export interface CVPeriod {
  start: string;
  end: string | null;
}

export interface CVEducation {
  degree: string;
  institution: string;
  period: CVPeriod;
}

export interface CVLanguage {
  name: string;
  level: string;
}

export interface CVData {
  profile: CVProfile;
  skills: CVSkillCategory[];
  experience: CVExperience[];
  education: CVEducation[];
  languages: CVLanguage[];
  hobbies: string[];
}
