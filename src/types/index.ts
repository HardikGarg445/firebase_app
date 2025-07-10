// Central place for re‑usable types
export type EventData = {
  id: number;
  title: string;
  description: string;
  time: string;
  isHighlighted?: boolean; // <-- Add this line
};

export type ClassData = {
  id: number;
  subject: string;
  time: string;
  attendance: number;
};

export type EventData = {
  id: number;
  title: string;
  description: string;
  time: string;
  /** Renders with accent color & megaphone icon when true */
  isHighlighted?: boolean;
};
