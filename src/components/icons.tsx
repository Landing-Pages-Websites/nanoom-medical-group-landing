import type { ReactElement } from "react";

// Lightweight Lucide-style line-icon set (single family, 1.75px stroke).
// Kept inline so we ship one consistent icon system without a runtime dep.

export type IconName =
  | "zap"
  | "brain"
  | "activity"
  | "waves"
  | "shield"
  | "scale"
  | "wind"
  | "heart"
  | "bug"
  | "flame"
  | "clipboard"
  | "clipboard-check"
  | "microscope"
  | "user-heart"
  | "check"
  | "book"
  | "phone"
  | "arrow-right"
  | "star"
  | "quote"
  | "plus";

const PATHS: Record<IconName, ReactElement> = {
  zap: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />,
  brain: (
    <>
      <path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    </>
  ),
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  waves: (
    <>
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 1.3 0 1.9-.5 2.5-1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 1.3 0 1.9-.5 2.5-1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 1.3 0 1.9-.5 2.5-1" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  scale: (
    <>
      <path d="M12 3v18" />
      <path d="M5 21h14" />
      <path d="m3 8 4-4 4 4M3 8c0 2 1 3 2 3s2-1 2-3M13 8l4-4 4 4M17 8c0 2 1 3 2 3s2-1 2-3" />
    </>
  ),
  wind: (
    <>
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
      <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
      <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
    </>
  ),
  heart: (
    <path d="M19 14c1.5-1.5 3-3.3 3-5.5A5.5 5.5 0 0 0 12 5 5.5 5.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7Z" />
  ),
  bug: (
    <>
      <path d="M8 2l1.9 1.9M16 2l-1.9 1.9" />
      <path d="M12 20a6 6 0 0 0 6-6v-3a6 6 0 0 0-12 0v3a6 6 0 0 0 6 6Z" />
      <path d="M12 8v12M4 10h2M4 15h2.5M18 10h2M17.5 15H20M5 20l2-2M19 20l-2-2M5 5l2 2" />
    </>
  ),
  flame: (
    <path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C8 10 6 12 6 15a6 6 0 0 0 12 0c0-5-6-8-6-13Z" />
  ),
  clipboard: (
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </>
  ),
  "clipboard-check": (
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  microscope: (
    <>
      <path d="M6 18h8M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2M15 9V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6M12 9h4" />
    </>
  ),
  "user-heart": (
    <>
      <path d="M10 15H6a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M18.5 13.3a1.7 1.7 0 0 0-2.5.2 1.7 1.7 0 0 0-2.5-.2c-.8.7-.8 2 .1 2.9l2.4 2.3 2.4-2.3c.9-.9.9-2.2.1-2.9Z" />
    </>
  ),
  check: <path d="m4.5 12.75 6 6 9-13.5" />,
  book: (
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14ZM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
  ),
  phone: (
    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  ),
  "arrow-right": <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />,
  star: (
    <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 18.2 6.2 20.8l1.1-6.4L2.6 9.8l6.5-.9L12 3Z" />
  ),
  quote: (
    <path d="M9 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v3l4-3V9a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v3l4-3V9a2 2 0 0 0-2-2Z" />
  ),
  plus: <path d="M12 4.5v15m7.5-7.5h-15" />,
};

// Icons that read best as a solid fill (quote mark, star).
const FILLED: ReadonlySet<IconName> = new Set<IconName>(["quote", "star"]);

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

export function Icon({
  name,
  className = "w-6 h-6",
  strokeWidth = 1.75,
}: IconProps): ReactElement {
  const filled = FILLED.has(name);
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
