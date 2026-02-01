"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".flex-1.min-w-0.overflow-y-auto");
    if (!container) return;

    const updateProgress = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setProgress(Math.min(scrolled, 100));
    };

    container.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => container.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="h-1 bg-muted">
      <div
        className="h-full bg-primary transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
