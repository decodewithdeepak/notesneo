# NotesNeo - Best Academic Notes for MDU Rohtak

A modern, responsive web application for browsing and downloading high-quality academic notes for BTech Computer Science students at Maharshi Dayanand University (MDU) Rohtak. Access personalized study resources for efficient learning. Built with Next.js 16 and Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react)

## Live Versions
> **Notesneo v3** (current) - https://notesneo.vercel.app/
> **Notesneo v2** - https://notesneo.netlify.app/  
> **Notesneo v1** - https://deepakmodi.netlify.app/notesneo/

---

## Features

### Core Features

- **Comprehensive Notes Collection** - 80+ notes across different branches and semesters
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
# Clone the repository with submodules
git clone --recurse-submodules https://github.com/decodewithdeepak/notesneo.git
cd notesneo

# If you already cloned without --recurse-submodules, initialize submodules:
git submodule update --init --recursive

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** This project uses a Git submodule for content management. The `notes-content/` folder links to a separate repository: [notesneo-content](https://github.com/decodewithdeepak/notesneo-content)

### Build for Production

```bash
npm run build
npm start
```

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

### Additional

- **State Management:** React Context API + localStorage
- **Form Handling:** EmailJS for submissions
- **File Storage:** Vercel Blob for PDFs

---

## Content Management

### Content Repository

Educational content is managed in a separate repository: [notesneo-content](https://github.com/decodewithdeepak/notesneo-content)

This separation provides:
- ✅ Independent version control for content
- ✅ Easier collaboration on notes without code access
- ✅ Cleaner git history
- ✅ Reusable content across multiple projects

### Updating Content

```bash
# Navigate to content directory
cd notes-content

# Make changes to markdown files
vim 6th-sem/adbms/unit-1.md

# Commit and push changes
git add .
git commit -m "Update ADBMS Unit 1 notes"
git push

# Return to main repo and update submodule pointer
cd ..
git add notes-content
git commit -m "Update content submodule"
git push
```

### Pulling Latest Content

```bash
# Update submodule to latest version
git submodule update --remote notes-content

# Or pull everything including submodules
git pull --recurse-submodules
```

---

## Contributing

We welcome contributions! To contribute:

### Code Contributions

1. Fork the main repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Content Contributions

1. Fork the [notesneo-content](https://github.com/decodewithdeepak/notesneo-content) repository
2. Add or update notes following the existing format
3. Submit a Pull Request with your changes
4. Content will be reviewed and merged

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
