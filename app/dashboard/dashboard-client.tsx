"use client";

import { useEffect, useState, useMemo } from "react";
import { useUserProfile } from "@/lib/contexts/user-profile-context";
import { ProfileSetupDialog } from "@/components/dashboard/profile-setup-dialog";
import { NoteCard } from "@/components/search/note-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Note } from "@/lib/types/note";
import { Settings, BookOpen, GraduationCap } from "lucide-react";

interface DashboardClientProps {
  allNotes: Note[];
}

export function DashboardClient({ allNotes }: DashboardClientProps) {
  const { profile, isLoaded } = useUserProfile();
  const [showSetupDialog, setShowSetupDialog] = useState(false);

  // Show setup dialog if profile is not set up
  useEffect(() => {
    if (isLoaded && !profile.isSetup) {
      setShowSetupDialog(true);
    }
  }, [isLoaded, profile.isSetup]);

  // Filter notes based on user profile
  const filteredNotes = useMemo(() => {
    if (!profile.branch || !profile.semester) return [];
    return allNotes.filter(
      (note) =>
        note.branch === profile.branch && note.semester === profile.semester,
    );
  }, [profile.branch, profile.semester, allNotes]);

  const handleChangeProfile = () => {
    setShowSetupDialog(true);
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-full flex flex-col gap-8 min-h-full">
      <ProfileSetupDialog
        open={showSetupDialog}
        onOpenChange={setShowSetupDialog}
      />

      <div className="flex-1 flex flex-col">
        {/* Header Section */}
        <div className="border-b border-border bg-background py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-librebaskerville text-2xl sm:text-3xl font-semibold mb-2">
                My Dashboard
              </h1>
              {profile.isSetup && (
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge
                    variant="outline"
                    className="text-sm font-medium bg-primary/10 border-primary/20"
                  >
                    <GraduationCap className="h-3.5 w-3.5 mr-1" />
                    {profile.branch}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-sm font-medium bg-primary/10 border-primary/20"
                  >
                    <BookOpen className="h-3.5 w-3.5 mr-1" />
                    Semester {profile.semester}
                  </Badge>
                </div>
              )}
            </div>

            {profile.isSetup && (
              <Button
                variant="outline"
                onClick={handleChangeProfile}
                className="gap-2 w-full sm:w-auto"
              >
                <Settings className="h-4 w-4" />
                Change Preferences
              </Button>
            )}
          </div>
        </div>

        {/* Notes Section */}
        {profile.isSetup ? (
          <div className="flex-1 py-6">
            {filteredNotes.length > 0 ? (
              <>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredNotes.length} note
                    {filteredNotes.length !== 1 ? "s" : ""} for{" "}
                    <span className="font-medium text-foreground">
                      {profile.branch}
                    </span>{" "}
                    •{" "}
                    <span className="font-medium text-foreground">
                      Semester {profile.semester}
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-border">
                  {filteredNotes.map((note, index) => (
                    <NoteCard
                      key={note.id}
                      note={note}
                      isFirstRowMobile={index === 0}
                      isFirstRowTablet={index < 2}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center min-h-[40vh] border border-border bg-muted/30">
                <div className="text-center max-w-md px-4">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">
                    No Notes Available
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We don't have any notes for {profile.branch} - Semester{" "}
                    {profile.semester} yet. Check back soon or try different
                    preferences.
                  </p>
                  <Button variant="outline" onClick={handleChangeProfile}>
                    Change Preferences
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[40vh]">
            <div className="text-center max-w-md px-4">
              <GraduationCap className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">
                Welcome to Your Dashboard!
              </h3>
              <p className="text-muted-foreground mb-4">
                Set up your profile to see personalized notes for your branch
                and semester.
              </p>
              <Button onClick={() => setShowSetupDialog(true)} size="lg">
                Set Up Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
