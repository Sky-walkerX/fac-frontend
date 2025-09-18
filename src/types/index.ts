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
  year?: number;
  doi?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  fundingAgency?: string;
  duration?: string;
  budget?: string;
  role: 'PI' | 'Co-PI' | 'Coordinator' | 'Team Member';
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
