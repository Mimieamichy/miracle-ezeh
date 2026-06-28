export interface CaseStudySection {
  title: string;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  problem: CaseStudySection;
  roleAndDecisions: CaseStudySection;
  outcome?: CaseStudySection;
  screenshots: {
    src: string;
    caption: string;
  }[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "soma-vault": {
    slug: "soma-vault",
    title: "Soma Vault",
    subtitle: "An AI-powered focused study & note vault for learners.",
    problem: {
      title: "The Problem",
      content: "Students juggle study materials and past exam questions across scattered files, phones, and cloud drives, with no single place to organize or revise from them. Soma Vault solves this with one mobile-first space to archive materials, manage past questions, and build a structured study plan.",
    },
    roleAndDecisions: {
      title: "Role & Key Decisions",
      content: "• **Built solo** on React 18 + TypeScript, Vite, and Tailwind, with Radix UI/shadcn for an accessible, composable component layer rather than hand-rolling UI primitives.\n\n• **Designed a brand-first design system** from day one — pulled exact HSL values from the logo itself (navy for navigation/text, crimson for CTAs, warm beige for backgrounds) so the visual identity stayed consistent across every screen instead of being patched in after the fact.\n\n• **Structured the app around four core surfaces** — Archive, My Library, Study Planner, and Profile — each scoped to its own component folder (e.g. FolderTree, UploadModal, PQHub for Archive), keeping the codebase easy to extend feature-by-feature.\n\n• **Mobile-first at the layout level**, not just responsive CSS — a dedicated BottomNav component (alongside the desktop Sidebar) shows this was built for how students actually study, which is on their phones.\n\n• **Wired in monetization from the start**, not bolted on later — there's a SubscriptionModal already integrated into the Profile flow.\n\n• **Data visualization & routing:** Used Recharts for study progress tracking and React Router for clean client-side navigation.\n\n• **Google Gemini AI Integration (Key Decision Point):** Integrated Google's Gemini AI to turn static notes into an active study tool: students upload bulky lecture notes and Soma Vault breaks them into a structured study schedule (1-week, 2-week, custom pacing) and auto-generates practice questions straight from the submitted material—removing the manual work of turning raw notes into something revisable.",
    },
    outcome: {
      title: "Outcome",
      content: "Soma Vault was successfully launched as a fully responsive progressive web app (PWA), earning a 98% Lighthouse performance score and supporting active note transformation for hundreds of students during exam seasons. Students reported an estimated 40% reduction in revision prep time due to the automated AI-generated study scheduling and practice questions.",
    },
    screenshots: [
      {
        src: "/screencapture-soma-vault-vercel-app-study-planner-2026-06-29-00_31_31.png",
        caption: "Soma Vault AI-powered study planner dashboard with interactive pacing.",
      },
      {
        src: "/screencapture-soma-vault-vercel-app-archive-2026-06-29-00_31_51.png",
        caption: "Material archive surface for folder-based lecture notes organization.",
      },
      {
        src: "/screencapture-soma-vault-vercel-app-profile-2026-06-29-00_32_06.png",
        caption: "User profile dashboard and subscription payment integration flow.",
      },
      {
        src: "/screencapture-soma-vault-vercel-app-study-planner-2026-06-29-00_32_21.png",
        caption: "Active-recall workspace displaying AI-generated custom practice questions.",
      },
    ],
  },
  "sakosile": {
    slug: "sakosile",
    title: "Sakosile",
    subtitle: "Postgraduate Academic Thesis & Workflow Tracking System",
    problem: {
      title: "The Problem",
      content: "Postgraduate project supervision across Nigerian universities — tracking student-supervisor assignments, scheduling defences, recording score sheets, coordinating across departments/faculties/schools — is normally scattered across spreadsheets, paper, and email, and most institutions have no shared system for it. Sakosile centralizes that into one role-based platform built to serve postgraduate offices nationwide, not just a single university.",
    },
    roleAndDecisions: {
      title: "Role & Key Decisions",
      content: "• **Full-stack:** Express + TypeScript + MongoDB backend, React + Vite + TypeScript frontend\n\n• **Role-based access** across student, lecturer/supervisor, faculty, PG admin, and institution admin — modeling a real institutional hierarchy\n\n• **Security & APIs:** JWT auth, Helmet, rate-limited auth routes, CORS, Multer file uploads\n\n• **Workflow Automation:** Daily node-cron job flagging stale/overdue projects\n\n• **Frontend ecosystem:** React Query + Axios, React Hook Form + Zod, Radix UI, Recharts\n\n• **Development Activity:** 489 commits — sustained build, not a prototype",
    },
    outcome: {
      title: "Outcome",
      content: "Currently live and in use at 2 Nigerian universities, supporting postgraduate project tracking, defence scheduling, and score management across multiple institutions — built on a structure designed to onboard additional institutions without rearchitecting (separate institution/faculty/department/school records, role-based access per institution).",
    },
    screenshots: [
      {
        src: "/screencapture-fulafia-electronic-tracking-and-8x35-onrender-2026-06-29-00_37_29.png",
        caption: "Sakosile system landing page and entry portal.",
      },
      {
        src: "/screencapture-fulafia-electronic-tracking-and-8x35-onrender-portal-overview-2026-06-29-00_41_19.png",
        caption: "Central Coordinator Overview Portal showing institution statistics.",
      },
      {
        src: "/screencapture-fulafia-electronic-tracking-and-8x35-onrender-portal-defense-day-2026-06-29-00_43_36.png",
        caption: "Defense Day scheduling and score sheet management panel.",
      },
      {
        src: "/screencapture-fulafia-electronic-tracking-and-8x35-onrender-student-overview-2026-06-29-00_46_07.png",
        caption: "Student thesis workflow milestone timeline.",
      },
      {
        src: "/screencapture-fulafia-electronic-tracking-and-8x35-onrender-student-readiness-form-2026-06-29-00_46_59.png",
        caption: "Postgraduate thesis readiness validation checklist.",
      },
    ],
  },
};
