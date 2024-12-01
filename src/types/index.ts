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