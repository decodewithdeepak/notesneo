import type { Resource } from '../types';

export const resources: Resource[] = [
  // Previous Year Papers
  {
    id: 'paper-2023-math',
    title: 'Mathematics End Term Paper 2023',
    description: 'Previous year question paper for Mathematics (2023)',
    type: 'paper',
    subject: 'Mathematics',
    branch: 'BTech',
    semester: 1,
    year: '2023',
    downloadUrl: 'https://example.com/papers/math-2023.pdf',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
  },
  
  // Video Lectures
  {
    id: 'video-python-basics',
    title: 'Python Programming Basics',
    description: 'Introduction to Python programming fundamentals',
    type: 'video',
    subject: 'Python',
    branch: 'BTech',
    semester: 3,
    videoUrl: 'https://youtube.com/watch?v=example',
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935',
    author: 'Prof. Smith',
  },
  
  // Practice Problems
  {
    id: 'practice-dsa',
    title: 'DSA Practice Problems Set',
    description: 'Collection of practice problems for Data Structures',
    type: 'practice',
    subject: 'DSA',
    branch: 'BTech',
    semester: 3,
    downloadUrl: 'https://example.com/practice/dsa.pdf',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
  },
  
  // Reference Books
  {
    id: 'book-algorithms',
    title: 'Introduction to Algorithms',
    description: 'Comprehensive guide to algorithms and their implementation',
    type: 'book',
    subject: 'DSA',
    branch: 'BTech',
    semester: 3,
    author: 'Thomas H. Cormen',
    publisher: 'MIT Press',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
  },
];