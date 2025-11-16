import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark" | "auto";
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

export function Logo({ className, size = "md", variant = "auto" }: LogoProps) {
  const variantClasses = {
    light: "text-white",
    dark: "text-black",
    auto: "text-foreground",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeClasses[size], variantClasses[variant], className)}
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Book/Notebook Base */}
      <path
        d="M4 4.5C4 3.67157 4.67157 3 5.5 3H18.5C19.3284 3 20 3.67157 20 4.5V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5V4.5Z"
        fill="currentColor"
        fillOpacity="0.2"
      />

      {/* Notebook Spine/Binding */}
      <rect
        x="7"
        y="3"
        width="1.5"
        height="18"
        fill="currentColor"
        fillOpacity="0.4"
      />

      {/* Horizontal Lines (representing text/notes) */}
      <line
        x1="10"
        y1="10"
        x2="17"
        y2="10"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="13"
        x2="17"
        y2="13"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="16"
        x2="15"
        y2="16"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />

      {/* Graduation Cap on top */}
      <g transform="translate(2, -1) scale(0.5)">
        <path
          d="M12 3L1 9L12 15L23 9L12 3Z"
          fill="currentColor"
          fillOpacity="0.8"
        />
        <path
          d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
      </g>
    </svg>
  );
}
