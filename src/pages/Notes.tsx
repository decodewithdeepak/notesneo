import { useState } from 'react';
import { Book, GraduationCap, ScrollText } from 'lucide-react';
import { NoteCard } from '../components/NoteCard';
import { FilterBar } from '../components/FilterBar';
import { useFavorites } from '../context/FavoritesContext';
import type { Note } from '../types';

export function Notes() {
  const [searchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState('');
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleSave = (note: Note) => {
    if (isFavorite(note.id)) {
      removeFromFavorites(note.id);
    } else {
      addToFavorites(note);
    }
  };

  // Filter notes based on all criteria
  const filteredNotes = notes.filter((note) => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBranch = !selectedBranch || note.branch === selectedBranch;
    const matchesSemester = !selectedSemester || note.semester === selectedSemester;
    const matchesSubject = !selectedSubject || note.subject === selectedSubject;
    return matchesSearch && matchesBranch && matchesSemester && matchesSubject;
  });

  // Get unique subjects for the selected semester
  const availableSubjects = Array.from(
    new Set(
      notes
        .filter((note) => (!selectedBranch || note.branch === selectedBranch) &&
          (!selectedSemester || note.semester === selectedSemester))
        .map((note) => note.subject)
    )
  );

  // Show hero section when no subject is selected
  const showHeroSection = !selectedSubject;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8" data-aos="fade-down">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Academic Notes
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Browse our collection of high-quality academic notes
          </p>
        </div>

        <div className="space-y-6" data-aos="fade-up">
          <FilterBar
            selectedBranch={selectedBranch}
            selectedSemester={selectedSemester}
            selectedSubject={selectedSubject}
            onBranchChange={setSelectedBranch}
            onSemesterChange={setSelectedSemester}
            onSubjectChange={setSelectedSubject}
            subjects={availableSubjects}
          />
        </div>

        {showHeroSection ? (
          <div className="mt-12">
            {/* Course Selection Guide */}
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Select Your Course
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Choose your branch, semester, and subject to access your study materials
              </p>
            </div>

            {/* Course Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4 mx-auto">
                  <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  Multiple Branches
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Access notes for BTech, BCA, and BBA courses
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4 mx-auto">
                  <Book className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  Comprehensive Content
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Detailed notes for all subjects and units
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4 mx-auto">
                  <ScrollText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  Easy Navigation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Filter by semester and subject for quick access
                </p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                How to Access Notes
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Select your branch (BTech, BCA, or BBA)</li>
                <li>Choose your semester (1-8)</li>
                <li>Pick a subject to view available notes</li>
                <li>Download the notes you need</li>
              </ol>
            </div>
          </div>
        ) : (
          filteredNotes.length === 0 ? (
            <div className="text-center py-12" data-aos="fade-up">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No notes found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
              {filteredNotes.map((note, index) => (
                <div key={note.id} data-aos="fade-up" data-aos-delay={index * 100}>
                  <NoteCard
                    note={note}
                    onSave={() => handleSave(note)}
                    isSaved={isFavorite(note.id)}
                  />
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

// Sample notes data with branch and semester information
const notes: Note[] = [
  // BTech Semester 1
  {
    id: 'math101',
    title: 'Engineering Mathematics I - Unit 1',
    description: 'Differential Calculus and Applications',
    subject: 'Mathematics',
    branch: 'BTech',
    semester: 1,
    unit: 1,
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    downloadUrl: 'https://example.com/notes/math101',
  },
  {
    id: 'phy101',
    title: 'Engineering Physics - Unit 1',
    description: 'Mechanics and Wave Motion',
    subject: 'Physics',
    branch: 'BTech',
    semester: 1,
    unit: 1,
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    downloadUrl: 'https://example.com/notes/phy101',
  },

  // BTech Semester 3 - Python
  {
    id: 'py1',
    title: 'Python Unit 1',
    description: 'Introduction to Python',
    subject: 'Python',
    branch: 'BTech',
    semester: 3,
    unit: 1,
    imageUrl: 'https://i.ibb.co/pnmbLJ3/py1.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1CLSrxDfR_jhiPRu4Vc1nukvtir2w9uFeun9SRDAp2CA/export?format=pdf',
  },
  {
    id: 'py2',
    title: 'Python Unit 2',
    description: 'Lists, Dictionary and Functions',
    subject: 'Python',
    branch: 'BTech',
    semester: 3,
    unit: 2,
    imageUrl: 'https://i.ibb.co/X8fqd6v/py2.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1SUWMspnku0XhI_Zjq7LNqOC8coUgIUhYWM4984Ks4js/edit?usp=drive_link',
  },
  {
    id: 'py3',
    title: 'Python Unit 3',
    description: 'Graphics and Image Processing',
    subject: 'Python',
    branch: 'BTech',
    semester: 3,
    unit: 3,
    imageUrl: 'https://i.ibb.co/SfJpr8h/py3.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1XXLl-P66gpPtHYrHzdEbXTxEwzdcW5oVHbPy13EASPk/edit?usp=drive_link',
  },
  {
    id: 'py4',
    title: 'Python Unit 4',
    description: 'OOPs Concepts and Multithreading',
    subject: 'Python',
    branch: 'BTech',
    semester: 3,
    unit: 4,
    imageUrl: 'https://i.ibb.co/j3gyMbB/py4.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1IQ2Tu09ZmZVrlelGq4wEmNCCh_2WH_e1n4i5XfigVJs/edit?usp=drive_link',
  },

  // BTech Semester 3 - DBMS
  {
    id: 'dbms301',
    title: 'DBMS Unit 1: Database System Architecture and Data Models',
    description: 'Overview of database system architecture and data models',
    subject: 'DBMS',
    branch: 'BTech',
    semester: 3,
    unit: 1,
    imageUrl: 'https://i.ibb.co/jTnWgbK/dbms1.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1-aFXZXWcJ1_wBLk3Qr_KF1VgEk41smBVRoXE5mkhPdg/edit?usp=drive_link',
  },
  {
    id: 'dbms302',
    title: 'DBMS Unit 2: Relational Query Languages, Database Design and Query Processing',
    description: 'Introduction to query languages, database design, and processing',
    subject: 'DBMS',
    branch: 'BTech',
    semester: 3,
    unit: 2,
    imageUrl: 'https://i.ibb.co/k2rJmPy/dbms2.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1JXphaYl5TpeAdNDsONxhTHetyAgXzpZGJnwhJFglJmA/edit?usp=drive_link',
  },
  {
    id: 'dbms303',
    title: 'DBMS Unit 3: Storage Strategies and Transaction Processing',
    description: 'Storage strategies and transaction processing in DBMS',
    subject: 'DBMS',
    branch: 'BTech',
    semester: 3,
    unit: 3,
    imageUrl: 'https://i.ibb.co/zV4PZvh/dbms3.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1Hzhw5bqLpNhbRVyLHLWuFlR6VsjqxGcuwzCSDCpr2UA/edit?usp=drive_link',
  },
  {
    id: 'dbms304',
    title: 'DBMS Unit 4: Database Security and Advanced Topics',
    description: 'Database security measures and advanced topics',
    subject: 'DBMS',
    branch: 'BTech',
    semester: 3,
    unit: 4,
    imageUrl: 'https://i.ibb.co/yNBXyXR/dbms4.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1NixCJQWhBClqS_sU157p5p32fZt3h3PFgVCjWXI-t6s/edit?usp=drive_link',
  },

  // BTech Semester 3 - DSA
  {
    id: 'dsa301',
    title: 'DSA Unit 1: Introduction to Data Structures and Algorithms',
    description: 'Introduction to basic data structures and algorithms',
    subject: 'DSA',
    branch: 'BTech',
    semester: 3,
    unit: 1,
    imageUrl: 'https://i.ibb.co/4MfG6Dy/ds1.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1cmcfWj9XerMi-Fe5GHqFPqblrvEEXhAnXX_mehos8M4/edit?usp=sharing',
  },
  {
    id: 'dsa302',
    title: 'DSA Unit 2: Stacks And Queues',
    description: 'In-depth understanding of stacks and queues',
    subject: 'DSA',
    branch: 'BTech',
    semester: 3,
    unit: 2,
    imageUrl: 'https://i.ibb.co/M7kVZCL/ds2.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1SeKtFUGaFuV7KXKGJWB7MddG3EMAd5UMJynGszCZJ3s/edit?usp=sharing',
  },
  {
    id: 'dsa303',
    title: 'DSA Unit 3: Linked Lists and Trees',
    description: 'Concepts of linked lists and trees',
    subject: 'DSA',
    branch: 'BTech',
    semester: 3,
    unit: 3,
    imageUrl: 'https://i.ibb.co/H7MjbMf/ds3.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1DhegjCN6mEq2BC9VaqFMQcKMBdMhRE2xF1giUXkYjkQ/edit?usp=sharing',
  },
  {
    id: 'dsa304',
    title: 'DSA Unit 4: Sorting and Graph',
    description: 'Introduction to sorting algorithms and graph theory',
    subject: 'DSA',
    branch: 'BTech',
    semester: 3,
    unit: 4,
    imageUrl: 'https://i.ibb.co/VHgK7CX/ds4.jpg',
    downloadUrl: 'https://docs.google.com/document/d/17BGU5qgaexJNUobR7_ZDFNErDGBE33MDmZntsg3YKhc/edit?usp=sharing',
  },

  // BTech Semester 3 - Digital Electronics (DE)
  {
    id: 'de301',
    title: 'DE Unit 1: Fundamentals of Digital Systems and Logic Families',
    description: 'Fundamentals of digital systems and logic families',
    subject: 'Digital Electronics',
    branch: 'BTech',
    semester: 3,
    unit: 1,
    imageUrl: 'https://i.ibb.co/m6gVtGB/de1.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1BH0QMigRoOeNvxpUS1zZ1_q_6DdNls6wLusH4YSsikU/preview',
  },
  {
    id: 'de302',
    title: 'DE Unit 2: Combinational Digital Circuits',
    description: 'Combinational circuits and logic design',
    subject: 'Digital Electronics',
    branch: 'BTech',
    semester: 3,
    unit: 2,
    imageUrl: 'https://i.ibb.co/B4F542q/de2.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1hYRkbsU2S7k_uSPXTNGZP1ur8RcRBuEVBWo8UMnO-gA/preview',
  },
  {
    id: 'de303',
    title: 'DE Unit 3: Sequential Circuits and Systems',
    description: 'Sequential circuits and systems in digital electronics',
    subject: 'Digital Electronics',
    branch: 'BTech',
    semester: 3,
    unit: 3,
    imageUrl: 'https://i.ibb.co/qMm4xD9/de3.jpg',
    downloadUrl: 'https://docs.google.com/document/d/18lWouscuU97Jj0i2lHycGc5eMUx4oX-v9wBgZDbhurw/preview',
  },
  {
    id: 'de304',
    title: 'DE Unit 4: A/D and D/A Converters, Memories and PLDs',
    description: 'Analog/digital converters, memories, and programmable logic devices',
    subject: 'Digital Electronics',
    branch: 'BTech',
    semester: 3,
    unit: 4,
    imageUrl: 'https://i.ibb.co/1zsf7Mz/de4.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1xLL9VPBwLdeUS_XEyln-sZqNqhNODvKaKahd2QvT6VA/preview',
  },

  // BTech Semester 3 - Economics (ECO)
  {
    id: 'eco301',
    title: 'ECO Unit 1: Introduction to Economics and Demand',
    description: 'Introduction to economics and demand analysis',
    subject: 'Economics',
    branch: 'BTech',
    semester: 3,
    unit: 1,
    imageUrl: 'https://i.ibb.co/3Cm0zdF/eco1.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1m3Tw0ssyB9-BPKxo4gV8HLwwzEr1KMiyqfudc6eN74s/edit?usp=drive_link',
  },
  {
    id: 'eco302',
    title: 'ECO Unit 2: Production and Cost Analysis',
    description: 'Analysis of production and cost concepts',
    subject: 'Economics',
    branch: 'BTech',
    semester: 3,
    unit: 2,
    imageUrl: 'https://i.ibb.co/f9bDL2m/eco2.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1NwBIThoGhL6P6HZBlKqHgY1QXPoQ6CCPHIhXH1nphDE/edit?usp=drive_link',
  },
  {
    id: 'eco303',
    title: 'ECO Unit 3: Market and Supply',
    description: 'Market structure and supply concepts',
    subject: 'Economics',
    branch: 'BTech',
    semester: 3,
    unit: 3,
    imageUrl: 'https://i.ibb.co/9v7zMDS/eco3.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1AUlra3HHc3twjDK072sSyapnxJOyRH-wxDx189q2III/edit?usp=drive_link',
  },
  {
    id: 'eco304',
    title: 'ECO Unit 4: Indian Economy',
    description: 'Overview of the Indian economy',
    subject: 'Economics',
    branch: 'BTech',
    semester: 3,
    unit: 4,
    imageUrl: 'https://i.ibb.co/9v7zMDS/eco3.jpg',
    downloadUrl: 'https://docs.google.com/document/d/1rMk2uzaP_AumU1XW8zwzziQhhJ1ozzkaYNv8b-xFpQU/edit',
  },

  // BTech Semester 5 - Computer Networks (CN)
  {
    id: 'cn301',
    title: 'CN Unit 1',
    description: 'Introduction to Computer Networks',
    subject: 'Computer Networks',
    branch: 'BTech',
    semester: 5,
    unit: 1,
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    downloadUrl: 'https://docs.google.com/document/d/1UvPaah98Wjwr4Qywm0MJ6tsX3W62fCSdVebGyL4tcAs/',
  },
  {
    id: 'cn302',
    title: 'CN Unit 2',
    description: 'Network Protocols and Devices',
    subject: 'Computer Networks',
    branch: 'BTech',
    semester: 5,
    unit: 2,
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    downloadUrl: 'https://docs.google.com/document/d/13J1RaO6fPRR_K0SRTseOcJYg4V1gKkIAtTNakduj4_E/',
  },
  {
    id: 'cn303',
    title: 'CN Unit 3',
    description: 'Routing Algorithms, Transport and Application Layer',
    subject: 'Computer Networks',
    branch: 'BTech',
    semester: 5,
    unit: 3,
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    downloadUrl: 'https://docs.google.com/document/d/1zb29KftBpaXf68dLgIv1eGZk84KSD-stFjBI4vr4xIE/',
  },
  {
    id: 'cn304',
    title: 'CN Unit 4',
    description: 'Congestion, QoS, LAN and Security',
    subject: 'Computer Networks',
    branch: 'BTech',
    semester: 5,
    unit: 4,
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    downloadUrl: 'https://docs.google.com/document/d/1DeGtxmxgqw5E27ogkb5a5wFCzKptaUeEUwSJzHO0998/',
  },

  // BCA Semester 1
  {
    id: 'prog101',
    title: 'Programming Fundamentals - Unit 1',
    description: 'Introduction to Programming Concepts',
    subject: 'Programming',
    branch: 'BCA',
    semester: 1,
    unit: 1,
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    downloadUrl: 'https://example.com/notes/prog101',
  },
  // BBA Semester 1
  {
    id: 'mgmt101',
    title: 'Principles of Management - Unit 1',
    description: 'Introduction to Management Concepts',
    subject: 'Management',
    branch: 'BBA',
    semester: 1,
    unit: 1,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    downloadUrl: 'https://example.com/notes/mgmt101',
  },
];