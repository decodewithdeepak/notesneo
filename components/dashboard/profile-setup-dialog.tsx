"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserProfile } from "@/lib/contexts/user-profile-context";

interface ProfileSetupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProfileSetupDialog({
  open,
  onOpenChange,
}: ProfileSetupDialogProps) {
  const { updateProfile } = useUserProfile();
  const [branch, setBranch] = useState<"BTech" | "BCA" | "BBA" | "">("");
  const [semester, setSemester] = useState<string>("");

  const handleSubmit = () => {
    if (branch && semester) {
      updateProfile(branch as "BTech" | "BCA" | "BBA", parseInt(semester));
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Welcome to Your Dashboard! 🎓
          </DialogTitle>
          <DialogDescription className="text-base">
            Let's personalize your experience. Select your branch and semester
            to see relevant notes.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Branch Selection */}
          <div className="space-y-2">
            <Label htmlFor="branch" className="text-base font-medium">
              Select Your Branch
            </Label>
            <Select
              value={branch}
              onValueChange={(value) => setBranch(value as any)}
            >
              <SelectTrigger id="branch" className="h-11">
                <SelectValue placeholder="Choose your branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTech">BTech</SelectItem>
                <SelectItem value="BCA">BCA</SelectItem>
                <SelectItem value="BBA">BBA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Semester Selection */}
          <div className="space-y-2">
            <Label htmlFor="semester" className="text-base font-medium">
              Select Your Semester
            </Label>
            <Select value={semester} onValueChange={setSemester}>
              <SelectTrigger id="semester" className="h-11">
                <SelectValue placeholder="Choose your semester" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <SelectItem key={sem} value={sem.toString()}>
                    Semester {sem}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex">
          <Button
            onClick={handleSubmit}
            disabled={!branch || !semester}
            className="flex-1"
            size="lg"
          >
            Continue to Dashboard
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
