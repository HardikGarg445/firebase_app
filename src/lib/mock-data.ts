import type { ClassData, EventData } from '@/types';

/* ──────────── CLASSES ──────────── */
export const classes: ClassData[] = [
  {
    id: 1,
    subject: 'Quantum Physics',
    time: '9 :00 AM – 10 :30 AM',
    attendance: 92
  },
  {
    id: 2,
    subject: 'Linear Algebra',
    time: '11 :00 AM – 12 :00 PM',
    attendance: 88
  }
];

/* ──────────── EVENTS ──────────── */
export const events: EventData[] = [
  {
    id: 1,
    title: 'AI Workshop',
    description: 'Hands‑on with Gemini API',
    time: '2 :00 PM – 3 :30 PM',
    isHighlighted: true         // special styling
  },
  {
    id: 2,
    title: 'Career Fair Briefing',
    description: 'Everything you need to know before meeting recruiters',
    time: '4 :00 PM – 4 :30 PM'
  }
];
