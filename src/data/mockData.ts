export const mockColleges = [
  {
    id: 1,
    name: "Government Arts College",
    location: "Mumbai, Maharashtra",
    courses: ["B.A. English", "B.A. History", "B.A. Psychology"],
    cutoff: "85%",
    fees: "₹15,000/year",
    facilities: ["Library", "Hostel", "Computer Lab"],
    distance: "2.5 km"
  },
  {
    id: 2,
    name: "State Engineering College",
    location: "Pune, Maharashtra",
    courses: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Civil"],
    cutoff: "92%",
    fees: "₹45,000/year",
    facilities: ["Labs", "Hostel", "Sports Complex", "Wifi"],
    distance: "5.1 km"
  },
  {
    id: 3,
    name: "Government Commerce College",
    location: "Delhi",
    courses: ["B.Com", "BBA", "B.Com (Hons)"],
    cutoff: "88%",
    fees: "₹18,000/year",
    facilities: ["Library", "Computer Lab", "Canteen"],
    distance: "3.2 km"
  }
];

export const mockScholarships = [
  {
    id: 1,
    name: "Merit Scholarship for Excellence",
    amount: "₹50,000",
    eligibility: "Minimum 90% in Class 12",
    deadline: "2024-05-15",
    provider: "State Government",
    category: "Merit-based",
    courses: ["All UG Courses"],
    status: "Active"
  },
  {
    id: 2,
    name: "SC/ST Education Support",
    amount: "₹75,000",
    eligibility: "SC/ST category with 75% marks",
    deadline: "2024-06-30",
    provider: "Central Government",
    category: "Need-based",
    courses: ["Engineering", "Medical", "Arts"],
    status: "Active"
  },
  {
    id: 3,
    name: "Girls Education Scholarship",
    amount: "₹40,000",
    eligibility: "Female students with 80% marks",
    deadline: "2024-04-20",
    provider: "State Government",
    category: "Gender-based",
    courses: ["Science", "Commerce", "Arts"],
    status: "Active"
  },
  {
    id: 4,
    name: "Rural Student Support",
    amount: "₹35,000",
    eligibility: "Rural area students with 70% marks",
    deadline: "2024-07-10",
    provider: "NGO Foundation",
    category: "Location-based",
    courses: ["All courses"],
    status: "Active"
  }
];

export const mockTimeline = [
  {
    id: 1,
    title: "College Application Deadline",
    date: "2024-05-30",
    type: "application",
    description: "Last date for submitting college applications"
  },
  {
    id: 2,
    title: "Scholarship Applications Open",
    date: "2024-04-01",
    type: "scholarship",
    description: "Merit scholarship applications begin"
  },
  {
    id: 3,
    title: "Entrance Exam Registration",
    date: "2024-03-15",
    type: "exam",
    description: "Registration for state entrance exams"
  }
];

export const mockCourses = [
  {
    id: "science",
    name: "Science Stream",
    description: "Physics, Chemistry, Mathematics/Biology",
    icon: "🔬",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    careerPaths: [
      { name: "Engineering", description: "BTech, BE in various specializations", duration: "4 years", avgSalary: "₹6-12 LPA" },
      { name: "Medical", description: "MBBS, BDS, BAMS, BHMS", duration: "5.5 years", avgSalary: "₹8-20 LPA" },
      { name: "Research", description: "BSc, MSc, PhD in various fields", duration: "3-8 years", avgSalary: "₹4-15 LPA" },
      { name: "Defence", description: "NDA, CDS, AFCAT", duration: "4 years", avgSalary: "₹5-10 LPA" }
    ],
    topColleges: ["IIT Delhi", "AIIMS Delhi", "IISc Bangalore"],
    governmentExams: ["JEE Main", "JEE Advanced", "NEET", "GATE"],
    roadmap: [
      { phase: "Class 11-12", tasks: ["Focus on PCM/PCB", "Prepare for entrance exams", "Maintain good grades"] },
      { phase: "After Class 12", tasks: ["Take JEE/NEET", "Apply to colleges", "Choose specialization"] },
      { phase: "Graduation", tasks: ["Complete degree", "Internships", "Build projects/research"] },
      { phase: "Post Graduation", tasks: ["Higher studies or job", "Specialization", "Career advancement"] }
    ]
  },
  {
    id: "commerce",
    name: "Commerce Stream",
    description: "Business, Economics, Accounting",
    icon: "💼",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics"],
    careerPaths: [
      { name: "Chartered Accountancy", description: "CA qualification", duration: "3-5 years", avgSalary: "₹8-25 LPA" },
      { name: "Banking & Finance", description: "Banking sector jobs", duration: "3 years", avgSalary: "₹4-12 LPA" },
      { name: "Business Management", description: "BBA, MBA", duration: "3-5 years", avgSalary: "₹6-20 LPA" },
      { name: "Civil Services", description: "IAS, IPS, IFS", duration: "Varies", avgSalary: "₹7-15 LPA" }
    ],
    topColleges: ["SRCC Delhi", "LSR Delhi", "St. Xavier's Mumbai"],
    governmentExams: ["CA Foundation", "CS Executive", "UPSC CSE", "Bank PO"],
    roadmap: [
      { phase: "Class 11-12", tasks: ["Focus on Commerce subjects", "Learn basic accounting", "Prepare for entrance exams"] },
      { phase: "After Class 12", tasks: ["Choose B.Com/BBA/CA", "Apply to colleges", "Start professional courses"] },
      { phase: "Graduation", tasks: ["Complete degree", "Internships", "Professional certifications"] },
      { phase: "Post Graduation", tasks: ["MBA/CA/CS completion", "Job placement", "Career growth"] }
    ]
  },
  {
    id: "arts",
    name: "Arts/Humanities Stream",
    description: "Literature, History, Political Science",
    icon: "📚",
    subjects: ["English", "History", "Political Science", "Psychology", "Sociology"],
    careerPaths: [
      { name: "Civil Services", description: "IAS, IPS, IFS", duration: "Varies", avgSalary: "₹7-15 LPA" },
      { name: "Teaching", description: "Teacher, Professor", duration: "3-8 years", avgSalary: "₹3-12 LPA" },
      { name: "Journalism", description: "Media & Communication", duration: "3 years", avgSalary: "₹4-10 LPA" },
      { name: "Law", description: "LLB, LLM", duration: "5 years", avgSalary: "₹5-20 LPA" }
    ],
    topColleges: ["JNU Delhi", "BHU Varanasi", "Jadavpur University"],
    governmentExams: ["UPSC CSE", "UGC NET", "CLAT", "State PSC"],
    roadmap: [
      { phase: "Class 11-12", tasks: ["Focus on Arts subjects", "Develop writing skills", "Prepare for entrance exams"] },
      { phase: "After Class 12", tasks: ["Choose BA/Law/Journalism", "Apply to colleges", "Develop critical thinking"] },
      { phase: "Graduation", tasks: ["Complete degree", "Internships", "Skill development"] },
      { phase: "Post Graduation", tasks: ["MA/Professional course", "Job search", "Competitive exams"] }
    ]
  }
];

export const mockNotifications = [
  {
    id: 1,
    title: "Application Deadline Reminder",
    message: "Merit scholarship applications close in 3 days. Don't miss out!",
    type: "deadline",
    date: "2024-04-15",
    isRead: false
  },
  {
    id: 2,
    title: "New College Added",
    message: "Government Engineering College, Chennai has been added to our database.",
    type: "update",
    date: "2024-04-14",
    isRead: false
  },
  {
    id: 3,
    title: "Exam Registration Open",
    message: "JEE Main 2024 registration is now open. Register before the deadline.",
    type: "exam",
    date: "2024-04-13",
    isRead: true
  }
];

export const mockUserProfile = {
  id: "user-123",
  name: "Student Name",
  email: "student@example.com",
  phone: "+91 9876543210",
  class: "12th Grade",
  stream: "Science",
  interests: ["Engineering", "Research", "Technology"],
  academicGoals: ["Get into IIT", "Score 95%+ in boards"],
  location: "Mumbai, Maharashtra",
  preferredLocation: "Mumbai",
  joinedDate: "2024-01-15"
};