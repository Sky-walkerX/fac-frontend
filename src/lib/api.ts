import { About, Research, Project, Teaching, Contact, Supervision } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

export const facultyApi = {
  async getAbout(): Promise<About[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/about`);
    if (!response.ok) throw new Error('Failed to fetch about data');
    return response.json();
  },

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

  async getTeaching(): Promise<Teaching[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/teaching`);
    if (!response.ok) throw new Error('Failed to fetch teaching data');
    return response.json();
  },

  async getContact(): Promise<Contact[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/contact`);
    if (!response.ok) throw new Error('Failed to fetch contact data');
    return response.json();
  },

  async getSupervision(): Promise<Supervision[]> {
    const response = await fetch(`${API_BASE_URL}/faculty/supervision`);
    if (!response.ok) throw new Error('Failed to fetch supervision data');
    return response.json();
  },
};
