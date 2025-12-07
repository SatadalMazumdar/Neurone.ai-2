import {
  Cpu,
  BookOpen,
  Activity,
  Award,
  Zap,
  Target,
  Users,
  TrendingUp,
  Stethoscope,
  Atom,
  FlaskConical,
  Heart,
  Syringe,
  MapPin,
  Clock,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { CourseData, Achiever } from '../types';

export const COURSES: CourseData[] = [
  {
    id: "neet",
    title: "NEET (UG) Preparation",
    shortDescription: "Foundational teaching, daily practice, and past exam papers for medical entrance success.",
    fullDescription: "The National Eligibility cum Entrance Test (UG) is the most crucial examination for students aspiring to pursue a career in medicine, dentistry, and other related fields in India. Our NEET Preparation Course is meticulously designed to provide students with the comprehensive knowledge, strategic preparation, and confidence needed to qualify for top-tier medical institutions.",
    badge: { text: "Medical Entrance", icon: Stethoscope },
    examInfo: [
      { label: "Mode", value: "Offline" },
      { label: "Duration", value: "3 Hours" },
      { label: "Questions", value: "180 MCQs" },
      { label: "Max Marks", value: "720" }
    ],
    highlights: [
      {
        title: "NCERT Deep Dive",
        description: [
          "Exhaustive line-by-line analysis of NCERT syllabus.",
          "Ensures you miss no critical detail.",
          "Guaranteed conceptual clarity from the foundational text."
        ],
        icon: BookOpen
      },
      {
        title: "Applied Learning",
        description: [
          "Integration of Previous Year Questions (PYQs).",
          "Linking theory directly to application.",
          "Mastering strategies to solve questions efficiently."
        ],
        icon: TrendingUp
      },
      {
        title: "Expert Guidance",
        description: [
          "Experienced faculty team with stellar track records.",
          "Sharing exam-cracking shortcuts.",
          "Deep insight into paper patterns."
        ],
        icon: Award
      },
      {
        title: "Precision Test Series",
        description: [
          "Structural test series mirroring latest patterns.",
          "In-depth performance analytics.",
          "Realistic simulation for psychological readiness."
        ],
        icon: Target
      }
    ],
    tableData: {
      title: "NEET Exam Details",
      columns: ["Particulars", "Details"],
      rows: [
        ["Mode", "Pen and Paper (Offline)"],
        ["Duration", "3 hours (180 minutes)"],
        ["Question Type", "Multiple Choice Questions (MCQs)"],
        ["Total Questions", "180"],
        ["Maximum Marks", "720"],
        ["Marking Scheme", "+4 for correct, -1 for incorrect"]
      ]
    },
    careers: [
      { title: "MBBS", description: "Bachelor of Medicine, Bachelor of Surgery", icon: Heart },
      { title: "BDS", description: "Bachelor of Dental Surgery", icon: Activity },
      { title: "AYUSH", description: "Alternative medicine systems (BAMS, BHMS)", icon: FlaskConical },
      { title: "B.V.Sc & AH", description: "Veterinary Science & Animal Husbandry", icon: Award }
    ],
    gradient: "from-rose-500 to-pink-500",
    icon: Stethoscope
  },
  {
    id: "jee",
    title: "JEE (Main) Coaching",
    shortDescription: "Clear concepts and problem-solving strategy for engineering entrance excellence.",
    fullDescription: "The Joint Entrance Examination (Main) is the gateway to premier engineering institutions including NITs, IIITs, and CFTIs. Our JEE Main coaching program is designed to build a strong foundation in Physics, Chemistry, and Mathematics while developing problem-solving skills and exam strategies essential for success.",
    badge: { text: "Engineering Entrance", icon: Cpu },
    examInfo: [
      { label: "Mode", value: "Computer Based" },
      { label: "Duration", value: "3 Hours" },
      { label: "Papers", value: "Paper 1 & 2" },
      { label: "Max Marks", value: "300" }
    ],
    highlights: [
      {
        title: "Comprehensive Syllabus",
        description: [
          "Complete coverage of PCM as per latest syllabus.",
          "In-depth study of NCERT fundamentals.",
          "Topic-wise modules for systematic learning."
        ],
        icon: BookOpen
      },
      {
        title: "Problem-Solving",
        description: [
          "Extensive practice with 15 years of PYQs.",
          "Daily sessions with varying difficulty levels.",
          "Focus on numerical ability and application."
        ],
        icon: Zap
      },
      {
        title: "Speed & Accuracy",
        description: [
          "Specialized sessions for calculation speed.",
          "Shortcut techniques and time-saving tricks.",
          "Practice drills to enhance mental math."
        ],
        icon: Clock
      },
      {
        title: "Regular Mock Tests",
        description: [
          "Weekly full-length mock tests.",
          "Detailed performance analysis.",
          "Subject-wise and chapter-wise tests."
        ],
        icon: Target
      }
    ],
    tableData: {
      title: "JEE Main Exam Pattern",
      columns: ["Particulars", "Paper 1 (B.E./B.Tech)"],
      rows: [
        ["Mode", "Computer Based Test (CBT)"],
        ["Duration", "3 hours"],
        ["Subjects", "Physics, Chemistry, Mathematics"],
        ["Total Questions", "90 (30 per subject)"],
        ["Maximum Marks", "300"],
        ["Marking Scheme", "+4 for correct, -1 for incorrect"]
      ]
    },
    careers: [
      { title: "NITs", description: "National Institutes of Technology", icon: Cpu },
      { title: "IIITs", description: "Indian Institutes of Information Technology", icon: Atom },
      { title: "CFTIs", description: "Centrally Funded Technical Institutes", icon: Award },
      { title: "JEE Advanced", description: "Pathway to IITs", icon: TrendingUp }
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: Atom
  },
  {
    id: "wbjee",
    title: "WBJEE Coaching",
    shortDescription: "Complete preparation for West Bengal Joint Entrance with targeted practice.",
    fullDescription: "The West Bengal Joint Entrance Examination (WBJEE) is the state-level engineering and pharmacy entrance exam. Our specialized coaching program focuses on the unique exam pattern and helps students secure admission to top colleges in West Bengal, including Jadavpur University.",
    badge: { text: "West Bengal Entrance", icon: GraduationCap },
    examInfo: [
      { label: "Mode", value: "Offline" },
      { label: "Duration", value: "4 Hours" },
      { label: "Papers", value: "2 Papers" },
      { label: "Max Marks", value: "200" }
    ],
    highlights: [
      {
        title: "WBJEE-Focused",
        description: [
          "Curriculum designed for WBJEE pattern.",
          "Separate modules for Paper 1 (Math) & Paper 2.",
          "Complete coverage of WBCHSE syllabus."
        ],
        icon: Target
      },
      {
        title: "Mathematics Mastery",
        description: [
          "Special emphasis on Mathematics (100 marks).",
          "Focus on calculus, algebra, coordinate geometry.",
          "Speed math techniques."
        ],
        icon: TrendingUp
      },
      {
        title: "Extensive PYQ",
        description: [
          "Analysis of last 20 years PYQs.",
          "Topic-wise PYQ compilation.",
          "Regular chapter tests."
        ],
        icon: BookOpen
      },
      {
        title: "Mock Test Series",
        description: [
          "Full-length offline mock tests.",
          "Separate tests for Paper 1 and 2.",
          "Rank prediction and benchmarking."
        ],
        icon: CheckCircle2
      }
    ],
    tableData: {
      title: "WBJEE Exam Pattern",
      columns: ["Paper", "Subject", "Questions", "Marks"],
      rows: [
        ["Paper 1", "Mathematics", "75", "100"],
        ["Paper 2", "Physics & Chemistry", "50 each", "100"]
      ]
    },
    careers: [
      { title: "Jadavpur University", description: "Premier engineering college", icon: GraduationCap },
      { title: "Heritage Institute", description: "Top private engineering college", icon: Award },
      { title: "Government Colleges", description: "Affordable quality education", icon: MapPin },
      { title: "Pharmacy", description: "B.Pharm programs", icon: FlaskConical }
    ],
    gradient: "from-violet-600 to-indigo-600",
    icon: FlaskConical
  },
  {
    id: "aiims-nursing",
    title: "AIIMS B.Sc Nursing",
    shortDescription: "Focused coaching for nursing entrance exams with comprehensive study materials.",
    fullDescription: "The AIIMS B.Sc Nursing entrance exam is conducted for admission to the prestigious program at All India Institute of Medical Sciences. Our specialized coaching prepares you for this competitive exam covering Physics, Chemistry, Biology, and General Knowledge.",
    badge: { text: "Nursing Entrance", icon: Heart },
    examInfo: [
      { label: "Mode", value: "Online (CBT)" },
      { label: "Duration", value: "3 Hours" },
      { label: "Questions", value: "60 MCQs" },
      { label: "Max Marks", value: "60" }
    ],
    highlights: [
      {
        title: "Complete Coverage",
        description: [
          "Physics, Chemistry, Biology, and GK.",
          "Strong emphasis on Biology.",
          "Current affairs sessions."
        ],
        icon: BookOpen
      },
      {
        title: "AIIMS Strategy",
        description: [
          "Tailored for AIIMS pattern.",
          "Practice with previous years.",
          "Time management strategies."
        ],
        icon: Target
      },
      {
        title: "Online Test Platform",
        description: [
          "CBT practice platform.",
          "Regular online mock tests.",
          "Instant result analysis."
        ],
        icon: Zap
      },
      {
        title: "Interview Prep",
        description: [
          "Mock interview sessions.",
          "Communication skills training.",
          "Personality development."
        ],
        icon: Users
      }
    ],
    careers: [
      { title: "AIIMS", description: "Study at India's premier institution", icon: Heart },
      { title: "Placements", description: "Top hospitals & organizations", icon: Award },
      { title: "Clinical", description: "Hands-on training", icon: Stethoscope },
      { title: "Growth", description: "M.Sc Nursing opportunities", icon: TrendingUp }
    ],
    gradient: "from-pink-500 to-rose-500",
    icon: Heart
  },
  {
    id: "jenpas",
    title: "JENPAS (UG)",
    shortDescription: "Expert guidance for paramedical entrance with regular mock tests.",
    fullDescription: "JENPAS (Joint Entrance for Nursing & Paramedical Admission Services) is the state-level exam for B.Sc Nursing and paramedical courses in West Bengal. Our program prepares you for success, opening doors to top colleges across the state.",
    badge: { text: "Nursing & Paramedical", icon: Activity },
    examInfo: [
      { label: "Mode", value: "Offline" },
      { label: "Duration", value: "90 Minutes" },
      { label: "Questions", value: "120 MCQs" },
      { label: "Max Marks", value: "120" }
    ],
    highlights: [
      {
        title: "Subject Mastery",
        description: [
          "Physics, Chemistry, Biology, English.",
          "Focus on Human Anatomy & Physiology.",
          "English grammar and comprehension."
        ],
        icon: BookOpen
      },
      {
        title: "Exam Strategy",
        description: [
          "Pattern-specific preparation.",
          "Previous year question analysis.",
          "Speed training for 120 questions."
        ],
        icon: Target
      },
      {
        title: "Biology Focus",
        description: [
          "In-depth biology teaching.",
          "Visual learning aids and models.",
          "Nutrition and health modules."
        ],
        icon: Heart
      },
      {
        title: "Admission Support",
        description: [
          "Application assistance.",
          "Counseling support.",
          "Guidance on scholarships."
        ],
        icon: Users
      }
    ],
    careers: [
      { title: "B.Sc Nursing", description: "4-year degree program", icon: Heart },
      { title: "Lab Technology", description: "Diagnostic sciences", icon: FlaskConical },
      { title: "Physiotherapy", description: "Rehabilitation therapy", icon: Activity },
      { title: "Radiology", description: "Imaging technology", icon: Zap }
    ],
    gradient: "from-emerald-500 to-teal-500",
    icon: Activity
  },
  {
    id: "anm-gnm",
    title: "ANM / GNM Nursing",
    shortDescription: "Comprehensive preparation for nursing diploma courses with personalized attention.",
    fullDescription: "ANM and GNM are diploma-level nursing courses providing a quick pathway to a healthcare career. Our specialized coaching prepares you for entrance exams conducted by various nursing schools and government institutions.",
    badge: { text: "Diploma Nursing", icon: Stethoscope },
    examInfo: [
      { label: "ANM", value: "2 Years" },
      { label: "GNM", value: "3.5 Years" },
      { label: "Eligibility", value: "10th/12th" },
      { label: "Career", value: "Fast Track" }
    ],
    highlights: [
      {
        title: "Foundation",
        description: [
          "Biology, Science, English, GK.",
          "Modules for 10th & 12th pass students.",
          "Basic nursing concepts."
        ],
        icon: BookOpen
      },
      {
        title: "Exam Focus",
        description: [
          "Prep for various entrance exams.",
          "Previous year papers from WB institutions.",
          "Customized mock tests."
        ],
        icon: Target
      },
      {
        title: "Affordable",
        description: [
          "Budget-friendly fees.",
          "Flexible batch timings.",
          "Scholarship guidance."
        ],
        icon: Users
      },
      {
        title: "Practical Exposure",
        description: [
          "Introduction to patient care.",
          "Guest lectures by nurses.",
          "Hospital environment awareness."
        ],
        icon: Heart
      }
    ],
    careers: [
      { title: "Hospitals", description: "Staff nurse roles", icon: Stethoscope },
      { title: "Health Centers", description: "Primary health care", icon: MapPin },
      { title: "Home Care", description: "Personalized patient care", icon: Heart },
      { title: "Govt Jobs", description: "Secure employment", icon: Award }
    ],
    gradient: "from-orange-500 to-amber-500",
    icon: Syringe
  }
];

export const ACHIEVERS: Achiever[] = [
  {
    name: "Priya Sharma",
    exam: "NEET 2024",
    note: "Secured admission in Government Medical College",
    rank: "AIR 2,345",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-rose-500"
  },
  {
    name: "Rahul Das",
    exam: "JEE Main 2024",
    note: "Qualified for JEE Advanced",
    rank: "AIR 5,678",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-blue-500"
  },
  {
    name: "Ananya Mondal",
    exam: "WBJEE 2024",
    note: "Selected for Engineering at Jadavpur University",
    rank: "Rank 234",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-indigo-500"
  },
  {
    name: "Sourav Biswas",
    exam: "JENPAS 2024",
    note: "Admitted to B.Sc Nursing program",
    rank: "Rank 89",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-emerald-500"
  }
];
