export interface About {
  _id: string;
  name: string;
  designation: string;
  bio: string;
  profileImage?: {
    asset: {
      url: string;
    };
  };
  address: string;
  phone?: string;
  email?: string;
  alternateEmail?: string;
  linkedIn?: string;
  googleScholarId?: string;
  orcid?: string;
  qualifications: Qualification[];
}

export interface Qualification {
  qualification: string;
  university: string;
  percentage: string;
  year: string;
}

export interface Research {
  _id: string;
  title: string;
  description: string;
  link?: string;
  type: 'journal' | 'conference' | 'research_area';
  authors?: string;
  venue?: string;
  volume?: string;
  year?: number;
  doi?: string;
}

export interface Journal {
  _id: string;
  title: string;
  authors: string;
  journalName: string;
  volume?: string;
  issue?: string;
  pages?: string;
  year: number;
  doi?: string;
  abstract?: string;
  keywords?: string[];
  impactFactor?: number;
  quartile?: 'q1' | 'q2' | 'q3' | 'q4';
  status?: 'published' | 'accepted' | 'under_review' | 'submitted';
  order?: number;
}

export interface Conference {
  id: string;
  title: string;
  authors: string;
  venue: string;
  conferenceAcronym?: string;
  proceedingsTitle?: string;
  publisher?: string;
  location?: string;
  pages?: string;
  year: number;
  doi?: string;
  url?: string;
  isbn?: string;
  abstract?: string;
  keywords?: string[];
  type: 'International' | 'National' | 'Workshop';
  presentationType?: 'oral' | 'poster' | 'keynote' | 'invited';
  status?: 'published' | 'accepted' | 'under_review' | 'submitted';
  citations?: number;
  bestPaper?: boolean;
  order?: number;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  fundingAgency?: string;
  duration?: string;
  budget?: string;
  role: 'PI' | 'Co-PI' | 'Coordinator' | 'Team Member' | 'Developer';
  status: 'ongoing' | 'completed' | 'proposed';
  image?: {
    asset: {
      url: string;
    };
  };
  startYear?: number;
  endYear?: number;
}

export interface Teaching {
  _id: string;
  courseCode?: string;
  courseName: string;
  semester?: 'spring' | 'fall' | 'summer' | 'winter';
  year?: number;
  description?: string;
  level: 'undergraduate' | 'graduate' | 'postgraduate';
}

export interface Contact {
  _id: string;
  email: string;
  alternateEmail?: string;
  phone?: string;
  office?: string;
  website?: string;
  linkedIn?: string;
  googleScholar?: string;
  orcid?: string;
  researchGate?: string;
}

export interface Supervision {
  _id: string;
  level: 'phd' | 'mtech' | 'msc' | 'btech';
  title: string;
  studentName: string;
  startYear?: number;
  endYear?: number;
  status: 'ongoing' | 'completed' | 'continuing';
  remarks?: string;
}

export interface Experience {
  id: string;
  position: string;
  organization: string;
  department?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  type: 'Academic' | 'Industry' | 'Research' | 'Consulting';
  achievements?: string[];
  skills?: string[];
  order?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description?: string;
  category: 'Awards' | 'Honors' | 'Recognition' | 'Certifications' | 'Grants' | 'Fellowships' | 'Publications' | 'Other';
  organization?: string;
  date: string;
  amount?: string;
  url?: string;
  image?: {
    asset: {
      url: string;
    };
  };
  order?: number;
}

export interface TechnicalSkills {
  _id: string;
  categories: {
    [categoryName: string]: {
      name: string;
      proficiency: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
      yearsOfExperience?: number;
      lastUsed?: string;
    }[];
  };
  coreCompetencies?: string[];
  certifications?: {
    name: string;
    issuer: string;
    date?: string;
    expiryDate?: string;
  }[];
  order?: number;
}

export interface RolesResponsibilities {
  id: string;
  title: string;
  organization: string;
  department?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  type: 'Administrative' | 'Academic' | 'Editorial' | 'Committee' | 'Leadership' | 'Service';
  leadership?: boolean;
  responsibilities?: string[];
  achievements?: string[];
  skills?: string[];
  order?: number;
}
