import vAmazing from "@/assets/amazing-portfolio.mp4";
import vBirthday from "@/assets/customized-birthday.mp4";
import vHarley from "@/assets/harley-website.mp4";
import vJay from "@/assets/jay-portfolio.mp4";
import vKhadi from "@/assets/khadi-portfolio.mp4";
import vKika from "@/assets/kika-plumbing.mp4";
import vKumani from "@/assets/kumani.mp4";
import vMae from "@/assets/maecoinage-webiste.mp4";
import vRais from "@/assets/rais.mp4";
import vSakosile from "@/assets/sakosile.mp4";
import vSoma from "@/assets/soma-vault.mp4";
import vBirthdayII from "@/assets/Happy Birthday.mp4"; 
import vEmmasStrons from "@/assets/Emmastrons.mp4";
import vJNC from "@/assets/JNC Ventures.mp4";
import vClassEcho from "@/assets/ClassEcho.mp4";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  category: string;
  year: string;
  repo: string;
  live?: string;
  video?: string;
  accent: string;
  hasCaseStudy?: boolean;
};

export const projects: Project[] = [
  {
    slug: "class-echo",
    name: "ClassEcho",
    tagline: "Anonymous Feedback System.",
    description:
      "ClassEcho is a simple, anonymous feedback system for lecturers and students. Instructors create feedback sessions and share unique links with students, who provide anonymous ratings and comments without needing to sign up.",
    stack: ["React 19", "TanStack Start", "Tailwind CSS", "TypeScript", "Supabase"],
    category: "WebApp",
    year: "2026",
    repo: "https://github.com/Mimieamichy/class-echo",
    live: "https://class-echo.amichy07.workers.dev/",
    video: vClassEcho,
    accent: "from-blue-500 to-indigo-600",
  },
  {
    slug: "harley-innovations",
    name: "Harley Innovations",
    tagline: "Website for an innovations hub.",
    description:
      "A well built Website for Harley Innovations Hub. Built reusable component libraries, and designed responsive course delivery experiences.",
    stack: ["React", "TypeScript", "Tailwind"],
    category: "Website",
    year: "2026",
    repo: "https://github.com/Mimieamichy/harley-innovations-website",
    live: "https://harley.com.ng/",
    video: vHarley,
    accent: "from-orange-400 to-rose-500",
  },
  {
    slug: "revival-academy",
    name: "Revival Academy",
    tagline: "Modern school portal with results & school fees payment portal.",
    description:
      "A school website with embeded Result and Schools fees payment portal with a Focused on accessibility (WCAG) and a calm reading experience for parents and staff.",
    stack: ["React", "TypeScript", "Tailwind"],
    category: "Website",
    year: "2026",
    repo: "https://github.com/Mimieamichy/revival-academy",
    live: "https://www.revivalacademy.com.ng/",
    video: vRais,
    accent: "from-amber-400 to-orange-600",
  },
  {
    slug: "soma-vault",
    name: "Soma Vault",
    tagline: "An AI-powered focused study & note vault for learners.",
    description:
      "An AI powered study companion for organizing notes, summaries and revision sets. Built around a fast typography-first reading view with keyboard shortcuts.",
    stack: ["React", "TypeScript", "Vite"],
    category: "WebApp",
    year: "2025",
    repo: "https://github.com/Mimieamichy/soma-vault",
    live: "https://soma-vault.vercel.app/",
    video: vSoma,
    accent: "from-orange-300 to-red-500",
    hasCaseStudy: true,
  },
  {
    slug: "kumani",
    name: "Kumani",
    tagline: "A Hospital Management System (HMS) for a hospital.",
    description:
      "A Hospital Management System (HMS) for a hospital. Features patient management, appointment scheduling, and inventory tracking.",
    stack: ["shadcn/ui", "TypeScript", "Tailwind", "React"],
    category: "WebApp",
    year: "2025",
    repo: "https://github.com/Mimieamichy/kumani",
    video: vKumani,
    accent: "from-rose-400 to-orange-500",
  },
  {
    slug: "sakosile",
    name: "Sakosile",
    tagline: "An Electronic Tracking and Documentation System for Postgraduate Students",
    description:
      "Sakosile helps university staff, students, and administrators manage postgraduate project workflows in a centralized platform.",
    stack: ["TypeScript", "React", "Tailwind", "Zustand"],
    category: "WebApp",
    year: "2024",
    repo: "https://github.com/Mimieamichy/SAKOSILE",
    live: "https://fulafia-electronic-tracking-and-8x35.onrender.com/",
    video: vSakosile,
    accent: "from-orange-500 to-amber-300",
    hasCaseStudy: true,
  },
  {
    slug: "kika-plumbing",
    name: "Kika Plumbing",
    tagline: "Professional plumbing services surface.",
    description:
      "A professional service website for a plumbing business. Features service listings, booking inquiries, and a clean, trust-building aesthetic.",
    stack: ["React", "Tailwind", "Framer Motion"],
    category: "Website",
    year: "2025",
    repo: "https://github.com/Mimieamichy/kika-plumbing-website",
    live: "https://kikaplumbing.netlify.app/",
    video: vKika,
    accent: "from-blue-400 to-cyan-600",
  },
  {
    slug: "mae-coinage",
    name: "Mae Coinage",
    tagline: "A Modern Website Built for a Tech Startup.",
    description:
      "This is a modern website built for a tech startup. It features a clean, responsive design, and a focus on user experience.",
    stack: ["React", "TypeScript", "Tailwind", "Tanstack Query"],
    category: "Website",
    year: "2026",
    repo: "https://github.com/Mimieamichy/mae-coinage",
    video: vMae,
    accent: "from-indigo-500 to-purple-600",
  },
  {
    slug: "jayjohn-portfolio",
    name: "Jayjohn Portfolio",
    tagline: "Creative developer showcase.",
    description:
      "A high-performance portfolio for a creative developer, featuring smooth transitions, project case studies, and a unique visual identity.",
    stack: ["Next.js", "GSAP", "Tailwind"],
    category: "Portfolio",
    year: "2026",
    repo: "https://github.com/Mimieamichy/jayjohn-portfolio",
     live: "https://jayjohn-portfolio.vercel.app/",
    video: vJay,
    accent: "from-zinc-700 to-zinc-900",
  },
  {
    slug: "amazingmercy-portfolio",
    name: "Amazing Mercy",
    tagline: "Elegant design & development portfolio.",
    description:
      "A visually rich portfolio showcasing design and development work. Built with a focus on typography and immersive scrolling experiences.",
    stack: ["React", "Framer Motion", "Tailwind"],
    category: "Portfolio",
    year: "2026",
    repo: "https://github.com/Mimieamichy/amazingmercy-portfolio",
     live: "https://amazings-portfolio.netlify.app/",  
    video: vAmazing,
    accent: "from-pink-400 to-rose-600",
  },
  {
    slug: "khadi-portfolio",
    name: "Khadi Portfolio",
    tagline: "Minimalist and modern portfolio.",
    description:
      "A clean, minimalist portfolio surface designed to put the work front and center. Engineered for speed and accessibility.",
    stack: ["React", "Vite", "Tailwind"],
    category: "Portfolio",
    year: "2026",
    repo: "https://github.com/Mimieamichy/khadi-portfolio",
     live: "https://khadi-portfolio.netlify.app/",  
    video: vKhadi,
    accent: "from-amber-300 to-orange-500",
  },
  {
    slug: "customized-birthday",
    name: "Custom Birthday",
    tagline: "Personalized celebration surface.",
    description:
      "A bespoke website for a birthday celebration, featuring personal galleries, event details, and interactive guest elements.",
    stack: ["HTML", "CSS", "JavaScript"],
    category: "Customized Website",
    year: "2026",
    repo: "https://github.com/Mimieamichy/custom-birthday-website",
     live: "https://custom-birthday-website.vercel.app/",
    video: vBirthday,
    accent: "from-purple-400 to-indigo-500",
  },
    {
    slug: "customized-birthdayII",
    name: "Custom BirthdayII",
    tagline: "Personalized Birthday Webpage.",
    description:
      "A bespoke website for a birthday celebration, featuring personal galleries, event details, and interactive guest elements.",
    stack: ["HTML", "CSS", "JavaScript"],
    category: "Customized Website",
    year: "2026",
    repo: "https://github.com/Mimieamichy/custom-birthday-websiteII",
     live: "https://mimieamichy.github.io/custom-birthday-websiteII/",
    video: vBirthdayII,
    accent: "from-purple-400 to-indigo-500",
  },
    {
    slug: "EmmaStrons-Website",
    name: "EmmaStrons Website",
    tagline: "Bespoke digital showcase for a premium design firm.",
    description:
      "A polished, highly responsive marketing website for EmmaStrons, a premier interior & exterior design agency. Built with a focus on fluid animations, high-fidelity portfolio presentation, and smooth layout navigation.",
    stack: ["TypeScript", "React", "Vite","TanStack Router", " Tailwind"],
    category: "Website",
    year: "2026",
    repo: "https://github.com/Mimieamichy/emmastrons",
     live: "https://www.emmastrons.com.ng/",
    video: vEmmasStrons,
    accent: "from-purple-400 to-indigo-500",
  },
    {
    slug: "JNC Ventures",
    name: "JNC Ventures Website",
    tagline: "Secure showcase platform for an enterprise cybersecurity startup.",
    description:
      "A sleek, corporate marketing platform for JNC Ventures, a cybersecurity consultancy. Features optimized asset loading, structured service cataloging, and an interactive contact interface for business clients.",
    stack: ["TypeScript", "React", "Vite","TanStack Router", " Tailwind"],
    category: "Website",
    year: "2026",
    repo: "https://github.com/Mimieamichy/jncventures",
     live: "https://jncventures.com.ng",
    video: vJNC,
    accent: "from-purple-400 to-indigo-500",
  },
];

export type Testimonial = {
  content: string;
  author: string;
  role?: string;
};

export const testimonials: Testimonial[] = [
  {
    content: "Working with you was an exceptional experience. You took my initial concepts and expertly translated them into a stunning, functional reality. I am incredibly pleased with the final product and the level of detail put into every section of the website. Thank you, for your outstanding work and professionalism.",
    author: "Alheri",
  },
  {
    content: "Wow, once again you delivered excellently. I love what you did on my portfolio website. The color combination is beautiful, the design feels clean and professional, and everything came together so smoothly. I really appreciate the consistency, creativity, and attention to detail you always bring to your work. I’m genuinely happy with the final result. Great job as always.",
    author: "Amazing Mercy",
  },
  {
    content: "The portfolio showcased my designed completely❤️, The branding is sharp, the tagline is really memorable, “Designing products that feel inevitable”, I really love that part🥹 The overall presentation feels polished and professional. Thanks alot honestly, i really appreciate, its wayyyy better than just showcasing the designs on behance ❤️",
    author: "Khadijat",
  },
  {
    content: "Miracle demonstrated outstanding professionalism and precise attention to detail throughout this project. She executed the initial concept exactly as envisioned, delivering top-tier results. Highly recommended.",
    author: "Mr Asher",
    role: "CEO Harley",
  },
  {
    content: "Working with Miracle on the SAKOSILE project was an excellent experience. She delivered a clean, modern, and user-friendly application while maintaining great communication throughout the project. Her attention to detail, creativity, and professionalism truly stood out. I’d highly recommend her to anyone looking for a reliable frontend developer.",
    author: "Proff Timothy",
  },
];
