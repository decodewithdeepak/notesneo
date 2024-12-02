export interface Note {
  id: string;
  title: string;
  description: string;
  subject: string;
  branch: string;
  semester: number;
  unit: number;
  imageUrl: string;
  downloadUrl: string;
}

export interface User {
  id: string;
  email: string;
  savedNotes: string[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'paper' | 'video' | 'practice' | 'book';
  subject: string;
  branch: string;
  semester: number;
  year?: string;
  downloadUrl?: string;
  videoUrl?: string;
  imageUrl: string;
  author?: string;
  publisher?: string;
}