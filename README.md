# NotesNeo - Best Academic Notes for MDU Rohtak

A modern, responsive web application for browsing and downloading high-quality academic notes for BTech, BCA, and BBA students at Maharshi Dayanand University (MDU) Rohtak. Access personalized study resources for efficient learning. Built with Next.js 16 and Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react)

---

## Features

### Core Features

- **Comprehensive Notes Collection** - 80+ notes across BTech, BCA, and BBA
- **Personalized Dashboard** - Set your branch and semester for customized note recommendations
- **Favorites System** - Save your favorite notes for quick access
- **Smart Filtering** - Independent filters for Branch, Semester, and Subject
- **Real-time Search** - Search by title, description, or subject
- **Easy Downloads** - One-click PDF downloads via Google Drive
- **Beautiful UI** - Modern, responsive design with dark mode support
- **Mobile-First** - Optimized for all devices
- **Local Storage** - Persistent favorites and filter preferences
- **Android App** - Native mobile app available for download
- **AI Chatbot** - Integrated Tawk.to support for instant help

### Academic Organization

- **Branches:** BTech, BCA, BBA
- **Semesters:** 1-8 (BTech), 1-6 (BCA/BBA)
- **Subjects:** Python, DBMS, DSA, OS, Java, CN, DAA, SE, and more
- **Units:** Organized by unit (1-4) for each subject

---

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/decodewithdeepak/notesneo.git
cd notesneo

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Usage

### Dashboard

1. Navigate to **Dashboard** (`/dashboard`)
2. Select your **Branch** and **Semester** on first visit
3. View personalized notes for your selection
4. Change preferences anytime with the settings button

### Browsing Notes

1. Navigate to **Notes** page (`/notes`)
2. Use **filters** (Branch, Semester, Subject) - all work independently
3. **Search** by title, description, or subject
4. **Favorite** notes by clicking the heart icon
5. **Download** notes with one click

### Favorites

1. Navigate to **Favorites** page (`/favorites`)
2. View all your saved notes
3. Search within favorites
4. Quick access to frequently used materials

### Uploading Notes

1. Navigate to **Upload** page (`/upload-notes`)
2. Fill in the form with note details
3. Provide Google Drive download URL
4. Submit for admin review

---

## Filter System

### Independent Filters

All filters work independently:

- **Branch:** BTech, BCA, BBA
- **Semester:** 1-8 (dynamic based on branch)
- **Subject:** Python, DBMS, etc. (dynamic)
- **Search:** Real-time text search

### Filter Caching

- Last selected filters are saved in localStorage
- Automatically restored when you return to the page
- Key: `notesneo_filters`

---

## Local Storage

### Stored Data

1. **Favorites** (`notesneo_favorites`)

   - Array of saved note objects
   - Synced across all pages via Context API

2. **User Profile** (`notesneo_user_profile`)

   - Branch and semester preferences
   - Dashboard personalization

3. **Filter Preferences** (`notesneo_filters`)
   - Last selected branch, semester, subject
   - Restored on page revisit

---

## Routes

| Route           | Description                                     |
| --------------- | ----------------------------------------------- |
| `/`             | Landing page with hero, features, pricing, FAQs |
| `/dashboard`    | Personalized dashboard with user's notes        |
| `/notes`        | Main notes browsing page with filters           |
| `/favorites`    | Saved notes collection                          |
| `/upload-notes` | Upload notes form                               |

---

## Key Technologies

### Frontend

- **Framework:** Next.js 16 (App Router)
- **React:** 19.2
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI + shadcn/ui
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Theme:** next-themes (Dark/Light mode)

### State Management

- **React Context API** for global state
- **localStorage** for persistence
- **Custom hooks** for favorites and user profile

### Features

- **EmailJS** for form submissions
- **Google Drive** for file hosting
- **Responsive design** with mobile-first approach

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- AI Support powered by [Tawk.to](https://www.tawk.to/)
- Inspired by the need for accessible education at MDU Rohtak

---

---

**Made with ❤️ for MDU Rohtak students**

_If you find this project useful, please consider giving it a ⭐ on GitHub!_
