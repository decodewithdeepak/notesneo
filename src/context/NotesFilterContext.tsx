import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NotesFilterContextType {
  selectedBranch: string;
  selectedSemester: number | null;
  selectedSubject: string;
  setSelectedBranch: (branch: string) => void;
  setSelectedSemester: (semester: number | null) => void;
  setSelectedSubject: (subject: string) => void;
}

const NotesFilterContext = createContext<NotesFilterContextType | undefined>(undefined);

export function NotesFilterProvider({ children }: { children: ReactNode }) {
  const [selectedBranch, setSelectedBranch] = useState(() => {
    const saved = localStorage.getItem('selectedBranch');
    return saved || '';
  });

  const [selectedSemester, setSelectedSemester] = useState<number | null>(() => {
    const saved = localStorage.getItem('selectedSemester');
    return saved ? Number(saved) : null;
  });

  const [selectedSubject, setSelectedSubject] = useState(() => {
    const saved = localStorage.getItem('selectedSubject');
    return saved || '';
  });

  useEffect(() => {
    localStorage.setItem('selectedBranch', selectedBranch);
  }, [selectedBranch]);

  useEffect(() => {
    if (selectedSemester !== null) {
      localStorage.setItem('selectedSemester', String(selectedSemester));
    } else {
      localStorage.removeItem('selectedSemester');
    }
  }, [selectedSemester]);

  useEffect(() => {
    localStorage.setItem('selectedSubject', selectedSubject);
  }, [selectedSubject]);

  return (
    <NotesFilterContext.Provider
      value={{
        selectedBranch,
        selectedSemester,
        selectedSubject,
        setSelectedBranch,
        setSelectedSemester,
        setSelectedSubject,
      }}
    >
      {children}
    </NotesFilterContext.Provider>
  );
}

export function useNotesFilter() {
  const context = useContext(NotesFilterContext);
  if (context === undefined) {
    throw new Error('useNotesFilter must be used within a NotesFilterProvider');
  }
  return context;
}