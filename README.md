# NotesNeo 2.0

Welcome to NotesNeo, your go-to platform for academic resources designed to empower students with quality education, accessibility, and a supportive community.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://notesneo.vercel.app)
[![Version](https://img.shields.io/badge/version-2.0.0-blue)](https://notesneo.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-yellow)](https://notesneo.vercel.app)

## About NotesNeo
NotesNeo 2.0 is a comprehensive React-based platform designed for students of MDU Rohtak to access high-quality academic resources, including notes, study materials, and community support. The website aims to make studying more accessible, efficient, and collaborative by offering a seamless experience for users to download and save notes, filter by branch, semester, and subject, and access personalized resources through their dashboard.

## Features
- **Comprehensive Notes Database**: Access in-depth, organized notes across a wide range of branches, semesters, and subjects
- **Smart Filtering System**: Easily find notes by branch, semester, and subject through an intuitive filter interface
- **User Authentication**: Secure Google sign-in integration using Firebase Authentication
- **Personalized Dashboard**: Access your favorite notes and profile information in one place
- **Favorites System**: Save your preferred notes for quick access later
- **Dark/Light Mode**: Toggle between dark and light themes based on your preference
- **Responsive Design**: Optimized viewing experience across all devices
- **Animations**: Smooth animations powered by AOS (Animate On Scroll) library
- **Analytics Integration**: Performance tracking with Vercel Analytics and Speed Insights

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Authentication**: Firebase Authentication
- **State Management**: React Context API
- **UI Components**: Custom components with Tailwind CSS
- **Icons**: Lucide React
- **Animations**: AOS (Animate On Scroll)
- **Build Tool**: Vite
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel
- **Local Storage**: Browser localStorage for persisting user preferences and favorites

## Data Storage
- **User Profiles**: Stored in localStorage for persistence
- **Favorites**: Stored in localStorage for offline access
- **Filter Preferences**: Branch, semester, and subject selections are saved in localStorage
- **Theme Preference**: Dark/light mode setting is saved in localStorage

## Components
- **Authentication**: Google Sign-in with Firebase
- **Filtering**: Dynamic filtering by branch, semester, and subject
- **Dashboard**: Personalized user dashboard with saved notes
- **Theme Toggle**: Switch between dark and light modes
- **Responsive Navigation**: Adaptive navbar with user menu
- **Note Cards**: Interactive cards with save functionality
- **Modal System**: Login and profile setup modals

## Get Started
1. Visit [NotesNeo](https://notesneo.vercel.app) to start exploring resources
2. Use the filters to find notes by branch, semester, and subject
3. Sign in with your Google account to access the dashboard and save favorites
4. Toggle between dark and light modes using the theme switcher

## Development Setup
```bash
# Clone the repository
git clone https://github.com/decodewithdeepak/NotesNeo.git

# Navigate to project folder
cd NotesNeo

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Contributing
We welcome contributions! Please fork the repository and submit a pull request with your changes.

## FAQ
**Q: How can I access the notes?**
A: You can find and download notes directly from our website by using the filter system to locate resources by branch, semester, and subject.

**Q: Do I need an account to download notes?**
A: No, you can download notes without signing in. However, creating an account allows you to save favorites and access them from your dashboard.

**Q: How does the favorites system work?**
A: After signing in, you can click the save button on any note to add it to your favorites. Access your saved notes from your dashboard.

**Q: Is my data secure?**
A: Yes, we use Firebase Authentication for secure sign-in, and we only store minimal necessary information.

## License
This project is open-source and available for personal and educational use under the MIT License.