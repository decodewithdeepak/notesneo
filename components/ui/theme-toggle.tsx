"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThemeToggleIcon } from "../icons/icons";
import { Button } from "./button";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";

    // @ts-ignore
    if (!document.startViewTransition) return setTheme(newTheme);

    // @ts-ignore
    document.startViewTransition(() => setTheme(newTheme)).ready.then(() => {
      document.documentElement.animate(
        { clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"] },
        { duration: 600, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  };

  if (!mounted) return <Button size="sm" variant="ghost"><ThemeToggleIcon className="size-5" /></Button>;

  return (
    <Button size="sm" variant="ghost" onClick={toggleTheme}>
      <ThemeToggleIcon className="size-5" />
    </Button>
  );
}

