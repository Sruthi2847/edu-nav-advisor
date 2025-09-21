export const mockColleges = [
  // Government Colleges
  {
    id: 1,
    name: "Government Arts College",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    type: "government",
    courses: ["B.A. English", "B.A. History", "B.A. Psychology"],
    cutoff: "85%",
    fees: "₹15,000/year",
    annualFees: 15000,
    facilities: ["Library", "Hostel", "Computer Lab"],
    distance: "2.5 km",
    avgPlacement: 350000,
    rating: 4.2
  },
  {
    id: 2,
    name: "State Engineering College",
    location: "Pune, Maharashtra", 
    state: "Maharashtra",
    type: "government",
    courses: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Civil"],
    cutoff: "92%",
    fees: "₹45,000/year",
    annualFees: 45000,
    facilities: ["Labs", "Hostel", "Sports Complex", "Wifi"],
    distance: "5.1 km",
    avgPlacement: 600000,
    rating: 4.5
  },
  {
    id: 3,
    name: "Government Commerce College",
    location: "Delhi",
    state: "Delhi",
    type: "government",
    courses: ["B.Com", "BBA", "B.Com (Hons)"],
    cutoff: "88%",
    fees: "₹18,000/year",
    annualFees: 18000,
    facilities: ["Library", "Computer Lab", "Canteen"],
    distance: "3.2 km",
    avgPlacement: 400000,
    rating: 4.1
  },
  {
    id: 4,
    name: "Government Medical College",
    location: "Bangalore, Karnataka",
    state: "Karnataka",
    type: "government",
    courses: ["MBBS", "BDS", "BAMS"],
    cutoff: "95%",
    fees: "₹35,000/year",
    annualFees: 35000,
    facilities: ["Hospital", "Labs", "Library", "Hostel"],
    distance: "4.2 km",
    avgPlacement: 800000,
    rating: 4.7
  },
  {
    id: 5,
    name: "Government Law College",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    type: "government",
    courses: ["LLB", "BA LLB", "LLM"],
    cutoff: "87%",
    fees: "₹25,000/year",
    annualFees: 25000,
    facilities: ["Library", "Moot Court", "Computer Lab"],
    distance: "3.8 km",
    avgPlacement: 550000,
    rating: 4.3
  },
  {
    id: 6,
    name: "State Polytechnic College",
    location: "Kolkata, West Bengal",
    state: "West Bengal", 
    type: "government",
    courses: ["Diploma CSE", "Diploma Mechanical", "Diploma Civil"],
    cutoff: "80%",
    fees: "₹12,000/year",
    annualFees: 12000,
    facilities: ["Workshops", "Labs", "Library"],
    distance: "2.1 km",
    avgPlacement: 280000,
    rating: 3.9
  },
  {
    id: 7,
    name: "Government Teacher Training College",
    location: "Lucknow, Uttar Pradesh",
    state: "Uttar Pradesh",
    type: "government",
    courses: ["B.Ed", "M.Ed", "D.El.Ed"],
    cutoff: "75%",
    fees: "₹20,000/year",
    annualFees: 20000,
    facilities: ["Library", "Smart Classrooms", "Lab"],
    distance: "6.5 km",
    avgPlacement: 320000,
    rating: 4.0
  },
  // Private Colleges
  {
    id: 8,
    name: "Elite Engineering Institute",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    type: "private",
    courses: ["B.Tech CSE", "B.Tech ECE", "B.Tech Mechanical"],
    cutoff: "85%",
    fees: "₹2,50,000/year",
    annualFees: 250000,
    facilities: ["Modern Labs", "Industry Tie-ups", "Placement Cell"],
    distance: "3.0 km",
    avgPlacement: 850000,
    rating: 4.4
  },
  {
    id: 9,
    name: "Premium Business School",
    location: "Delhi",
    state: "Delhi",
    type: "private",
    courses: ["BBA", "MBA", "PGDM"],
    cutoff: "82%",
    fees: "₹3,00,000/year",
    annualFees: 300000,
    facilities: ["Corporate Mentorship", "International Exchange"],
    distance: "4.5 km",
    avgPlacement: 1200000,
    rating: 4.6
  },
  {
    id: 10,
    name: "Modern Medical College",
    location: "Bangalore, Karnataka",
    state: "Karnataka",
    type: "private",
    courses: ["MBBS", "BDS", "Nursing"],
    cutoff: "93%",
    fees: "₹8,00,000/year",
    annualFees: 800000,
    facilities: ["Multi-specialty Hospital", "Research Labs"],
    distance: "5.2 km",
    avgPlacement: 1000000,
    rating: 4.3
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
  },
  {
    id: 5,
    name: "National Talent Search Scholarship",
    amount: "₹1,00,000",
    eligibility: "Top 1% students in NTSE exam",
    deadline: "2024-08-15",
    provider: "NCERT",
    category: "Merit-based",
    courses: ["All courses"],
    status: "Active"
  },
  {
    id: 6,
    name: "Minority Community Scholarship",
    amount: "₹60,000",
    eligibility: "Minority community students with 80% marks",
    deadline: "2024-06-20",
    provider: "Ministry of Minority Affairs",
    category: "Community-based",
    courses: ["Engineering", "Medical", "Professional"],
    status: "Active"
  },
  {
    id: 7,
    name: "Single Girl Child Scholarship",
    amount: "₹45,000",
    eligibility: "Single girl child with 85% marks",
    deadline: "2024-05-30",
    provider: "UGC",
    category: "Gender-based",
    courses: ["All UG/PG Courses"],
    status: "Active"
  },
  {
    id: 8,
    name: "Defense Personnel Ward Scholarship",
    amount: "₹80,000",
    eligibility: "Children of defense personnel",
    deadline: "2024-07-25",
    provider: "Ministry of Defense",
    category: "Special Category",
    courses: ["All courses"],
    status: "Active"
  },
  {
    id: 9,
    name: "Economically Weaker Section Scholarship",
    amount: "₹55,000",
    eligibility: "Family income below ₹8 LPA",
    deadline: "2024-09-10",
    provider: "State Government",
    category: "Need-based",
    courses: ["All courses"],
    status: "Active"
  },
  {
    id: 10,
    name: "Innovation & Research Scholarship",
    amount: "₹1,50,000",
    eligibility: "Students with innovative project proposals",
    deadline: "2024-04-30",
    provider: "SERB",
    category: "Research-based",
    courses: ["Science & Technology"],
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

export const mockAlumni = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=400&h=400&fit=crop&crop=face",
    college: "Government Medical College, Bangalore",
    currentRole: "Senior Cardiologist at AIIMS Delhi",
    graduationYear: "2018",
    story: "From a small town in Karnataka, I got into Government Medical College through hard work and dedication. The affordable education and excellent faculty helped me become the doctor I am today. Now I serve patients at one of India's premier medical institutions.",
    achievement: "Performed over 500 successful heart surgeries",
    stream: "Medical"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    college: "State Engineering College, Pune",
    currentRole: "Senior Software Engineer at Google",
    graduationYear: "2019",
    story: "Coming from a farmer's family, government college was my only hope for quality engineering education. The low fees allowed me to focus on studies instead of worrying about finances. Today, I work on cutting-edge AI projects at Google.",
    achievement: "Led development of machine learning models used by millions",
    stream: "Engineering"
  },
  {
    id: 3,
    name: "Anita Patel",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    college: "Government Law College, Chennai",
    currentRole: "High Court Advocate & Legal Activist",
    graduationYear: "2020",
    story: "Government Law College gave me the foundation to fight for justice. The diverse student community and experienced faculty taught me not just law, but also social responsibility. I now represent underprivileged clients and fight for their rights.",
    achievement: "Won landmark case for women's rights in workplace",
    stream: "Law"
  },
  {
    id: 4,
    name: "Mohammed Ali",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    college: "Government Commerce College, Delhi",
    currentRole: "IAS Officer & District Collector",
    graduationYear: "2017",
    story: "My journey from a government commerce college to becoming an IAS officer shows that determination matters more than expensive education. The analytical skills I learned during my B.Com helped me crack UPSC. I'm now serving my community as a District Collector.",
    achievement: "Implemented digital governance in rural areas",
    stream: "Civil Services"
  },
  {
    id: 5,
    name: "Sunita Reddy",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    college: "Government Teacher Training College, Lucknow",
    currentRole: "Principal at Kendriya Vidyalaya",
    graduationYear: "2015",
    story: "Teaching was my passion, and government teacher training college helped me turn that passion into a successful career. The practical training and affordable education enabled me to become an educator who impacts hundreds of young minds every year.",
    achievement: "Improved school performance by 40% through innovative teaching methods",
    stream: "Education"
  },
  {
    id: 6,
    name: "Vikram Singh",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    college: "State Polytechnic College, Kolkata",
    currentRole: "Technical Lead at Tata Consultancy Services",
    graduationYear: "2021",
    story: "My diploma from a government polytechnic was the stepping stone to my IT career. The hands-on technical training and industry exposure helped me land a job at TCS. I've since been promoted to Technical Lead and manage a team of 15 engineers.",
    achievement: "Developed automation solutions saving company ₹2 crores annually",
    stream: "Technical"
  }
];