// ============================================================
// PORTFOLIO DATA — UPDATE YOUR PERSONAL INFORMATION HERE
// ============================================================

export const personal = {
  name: "Deepan Raj N",
  title: "Computer Science & Business Systems Student",
  tagline: "Motivated and detail-oriented Computer Science and Business Systems student passionate about software development, web technologies, and problem solving.",
  email: "deepanrajn0112@gmail.com",
  phone: "+91 8754029105",
  location: "Dindigul, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/deepan01",
  github: "https://github.com/Deepan-01",
  resumePath: "/resume.pdf", // ← PLACE YOUR resume.pdf IN THE /public FOLDER
  degree: "B.Tech – Computer Science and Business Systems",
  college: "V.S.B Engineering College, Karur",
  graduation: "2028",
  percentage: "78%",
  careerGoal: "Software Developer",
};

export const skills = {
  languages: [
    { name: "C", icon: "code" },
    { name: "Python", icon: "terminal" },
    { name: "Java", icon: "coffee" },
  ],
  web: [
    { name: "HTML5", icon: "globe" },
    { name: "CSS3", icon: "palette" },
    { name: "JavaScript", icon: "zap" },
    { name: "React.js", icon: "layers" },
  ],
  tools: [
    { name: "VS Code", icon: "code-2" },
    { name: "Eclipse", icon: "circle-dot" },
  ],
  soft: [
    { name: "Communication", icon: "message-square" },
    { name: "Teamwork", icon: "users" },
    { name: "Problem Solving", icon: "lightbulb" },
    { name: "Decision Making", icon: "check-circle" },
    { name: "Critical Thinking", icon: "brain" },
  ],
};

export const experience = [
  {
    company: "Algorian Software Solutions",
    role: "Developer Intern",
    duration: "1 Month",
    type: "Internship",
    responsibilities: [
      "Assisted in developing and testing software applications.",
      "Collaborated with development teams to support project requirements.",
      "Performed software testing and debugging activities.",
      "Completed assigned tasks within project deadlines.",
      "Gained hands-on experience in software development methodologies and workflows.",
    ],
  },
];

export const projects = [
  {
    title: "AI Powered Student Assistance Chatbot",
    description: "**AI-Powered Student Assistance Chatbot** is a full-stack web application built with React, Node.js, Express, and MongoDB. It helps students access FAQs, notices, department details, academic information, scholarships, and placement updates through an intelligent chatbot, while providing an admin dashboard for content management.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    features: [
      "Intelligent Chatbot",
      "Admin Dashboard",
      "FAQ & Notices Access"
    ],
    github: "https://github.com/Deepan-01/AI-Powered-Student-Assistance-Chatbot",
    demo: "",
  },
  {
    title: "Social Media Platform",
    description: "Social Media Platform is a web-based application designed to connect users and provide a space for sharing content, interacting with others, and building online communities. Users can create accounts, manage profiles, create and share posts, upload images, like and comment on posts, and follow other users.",
    technologies: ["JavaScript"],
    features: [
      "User Authentication",
      "Post Creation & Sharing",
      "Like & Comment Functionality"
    ],
    github: "https://github.com/Deepan-01/codealpha-_-Social-Media-Platform",
    demo: "",
  },
  {
    title: "ERP Student Management System",
    description: "The ERP Student Management System is a web-based application developed to simplify and automate the management of student records in educational institutions. The system enables administrators to efficiently perform Create, Read, Update, and Delete (CRUD) operations on student information while maintaining data accuracy and security.",
    technologies: ["JavaScript"],
    features: [
      "Student Record Management",
      "CRUD Operations",
      "Data Security"
    ],
    github: "https://github.com/Deepan-01/ERP_-Student-Management-System",
    demo: "https://erp-student-management-system-gilt.vercel.app",
  },
  {
    title: "IT Help Desk",
    description: "An IT Help Desk Management System designed to streamline technical support requests, track user issues, assign tickets to support staff, and monitor ticket status. The system helps organizations manage IT incidents efficiently, improve response time, and provide better support to users.",
    technologies: ["JavaScript"],
    features: [
      "Ticket Tracking & Assignment",
      "Issue Management",
      "Status Monitoring"
    ],
    github: "https://github.com/Deepan-01/IT_HELP_DESK",
    demo: "https://it-help-desk-gules.vercel.app",
  },
  {
    title: "Movie Ticket Request",
    description: "The Movie Ticket Request case manages the complete movie ticket booking process for customers. It allows customers to submit a booking request by providing details such as Movie Name, Show Date, Show Time, Number of Tickets, Theatre, and Customer Information.",
    technologies: ["Various"],
    features: [
      "Booking Requests",
      "Ticket Management",
      "Customer Information Handling"
    ],
    github: "https://github.com/Deepan-01/Movie_Ticket_Request",
    demo: "",
  },
  {
    title: "Project Tool",
    description: "Project Tool is a project management application designed to help teams plan, organize, monitor, and manage their projects efficiently. It provides a centralized platform where users can create projects, assign tasks, set deadlines, track progress, and manage project-related activities.",
    technologies: ["JavaScript"],
    features: [
      "Task Assignment",
      "Progress Tracking",
      "Deadline Management"
    ],
    github: "https://github.com/Deepan-01/project_tool",
    demo: "",
  },
  {
    title: "Weather App",
    description: "A simple and user-friendly weather app that provides real-time weather updates, temperature, humidity, wind speed, and forecasts. Users can search for different locations and quickly view current conditions and upcoming weather predictions.",
    technologies: ["Various"],
    features: [
      "Real-time Updates",
      "Location Search",
      "Weather Forecast"
    ],
    github: "https://github.com/Deepan-01/Weather_app",
    demo: "",
  }
];

export const education = [
  {
    level: "B.Tech",
    branch: "Computer Science and Business Systems",
    institution: "V.S.B Engineering College, Karur",
    year: "2024 – 2028",
    score: "78%",
    type: "degree",
  },
  {
    level: "HSC (12th)",
    branch: "Higher Secondary",
    institution: "SKV Matric Higher Secondary School, Namakkal",
    year: "2024",
    score: null,
    type: "school",
  },
  {
    level: "SSLC (10th)",
    branch: "Secondary",
    institution: "SMB Matric Higher Secondary School, Dindigul",
    year: "2022",
    score: "66%",
    type: "school",
  },
];

export const certifications = [
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    viewUrl: "https://ADD-CERTIFICATE-URL", // ← REPLACE WITH YOUR CERTIFICATE LINK
  },
  {
    title: "Excel Certification",
    issuer: "Infosys Springboard",
    viewUrl: "https://ADD-CERTIFICATE-URL", // ← REPLACE WITH YOUR CERTIFICATE LINK
  },
  {
    title: "Business Analysis & Process Management",
    issuer: "Coursera",
    viewUrl: "https://ADD-CERTIFICATE-URL", // ← REPLACE WITH YOUR CERTIFICATE LINK
  },
  {
    title: "Business Fundamentals for Entrepreneurs",
    issuer: "NPTEL",
    viewUrl: "https://ADD-CERTIFICATE-URL", // ← REPLACE WITH YOUR CERTIFICATE LINK
  },
];

export const achievements = [
  {
    icon: "award",
    text: "Successfully completed Python Foundation Certification from Infosys Springboard.",
  },
  {
    icon: "briefcase",
    text: "Completed an industry-oriented internship at Algorian Software Solutions.",
  },
  {
    icon: "code-2",
    text: "Developed a functional Employee Management System using modern web technologies.",
  },
  {
    icon: "trending-up",
    text: "Continuously enhancing technical skills through certifications and project-based learning.",
  },
];

export const strengths = [
  { icon: "zap", label: "Quick Learner" },
  { icon: "brain", label: "Strong Analytical Thinking" },
  { icon: "refresh-cw", label: "Adaptability" },
  { icon: "users", label: "Team Collaboration" },
  { icon: "clock", label: "Time Management" },
];
