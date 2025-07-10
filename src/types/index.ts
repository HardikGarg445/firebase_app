/* ------------------------------------------------------------------
   Centralised reusable types
   ------------------------------------------------------------------ */

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
  /** Renders with accent colour & megaphone icon when true */
  isHighlighted?: boolean;
};
