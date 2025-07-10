import type { ClassData, EventData } from '@/types';

export const classes: ClassData[] = [
  { id: 1, subject: 'Quantum Physics', time: '9:00 AM - 10:30 AM', attendance: 92 },
  { id: 2, subject: 'Organic Chemistry', time: '11:00 AM - 12:30 PM', attendance: 85 },
  { id: 3, subject: 'Metaphysical Poetry', time: '2:00 PM - 3:30 PM', attendance: 98 },
  { id: 4, subject: 'Advanced Algorithms', time: '4:00 PM - 5:30 PM', attendance: 76 },
  { id: 5, subject: 'History of Art', time: '1:00 PM - 2:30 PM', attendance: 68 },
];

export const events: EventData[] = [
  {
    id: 1,
    title: 'Guest Lecture: The Future of AI',
    description: 'Join us for an inspiring talk by Dr. Evelyn Reed on the future of artificial intelligence and its impact on society.',
    time: 'Today, 4:00 PM',
    isHighlighted: true,
  },
  {
    id: 2,
    title: 'Mid-term Study Group',
    description: 'Collaborative study session for the upcoming mid-term exams. All subjects welcome. Pizza will be provided.',
    time: 'Tomorrow, 6:00 PM',
    isHighlighted: false,
  },
  {
    id: 3,
    title: 'Career Fair Prep Workshop',
    description: 'Get your resume ready and practice your elevator pitch for the upcoming university career fair.',
    time: 'Friday, 1:00 PM',
    isHighlighted: false,
  },
];
