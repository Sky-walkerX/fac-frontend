# Faculty Portfolio Backend API

A comprehensive NestJS backend API that connects to Sanity CMS to provide complete faculty portfolio data including academic information, research, projects, experience, achievements, and more.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Services
```bash
# Terminal 1: Start NestJS Backend
npm run start:dev

# Terminal 2: Start Sanity Studio
npx sanity dev --port 3334
```

### 3. Access Points
- **Backend API**: http://localhost:3001
- **Sanity Studio**: http://localhost:3334

## 📡 Complete API Endpoints

### Faculty About Information
- **GET** `/faculty/about`
  - Returns: Faculty basic info, bio, profile image, contact details, qualifications
  - Response: Array of About objects
  - **New Fields**: phone, email, alternateEmail, linkedIn, googleScholarId, orcid

### Research & Publications
- **GET** `/faculty/research`
  - Returns: All research items (publications + research areas)
  - Response: Array of Research objects
  - **Updated**: Now includes volume field for journals

- **GET** `/faculty/research/publications`
  - Returns: Only journal and conference publications
  - Response: Array of Research objects (filtered)

- **GET** `/faculty/research/areas`
  - Returns: Only research areas and interests
  - Response: Array of Research objects (filtered)

### Journal Publications *(NEW)*
- **GET** `/faculty/journals`
  - Returns: All journal publications with detailed metadata
  - Response: Array of Journal objects

- **GET** `/faculty/journals/published`
  - Returns: Only published journal articles
  - Response: Array of Journal objects (filtered)

- **GET** `/faculty/journals/quartile/:quartile`
  - Returns: Journals filtered by quartile ranking (q1, q2, q3, q4)
  - Response: Array of Journal objects (filtered)

### Conference Publications *(NEW)*
- **GET** `/faculty/conferences`
  - Returns: All conference publications with detailed metadata
  - Response: Array of Conference objects

- **GET** `/faculty/conferences/published`
  - Returns: Only published conference papers
  - Response: Array of Conference objects (filtered)

- **GET** `/faculty/conferences/type/:type`
  - Returns: Conferences filtered by type (international, national, regional, workshop)
  - Response: Array of Conference objects (filtered)

### Projects
- **GET** `/faculty/projects`
  - Returns: All funded and academic projects
  - Response: Array of Project objects

- **GET** `/faculty/projects/ongoing`
  - Returns: Only currently ongoing projects
  - Response: Array of Project objects (filtered)

### Teaching
- **GET** `/faculty/teaching`
  - Returns: All courses taught by faculty
  - Response: Array of Teaching objects

### Contact Information
- **GET** `/faculty/contact`
  - Returns: Contact details, social links, academic profiles
  - Response: Array of Contact objects

### Thesis Supervision
- **GET** `/faculty/supervision`
  - Returns: Student thesis supervision records
  - Response: Array of Supervision objects

### Professional Experience
- **GET** `/faculty/experience`
  - Returns: All professional experience and work history
  - Response: Array of Experience objects

- **GET** `/faculty/experience/current`
  - Returns: Only current positions
  - Response: Array of Experience objects (filtered)

### Achievements & Awards
- **GET** `/faculty/achievements`
  - Returns: All achievements, awards, and recognitions
  - Response: Array of Achievement objects

- **GET** `/faculty/achievements/:category`
  - Returns: Achievements filtered by category
  - Categories: award, recognition, publication, speaking, leadership, competition, interview, media, other
  - Response: Array of Achievement objects (filtered)

### Technical Skills
- **GET** `/faculty/technical-skills`
  - Returns: Technical skills organized by categories
  - Response: Array of TechnicalSkills objects

### Roles & Responsibilities
- **GET** `/faculty/roles-responsibilities`
  - Returns: All administrative and academic roles
  - Response: Array of RolesResponsibilities objects

- **GET** `/faculty/roles-responsibilities/current`
  - Returns: Only current roles and responsibilities
  - Response: Array of RolesResponsibilities objects (filtered)

## 📊 API Response Examples

### About Response
```json
[
  {
    "_id": "about-1",
    "name": "Dr. Abhinesh Kaushik",
    "designation": "Assistant Professor, Deputy Registrar",
    "bio": "Assistant Professor at IIIT Lucknow...",
    "profileImage": {
      "asset": {
        "_ref": "image-xyz",
        "url": "https://cdn.sanity.io/images/..."
      }
    },
    "address": "A-163, 2nd floor, Ramprastha Colony, Ghaziabad, UP-201011",
    "phone": "8587012012",
    "email": "abhinesh.kaushik@gmail.com",
    "alternateEmail": "abhinesh@iiitl.ac.in",
    "linkedIn": "https://www.linkedin.com/in/abhinesh-kaushik-67a83647",
    "googleScholarId": "KqxVnuwAAAAJ",
    "orcid": "0000-0002-7864-6202",
    "qualifications": [
      {
        "qualification": "Ph.D. (Computer Science)",
        "university": "Jawaharlal Nehru University, New Delhi",
        "percentage": "Qualified",
        "year": "June 2021"
      }
    ]
  }
]
```

### Research/Publications Response
```json
[
  {
    "_id": "research-1",
    "title": "Machine Learning Driven Centroid Localization Algorithm for Wireless Sensor Networks",
    "authors": "Tanwar K., Kaushik A.",
    "venue": "Peer-To-Peer Networking and Applications",
    "volume": "18, 246",
    "year": 2025,
    "type": "journal",
    "doi": "https://doi.org/10.1007/s12083-025-02026-4"
  }
]
```

### Journal Publications Response *(NEW)*
```json
[
  {
    "_id": "journal-1",
    "title": "Machine Learning Driven Centroid Localization Algorithm for Wireless Sensor Networks",
    "authors": "Tanwar K., Kaushik A.",
    "journalName": "Peer-To-Peer Networking and Applications",
    "volume": "18",
    "issue": "246",
    "year": 2025,
    "doi": "https://doi.org/10.1007/s12083-025-02026-4",
    "quartile": "q2",
    "status": "published"
  }
]
```

### Conference Publications Response *(NEW)*
```json
[
  {
    "_id": "conference-1",
    "title": "Enhanced Three-Dimensional DV-Hop Algorithm",
    "authors": "Kaushik A., Lobiyal D.K.",
    "conferenceName": "ICT Systems and Sustainability",
    "conferenceAcronym": "ICTSS",
    "publisher": "Springer",
    "location": "Singapore",
    "year": 2021,
    "doi": "https://doi.org/10.1007/978-981-15-8289-9_25",
    "conferenceType": "international",
    "presentationType": "oral",
    "status": "published"
  }
]
```

### Projects Response
```json
[
  {
    "_id": "project-1",
    "title": "AI Based Real-Time Detection of Air Pollution and Prediction of Clean Air amidst Crop Residue Burning",
    "description": "Real-time air pollution detection and prediction system",
    "fundingAgency": "CSTUP, Uttar Pradesh",
    "duration": "3 Years",
    "budget": "₹17.58 Lakh",
    "role": "PI",
    "status": "ongoing",
    "startYear": 2024,
    "endYear": 2027
  }
]
```

### Experience Response
```json
[
  {
    "_id": "experience-1",
    "position": "Assistant Professor",
    "organization": "IIIT Lucknow",
    "department": "Department of Information Technology",
    "startDate": "Dec 2021",
    "endDate": null,
    "isCurrent": true,
    "description": "Teaching and research in computer science",
    "type": "fulltime",
    "order": 1
  }
]
```

### Achievements Response
```json
[
  {
    "_id": "achievement-1",
    "title": "When algorithms misfire: Lessons from AI-intensive business failures",
    "description": "Published article in Economic Times",
    "category": "media",
    "organization": "Economic Times",
    "date": "3rd July 2025",
    "link": "https://example.com/article",
    "order": 1
  }
]
```

### Technical Skills Response
```json
[
  {
    "_id": "skills-1",
    "category": "programming",
    "skills": [
      {
        "name": "Python",
        "proficiency": "expert",
        "yearsOfExperience": 8
      },
      {
        "name": "Java",
        "proficiency": "advanced",
        "yearsOfExperience": 10
      }
    ],
    "order": 1
  }
]
```

### Roles & Responsibilities Response
```json
[
  {
    "_id": "role-1",
    "role": "Deputy Registrar",
    "organization": "IIIT Lucknow",
    "startDate": "Sep 2023",
    "endDate": null,
    "isCurrent": true,
    "description": "Administrative oversight and management",
    "type": "administrative",
    "order": 1
  }
]
```

## 🎨 Adding Data to Sanity Studio

### Step 1: Access Sanity Studio
1. Go to http://localhost:3334
2. You'll see the Sanity Studio interface

### Step 2: Add Faculty About Information
1. Click **"About"** in the sidebar
2. Click **"Create new About document"**
3. Fill in:
   - **Name**: Faculty full name (e.g., "Dr. Abhinesh Kaushik")
   - **Designation**: Job title/position (e.g., "Assistant Professor, Deputy Registrar")
   - **Bio**: Professional biography
   - **Profile Image**: Upload faculty photo
   - **Address**: Contact address
   - **Phone**: Contact phone number
   - **Email**: Primary email address
   - **Alternate Email**: Secondary email address
   - **LinkedIn**: LinkedIn profile URL
   - **Google Scholar ID**: Scholar ID (e.g., "KqxVnuwAAAAJ")
   - **ORCID**: ORCID identifier (e.g., "0000-0002-7864-6202")
   - **Qualifications**: Add educational background with qualification, university, grade, and year

### Step 3: Add Research Publications (Legacy)
1. Click **"Research"** in the sidebar
2. Click **"Create new Research document"**
3. Fill in:
   - **Title**: Publication/research title
   - **Type**: Select "journal", "conference", or "research_area"
   - **Authors**: Author names (e.g., "Tanwar K., Kaushik A.")
   - **Venue**: Journal/conference name
   - **Volume**: Journal volume, issue, page numbers (e.g., "18, 246")
   - **Year**: Publication year
   - **DOI**: DOI link or URL
   - **Description**: Brief description
   - **Link**: Additional related link if any

### Step 3A: Add Journal Publications *(NEW - RECOMMENDED)*
1. Click **"Journal Publications"** in the sidebar
2. Click **"Create new Journal document"**
3. Fill in:
   - **Paper Title**: Full title of the journal paper
   - **Authors**: Author names in proper format (e.g., "Tanwar K., Kaushik A.")
   - **Journal Name**: Full journal name (e.g., "Peer-To-Peer Networking and Applications")
   - **Volume**: Journal volume (e.g., "18")
   - **Issue/Number**: Issue or article number (e.g., "246")
   - **Page Numbers**: Page range or article number (e.g., "1-15" or "103990")
   - **Publication Year**: Year of publication
   - **DOI**: DOI URL or string
   - **Abstract**: Paper abstract (optional)
   - **Keywords**: Research keywords as array
   - **Impact Factor**: Journal impact factor (if known)
   - **Quartile**: Journal quartile (Q1, Q2, Q3, Q4)
   - **Publication Status**: published/accepted/under_review/submitted
   - **Display Order**: For custom ordering

### Step 3B: Add Conference Publications *(NEW - RECOMMENDED)*
1. Click **"Conference Publications"** in the sidebar
2. Click **"Create new Conference document"**
3. Fill in:
   - **Paper Title**: Full title of the conference paper
   - **Authors**: Author names in proper format
   - **Conference Name**: Full conference name
   - **Conference Acronym**: Short form (e.g., "ICCS", "IEEE INFOCOM")
   - **Proceedings Title**: Full proceedings title
   - **Publisher**: Publisher name (e.g., "IEEE", "Springer", "ACM")
   - **Conference Location**: City, Country or "Virtual"
   - **Page Numbers**: Page range in proceedings
   - **Conference Year**: Year of conference
   - **DOI**: DOI URL or string
   - **ISBN**: Proceedings ISBN (if available)
   - **Abstract**: Paper abstract (optional)
   - **Keywords**: Research keywords as array
   - **Conference Type**: international/national/regional/workshop
   - **Presentation Type**: oral/poster/keynote/invited
   - **Publication Status**: published/accepted/under_review/submitted
   - **Display Order**: For custom ordering

### Step 4: Add Projects
1. Click **"Project"** in the sidebar
2. Click **"Create new Project document"**
3. Fill in:
   - **Title**: Project name
   - **Description**: Project details
   - **Funding Agency**: Funding organization
   - **Duration**: Project timeline
   - **Budget**: Project budget
   - **Role**: Your role (PI, Co-PI, etc.)
   - **Status**: ongoing/completed/proposed

### Step 5: Add Teaching Information
1. Click **"Teaching"** in the sidebar
2. For each course, create new document:
   - **Course Name**: Full course name
   - **Course Code**: Course identifier
   - **Level**: undergraduate/graduate
   - **Semester**: spring/fall/summer/winter
   - **Year**: Academic year

### Step 6: Add Contact Information
1. Click **"Contact"** in the sidebar
2. Add:
   - **Email**: Primary email
   - **Alternate Email**: Secondary email
   - **Phone**: Contact number
   - **Office**: Office address
   - **LinkedIn**: LinkedIn profile URL
   - **Google Scholar**: Scholar profile URL
   - **ORCID**: ORCID identifier

### Step 7: Add Supervision Records
1. Click **"Supervision"** in the sidebar
2. For each student supervised:
   - **Level**: phd/mtech/msc/btech
   - **Title**: Thesis/project title
   - **Student Name**: Student's name
   - **Start/End Year**: Timeline
   - **Status**: ongoing/completed/continuing
   - **Remarks**: Additional notes if needed

### Step 8: Add Professional Experience
1. Click **"Professional Experience"** in the sidebar
2. For each position:
   - **Position**: Job title (e.g., "Assistant Professor")
   - **Organization**: Institution name (e.g., "IIIT Lucknow")
   - **Department**: Department/division name
   - **Location**: Geographic location
   - **Start Date**: When you started (e.g., "Dec 2021")
   - **End Date**: When you left (leave empty if current)
   - **Is Current Position**: Check if this is your current role
   - **Description**: Job responsibilities and achievements
   - **Employment Type**: fulltime/parttime/guest/visiting/contract/internship
   - **Display Order**: Number for ordering (lower numbers appear first)

### Step 9: Add Achievements & Awards
1. Click **"Achievements & Awards"** in the sidebar
2. For each achievement:
   - **Title**: Achievement name
   - **Description**: Detailed description
   - **Category**: award/recognition/publication/speaking/leadership/competition/interview/media/other
   - **Organization**: Awarding body or venue
   - **Date**: When you received it
   - **Prize Amount**: If applicable (e.g., "₹10,000")
   - **Related Link**: URL to article, certificate, etc.
   - **Image**: Upload relevant image
   - **Display Order**: For custom ordering

### Step 10: Add Technical Skills
1. Click **"Technical Skills"** in the sidebar
2. Create categories:
   - **Category**: programming/databases/os/frameworks/tools/cloud/other
   - **Skills**: Add individual skills with:
     - **Skill Name**: (e.g., "Python", "Java")
     - **Proficiency**: beginner/intermediate/advanced/expert
     - **Years of Experience**: Number of years
   - **Display Order**: For category ordering

### Step 11: Add Roles & Responsibilities
1. Click **"Roles & Responsibilities"** in the sidebar
2. For each administrative/academic role:
   - **Role**: Position title (e.g., "Deputy Registrar")
   - **Organization**: Institution name
   - **Department**: Relevant department
   - **Start Date**: When role began
   - **End Date**: When role ended (leave empty if current)
   - **Is Current Role**: Check if ongoing
   - **Description**: Role responsibilities
   - **Role Type**: administrative/academic/committee/leadership/coordination/other
   - **Display Order**: For custom ordering

## 🔄 Data Management Tips

### Publishing Changes
- Click **"Publish"** button after making changes
- Changes are immediately available via API

### Editing Existing Data
- Click on any document to edit
- Make changes and click "Publish"

### Deleting Data
- Click the three dots menu → "Delete"
- Confirm deletion

### Bulk Operations
- Use Sanity Studio's bulk operations for multiple documents

## 📋 Complete Data Schema Overview

### Content Types Available in Sanity Studio

1. **About** - Faculty personal and professional information
2. **Research** - General research items and areas *(Legacy)*
3. **Journal Publications** - Academic journal papers with detailed metadata *(NEW)*
4. **Conference Publications** - Conference papers and proceedings *(NEW)*
5. **Project** - Funded research projects and initiatives
6. **Teaching** - Courses and academic instruction
7. **Contact** - Contact information and social profiles
8. **Supervision** - Student thesis and project supervision
9. **Experience** - Professional work history and positions *(NEW)*
10. **Achievement** - Awards, recognitions, and accomplishments *(NEW)*
11. **Technical Skills** - Programming languages, tools, technologies *(NEW)*
12. **Roles & Responsibilities** - Administrative and academic roles *(NEW)*

### Schema Relationships
- **About**: Contains basic faculty info + contact details (consolidated approach)
- **Research**: Categorized by type (journal/conference/research_area)
- **Projects**: Linked to funding agencies with role-based access
- **Experience**: Timeline-ordered professional history
- **Achievements**: Category-based with media attachments
- **Skills**: Grouped by technology categories with proficiency levels
- **Roles**: Current and historical administrative positions

## 🛠️ Technical Details

### GROQ Queries Used
```groq
// Get all about information with enhanced fields
*[_type == "about"] {
  _id, name, designation, bio, profileImage, address, phone, 
  email, alternateEmail, linkedIn, googleScholarId, orcid, qualifications
}

// Get all journal publications with full metadata
*[_type == "journal"] | order(order asc, year desc) {
  _id, title, authors, journalName, volume, issue, pages, year, 
  doi, quartile, impactFactor, status
}

// Get Q1 journals only
*[_type == "journal" && quartile == "q1"] | order(year desc) {
  _id, title, authors, journalName, year, impactFactor
}

// Get all conference publications with full metadata
*[_type == "conference"] | order(order asc, year desc) {
  _id, title, authors, conferenceName, conferenceAcronym, publisher, 
  location, year, doi, conferenceType, presentationType
}

// Get international conferences only
*[_type == "conference" && conferenceType == "international"] | order(year desc) {
  _id, title, authors, conferenceName, location, year
}

// Get publications only with volume field (legacy)
*[_type == "research" && type in ["journal", "conference"]] | order(year desc) {
  _id, title, authors, venue, volume, year, type, doi
}

// Get ongoing projects
*[_type == "project" && status == "ongoing"] | order(startYear desc)

// Get professional experience ordered by display order
*[_type == "experience"] | order(order asc, startDate desc) {
  _id, position, organization, department, startDate, endDate, isCurrent
}

// Get achievements by category
*[_type == "achievement" && category == "award"] | order(date desc)

// Get technical skills grouped by category
*[_type == "technicalSkills"] | order(order asc) {
  _id, category, skills[]
}

// Get current roles and responsibilities
*[_type == "rolesResponsibilities" && isCurrent == true] | order(startDate desc)
```

### Environment Variables
```env
PORT=3001
SANITY_PROJECT_ID=4xrk10ec
SANITY_DATASET=production
SANITY_API_VERSION=2023-05-03
```

## 🧪 API Testing

### Quick Test Commands
```bash
# Test all main endpoints
curl http://localhost:3001/faculty/about
curl http://localhost:3001/faculty/research
curl http://localhost:3001/faculty/projects
curl http://localhost:3001/faculty/teaching
curl http://localhost:3001/faculty/contact
curl http://localhost:3001/faculty/supervision
curl http://localhost:3001/faculty/experience
curl http://localhost:3001/faculty/achievements
curl http://localhost:3001/faculty/technical-skills
curl http://localhost:3001/faculty/roles-responsibilities

# Test new publication endpoints
curl http://localhost:3001/faculty/journals
curl http://localhost:3001/faculty/journals/published
curl http://localhost:3001/faculty/journals/quartile/q1
curl http://localhost:3001/faculty/conferences
curl http://localhost:3001/faculty/conferences/published
curl http://localhost:3001/faculty/conferences/type/international

# Test filtered endpoints
curl http://localhost:3001/faculty/research/publications
curl http://localhost:3001/faculty/projects/ongoing
curl http://localhost:3001/faculty/experience/current
curl http://localhost:3001/faculty/achievements/award
curl http://localhost:3001/faculty/roles-responsibilities/current
```

### Response Status Codes
- `200 OK` - Successful request with data
- `404 Not Found` - Endpoint not found
- `500 Internal Server Error` - Server/database error

### Data Validation
- All arrays return empty `[]` if no data exists
- Required fields are validated in Sanity Studio
- Image assets include both `_ref` and `url` fields
- Dates are stored as strings for flexibility

## 🚀 Deployment & Maintenance

### Production Deployment
1. **Backend Deployment**:
   ```bash
   npm run build
   npm run start:prod
   ```

2. **Environment Setup**:
   - Update Sanity project ID for production
   - Configure CORS for frontend domain
   - Set appropriate API version

3. **Sanity Studio Deployment**:
   ```bash
   npx sanity deploy
   ```

### Content Management
- **Adding New Faculty**: Create new documents in Sanity Studio
- **Updating Information**: Edit existing documents and publish
- **Media Management**: Upload images directly in Studio
- **Version Control**: Sanity automatically tracks document history

### Backup & Recovery
- Sanity provides automatic backups
- Export data: `npx sanity dataset export production backup.tar.gz`
- Import data: `npx sanity dataset import backup.tar.gz production`

### Performance Optimization
- API responses are automatically cached by Sanity CDN
- Images are optimized and served via Sanity's image pipeline
- GROQ queries are optimized for performance

---

## 🤖 Frontend Generation Prompt

Use this prompt with any AI to generate a frontend for this backend:

---

**FRONTEND GENERATION PROMPT:**

I have a Faculty Portfolio Backend API running on `http://localhost:3001` with the following endpoints:

**API Endpoints:**
- `GET /faculty/about` - Faculty basic info, bio, qualifications, contact details
- `GET /faculty/research` - All research publications and areas
- `GET /faculty/research/publications` - Journal/conference papers only  
- `GET /faculty/research/areas` - Research areas and interests
- `GET /faculty/journals` - All journal publications *(NEW)*
- `GET /faculty/journals/published` - Published journal articles *(NEW)*
- `GET /faculty/journals/quartile/:quartile` - Journals by quartile *(NEW)*
- `GET /faculty/conferences` - All conference publications *(NEW)*
- `GET /faculty/conferences/published` - Published conference papers *(NEW)*
- `GET /faculty/conferences/type/:type` - Conferences by type *(NEW)*
- `GET /faculty/projects` - Research projects with funding details
- `GET /faculty/projects/ongoing` - Currently ongoing projects
- `GET /faculty/teaching` - Courses taught
- `GET /faculty/contact` - Contact information and social links
- `GET /faculty/supervision` - Student thesis supervision records
- `GET /faculty/experience` - Professional work experience
- `GET /faculty/experience/current` - Current positions only
- `GET /faculty/achievements` - Awards, recognitions, and achievements
- `GET /faculty/achievements/:category` - Achievements by category
- `GET /faculty/technical-skills` - Technical skills by category
- `GET /faculty/roles-responsibilities` - Administrative and academic roles
- `GET /faculty/roles-responsibilities/current` - Current roles only

**Enhanced Data Structure Examples:**
- About: `{name, designation, bio, profileImage, address, phone, email, alternateEmail, linkedIn, googleScholarId, orcid, qualifications[]}`
- Research: `{title, authors, venue, volume, year, type, doi, description, link}`
- Journal: `{title, authors, journalName, volume, issue, pages, year, doi, quartile, impactFactor, status}` *(NEW)*
- Conference: `{title, authors, conferenceName, conferenceAcronym, publisher, location, year, doi, conferenceType, presentationType}` *(NEW)*
- Projects: `{title, description, fundingAgency, budget, role, status, duration, startYear, endYear}`
- Teaching: `{courseName, courseCode, level, semester, year, description}`
- Contact: `{email, alternateEmail, phone, office, website, linkedIn, googleScholar, orcid, researchGate}`
- Supervision: `{level, title, studentName, startYear, endYear, status, remarks}`
- Experience: `{position, organization, department, location, startDate, endDate, isCurrent, description, type}`
- Achievement: `{title, description, category, organization, date, amount, link, image, order}`
- TechnicalSkills: `{category, skills[{name, proficiency, yearsOfExperience}], order}`
- RolesResponsibilities: `{role, organization, department, startDate, endDate, isCurrent, description, type, order}`

**Requirements:**
1. Create a comprehensive, modern faculty portfolio website
2. Use React/Next.js with TypeScript and Tailwind CSS
3. Responsive design that works on all devices
4. Clean, academic-style UI with proper typography
5. **Complete Sections**: Hero, About, Publications (Journals & Conferences), Projects, Teaching, Experience, Achievements, Skills, Roles, Supervision, Contact
6. Loading states and error handling for API calls
7. Professional color scheme (blues, grays, whites)
8. Proper SEO meta tags and accessibility features
9. Links to external publications and profiles should open in new tabs
10. Display qualifications in a timeline or card format
11. **Separate Journal and Conference sections** with distinct styling
12. Show journal quartiles, impact factors, and conference types prominently
13. Publication filtering by quartile (Q1, Q2, Q3, Q4) and conference type
14. Project status badges (ongoing/completed/proposed)
15. Experience timeline with current position highlights
16. Achievement categories with filtering options
17. Technical skills with proficiency indicators
18. Current roles and responsibilities prominently displayed
19. Contact section with clickable email/phone links
20. Google Scholar and ORCID integration
21. Professional achievements showcase
22. Mobile-first responsive design
23. **Publication metrics display** (impact factors, quartiles, conference rankings)
24. **Tabbed interface** for journals vs conferences with filtering options


