"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  GraduationCap,
  Award,
  Trophy,
  BookOpen,
  Code,
  Atom,
  Lightbulb,
  Palette,
  Mic,
  Star,
  CheckCircle2,
  Calendar,
  MapPin,
  Mail,
  Send,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Compass,
  Flame,
  Heart,
  Gamepad2,
  RefreshCw,
  Library,
  BookMarked,
  Layers,
  Cpu,
  Smile,
  ShieldCheck,
  Zap,
} from "lucide-react";

/* --- DATA SETS --- */

const QUICK_STATS = [
  { label: "Current Grade", value: "Class 9", sub: "Loyola School", icon: GraduationCap, color: "text-indigo-400" },
  { label: "Academic Standing", value: "95%+", sub: "Consistent Topper", icon: Star, color: "text-amber-400" },
  { label: "Awards & Honors", value: "8+", sub: "Olympiads & Debates", icon: Trophy, color: "text-emerald-400" },
  { label: "Projects & Papers", value: "12+", sub: "STEM, Code & Arts", icon: Lightbulb, color: "text-cyan-400" },
];

const ACADEMIC_SUBJECTS = [
  {
    name: "Mathematics & Logic",
    tag: "Problem Solving",
    score: 97,
    topics: ["Algebraic Expressions", "Euclidean Geometry", "Coordinate Systems", "Number Theory", "Math Puzzles"],
    desc: "Passionate about untangling complex algebraic equations, finding elegant geometric proofs, and solving logic puzzles.",
    icon: Lightbulb,
    accent: "from-blue-500 to-indigo-600",
  },
  {
    name: "Physics & Chemistry",
    tag: "Natural Sciences",
    score: 95,
    topics: ["Laws of Motion", "Work & Energy", "Gravitation & Optics", "Atomic Structure", "Chemical Reactions"],
    desc: "Fascinated by how physical laws govern the universe, from orbital mechanics to molecular bonding in chemistry labs.",
    icon: Atom,
    accent: "from-cyan-500 to-teal-600",
  },
  {
    name: "Computer Applications & Coding",
    tag: "Technology & IT",
    score: 98,
    topics: ["Python Fundamentals", "HTML5 & Modern CSS", "Algorithmic Thinking", "Data Structures Basics", "Web Design"],
    desc: "Building interactive web projects, exploring Python automation, and learning how computers power modern innovations.",
    icon: Code,
    accent: "from-purple-500 to-indigo-600",
  },
  {
    name: "English Literature & Oratory",
    tag: "Humanities & Expression",
    score: 94,
    topics: ["Shakespearean Plays", "Poetry Analysis", "Creative Writing", "Debate & Oratory", "Literary Essays"],
    desc: "Devoted to classical literature, writing imaginative sci-fi prose, and articulating persuasive arguments in school debates.",
    icon: BookOpen,
    accent: "from-pink-500 to-rose-600",
  },
  {
    name: "Social Sciences & Global Affairs",
    tag: "History & Geography",
    score: 92,
    topics: ["Indian Constitution", "World History & Civilizations", "Physical Geography", "Environmental Studies"],
    desc: "Exploring how historical movements shaped modern democratic institutions and global environmental initiatives.",
    icon: Compass,
    accent: "from-amber-500 to-orange-600",
  },
];

const SKILLS_LIST = [
  { name: "Python Programming", category: "stem", level: "Intermediate", icon: Code, desc: "Data types, loops, math simulations, mini games." },
  { name: "Web Development (HTML/CSS)", category: "stem", level: "Intermediate", icon: Layers, desc: "Building responsive layouts, modern portfolio pages." },
  { name: "Science Model Prototyping", category: "stem", level: "Advanced", icon: Atom, desc: "Designing working science fair models & eco-simulations." },
  { name: "Public Speaking & Debate", category: "leadership", level: "Advanced", icon: Mic, desc: "Inter-school debates, extempore speeches, MUN formats." },
  { name: "Creative Writing & Storytelling", category: "creative", level: "Advanced", icon: BookMarked, desc: "Short stories, school magazine essays, poetry." },
  { name: "Digital Art & Presentation Design", category: "creative", level: "Intermediate", icon: Palette, desc: "Slide decks, infographics, Canva, Figma basics." },
  { name: "Team Leadership & Event Coordination", category: "leadership", level: "Advanced", icon: ShieldCheck, desc: "Class representative, organizing club events." },
  { name: "Badminton & Track Sports", category: "sports", level: "Active", icon: Flame, desc: "School tournaments, fitness, inter-house matches." },
  { name: "Book Curation & Critical Reading", category: "creative", level: "Passionate", icon: Library, desc: "Speed reading, synthesizing non-fiction & sci-fi." },
];

const FEATURED_PROJECTS = [
  {
    title: "Eco-Smart City & Solar Grid Model",
    category: "stem",
    badge: "Science Fair Winner",
    date: "Annual Exhibition",
    image: "/assets/science_fair.jpg",
    summary: "A working interactive 3D model showcasing smart renewable solar energy distribution, automated rainwater harvesting, and IoT waste sorting.",
    keyPoints: [
      "Designed solar-tracking panel mechanism",
      "Integrated micro-sensors for smart LED streetlights",
      "Awarded 1st Prize in Loyola Science & Innovation Fair",
    ],
    tech: ["Physics", "Renewable Tech", "Robotics", "Circuitry"],
  },
  {
    title: "Solar System & Gravity Simulator",
    category: "stem",
    badge: "STEM & Astronomy",
    date: "Science Club",
    image: "/assets/gallery/photo1.jpg",
    summary: "An interactive computational exploration of planetary orbits, gravitational pull, Kepler's laws, and astronomical scale comparisons.",
    keyPoints: [
      "Visualized elliptical orbits with proportional velocities",
      "Calculated escape velocities for different celestial bodies",
      "Presented to 200+ junior students during Astronomy Week",
    ],
    tech: ["Astrophysics", "Python", "Mathematics", "Simulation"],
  },
  {
    title: "MathMagicians: Quiz & Puzzle App",
    category: "coding",
    badge: "Coding Project",
    date: "Self-Initiated",
    image: "/assets/gallery/photo2.jpg",
    summary: "A web-based mathematical puzzle game designed for middle schoolers to practice algebra, prime factorization, and mental arithmetic quickly.",
    keyPoints: [
      "Timed arithmetic rounds with instant feedback",
      "Dynamic difficulty multiplier based on accuracy",
      "Used by classmates for exam revision and fun math drills",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Logic"],
  },
  {
    title: "The Voice of Nature: Eco-Literary Anthology",
    category: "creative",
    badge: "School Magazine",
    date: "Literary Society",
    image: "/assets/gallery/photo3.jpg",
    summary: "A collection of 6 evocative short stories and research essays exploring climate change, biodiversity loss, and indigenous conservation wisdom.",
    keyPoints: [
      "Featured in the Loyola School Annual Chronicle",
      "Researched local flora and fauna of Eastern India",
      "Applauded by the Department of English and Environmental Club",
    ],
    tech: ["Creative Writing", "Research", "Environmental Studies"],
  },
  {
    title: "Loyola Clean Campus Smart Waste Campaign",
    category: "leadership",
    badge: "Club Initiative",
    date: "Eco Club",
    image: "/assets/gallery/photo4.jpg",
    summary: "Spearheaded a school-wide awareness drive on waste segregation at source, setting up color-coded bins and peer education workshops.",
    keyPoints: [
      "Mobilized 150+ students across classes 7-9",
      "Reduced single-use plastic waste in school cafeteria by 40%",
      "Received special commendation from School Principal",
    ],
    tech: ["Leadership", "Advocacy", "Sustainability", "Workshops"],
  },
  {
    title: "AI & The Classroom of 2030: Debate Monograph",
    category: "creative",
    badge: "Inter-School Debate",
    date: "Debating Society",
    image: "/assets/gallery/photo5.jpg",
    summary: "A structured argumentation paper and debate presentation on ethical artificial intelligence, personalized learning, and student data privacy.",
    keyPoints: [
      "Argued the affirmative stance at Regional Inter-School Youth Forum",
      "Balanced technological potential with human pedagogical warmth",
      "Secured 2nd Place overall speaker medal",
    ],
    tech: ["Public Speaking", "Ethics", "AI Policy", "Debate"],
  },
];

const HONORS_LIST = [
  {
    title: "Inter-School Science Olympiad — Gold Medal",
    org: "Science Olympiad Foundation / Regional",
    year: "2025 - 2026",
    desc: "Achieved top 1% percentile across participating schools in Physics, Chemistry & Applied Biology.",
    badge: "Gold Medal",
    icon: Trophy,
    highlight: true,
  },
  {
    title: "Loyola Annual Debate Championship — 1st Runner Up",
    org: "Loyola School Debating Society",
    year: "2025",
    desc: "Represented the house on topics covering global environmental treaties and digital education ethics.",
    badge: "1st Runner Up",
    icon: Award,
    highlight: false,
  },
  {
    title: "National Cyber Olympiad (NCO) Merit Certificate",
    org: "National IT Board",
    year: "2025",
    desc: "Awarded Certificate of Distinction for exceptional score in Computational Thinking & Logic.",
    badge: "Distinction",
    icon: Zap,
    highlight: false,
  },
  {
    title: "Best Science Fair Innovation Trophy",
    org: "Loyola Annual STEM Exhibition",
    year: "2024",
    desc: "Recognized for the working prototype of the Renewable Solar Smart City Model.",
    badge: "Best Project",
    icon: Star,
    highlight: true,
  },
  {
    title: "Inter-House Creative Writing Laureate",
    org: "Loyola English Literary Association",
    year: "2024",
    desc: "First prize for the speculative fiction story 'Voices from the Green Canopy'.",
    badge: "1st Prize",
    icon: BookMarked,
    highlight: false,
  },
  {
    title: "Exemplary Academic Merit & Conduct Commendation",
    org: "Loyola School Administration",
    year: "2023 - 2025",
    desc: "Maintained continuous high honors in academic reports with active participation in co-curriculars.",
    badge: "Honor Roll",
    icon: GraduationCap,
    highlight: false,
  },
];

const CLUBS_DATA = [
  {
    name: "Loyola Science & Astronomy Club",
    role: "Active Member & Lab Presenter",
    icon: Atom,
    color: "from-blue-600 to-indigo-800",
    desc: "Participating in weekly science experiments, telescope stargazing nights, and science exhibition demonstrations.",
  },
  {
    name: "IT & Coding Society",
    role: "Junior Web & Python Enthusiast",
    icon: Code,
    color: "from-purple-600 to-pink-800",
    desc: "Learning programming fundamentals, building algorithms, and participating in intra-school code hack challenges.",
  },
  {
    name: "Loyola Debating & Literary Society",
    role: "House Debate Team Member",
    icon: Mic,
    color: "from-amber-600 to-rose-800",
    desc: "Drafting parliamentary debate cases, practicing extempore speaking, and contributing book reviews to the newsletter.",
  },
  {
    name: "Eco & Green Warriors Club",
    role: "Student Coordinator",
    icon: Heart,
    color: "from-emerald-600 to-teal-800",
    desc: "Leading campus composting projects, sapling plantation drives, and cleanliness and waste segregation workshops.",
  },
];

const QUIZ_QUESTIONS = [
  {
    question: "Which celestial body is known as the 'Red Planet' due to iron oxide on its surface?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 1,
    fact: "Mars' distinctive red color is caused by rust (iron oxide) covering its dusty soil!",
  },
  {
    question: "In physics, what is the unit of Force in the International System of Units (SI)?",
    options: ["Joule", "Pascal", "Newton", "Watt"],
    answer: 2,
    fact: "One Newton is the force needed to accelerate 1 kg of mass at 1 m/s²!",
  },
  {
    question: "What does the 'HTML' abbreviation stand for in web development?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink Transfer Mode Language",
      "Home Tool Multi Language",
    ],
    answer: 0,
    fact: "HTML provides the skeleton and structural backbone of every website on the Internet!",
  },
  {
    question: "Loyola School's classic Latin motto 'Semper Sursum' translates to what in English?",
    options: ["Always Forwards & Upwards", "Knowledge is Power", "Service with Love", "Truth will Prevail"],
    answer: 0,
    fact: "'Semper Sursum' means 'Always Aim High / Always Upwards', urging students to strive for excellence!",
  },
];

const INSPIRATIONAL_QUOTES = [
  { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein" },
  { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { text: "What you do makes a difference, and you have to decide what kind of difference you want to make.", author: "Jane Goodall" },
  { text: "Excellence is not a singular act, but a habit. We are what we repeatedly do.", author: "Aristotle" },
];

const READING_LIST = [
  { title: "Brief Answers to the Big Questions", author: "Stephen Hawking", genre: "Physics & Cosmology", progress: "Completed" },
  { title: "Wings of Fire", author: "Dr. A.P.J. Abdul Kalam", genre: "Autobiography & Inspiration", progress: "Completed" },
  { title: "The Martian", author: "Andy Weir", genre: "Sci-Fi & Engineering", progress: "Completed" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic Literature", progress: "Currently Reading" },
  { title: "Cosmos", author: "Carl Sagan", genre: "Astronomy & History", progress: "Up Next" },
];

/* --- MAIN COMPONENT --- */

export default function NanditaPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState("all");
  const [projectFilter, setProjectFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Quiz state
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Quote generator
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Contact form state
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Rotating roles
  const roles = [
    "Class 9 Student at Loyola School",
    "Science & STEM Enthusiast",
    "Junior Python & Web Learner",
    "Debater & Creative Writer",
    "Aspiring Innovator & Problem Solver",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % INSPIRATIONAL_QUOTES.length);
  };

  const handleQuizAnswer = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    if (index === QUIZ_QUESTIONS[currentQuizIndex].answer) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuizIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizSubmitted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizSubmitted(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.message) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredSkills =
    skillFilter === "all" ? SKILLS_LIST : SKILLS_LIST.filter((s) => s.category === skillFilter);

  const filteredProjects =
    projectFilter === "all" ? FEATURED_PROJECTS : FEATURED_PROJECTS.filter((p) => p.category === projectFilter);

  return (
    <main className="min-h-screen bg-[#080c14] text-slate-100 font-sans relative selection:bg-indigo-600 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px]" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Logo & School Badge */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 text-base">
                  NB
                </span>
              </div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight flex items-center gap-1.5">
                Nandita Behera
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 tracking-wider uppercase">Class 9 • Loyola School</p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <button onClick={() => scrollToSection("about")} className="hover:text-indigo-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("academics")} className="hover:text-indigo-400 transition-colors">
              Academics
            </button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-indigo-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-indigo-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("awards")} className="hover:text-indigo-400 transition-colors">
              Awards
            </button>
            <button onClick={() => scrollToSection("clubs")} className="hover:text-indigo-400 transition-colors">
              Clubs
            </button>
            <button onClick={() => scrollToSection("interactive")} className="hover:text-indigo-400 transition-colors flex items-center gap-1 text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" /> Student Zone
            </button>
          </div>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-xl group bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 group-hover:from-indigo-600 group-hover:to-cyan-500 hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0b0f19] rounded-[10px] group-hover:bg-opacity-0 text-white flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white" /> Connect
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0f1d]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3 font-semibold text-sm text-slate-300">
              <button onClick={() => scrollToSection("hero")} className="text-left py-1 hover:text-indigo-400">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left py-1 hover:text-indigo-400">
                About & Loyola
              </button>
              <button onClick={() => scrollToSection("academics")} className="text-left py-1 hover:text-indigo-400">
                Academics & Strengths
              </button>
              <button onClick={() => scrollToSection("skills")} className="text-left py-1 hover:text-indigo-400">
                Skills & Matrix
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-left py-1 hover:text-indigo-400">
                Featured Projects
              </button>
              <button onClick={() => scrollToSection("awards")} className="text-left py-1 hover:text-indigo-400">
                Honors & Olympiads
              </button>
              <button onClick={() => scrollToSection("clubs")} className="text-left py-1 hover:text-indigo-400">
                Clubs & Leadership
              </button>
              <button onClick={() => scrollToSection("interactive")} className="text-left py-1 text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Student Zone (Quiz & Books)
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-3 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold text-center"
              >
                Send a Message
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Introductions & Badges */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badges Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 backdrop-blur-md text-xs font-semibold text-indigo-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Loyola School Scholar • Standard 9</span>
                <span className="text-slate-500">|</span>
                <span className="text-cyan-300">Class of 2026-27</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <p className="text-slate-400 font-medium text-lg sm:text-xl">Hello, World! 👋 I am</p>
                <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08]">
                  Nandita <br className="hidden sm:inline" />
                  <span className="gradient-text-brand">Behera</span>
                </h1>
              </div>

              {/* Animated Subtitle / Roles */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 text-base sm:text-xl font-semibold text-slate-300">
                  <span className="text-cyan-400">✨</span>
                  <span className="border-b-2 border-indigo-500/50 pb-0.5 text-indigo-200">
                    {roles[roleIndex]}
                  </span>
                </div>
              </div>

              {/* Bio summary */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Welcome to my digital student corner! I am a passionate Class 9 student at{" "}
                <span className="text-white font-semibold underline decoration-indigo-500 decoration-2 underline-offset-4">
                  Loyola School
                </span>
                . I love unraveling the laws of Physics, writing Python code, building science fair prototypes, debating contemporary ideas, and exploring new books.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] transition-all flex items-center gap-2"
                >
                  Explore My Projects <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection("academics")}
                  className="px-6 py-3.5 rounded-xl glass-card hover:bg-slate-800/80 text-slate-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-indigo-400/40 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-indigo-400" /> Academic Strengths
                </button>
                <button
                  onClick={() => scrollToSection("interactive")}
                  className="px-5 py-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-900/40 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" /> Take Science Quiz
                </button>
              </div>

              {/* Loyola School Motto Tagline */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>
                  <strong className="text-slate-300 font-semibold">Loyola Motto:</strong>{" "}
                  <em className="text-amber-300/90 font-serif">"Men and Women for and with Others • Semper Sursum"</em>
                </span>
              </div>
            </div>

            {/* Right Column: Visual Portrait & Interactive Floating Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative Halo Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-400/30 rounded-3xl blur-2xl transform rotate-3 scale-95" />

                {/* Main Visual Frame */}
                <div className="relative rounded-3xl overflow-hidden glass-card border border-white/15 p-3 shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-900">
                    <img
                      src="/assets/nandita_profile.jpg"
                      alt="Nandita Behera - Class 9 Loyola School Student"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-80" />

                    {/* Bottom Tag on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-white/10">
                        <div>
                          <p className="text-xs font-bold text-white">Nandita Behera</p>
                          <p className="text-[10px] text-indigo-300">Loyola School • Standard 9</p>
                        </div>
                        <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/30 text-amber-300 text-[10px] font-bold">
                          <Trophy className="w-3 h-3" /> Topper
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Card 1: Science Fair */}
                <div className="absolute -top-4 -left-4 sm:-left-6 glass-card p-3 rounded-2xl border border-indigo-500/30 shadow-xl flex items-center gap-2.5 animate-float hidden sm:flex">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Atom className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">STEM & Robotics</p>
                    <p className="text-xs font-bold text-white">Science Fair Winner</p>
                  </div>
                </div>

                {/* Floating Micro Card 2: Coding & Math */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 glass-card p-3 rounded-2xl border border-cyan-500/30 shadow-xl flex items-center gap-2.5 animate-float hidden sm:flex [animation-delay:2s]">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Junior Coder</p>
                    <p className="text-xs font-bold text-white">Python & Web Apps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {QUICK_STATS.map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={i}
                  className="glass-card-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {stat.label}
                    </span>
                    <IconComponent className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-black text-white">{stat.value}</div>
                    <div className="text-xs font-medium text-slate-400 mt-0.5">{stat.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- ABOUT ME & LOYOLA SCHOOL PRIDE --- */}
      <section id="about" className="py-20 sm:py-28 relative z-10 border-t border-white/5 bg-[#0b101d]/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Loyola Pride Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-8 glass-card border border-indigo-500/20 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/15 blur-3xl rounded-full" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-indigo-600 p-0.5">
                      <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-amber-400">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold">
                      Est. Loyola School
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-black text-white">Loyola School Profile</h3>
                    <p className="text-xs text-slate-400 mt-1">Nurturing Excellence, Compassion, and Leadership</p>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-300">
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-slate-400">Student Name</span>
                      <span className="font-bold text-white">Nandita Behera</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-slate-400">Current Standard</span>
                      <span className="font-bold text-indigo-300">Class 9 (Junior High)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-slate-400">School</span>
                      <span className="font-bold text-white">Loyola School</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-slate-400">Core Interests</span>
                      <span className="font-bold text-cyan-300">Physics, Math & Coding</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-400">Future Aspirations</span>
                      <span className="font-bold text-emerald-300">STEM & Space Science</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-200 italic">
                    "Being at Loyola School has taught me to aim beyond just grades — to ask meaningful questions, lead with empathy, and strive for excellence in everything I do."
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Core Beliefs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-widest text-xs mb-3">
                  <Sparkles className="w-4 h-4" /> About Nandita Behera
                </div>
                <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
                  Curious Mind, Creative Thinker &amp; <br />
                  <span className="gradient-text-purple">Lifelong Learner</span>
                </h2>
              </div>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Hi! I am <strong>Nandita Behera</strong>, a 9th-grade student at Loyola School. For me, school is not just a place for textbooks; it's a launchpad for discovery. Whether it's deriving equations in Physics, crafting interactive scripts in Python, competing on stage in debates, or writing short stories, I love diving deep into topics that ignite my imagination.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2.5 text-indigo-400 font-bold text-sm">
                    <Atom className="w-4 h-4" />
                    <span>Scientific Curiosity</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Always excited to understand how things work at their fundamental level, from microscopic chemistry to macroscopic orbital dynamics.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-sm">
                    <Code className="w-4 h-4" />
                    <span>Coding & Tech Logic</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Building web experiments and solving math problems using Python, while dreaming of building software that solves real-world challenges.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2.5 text-pink-400 font-bold text-sm">
                    <Mic className="w-4 h-4" />
                    <span>Oratory & Literature</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Passionate about structuring rational arguments in inter-school debates and writing expressive prose and essays.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm">
                    <Heart className="w-4 h-4" />
                    <span>School Community</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Active participant in Loyola Eco-Club campaigns, school cleanliness drives, and mentoring junior batchmates in math.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACADEMICS & SUBJECT STRENGTHS --- */}
      <section id="academics" className="py-20 sm:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs">
              <GraduationCap className="w-4 h-4" /> Academic Excellence
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
              Class 9 Subject <span className="gradient-text-brand">Explorations</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Here is a look at my primary academic pillars, key syllabus focus areas, and my dedication to mastering concepts through problem solving and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACADEMIC_SUBJECTS.map((subject, i) => {
              const IconComp = subject.icon;
              return (
                <div
                  key={i}
                  className="glass-card-hover p-6 rounded-3xl border border-white/10 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${subject.accent} flex items-center justify-center text-white shadow-lg`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {subject.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {subject.name}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">{subject.desc}</p>
                    </div>

                    {/* Focus Topics Pill Grid */}
                    <div className="space-y-2 pt-2">
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Key Topic Highlights</p>
                      <div className="flex flex-wrap gap-1.5">
                        {subject.topics.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium bg-slate-900/90 text-slate-300 px-2.5 py-1 rounded-lg border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                      <span className="text-slate-400">Conceptual Grasp &amp; Performance</span>
                      <span className="text-indigo-400">{subject.score}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                      <div
                        className={`h-full bg-gradient-to-r ${subject.accent} rounded-full transition-all duration-1000`}
                        style={{ width: `${subject.score}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Special Loyola Study Routine & Goals Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900 border border-indigo-500/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <Star className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">Daily Learning Philosophy</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Consistency over cramming. Dedicating structured hours every evening to deep revision, solving mathematical problem sets, reading scientific journals, and preparing for Olympiad contests.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Structured problem solving & concept mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Regular science lab documentation & quizzes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Peer study circles and inter-school contest prep</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() => scrollToSection("interactive")}
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  Test Your Science Knowledge <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS & HOBBIES MATRIX --- */}
      <section id="skills" className="py-20 sm:py-28 relative z-10 bg-[#0b101d]/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-xs">
                <Cpu className="w-4 h-4" /> Capabilities &amp; Passions
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
                Skills, Hobbies &amp; <span className="gradient-text-emerald">Expertise</span>
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Skills" },
                { id: "stem", label: "STEM & Coding" },
                { id: "creative", label: "Creative & Arts" },
                { id: "leadership", label: "Leadership & Oratory" },
                { id: "sports", label: "Sports & Hobbies" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSkillFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    skillFilter === tab.id
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                      : "bg-slate-900/90 text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, idx) => {
              const IconC = skill.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-hover p-5 rounded-2xl border border-white/10 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <IconC className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-heading font-bold text-white text-sm truncate">{skill.name}</h4>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-white/5 text-indigo-300 border border-white/10">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS & EXHIBITIONS --- */}
      <section id="projects" className="py-20 sm:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-widest text-xs">
                <Lightbulb className="w-4 h-4" /> Project Showcase
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
                Featured Works &amp; <span className="gradient-text-brand">Exhibitions</span>
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Projects" },
                { id: "stem", label: "Science & STEM" },
                { id: "coding", label: "Coding & Tech" },
                { id: "creative", label: "Writing & Debates" },
                { id: "leadership", label: "School Initiatives" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    projectFilter === tab.id
                      ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 scale-105"
                      : "bg-slate-900/90 text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-indigo-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider">
                        {project.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-4 text-xs font-semibold text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-white/10 backdrop-blur-md">
                      {project.date}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{project.summary}</p>

                    <div className="pt-2 space-y-1.5">
                      {project.keyPoints.slice(0, 2).map((kp, kIdx) => (
                        <div key={kIdx} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{kp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Tech Tags & Details CTA */}
                <div className="px-6 pb-6 pt-2">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, tidx) => (
                      <span
                        key={tidx}
                        className="text-[10px] font-semibold bg-indigo-950/60 text-indigo-300 px-2.5 py-0.5 rounded-md border border-indigo-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-indigo-600 text-slate-200 hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 border border-white/10"
                  >
                    View Project Details <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Project Deep Dive */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative max-w-2xl w-full bg-[#0f172a] rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase">
                  {selectedProject.badge}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">{selectedProject.title}</h3>
                <p className="text-xs text-slate-400">Completed for {selectedProject.date}</p>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-white/10">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <p className="leading-relaxed">{selectedProject.summary}</p>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">Key Highlights &amp; Accomplishments:</h4>
                  <ul className="space-y-2 text-xs">
                    {selectedProject.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2">Technologies &amp; Disciplines:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-indigo-950 text-indigo-300 text-xs font-bold border border-indigo-500/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* --- HONORS, AWARDS & ACHIEVEMENTS --- */}
      <section id="awards" className="py-20 sm:py-28 relative z-10 bg-[#0b101d]/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold uppercase tracking-widest text-xs">
              <Trophy className="w-4 h-4" /> Honors &amp; Recognition
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
              Awards, Olympiads &amp; <span className="gradient-text-gold">Achievements</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Milestones representing dedication to academic rigor, scientific competitions, debate forums, and extracurricular excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HONORS_LIST.map((honor, i) => {
              const IconC = honor.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    honor.highlight
                      ? "bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 border-amber-500/40 shadow-xl shadow-amber-500/10"
                      : "glass-card border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                          honor.highlight
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                            : "bg-indigo-500/20 text-indigo-400 border border-indigo-500/40"
                        }`}
                      >
                        <IconC className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[10px] font-extrabold uppercase px-3 py-1 rounded-full ${
                          honor.highlight
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                            : "bg-white/5 text-slate-300 border border-white/10"
                        }`}
                      >
                        {honor.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-bold text-white">{honor.title}</h3>
                      <p className="text-xs text-indigo-300 font-semibold mt-1">{honor.org}</p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{honor.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>Year: {honor.year}</span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-current" /> Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CLUBS & LEADERSHIP --- */}
      <section id="clubs" className="py-20 sm:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-purple-400 font-bold uppercase tracking-widest text-xs">
              <ShieldCheck className="w-4 h-4" /> School Engagement
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
              Clubs, House &amp; <span className="gradient-text-purple">Leadership</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Active involvement across student societies at Loyola School, promoting teamwork, scientific inquiry, oratory, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLUBS_DATA.map((club, idx) => {
              const IconC = club.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-hover p-6 rounded-3xl border border-white/10 flex flex-col justify-between text-center group"
                >
                  <div className="space-y-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${club.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}
                    >
                      <IconC className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {club.name}
                      </h3>
                      <p className="text-xs text-indigo-400 font-bold mt-1">{club.role}</p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{club.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Active 2026
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE STUDENT ZONE (QUIZ, BOOKS & MOTIVATION) --- */}
      <section id="interactive" className="py-20 sm:py-28 relative z-10 bg-[#0a0f1e]/80 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs">
              <Sparkles className="w-4 h-4" /> Interactive Zone
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
              Playground, Books &amp; <span className="gradient-text-brand">Curiosity</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Test your science &amp; logic knowledge in my interactive mini-quiz, check out what I'm reading, and get some daily inspiration!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Interactive Science & Logic Quiz */}
            <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/20 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
                    <Gamepad2 className="w-4 h-4" />
                    <span>Science &amp; Logic Mini-Challenge</span>
                  </div>
                  <span className="text-xs font-extrabold bg-indigo-950 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30">
                    Score: {quizScore} / {QUIZ_QUESTIONS.length}
                  </span>
                </div>

                {!quizSubmitted ? (
                  <div className="space-y-6">
                    {/* Question Counter */}
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>
                        Question {currentQuizIndex + 1} of {QUIZ_QUESTIONS.length}
                      </span>
                      <span>
                        Topic:{" "}
                        {currentQuizIndex === 0
                          ? "Astronomy"
                          : currentQuizIndex === 1
                          ? "Physics"
                          : currentQuizIndex === 2
                          ? "Computer Science"
                          : "Loyola Trivia"}
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300"
                        style={{ width: `${((currentQuizIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                      />
                    </div>

                    {/* Question Text */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                      {QUIZ_QUESTIONS[currentQuizIndex].question}
                    </h3>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {QUIZ_QUESTIONS[currentQuizIndex].options.map((opt, oIdx) => {
                        const isCorrect = oIdx === QUIZ_QUESTIONS[currentQuizIndex].answer;
                        const isSelected = selectedOption === oIdx;

                        let btnClass = "bg-slate-900/90 text-slate-200 border-white/10 hover:border-indigo-500/50";
                        if (selectedOption !== null) {
                          if (isCorrect) {
                            btnClass = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold";
                          } else if (isSelected && !isCorrect) {
                            btnClass = "bg-rose-950/80 border-rose-500 text-rose-200 font-bold";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={selectedOption !== null}
                            onClick={() => handleQuizAnswer(oIdx)}
                            className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all ${btnClass}`}
                          >
                            <span className="inline-block w-5 font-mono text-slate-400">
                              {String.fromCharCode(65 + oIdx)}.
                            </span>{" "}
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {/* Fact box after selection */}
                    {selectedOption !== null && (
                      <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-200 space-y-1 animate-in fade-in">
                        <p className="font-bold flex items-center gap-1.5 text-cyan-300">
                          <Lightbulb className="w-4 h-4" /> Did you know?
                        </p>
                        <p>{QUIZ_QUESTIONS[currentQuizIndex].fact}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-xl">
                      <Trophy className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-2xl font-black text-white">Quiz Completed! 🎉</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      You scored <strong className="text-indigo-400 text-lg">{quizScore}</strong> out of{" "}
                      <strong>{QUIZ_QUESTIONS.length}</strong>! {quizScore === QUIZ_QUESTIONS.length ? "Outstanding genius mastery!" : "Great effort in exploring science!"}
                    </p>
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors inline-flex items-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" /> Retake Quiz
                    </button>
                  </div>
                )}
              </div>

              {!quizSubmitted && selectedOption !== null && (
                <div className="pt-6 border-t border-white/5 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors flex items-center gap-2"
                  >
                    {currentQuizIndex < QUIZ_QUESTIONS.length - 1 ? "Next Question" : "See Final Score"} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Reading Shelf & Inspiration Generator */}
            <div className="lg:col-span-5 space-y-6">
              {/* Reading Tracker */}
              <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <Library className="w-4 h-4" />
                    <span>2026 Reading Shelf</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">18 / 25 Books Read</span>
                </div>

                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full" style={{ width: "72%" }} />
                </div>

                <div className="space-y-2.5 pt-2">
                  {READING_LIST.map((book, bIdx) => (
                    <div key={bIdx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs">
                      <div>
                        <p className="font-bold text-white">{book.title}</p>
                        <p className="text-[10px] text-slate-400">{book.author} • {book.genre}</p>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        book.progress === "Completed" ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20" :
                        book.progress === "Currently Reading" ? "bg-amber-500/10 text-amber-300 border border-amber-500/20" :
                        "bg-white/5 text-slate-400"
                      }`}>
                        {book.progress}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inspiration Quote Widget */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/60 via-purple-950/40 to-slate-900 border border-indigo-500/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
                    <Sparkles className="w-4 h-4" /> Daily Inspiration
                  </div>
                  <button
                    onClick={handleNextQuote}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Get new quote"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="min-h-[80px] flex flex-col justify-center">
                  <p className="text-xs sm:text-sm font-medium text-slate-200 italic leading-relaxed">
                    "{INSPIRATIONAL_QUOTES[quoteIndex].text}"
                  </p>
                  <p className="text-xs text-cyan-300 font-bold mt-2">
                    — {INSPIRATIONAL_QUOTES[quoteIndex].author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MEMORIES & GALLERY --- */}
      <section className="py-20 sm:py-28 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-pink-400 font-bold uppercase tracking-widest text-xs">
              <Palette className="w-4 h-4" /> Visual Journey
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
              School Moments &amp; <span className="gradient-text-purple">Memories</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Snapshots of science presentations, school activities, collaborative lab work, and extracurricular celebrations at Loyola School.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { src: "/assets/science_fair.jpg", label: "Science Exhibition" },
              { src: "/assets/gallery/photo1.jpg", label: "Astronomy Night" },
              { src: "/assets/gallery/photo2.jpg", label: "Coding Workshop" },
              { src: "/assets/gallery/photo3.jpg", label: "Literary Circle" },
              { src: "/assets/gallery/photo4.jpg", label: "Eco Club Drive" },
              { src: "/assets/gallery/photo5.jpg", label: "Debate Forum" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex items-end p-3">
                  <span className="text-[11px] font-bold text-white">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GET IN TOUCH / CONNECT SECTION --- */}
      <section id="contact" className="py-20 sm:py-28 relative z-10 bg-[#0b101d]/80 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl glass-card border border-indigo-500/30 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Info Panel */}
              <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-[#080c14] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-600/20 blur-3xl rounded-full" />
                
                <div className="relative z-10 space-y-6">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400">
                      Say Hello &amp; Connect
                    </span>
                    <h3 className="font-heading text-3xl font-black text-white mt-1">Get in Touch</h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Whether you'd like to collaborate on an inter-school science project, discuss book recommendations, or share feedback on my portfolio, I'd love to hear from you!
                    </p>
                  </div>

                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">School &amp; Grade</p>
                        <p className="font-semibold text-white">Loyola School • Standard 9</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Location</p>
                        <p className="font-semibold text-white">India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Student Inquiries</p>
                        <p className="font-semibold text-white">nandita.behera.student@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-white/10 text-[11px] text-slate-400 italic">
                  "Semper Sursum — Striving for excellence in knowledge, character, and service."
                </div>
              </div>

              {/* Right Form Panel */}
              <div className="lg:col-span-7 p-8 sm:p-10">
                {!contactSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="font-heading text-xl font-bold text-white">Send a Message to Nandita</h4>
                      <p className="text-xs text-slate-400">Leave a note, feedback, or project collaboration idea.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase text-slate-400">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="e.g. Rahul / Teacher / Friend"
                          className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase text-slate-400">Your Email / School</label>
                        <input
                          type="text"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="e.g. name@school.edu"
                          className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase text-slate-400">Subject</label>
                      <input
                        type="text"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        placeholder="e.g. Science Fair idea / Book suggestion / Greetings"
                        className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase text-slate-400">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Note
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading text-2xl font-bold text-white">Thank You for Reaching Out! ✨</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your note has been received with warm smiles! Nandita will read your message and get back to you soon.
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-bold transition-colors"
                    >
                      Send Another Note
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-[#060910] border-t border-white/5 text-center text-xs text-slate-500 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-xs">
                NB
              </div>
              <span className="font-heading font-extrabold text-white text-sm">Nandita Behera</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Loyola School (Class 9)</span>
            </div>

            <div className="flex items-center gap-6 font-medium text-slate-400">
              <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("academics")} className="hover:text-white transition-colors">
                Academics
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection("awards")} className="hover:text-white transition-colors">
                Awards
              </button>
              <button onClick={() => scrollToSection("interactive")} className="hover:text-white transition-colors">
                Quiz
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                Contact
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
            <p>
              Designed &amp; Developed with curiosity, Python &amp; Next.js by{" "}
              <span className="text-slate-300 font-semibold">Nandita Behera</span>
            </p>
            <p className="text-indigo-400/80 font-serif italic">
              "Semper Sursum — Men &amp; Women for and with Others"
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
