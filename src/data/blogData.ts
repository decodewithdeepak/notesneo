import type { BlogPost, BlogCategory } from '../types';

export const blogCategories: BlogCategory[] = [
  {
    id: 'btech',
    name: 'BTech',
    description: 'Technical articles and guides for engineering students',
    icon: '👨‍💻',
  },
  {
    id: 'bca',
    name: 'BCA',
    description: 'Computer applications and programming insights',
    icon: '💻',
  },
  {
    id: 'bba',
    name: 'BBA',
    description: 'Business management and administration resources',
    icon: '📊',
  },
];

export const blogPosts: BlogPost[] = [
  // BTech Articles
  {
    id: 'python-basics',
    title: 'Getting Started with Python Programming',
    excerpt: 'Learn the fundamentals of Python programming language and its applications in engineering.',
    content: 'Python is a versatile programming language widely used in various fields...',
    category: 'btech',
    author: 'Deepak Modi',
    date: '2024-03-15',
    readTime: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935',
    tags: ['Programming', 'Python', 'Engineering'],
  },
  {
    id: 'data-structures',
    title: 'Understanding Data Structures in C++',
    excerpt: 'A comprehensive guide to fundamental data structures and their implementation.',
    content: 'Data structures are fundamental building blocks in computer science...',
    category: 'btech',
    author: 'Deepak Modi',
    date: '2024-03-14',
    readTime: '8 min',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    tags: ['DSA', 'C++', 'Programming'],
  },

  // BCA Articles
  {
    id: 'web-development',
    title: 'Modern Web Development Technologies',
    excerpt: 'Explore the latest trends and technologies in web development.',
    content: 'The web development landscape is constantly evolving...',
    category: 'bca',
    author: 'Deepak Modi',
    date: '2024-03-13',
    readTime: '6 min',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    tags: ['Web Development', 'JavaScript', 'React'],
  },
  {
    id: 'database-design',
    title: 'Database Design Best Practices',
    excerpt: 'Learn how to design efficient and scalable databases for your applications.',
    content: 'Good database design is crucial for application performance...',
    category: 'bca',
    author: 'Deepak Modi',
    date: '2024-03-12',
    readTime: '7 min',
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
    tags: ['Database', 'SQL', 'Design'],
  },

  // BBA Articles
  {
    id: 'marketing-strategies',
    title: 'Digital Marketing Strategies for 2024',
    excerpt: 'Discover effective digital marketing strategies for modern businesses.',
    content: 'Digital marketing continues to evolve with new technologies...',
    category: 'bba',
    author: 'Deepak Modi',
    date: '2024-03-11',
    readTime: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['Marketing', 'Business', 'Digital'],
  },
  {
    id: 'business-management',
    title: 'Essential Business Management Skills',
    excerpt: 'Key management skills needed to succeed in today\'s business world.',
    content: 'Effective business management requires a diverse set of skills...',
    category: 'bba',
    author: 'Deepak Modi',
    date: '2024-03-10',
    readTime: '6 min',
    imageUrl: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b',
    tags: ['Management', 'Leadership', 'Business'],
  },
];