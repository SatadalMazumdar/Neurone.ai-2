import type { LucideIcon } from 'lucide-react';

export interface Badge {
  text: string;
  icon: LucideIcon;
}

export interface ExamInfo {
  label: string;
  value: string;
}

export interface Highlight {
  title: string;
  description: string[];
  icon: LucideIcon;
}

export interface TableData {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface Career {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CourseData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge: Badge;
  examInfo: ExamInfo[];
  highlights: Highlight[];
  tableData?: TableData;
  careers: Career[];
  careerSectionTitle?: string;
  careerSectionSubtitle?: string;
  gradient: string;
  icon: LucideIcon;
}

export interface Achiever {
  name: string;
  exam: string;
  note: string;
  rank: string;
  image: string;
  color: string;
}
