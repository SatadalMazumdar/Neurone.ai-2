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
    shortDescription: "Five-subject JENPAS prep with variable-marking strategy for top Nursing & Paramedical ranks.",
    fullDescription: "The JENPAS (UG) Paper I is the single mandatory entrance test for high-demand programs like B.Sc. Nursing, B.P.T., and other B.Sc. Paramedical courses. We focus on mastering the five-subject pattern and variable marking scheme so you can secure a top General Merit Rank for government seats.",
    badge: { text: "Nursing & Paramedical", icon: Activity },
    examInfo: [
      { label: "Mode", value: "Offline (OMR)" },
      { label: "Duration", value: "90 Minutes" },
      { label: "Questions", value: "100 (Paper I)" },
      { label: "Max Marks", value: "115" },
      { label: "Subjects", value: "Physics, Chemistry, Biology, Basic English, Logical Reasoning" }
    ],
    highlights: [
      {
        title: "Integrated Strategy: Balanced Five Subjects",
        description: [
          "Structured plan that balances core sciences with English and Logical Reasoning.",
          "Ensures no easy marks are left in non-science sections.",
          "Targets all 100 questions/115 marks for a higher General Merit Rank."
        ],
        icon: Target
      },
      {
        title: "Logical & English Edge",
        description: [
          "Dedicated classes for the 40 marks from Basic English and Logical Reasoning.",
          "Focused drills on series, blood relations, coding-decoding, and grammar/comprehension.",
          "Leverages these sections as guaranteed score boosters."
        ],
        icon: BookOpen
      },
      {
        title: "Variable Marking Mastery",
        description: [
          "Category 1: +1 with -0.25 penalty; Category 2: +2 with no negative marking.",
          "Strategies to identify and prioritize high-value Category 2 questions.",
          "Mocks mirror question-type distribution for real exam decision-making."
        ],
        icon: Zap
      },
      {
        title: "Expert Guidance",
        description: [
          "Faculty specialized in medical and allied science entrances.",
          "Exam-cracking shortcuts tailored to the JENPAS pattern.",
          "Insights from recent trends for both science and reasoning sections."
        ],
        icon: Award
      },
      {
        title: "Doubt Destroyers",
        description: [
          "Dedicated channels and structured doubt sessions for rapid resolution.",
          "One-on-one focus for tricky Physics, Chemistry, or Biology topics.",
          "No backlog of doubts so preparation momentum stays high."
        ],
        icon: Users
      },
      {
        title: "Rank Fuel Study Material",
        description: [
          "High-level curated notes and practice banks calibrated to JENPAS difficulty.",
          "Advanced problems plus challenge sets for top-rank readiness.",
          "Continuously updated content to match evolving standards."
        ],
        icon: TrendingUp
      },
      {
        title: "Supportive Hub",
        description: [
          "Mentors who operate as teachers, friends, and family.",
          "Culture of trust that reduces prep stress and boosts motivation.",
          "Open feedback loops to keep learning proactive and healthy."
        ],
        icon: Heart
      },
      {
        title: "Success Circle Mentorship",
        description: [
          "Direct interactions with Neurone toppers who cracked JENPAS.",
          "Learn their study plans, time management, and pressure handling.",
          "Proven success templates to shape your own preparation."
        ],
        icon: GraduationCap
      }
    ],
    tableData: {
      title: "JENPAS (UG) Paper I Structure",
      columns: ["Subject", "Total Questions", "Total Marks", "Category 1 (+1, -0.25)", "Category 2 (+2, No Negative)"],
      rows: [
        ["Physics", "20", "25", "15", "5"],
        ["Chemistry", "20", "25", "15", "5"],
        ["Biology", "20", "25", "15", "5"],
        ["Basic English", "20", "20", "20", "0"],
        ["Logical Reasoning", "20", "20", "20", "0"],
        ["TOTAL", "100", "115", "85", "15"]
      ]
    },
    careers: [
      { title: "B.Sc Nursing", description: "4-year program leading to Registered Nurse roles", icon: Heart },
      { title: "Physiotherapy (B.P.T.)", description: "Rehabilitation and sports therapy careers", icon: Activity },
      { title: "Medical Lab Technology (B.M.L.T.)", description: "Diagnostics in hospitals and labs", icon: FlaskConical },
      { title: "Operation Theatre Technology", description: "Surgical support roles across hospitals", icon: Zap }
    ],
    gradient: "from-emerald-500 to-teal-500",
    icon: Activity
  },
  {
    id: "anm-gnm",
    title: "ANM / GNM Nursing",
    shortDescription: "Six-subject ANM/GNM prep with variable-marking focus for top government ranks.",
    fullDescription: "The WB ANM & GNM Entrance Exam is the mandatory test for admission to the 3.5-year GNM diploma and 2-year ANM diploma across government and private institutions in West Bengal. We train you to master the six-subject pattern and variable marking so you can secure top ranks for competitive seats.",
    badge: { text: "Diploma Nursing", icon: Stethoscope },
    examInfo: [
      { label: "Mode", value: "Offline (OMR)" },
      { label: "Duration", value: "90 Minutes" },
      { label: "Questions", value: "100" },
      { label: "Max Marks", value: "115" },
      { label: "Subjects", value: "Life Science, Physical Science, English, Maths, GK, Logical Reasoning" }
    ],
    highlights: [
      {
        title: "Integrated Strategy: Six-Subject Synergy",
        description: [
          "Balanced plan across Life Science, Physical Science, Maths, English, GK, and Logical Reasoning.",
          "Prevents loss of easy marks from 10th-standard Science/Maths.",
          "Targets all 100 questions/115 marks for competitive GNM ranks."
        ],
        icon: Target
      },
      {
        title: "Life Science Dominance",
        description: [
          "Deep dive into high-weightage Life Science (Class 9 & 10 base).",
          "Mastery of Cellular Organization, Diversity of Life Forms, Ecology, and more.",
          "Designed to secure the decisive 50 marks."
        ],
        icon: BookOpen
      },
      {
        title: "Aptitude & GK Edge",
        description: [
          "Focused prep for 30 marks from English, GK, and Logical Reasoning.",
          "Drills for coding-decoding, blood relations, and rapid comprehension.",
          "Saves time for calculation-heavy Physical Science."
        ],
        icon: TrendingUp
      },
      {
        title: "Expert Guidance",
        description: [
          "Faculty specialized in WB state-level nursing entrances.",
          "Exam shortcuts tuned to 10th-standard Math and Science patterns.",
          "Optimized attempt strategy for the 90-minute paper."
        ],
        icon: Award
      },
      {
        title: "Doubt Destroyers: Category 2 Focus",
        description: [
          "Category 2 (+2, no negative) strategy to maximize the 15 high-value questions.",
          "Structured doubt channels for instant resolution.",
          "Keeps momentum high with zero backlog of doubts."
        ],
        icon: Zap
      },
      {
        title: "Rank Fuel Material",
        description: [
          "Advanced, curated notes and challenge banks calibrated to ANM/GNM level.",
          "Single reliable source for practice, updated to exam standards.",
          "Built to deliver top-rank readiness."
        ],
        icon: TrendingUp
      },
      {
        title: "Supportive Hub",
        description: [
          "Mentor-as-family culture to reduce prep stress and boost motivation.",
          "Open feedback loops for proactive learning.",
          "Mental well-being prioritized with academic rigor."
        ],
        icon: Heart
      },
      {
        title: "Success Circle Mentorship",
        description: [
          "Interact with Neurone alumni who cracked ANM/GNM with top ranks.",
          "Borrow their study plans, time management, and pressure-handling tactics.",
          "Proven success templates to shape your own prep."
        ],
        icon: GraduationCap
      }
    ],
    tableData: {
      title: "WB ANM & GNM Exam Structure (Paper I)",
      columns: ["Subject", "Total Questions", "Total Marks", "Category 1 (+1, -0.25)", "Category 2 (+2, No Negative)"],
      rows: [
        ["Life Science", "40", "50", "30", "10"],
        ["Physical Science", "20", "25", "15", "5"],
        ["Basic English", "15", "15", "15", "0"],
        ["Mathematics", "10", "10", "10", "0"],
        ["General Knowledge", "10", "10", "10", "0"],
        ["Logical Reasoning", "5", "5", "5", "0"],
        ["TOTAL", "100", "115", "85", "15"]
      ]
    },
    careers: [
      { title: "GNM (3.5 Years)", description: "Staff Nurse roles across govt and private hospitals", icon: Stethoscope },
      { title: "ANM (2 Years)", description: "Community and primary health care roles", icon: Syringe },
      { title: "Post Basic B.Sc Nursing", description: "Advancement to supervisory and teaching roles", icon: GraduationCap },
      { title: "Govt & Private Opportunities", description: "Hospitals, PHCs, NGOs, and international placements", icon: Award }
    ],
    gradient: "from-orange-500 to-amber-500",
    icon: Syringe
  }
];

export const ACHIEVERS: Achiever[] = [
  {
    name: "Pratyush Pradhan",
    exam: "Electrical Engineering",
    note: "Purulia Govt. Engineering College",
    rank: "Electrical Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-blue-500"
  },
  {
    name: "Arijit Maity",
    exam: "Computer Science Engineering",
    note: "Ghani Khan Choudhury Institute of Engineering & Technology Central Govt",
    rank: "Computer Science",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-blue-500"
  },
  {
    name: "Sunandita Bhunia",
    exam: "Electrical Engineering",
    note: "Cooch Behar Govt Engineering College",
    rank: "Electrical Engineering",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-blue-500"
  },
  {
    name: "Soumyaditta Patra",
    exam: "Pharmacy",
    note: "Jalpaiguri Govt. Engineering College",
    rank: "Pharmacy",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-orange-500"
  },
  {
    name: "Sandipta Das",
    exam: "B.Sc Nursing",
    note: "Calcutta National Medical College & Hospital",
    rank: "B.Sc Nursing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-rose-500"
  },
  {
    name: "Shriparna Panda",
    exam: "B.Sc Nursing",
    note: "NRS Medical College & Hospital",
    rank: "B.Sc Nursing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-rose-500"
  },
  {
    name: "Rajhree Bhandari",
    exam: "B.Sc Nursing",
    note: "Matangini Govt. CON. Tamluk DH",
    rank: "B.Sc Nursing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-rose-500"
  },
  {
    name: "Sneha Barman",
    exam: "B.Sc Nursing",
    note: "Diamond Harbour Medical College & Hospital",
    rank: "B.Sc Nursing",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-rose-500"
  },
  {
    name: "Munmun Das",
    exam: "ANM",
    note: "Kakdwip S.D Hospital",
    rank: "ANM",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-pink-500"
  },
  {
    name: "Rittika Maity",
    exam: "GNM",
    note: "Jalpaiguri Govt. Medical College & Hospital",
    rank: "GNM",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-pink-500"
  },
  {
    name: "Ananya Das",
    exam: "GNM",
    note: "Central Govt. Hospital Kalla",
    rank: "GNM",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-pink-500"
  },
  {
    name: "Rimi Das",
    exam: "GNM",
    note: "M.R. Bangur Hospital",
    rank: "GNM",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-pink-500"
  },
  {
    name: "Deep Das",
    exam: "B.M.L.T",
    note: "Kazi Nazrul University (Govt.)",
    rank: "B.M.L.T",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-emerald-500"
  },
  {
    name: "Tanushree Maity",
    exam: "D.M.L.T",
    note: "NRS Medical College & Hospital",
    rank: "D.M.L.T",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-emerald-500"
  },
  {
    name: "Ankit Khatua",
    exam: "D.M.L.T",
    note: "NRS Medical College & Hospital",
    rank: "D.M.L.T",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-emerald-500"
  },
  {
    name: "Priyul Mondal",
    exam: "BCA",
    note: "MAKAUT",
    rank: "BCA",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "bg-indigo-500"
  }
];
