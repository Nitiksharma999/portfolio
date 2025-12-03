import { Project, Experience, SkillCategory } from './types';

export const EMAIL = "nitikkumar299@gmail.com";
export const PHONE = "+91 73076 28384";
export const LOCATION = "Pathankot, Punjab";
export const GITHUB_URL = "https://github.com/Nitiksharma999";
export const LINKEDIN_URL = "https://www.linkedin.com/in/nitik-k-sharma-bbb775233";

export const SUMMARY = "Dynamic and results-oriented Software Engineer with 3+ years of experience building scalable web platforms and AI-driven solutions. Proficient in Python (Django, FastAPI, Flask) and modern JavaScript frameworks (React.js, Next.js). Strong track record in designing secure APIs, integrating LLMs, and deploying cloud-based systems. Skilled in end-to-end product development, performance optimization, and workflow automation.";

export const SKILLS: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    skills: ["AI Agents", "Large Language Models (LLMs)", "Langchain", "OpenAI API", "Crew.ai", "Autogen.ai", "VAPI", "ElevenLabs", "Computer Vision (OCR)"]
  },
  {
    category: "Backend Development",
    skills: ["Python", "Django", "FastAPI", "Flask", "RESTful APIs", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB"]
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "DevOps & Tools",
    skills: ["AWS", "Git", "Postman", "Twilio", "Celery", "Stripe", "Plaid"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Softradix Software Solutions Pvt. Ltd",
    location: "Mohali, IND",
    role: "AI Software Engineer",
    period: "01/2025 - Present", // Adjusted to Present based on context
    achievements: [
      "Led end-to-end development of Scam Sensei (Unscammed AI) and ITIN Automation System.",
      "Engineered advanced AI/ML-driven workflows to analyze user behavior and risk profiles.",
      "Built scalable backends using Python, Django/FastAPI, Celery, and PostgreSQL.",
      "Integrated multi-channel interactions via Twilio, VAPI, ElevenLabs, and SMTP.",
      "Mentored junior developers and performed technical leadership through code reviews."
    ]
  },
  {
    company: "NetSet Software Solutions Pvt. Ltd",
    location: "Mohali, IND",
    role: "Jr. Software Developer",
    period: "10/2023 - 01/2025",
    achievements: [
      "Designed, developed, and maintained scalable web and AI-driven applications.",
      "Built and optimized backend services using Python, Django, and FastAPI.",
      "Developed responsive frontend interfaces using ReactJS.",
      "Collaborated with cross-functional teams for end-to-end SDLC processes."
    ]
  },
  {
    company: "Zenid Infotech Pvt. Ltd",
    location: "Mohali, IND",
    role: "Python/Django Developer",
    period: "09/2022 - 09/2023",
    achievements: [
      "Developed functional web applications using clean, maintainable code.",
      "Integrated and modernized legacy applications using new technologies.",
      "Built and maintained RESTful APIs for seamless service communication."
    ]
  },
  {
    company: "Croma Campus Training & Development",
    location: "Noida, IND",
    role: "Python (Data Science) Intern",
    period: "03/2021 - 09/2021",
    achievements: [
      "Assisted in analyzing datasets and extracting insights.",
      "Performed data cleaning, preprocessing, and basic feature preparation."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Unscammed AI",
    url: "https://unscammed.com/",
    description: "An AI platform designed to help seniors recognize and respond to voice, SMS, and email scams through realistic simulations.",
    techStack: ["Vapi", "ElevenLabs", "Twilio", "Celery", "PostgreSQL", "Google Vision"],
    features: [
      "Developed Scam Sensei for realistic scam simulations.",
      "Implemented Celery-based task scheduling for campaigns.",
      "Built persona-based risk profiling.",
      "Automated privacy protection workflows using Playwright and OCR."
    ]
  },
  {
    title: "ITIN Platform",
    url: "https://itin.hashtoms.com/",
    description: "Backend platform enabling US business formation and tax filing for non-US residents.",
    techStack: ["FastAPI", "PostgreSQL", "Stripe", "Plaid", "AWS S3", "OpenAI GPT-4"],
    features: [
      "Automated ITIN and incorporation workflows.",
      "Integrated OCR-based data extraction.",
      "Built invoice management and smart bookkeeping modules."
    ]
  },
  {
    title: "Astra Health",
    url: "https://www.astrahealth.ai/",
    description: "AI-powered healthcare platform for medical consultations and insights.",
    techStack: ["Django", "DynamoDB", "OpenAI API", "RESTful APIs"],
    features: [
      "Developed backend for AI-driven consultations.",
      "Integrated OpenAI for automated medical insights.",
      "Ensured HIPAA-compliant secure data handling."
    ]
  },
  {
    title: "AI Attorney",
    url: "https://aiattorney.biz/",
    description: "Platform providing AI-powered legal consultation services.",
    techStack: ["ReactJS", "Django", "OpenAI API"],
    features: [
      "Managed full-stack development.",
      "Integrated AI legal advisor for personalized advice.",
      "Built robust APIs for data management."
    ]
  },
  {
    title: "Propti",
    url: "https://propti.com.au/",
    description: "Real estate platform streamlining property buying and selling with AI insights.",
    techStack: ["ReactJs", "FastAPI", "LLMs"],
    features: [
      "Integrated AI-powered strata report generation.",
      "Built comprehensive agent and admin interfaces.",
      "Implemented seamless property transaction flows."
    ]
  },
  {
    title: "AI Health Assist",
    url: "https://aihealthassistant.pro/",
    description: "Health consultation platform providing AI-driven medical insights.",
    techStack: ["ReactJS", "Django", "OpenAI", "Image Processing"],
    features: [
      "Disease analysis through image processing.",
      "Automated medical report analysis.",
      "Seamless frontend-backend integration."
    ]
  },
  {
    title: "Skyler",
    url: "",
    description: "Insurance-focused platform assisting users with insurance-related concerns.",
    techStack: ["Django", "ReactJS", "OpenAI"],
    features: [
      "AI-driven insurance document analysis.",
      "Seamless user experience for policy management."
    ]
  },
  {
    title: "Mantrai",
    url: "",
    description: "Meditation platform offering personalized motivational audio.",
    techStack: ["FastAPI", "OpenAI"],
    features: [
      "Personalized meditation audio generation based on mood.",
      "Real-time audio streaming backend."
    ]
  }
];
