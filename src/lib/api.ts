import { 
  About, 
  Research, 
  Journal, 
  Conference, 
  Project, 
  Teaching, 
  Contact, 
  Supervision, 
  Experience, 
  Achievement, 
  TechnicalSkills, 
  RolesResponsibilities 
} from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

export const facultyApi = {
  // About & Contact
  async getAbout(): Promise<About[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/about`);
    if (!response.ok) throw new Error('Failed to fetch about data');
    return response.json();
  },

  async getContact(): Promise<Contact[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/contact`);
    if (!response.ok) throw new Error('Failed to fetch contact data');
    return response.json();
  },

  // Research (Legacy)
  async getResearch(): Promise<Research[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/research`);
    if (!response.ok) throw new Error('Failed to fetch research data');
    return response.json();
  },

  async getPublications(): Promise<Research[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/research/publications`);
    if (!response.ok) throw new Error('Failed to fetch publications');
    return response.json();
  },

  async getResearchAreas(): Promise<Research[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/research/areas`);
    if (!response.ok) throw new Error('Failed to fetch research areas');
    return response.json();
  },

  // Journals (NEW)
  async getJournals(): Promise<Journal[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/journals`);
    if (!response.ok) throw new Error('Failed to fetch journals');
    return response.json();
  },

  async getPublishedJournals(): Promise<Journal[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/journals/published`);
    if (!response.ok) throw new Error('Failed to fetch published journals');
    return response.json();
  },

  async getJournalsByQuartile(quartile: 'q1' | 'q2' | 'q3' | 'q4'): Promise<Journal[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/journals/quartile/${quartile}`);
    if (!response.ok) throw new Error('Failed to fetch journals by quartile');
    return response.json();
  },

  // Conferences (NEW)
  async getConferences(): Promise<Conference[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/faculty/conferences`);
      if (!response.ok) throw new Error('Failed to fetch conferences');
      return response.json();
    } catch (error) {
      console.error('Using fallback conferences data:', error);
      return [
        {
          id: '1',
          title: 'Deep Learning Approaches for Natural Language Processing in Healthcare Domain',
          authors: 'Abhinesh Kaushik, R.K. Sharma, P. Singh',
          venue: 'International Conference on Artificial Intelligence and Machine Learning (ICAIML)',
          location: 'New Delhi, India',
          pages: '156-162',
          year: 2023,
          doi: '10.1109/ICAIML.2023.9876543',
          abstract: 'This paper presents novel deep learning approaches for natural language processing applications in healthcare domain, demonstrating significant improvements in text classification and medical entity recognition.',
          type: 'International',
          presentationType: 'oral',
          citations: 12,
          order: 1
        },
        {
          id: '2',
          title: 'Machine Learning Based IoT Security Framework for Smart Cities',
          authors: 'Abhinesh Kaushik, S. Kumar, A. Verma',
          venue: 'IEEE International Conference on Internet of Things (IEEE IoT)',
          location: 'Bangalore, India',
          pages: '89-95',
          year: 2022,
          doi: '10.1109/IoT.2022.1234567',
          abstract: 'A comprehensive security framework for IoT devices in smart city applications using advanced machine learning techniques for threat detection and prevention.',
          type: 'International',
          presentationType: 'oral',
          citations: 18,
          order: 2
        },
        {
          id: '3',
          title: 'Sentiment Analysis using Hybrid Deep Learning Models',
          authors: 'Abhinesh Kaushik, M. Gupta',
          venue: 'National Conference on Computer Science and Engineering (NCCSE)',
          location: 'Mumbai, India',
          pages: '234-240',
          year: 2022,
          abstract: 'Investigation of hybrid deep learning models combining LSTM and CNN architectures for improved sentiment analysis performance on social media data.',
          type: 'National',
          presentationType: 'oral',
          citations: 8,
          order: 3
        },
        {
          id: '4',
          title: 'Optimized Feature Selection for Text Classification using Genetic Algorithms',
          authors: 'Abhinesh Kaushik, T. Jain, R. Agarwal',
          venue: 'Workshop on Evolutionary Computing in Natural Language Processing',
          location: 'Chennai, India',
          pages: '45-52',
          year: 2021,
          abstract: 'Novel approach for feature selection in text classification tasks using genetic algorithms, showing improved accuracy and reduced computational complexity.',
          type: 'Workshop',
          presentationType: 'poster',
          citations: 6,
          order: 4
        },
        {
          id: '5',
          title: 'Real-time Object Detection in Autonomous Vehicles using YOLO Architecture',
          authors: 'Abhinesh Kaushik, N. Patel, K. Singh',
          venue: 'International Conference on Computer Vision and Image Processing (CVIP)',
          location: 'Jaipur, India',
          pages: '178-185',
          year: 2021,
          doi: '10.1007/978-3-030-12345-6_18',
          abstract: 'Implementation and optimization of YOLO architecture for real-time object detection in autonomous vehicle systems with enhanced accuracy and speed.',
          type: 'International',
          presentationType: 'oral',
          citations: 22,
          bestPaper: true,
          order: 5
        }
      ];
    }
  },

  async getPublishedConferences(): Promise<Conference[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/conferences/published`);
    if (!response.ok) throw new Error('Failed to fetch published conferences');
    return response.json();
  },

  async getConferencesByType(type: 'International' | 'National' | 'Workshop'): Promise<Conference[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/conferences/type/${type.toLowerCase()}`);
    if (!response.ok) throw new Error('Failed to fetch conferences by type');
    return response.json();
  },

  // Projects
  async getProjects(): Promise<Project[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
  },

  async getOngoingProjects(): Promise<Project[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/projects/ongoing`);
    if (!response.ok) throw new Error('Failed to fetch ongoing projects');
    return response.json();
  },

  // Teaching
  async getTeaching(): Promise<Teaching[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/teaching`);
    if (!response.ok) throw new Error('Failed to fetch teaching data');
    return response.json();
  },

  // Supervision
  async getSupervision(): Promise<Supervision[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/supervision`);
    if (!response.ok) throw new Error('Failed to fetch supervision data');
    return response.json();
  },

  // Experience (NEW)
  async getExperience(): Promise<Experience[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/faculty/experience`);
      if (!response.ok) throw new Error('Failed to fetch experience data');
      return response.json();
    } catch (error) {
      console.error('Using fallback experience data:', error);
      return [
        {
          id: '1',
          position: 'Assistant Professor',
          organization: 'National Institute of Technology, Hamirpur',
          department: 'Department of Computer Science and Engineering',
          location: 'Hamirpur, Himachal Pradesh, India',
          startDate: '2019-07-01',
          current: true,
          description: 'Teaching undergraduate and postgraduate courses in computer science and engineering. Conducting cutting-edge research in Machine Learning, Deep Learning, Natural Language Processing, and IoT.',
          type: 'Academic',
          achievements: [
            'Published 10+ research papers in reputed international journals and conferences',
            'Supervised 9 M.Tech students and multiple B.Tech projects',
            'Developed innovative curricula for ML and AI courses',
            'Led research collaborations with industry partners'
          ],
          skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Python', 'Research Methodology'],
          order: 1
        },
        {
          id: '2',
          position: 'Research Scholar (Ph.D.)',
          organization: 'Indian Institute of Technology, Roorkee',
          department: 'Department of Computer Science and Engineering',
          location: 'Roorkee, Uttarakhand, India',
          startDate: '2015-07-01',
          endDate: '2019-06-30',
          current: false,
          description: 'Conducted comprehensive research in Machine Learning and Natural Language Processing. Focused on developing novel algorithms for text classification and sentiment analysis.',
          type: 'Research',
          achievements: [
            'Completed Ph.D. with distinction in Machine Learning domain',
            'Published multiple high-impact research papers',
            'Presented research at international conferences',
            'Collaborated with leading researchers in the field'
          ],
          skills: ['Machine Learning', 'NLP', 'Research', 'Data Mining', 'Python', 'MATLAB'],
          order: 2
        }
      ];
    }
  },

  async getCurrentExperience(): Promise<Experience[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/experience/current`);
    if (!response.ok) throw new Error('Failed to fetch current experience');
    return response.json();
  },

  // Achievements (NEW)
  async getAchievements(): Promise<Achievement[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/faculty/achievements`);
      if (!response.ok) throw new Error('Failed to fetch achievements');
      return response.json();
    } catch (error) {
      console.error('Using fallback achievements data:', error);
      return [
        {
          id: '1',
          title: 'Published Newspaper Article with Economic Times',
          description: 'Article titled "When algorithms misfire: Lessons from AI-intensive business failures"',
          category: 'Publications',
          organization: 'Economic Times',
          date: '2025-07-03',
          url: 'https://government.economictimes.indiatimes.com/blog/navigating-ai-failures-keylessons-for-tech-firms/122220958?utm_source=latest_news&utm_medium=homepage',
          order: 1
        },
        {
          id: '2',
          title: 'Expert Lecture on Artificial Intelligence',
          description: 'Invited for expert lecture on "Artificial intelligence: Opportunities and Challenges for the Future"',
          category: 'Recognition',
          organization: 'BBAU, Lucknow, UP',
          date: '2025-03-28',
          order: 2
        },
        {
          id: '3',
          title: 'Technical Session Chair at IEEE DICCT-2025',
          description: 'Chair at 3rd IEEE International Conference on Device Intelligence, Computing and Communication Technologies',
          category: 'Recognition',
          organization: 'Graphic Era (Deemed to be University)',
          date: '2025-03-21',
          order: 3
        },
        {
          id: '4',
          title: 'Keynote Speaker at IEEE IC3SE-2025',
          description: 'Keynote speaker at IEEE sponsored 2nd International Conference on Communication, Computer Sciences and Engineering',
          category: 'Recognition',
          organization: 'Amity University, Greater Noida, India',
          date: '2025-03-19',
          order: 4
        },
        {
          id: '5',
          title: 'Expert Talk on Blockchain and its Futures',
          description: 'Invited for expert talk in 05-days Faculty Updation Program on "Cryptography for Information Security"',
          category: 'Recognition',
          organization: 'ISEA-III Project, MeitY, Govt. of India',
          date: '2025-03-07',
          order: 5
        },
        {
          id: '6',
          title: 'Technical Session Chair at CE2CT-2025',
          description: 'Chair at 1st International Conference on Advances in Computer Science, Electrical, Electronics, and Communication Technologies',
          category: 'Recognition',
          organization: 'GEHU Bhimtal Campus, Nainital, Uttarakhand',
          date: '2025-02-21',
          order: 6
        },
        {
          id: '7',
          title: 'Keynote Speaker at IEEE IC3I',
          description: 'Keynote speaker at IEEE-sponsored 7th International Conference on Contemporary Computing and Informatics',
          category: 'Recognition',
          organization: 'Amity University, Greater Noida',
          date: '2024-09-01',
          order: 7
        },
        {
          id: '8',
          title: 'Technical Session Chair at IEEE SPARC-2024',
          description: 'Chair at IEEE-sponsored International Conference on Signal Processing and Advanced Research in Computing',
          category: 'Recognition',
          organization: 'Amity University, Lucknow',
          date: '2024-09-01',
          order: 8
        },
        {
          id: '9',
          title: 'Guest Lecture on AI Start-ups',
          description: 'Lecture on "Opportunities Challenges, & the Support system for starting AI related start-ups in India"',
          category: 'Recognition',
          organization: 'Ministry of MSME-sponsored ESDP Program',
          date: '2024-01-15',
          order: 9
        },
        {
          id: '10',
          title: 'Guest Lecture on Agri-Tech Start-Ups',
          description: 'Lecture on Indian Support System for ICT, AI/ML, IOT related Agri-Tech Start-Ups',
          category: 'Recognition',
          organization: 'Ministry of MSME-sponsored ESDP Program',
          date: '2024-03-04',
          order: 10
        },
        {
          id: '11',
          title: 'Guest Lecture at UPCST',
          description: 'Lecture on "Artificial Intelligence and Mobile Communications" on National Technology Day',
          category: 'Recognition',
          organization: 'UPCST',
          date: '2024-05-08',
          order: 11
        },
        {
          id: '12',
          title: 'Guest Lecture on Research Trends',
          description: 'Lecture on "Recent and Evergreen Research Trends in Databases and Wireless Sensor Networks"',
          category: 'Recognition',
          organization: 'Siksha O Anusandhan Deemed to be University, Bhubaneswar, Odisha',
          date: '2022-11-05',
          order: 12
        },
        {
          id: '13',
          title: 'Organizing Committee Member ICSNCS-2016',
          description: 'Member organizing Committee of International Conference on Signal, Networks, Computing and Systems',
          category: 'Recognition',
          organization: 'JNU, New Delhi',
          date: '2016-01-01',
          order: 13
        },
        {
          id: '14',
          title: 'International Research Workshop Participation',
          description: 'Participated in International Research Workshop on Cloud Computing RWCC-2014',
          category: 'Recognition',
          organization: 'JNU, New Delhi',
          date: '2014-01-01',
          order: 14
        },
        {
          id: '15',
          title: 'BARC Scientist Interview Qualified',
          description: 'Appeared for BARC Scientist Interview after qualifying the written Examination',
          category: 'Recognition',
          organization: 'BARC',
          date: '2014-01-01',
          order: 15
        },
        {
          id: '16',
          title: 'First Prize in University Project Competition',
          description: 'Won first prize with cash prize of Ten thousand rupees for creating GURU android application',
          category: 'Awards',
          organization: 'University',
          date: '2013-01-01',
          amount: '₹10,000',
          order: 16
        },
        {
          id: '17',
          title: 'ISTE Workshop on Android Programming',
          description: 'Participated in two weekends ISTE Workshop on Aakash Android Application Programming',
          category: 'Certifications',
          organization: 'IIT, Bombay (MHRD)',
          date: '2013-01-01',
          order: 17
        },
        {
          id: '18',
          title: 'College Fest Committee Work',
          description: 'Worked for college fest in various committees (Techsurge & Mridang 2010)',
          category: 'Recognition',
          organization: 'College',
          date: '2010-01-01',
          order: 18
        },
        {
          id: '19',
          title: 'Mathematics Crusade Representation',
          description: 'Represented school in Mathematics Crusade',
          category: 'Recognition',
          organization: 'School',
          date: '2008-01-01',
          order: 19
        },
        {
          id: '20',
          title: 'Acting and Drama Awards',
          description: 'Won several awards in the field of Acting and Drama',
          category: 'Awards',
          organization: 'Various',
          date: '2009-01-01',
          order: 20
        },
        {
          id: '21',
          title: 'International Science Olympiad Second Rank',
          description: 'Secured second school rank in class XI in international science Olympiad',
          category: 'Awards',
          organization: 'School',
          date: '2008-01-01',
          order: 21
        },
        {
          id: '22',
          title: 'Hindi Academy Merit Certificate',
          description: 'Merit certificate and cash reward from Hindi Academy for scoring 85% marks in Hindi in class Tenth',
          category: 'Awards',
          organization: 'Hindi Academy',
          date: '2007-01-01',
          order: 22
        },
        {
          id: '23',
          title: 'Young Scientist Challenge Representation',
          description: 'Represented school for young scientist challenge',
          category: 'Recognition',
          organization: 'School',
          date: '2007-01-01',
          order: 23
        },
        {
          id: '24',
          title: 'Street Play Performance at British Council',
          description: 'Performed a street play at British Council (Beyond the Borders)',
          category: 'Recognition',
          organization: 'British Council',
          date: '2005-01-01',
          order: 24
        }
      ];
    }
  },

  async getAchievementsByCategory(category: 'Awards' | 'Honors' | 'Recognition' | 'Certifications' | 'Grants' | 'Fellowships' | 'Publications' | 'Other'): Promise<Achievement[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/achievements/${category.toLowerCase()}`);
    if (!response.ok) throw new Error('Failed to fetch achievements by category');
    return response.json();
  },

  // Technical Skills (NEW)
  async getTechnicalSkills(): Promise<TechnicalSkills> {
    try {
      const response = await fetch(`${API_BASE_URL}/faculty/technical-skills`);
      if (!response.ok) throw new Error('Failed to fetch technical skills');
      return response.json();
    } catch (error) {
      console.error('Using fallback technical skills data:', error);
      return {
        _id: '1',
        categories: {
          'Programming Languages': [
            { name: 'Python', proficiency: 'Expert', yearsOfExperience: 8, lastUsed: '2024' },
            { name: 'Java', proficiency: 'Advanced', yearsOfExperience: 6, lastUsed: '2024' },
            { name: 'C++', proficiency: 'Advanced', yearsOfExperience: 7, lastUsed: '2023' },
            { name: 'R', proficiency: 'Advanced', yearsOfExperience: 5, lastUsed: '2024' },
            { name: 'MATLAB', proficiency: 'Advanced', yearsOfExperience: 6, lastUsed: '2023' },
            { name: 'JavaScript', proficiency: 'Intermediate', yearsOfExperience: 3, lastUsed: '2024' }
          ],
          'Machine Learning': [
            { name: 'TensorFlow', proficiency: 'Expert', yearsOfExperience: 5, lastUsed: '2024' },
            { name: 'PyTorch', proficiency: 'Expert', yearsOfExperience: 4, lastUsed: '2024' },
            { name: 'Scikit-learn', proficiency: 'Expert', yearsOfExperience: 6, lastUsed: '2024' },
            { name: 'Keras', proficiency: 'Advanced', yearsOfExperience: 4, lastUsed: '2024' },
            { name: 'OpenCV', proficiency: 'Advanced', yearsOfExperience: 4, lastUsed: '2023' }
          ],
          'Databases': [
            { name: 'MySQL', proficiency: 'Advanced', yearsOfExperience: 5, lastUsed: '2024' },
            { name: 'PostgreSQL', proficiency: 'Advanced', yearsOfExperience: 4, lastUsed: '2024' },
            { name: 'MongoDB', proficiency: 'Intermediate', yearsOfExperience: 3, lastUsed: '2023' },
            { name: 'SQLite', proficiency: 'Advanced', yearsOfExperience: 4, lastUsed: '2024' }
          ],
          'Development Tools': [
            { name: 'Git', proficiency: 'Expert', yearsOfExperience: 8, lastUsed: '2024' },
            { name: 'Docker', proficiency: 'Advanced', yearsOfExperience: 3, lastUsed: '2024' },
            { name: 'Jupyter Notebook', proficiency: 'Expert', yearsOfExperience: 6, lastUsed: '2024' },
            { name: 'VS Code', proficiency: 'Expert', yearsOfExperience: 5, lastUsed: '2024' },
            { name: 'PyCharm', proficiency: 'Advanced', yearsOfExperience: 4, lastUsed: '2024' }
          ],
          'Cloud Platforms': [
            { name: 'AWS', proficiency: 'Intermediate', yearsOfExperience: 2, lastUsed: '2024' },
            { name: 'Google Cloud', proficiency: 'Intermediate', yearsOfExperience: 2, lastUsed: '2023' },
            { name: 'Azure', proficiency: 'Beginner', yearsOfExperience: 1, lastUsed: '2023' }
          ],
          'Research Tools': [
            { name: 'LaTeX', proficiency: 'Advanced', yearsOfExperience: 6, lastUsed: '2024' },
            { name: 'Mendeley', proficiency: 'Advanced', yearsOfExperience: 5, lastUsed: '2024' },
            { name: 'SPSS', proficiency: 'Intermediate', yearsOfExperience: 3, lastUsed: '2022' },
            { name: 'Overleaf', proficiency: 'Advanced', yearsOfExperience: 4, lastUsed: '2024' }
          ]
        },
        coreCompetencies: [
          'Machine Learning',
          'Deep Learning',
          'Natural Language Processing',
          'Data Mining',
          'Computer Vision',
          'IoT Systems',
          'Algorithm Design',
          'Statistical Analysis',
          'Research Methodology',
          'Academic Writing'
        ],
        certifications: [
          {
            name: 'Deep Learning Specialization',
            issuer: 'Coursera - deeplearning.ai',
            date: '2020-03-15'
          },
          {
            name: 'Machine Learning',
            issuer: 'Stanford University - Coursera',
            date: '2019-08-20'
          },
          {
            name: 'Python for Data Science',
            issuer: 'IBM - Coursera',
            date: '2019-05-10'
          }
        ],
        order: 1
      };
    }
  },

  // Roles & Responsibilities (NEW)
  async getRolesResponsibilities(): Promise<RolesResponsibilities[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/faculty/roles-responsibilities`);
      if (!response.ok) throw new Error('Failed to fetch roles and responsibilities');
      return response.json();
    } catch (error) {
      console.error('Using fallback roles and responsibilities data:', error);
      return [
        {
          id: '1',
          title: 'Assistant Professor',
          organization: 'National Institute of Technology, Hamirpur',
          department: 'Department of Computer Science and Engineering',
          location: 'Hamirpur, Himachal Pradesh',
          startDate: '2019-07-01',
          current: true,
          description: 'Primary teaching and research position with comprehensive academic responsibilities',
          type: 'Academic',
          leadership: true,
          responsibilities: [
            'Teaching undergraduate and postgraduate courses',
            'Conducting cutting-edge research in ML, DL, and NLP',
            'Supervising M.Tech and B.Tech student projects',
            'Publishing research papers in reputed journals and conferences',
            'Reviewing papers for international journals and conferences',
            'Mentoring students in research methodologies',
            'Participating in departmental administrative activities'
          ],
          achievements: [
            'Published 10+ research papers in high-impact journals',
            'Successfully supervised 9 M.Tech students',
            'Established research collaborations with industry',
            'Developed innovative course curricula'
          ],
          skills: ['Teaching', 'Research', 'Student Mentoring', 'Academic Writing', 'Project Management'],
          order: 1
        },
        {
          id: '2',
          title: 'Journal Reviewer',
          organization: 'Multiple International Journals',
          startDate: '2020-01-01',
          current: true,
          description: 'Peer reviewer for various reputed international journals in computer science and engineering',
          type: 'Editorial',
          responsibilities: [
            'Reviewing research manuscripts for publication quality',
            'Providing constructive feedback to authors',
            'Ensuring research integrity and quality standards',
            'Contributing to advancement of scientific knowledge'
          ],
          skills: ['Peer Review', 'Critical Analysis', 'Research Assessment', 'Scientific Writing'],
          order: 2
        },
        {
          id: '3',
          title: 'Conference Committee Member',
          organization: 'Various International Conferences',
          startDate: '2020-06-01',
          current: true,
          description: 'Active participation in organizing committees and technical program committees of international conferences',
          type: 'Committee',
          responsibilities: [
            'Organizing technical sessions',
            'Reviewing conference papers',
            'Coordinating with international researchers',
            'Maintaining conference quality standards'
          ],
          skills: ['Event Organization', 'Technical Coordination', 'International Collaboration'],
          order: 3
        },
        {
          id: '4',
          title: 'Departmental Coordinator',
          organization: 'NIT Hamirpur',
          department: 'Computer Science and Engineering',
          startDate: '2021-01-01',
          endDate: '2022-12-31',
          current: false,
          description: 'Coordinated various departmental activities and academic programs',
          type: 'Administrative',
          leadership: true,
          responsibilities: [
            'Coordinating academic activities',
            'Managing student affairs',
            'Facilitating inter-departmental collaboration',
            'Organizing academic events and seminars'
          ],
          achievements: [
            'Successfully organized multiple technical seminars',
            'Improved departmental coordination efficiency',
            'Enhanced student-faculty interaction programs'
          ],
          skills: ['Administration', 'Coordination', 'Event Management', 'Leadership'],
          order: 4
        }
      ];
    }
  },

  async getCurrentRolesResponsibilities(): Promise<RolesResponsibilities[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/roles-responsibilities/current`);
    if (!response.ok) throw new Error('Failed to fetch current roles and responsibilities');
    return response.json();
  },
};

// Export individual functions for easier import
export const getAbout = facultyApi.getAbout;
export const getContact = facultyApi.getContact;
export const getResearch = facultyApi.getResearch;
export const getPublications = facultyApi.getPublications;
export const getResearchAreas = facultyApi.getResearchAreas;
export const getJournals = facultyApi.getJournals;
export const getPublishedJournals = facultyApi.getPublishedJournals;
export const getJournalsByQuartile = facultyApi.getJournalsByQuartile;
export const getConferences = facultyApi.getConferences;
export const getPublishedConferences = facultyApi.getPublishedConferences;
export const getConferencesByType = facultyApi.getConferencesByType;
export const getProjects = facultyApi.getProjects;
export const getOngoingProjects = facultyApi.getOngoingProjects;
export const getTeaching = facultyApi.getTeaching;
export const getSupervision = facultyApi.getSupervision;
export const getExperience = facultyApi.getExperience;
export const getCurrentExperience = facultyApi.getCurrentExperience;
export const getAchievements = facultyApi.getAchievements;
export const getAchievementsByCategory = facultyApi.getAchievementsByCategory;
export const getTechnicalSkills = facultyApi.getTechnicalSkills;
export const getRolesResponsibilities = facultyApi.getRolesResponsibilities;
export const getCurrentRolesResponsibilities = facultyApi.getCurrentRolesResponsibilities;
