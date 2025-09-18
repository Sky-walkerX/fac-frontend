# Faculty Portfolio Website

A professional, minimal dark-themed portfolio website for Dr. Abhinesh Kaushik, built with Next.js and TypeScript. Features responsive design, smooth animations, and comprehensive faculty information display.

## Features

- **Dark Theme**: Professional slate-based color scheme
- **Responsive Design**: Optimized for all device sizes
- ⚡ **Performance**: Built with Next.js for optimal speed
-  **Animations**: Smooth Framer Motion animations
-  **Dynamic Content**: Fetches data from backend API
-  **Fallback Data**: Comprehensive placeholder content when API is unavailable

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- Backend API running (default: `http://localhost:3001`)

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Environment Configuration:**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
   ```
   
   > **Important:** The `NEXT_PUBLIC_` prefix is required for browser-accessible environment variables in Next.js.

3. **Start Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API base URL | `http://localhost:3001` |

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── HeroSection.tsx # Hero/landing section
│   ├── AboutSection.tsx# Education & qualifications
│   ├── ProjectsSection.tsx # Research projects
│   ├── TeachingSection.tsx # Courses taught
│   ├── SupervisionSection.tsx # Student supervision
│   ├── ResearchSection.tsx # Publications & research
│   └── Footer.tsx      # Contact information
├── lib/                # Utility functions and API
└── types/              # TypeScript type definitions
```

