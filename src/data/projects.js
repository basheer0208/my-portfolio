import discoveryImg from '../assets/projects/discovery.jpg';
import kitchenImg from '../assets/projects/kitchen.jpeg';
import airaImg from '../assets/projects/aria.png';
import mupathImg from '../assets/projects/mupath.png';
import p3dbImg from '../assets/projects/p3db.png';
import thecodehouseImg from '../assets/projects/thecodehouse.png';
import carbonreadyImg from '../assets/projects/carbonready.png';

const projects = [
  {
    id: 1,
    title: 'Tour Discovery',
    type: 'professional',
    category: 'Full Stack Development',
    status: 'Production',
    description:
      'A centralized multi-brand corporate and recruitment hub unifying 6 business entities under a single responsive platform with lifestyle content architecture and cross-brand navigation.',
    longDescription: `Built a centralized multi-brand digital hub (React 19/FastAPI/AWS) unifying 6 business entities — residential, commercial, hospitality, dining, and entertainment — under a single responsive platform with lifestyle content architecture and cross-brand navigation.

Key Features:
\u2022 Engineered a dynamic recruitment portal integrating 6 Greenhouse.io ATS job boards with real-time search, department filtering, and one-click application routing.
\u2022 Developed async email pipelines using aiosmtplib with dual delivery (admin notification + user confirmation).
\u2022 Established CI/CD via GitHub Actions deploying to self-hosted EC2 instances with Nginx and systemd-managed services.

Technical Highlights:
\u2022 React 19 frontend with responsive design and cross-brand navigation.
\u2022 Python FastAPI backend with async architecture.
\u2022 AWS EC2 deployment with Nginx reverse proxy.
\u2022 Greenhouse.io API integration for recruitment across 6 business entities.`,
    technologies: ['React 19', 'Python FastAPI', 'AWS EC2', 'Greenhouse.io', 'Nginx', 'GitHub Actions'],
    image: discoveryImg,
    github: 'private',
    website: 'https://tourdiscovery.com/',
    metrics: [
      '6 business entities unified under one platform',
      '6 Greenhouse.io ATS job boards integrated',
      'Automated CI/CD pipeline with GitHub Actions',
    ],
  },
  {
    id: 2,
    title: 'The Kitchen Grill & Games',
    type: 'professional',
    category: 'Full Stack Development',
    status: 'Production',
    description:
      'A full-stack hospitality platform serving as the digital backbone for a multi-activity entertainment venue — unifying online booking, payments, event management, and custom real-time reservation systems.',
    longDescription: `Architected a full-stack hospitality platform serving as the digital backbone for a multi-activity entertainment venue — unifying online booking, payments, event management, and custom real-time reservation systems for ice skating and tournaments.

Key Features:
\u2022 Integrated 8+ third-party APIs (Square, Stripe, Planyo, Eventbrite, Greenhouse, Mailchimp, Instagram, Tripleseat) into a unified platform, automating reservations, payments, and marketing.
\u2022 Built a dynamic pricing engine with DST-aware scheduling supporting 10+ bookable resources with time-based, day-based, and add-on pricing logic.
\u2022 Implemented role-based admin dashboard with tournament management, league administration, social media automation, and real-time notification systems.
\u2022 Automated marketing pipelines syncing customer data into Mailchimp daily.

Technical Highlights:
\u2022 React.js frontend with responsive design achieving 45% improvement in mobile engagement.
\u2022 Python FastAPI backend with SQLite enabling real-time inventory management.
\u2022 AWS EC2 deployment with 99% uptime.
\u2022 CI/CD pipeline using GitHub Actions for automated testing and deployment.
\u2022 Shared component library adopted across subsequent company projects, accelerating development by 30%.`,
    technologies: ['React.js', 'Python FastAPI', 'AWS EC2', 'Stripe', 'Square', 'Planyo', 'Mailchimp'],
    image: kitchenImg,
    github: 'private',
    website: 'https://thekitchen.fun/',
    metrics: [
      '8+ third-party API integrations',
      '45% improvement in mobile engagement',
      '500+ daily transactions processed',
    ],
  },
  {
    id: 3,
    title: 'Aira Luxury Apartments',
    type: 'professional',
    category: 'Full Stack Development',
    status: 'Production',
    description:
      'A full-stack property management platform with 8 public-facing pages, headless CMS, Entrata API integration for real-time unit availability, and AWS deployment.',
    longDescription: `Architected a full-stack property management platform (React 19/FastAPI/AWS) with 8 public-facing pages featuring scroll-based animations, parallax effects, interactive Leaflet maps, and a masonry-grid gallery with lightbox navigation.

Key Features:
\u2022 Engineered a headless CMS REST API (14 route modules, 28 tables, 23 optimized indexes) with 12+ admin modules supporting drag-and-drop reordering, bulk image uploads, publish scheduling, and real-time content preview.
\u2022 Integrated Entrata property management API for real-time unit availability with in-memory caching (10-min TTL), thread-safe locking, and background cache warming.
\u2022 Enabled live floor plan filtering by move-in date and lease terms.

Technical Highlights:
\u2022 JWT authentication with RBAC and AWS S3 presigned-URL media pipeline.
\u2022 Deployed on AWS (RDS MySQL, S3, Secrets Manager) with aiomysql async connection pooling for high concurrency.
\u2022 Interactive Leaflet maps and masonry-grid gallery with lightbox navigation.
\u2022 Scroll-based animations and parallax effects for engaging UX.`,
    technologies: ['React 19', 'Python FastAPI', 'AWS RDS', 'AWS S3', 'Entrata API', 'Leaflet', 'MySQL'],
    image: airaImg,
    github: 'private',
    website: 'https://arialuxuryapts.com/',
    metrics: [
      '14 route modules with 28 database tables',
      'Real-time unit availability via Entrata API',
      'JWT auth with RBAC and S3 media pipeline',
    ],
  },
  {
    id: 4,
    title: 'The Code House',
    type: 'personal',
    category: 'Co-founded Startup',
    status: 'Production',
    description:
      'A dual-business platform combining an online education hub with web development services — offering job-ready programming courses and affordable website packages for businesses across India.',
    longDescription: `Built a dual-business platform (React 19/Vite/Tailwind) combining an online education hub with a web development services agency, targeting students and small businesses across India.

Key Features:
\u2022 Designed an 8-course catalog with 3 bundle packages, enrollment forms, and WhatsApp API integration for automated lead capture and student onboarding.
\u2022 Built a services marketplace showcasing 14+ web development and digital marketing offerings with a dynamic quote request system.
\u2022 Implemented dual WhatsApp channels routing course inquiries and service leads to separate teams with pre-filled contextual messages.
\u2022 Created a 4-step development process flow and launch offer system for early client acquisition.

Technical Highlights:
\u2022 React 19 with Tailwind CSS 4 and Framer Motion for responsive, animated UI.
\u2022 React Hook Form with validation for multi-field enrollment and quote forms.
\u2022 SEO-optimized with Open Graph meta tags, Twitter Cards, and semantic HTML.
\u2022 Deployed on Vercel with GitHub Actions CI/CD pipeline.`,
    technologies: ['React 19', 'Tailwind CSS', 'Vite', 'Framer Motion', 'React Hook Form', 'Vercel'],
    image: thecodehouseImg,
    github: 'private',
    website: 'https://thecodehouse.in/',
    metrics: [
      '8 courses + 3 bundle packages',
      '14+ web development & digital services',
      'WhatsApp API integration for lead capture',
    ],
  },
  {
    id: 5,
    title: 'CarbonReady',
    type: 'personal',
    category: 'Founder',
    status: 'Development',
    description:
      'A B2B SaaS platform helping Indian SME exporters comply with the EU Carbon Border Adjustment Mechanism (CBAM) — featuring emissions calculation, EU benchmark comparison, and multi-format compliance reporting.',
    longDescription: `Architected a full-stack B2B SaaS platform (React 19/TypeScript/FastAPI/Supabase) enabling Indian exporters of steel, aluminum, cement, fertilizers, and hydrogen to calculate carbon emissions, compare against EU benchmarks, and generate CBAM-compliant reports.

Key Features:
\u2022 Built a carbon emissions calculation engine handling direct (fuel), indirect (electricity), and process emissions with IPCC-based emission factors and India grid data.
\u2022 Engineered multi-format report generation (PDF, XML, Excel) with branded templates and one-click email distribution to EU buyers via Resend.
\u2022 Implemented 4-step onboarding wizard (Company \u2192 Facility \u2192 Product \u2192 EU Buyer) and a real-time dashboard with Recharts visualizations and EU benchmark comparisons.
\u2022 Designed role-based team management (Owner/Admin/Editor/Viewer) with email invitations and Row Level Security for multi-tenant data isolation.

Technical Highlights:
\u2022 React 19 + TypeScript frontend with TanStack Query for priority-based data caching.
\u2022 FastAPI backend with Supabase PostgreSQL, 16 tables, and RLS-enforced multi-tenancy.
\u2022 Bulk Excel import with auto-calculation and CSV export for all data types.
\u2022 Activity logging with full audit trail of all operations.`,
    technologies: ['React 19', 'TypeScript', 'FastAPI', 'Supabase', 'Tailwind CSS', 'Recharts', 'Resend'],
    image: carbonreadyImg,
    github: 'private',
    website: '',
    metrics: [
      '16-table schema with Row Level Security',
      'Multi-format reports (PDF, XML, Excel)',
      'CBAM emissions engine with EU benchmarks',
    ],
  },
  {
    id: 6,
    title: 'MU-Path',
    type: 'professional',
    category: 'Full Stack Development',
    status: 'Development',
    description:
      'An interactive academic pathway visualization system enabling students to navigate prerequisites and course dependencies for 100+ programs university-wide.',
    longDescription: `Sole developer of an interactive academic pathway visualization system enabling students to navigate prerequisites and course dependencies for 100+ programs university-wide.

Key Features:
\u2022 Built a React graph visualization interface backed by dual Node.js/Python architecture.
\u2022 Custom prerequisite-mapping algorithms exposed via RESTful and GraphQL endpoints.
\u2022 Applied caching strategies and lazy-load techniques that cut pathway rendering time by 65%.

Technical Highlights:
\u2022 Deployed via GCP Cloud Build.
\u2022 Optimized MySQL database schema for complex course relationships and prerequisite chains.
\u2022 Interactive graph rendering for course pathways enhancing academic planning.`,
    technologies: ['React', 'Node.js', 'Python', 'MySQL', 'GCP', 'GraphQL', 'D3.js'],
    image: mupathImg,
    github: 'https://github.com/basheer0208/MU-PATH-FRONTEND',
    website: 'https://mu-path.com',
    metrics: [
      'Mapped 100+ academic programs',
      '65% faster pathway rendering',
      'Dual RESTful + GraphQL API architecture',
    ],
  },
  {
    id: 7,
    title: 'P3DB',
    type: 'professional',
    category: 'Full Stack Development',
    status: 'Active Research',
    description:
      'Plant Protein Phosphorylation Database with BLAST search, Kinase-Client Network visualization, and an AI-powered natural language query interface.',
    longDescription: `Engineered BLAST search functionality, Kinase-Client Network visualization using graph algorithms, and an AI-powered natural language query interface for intuitive database interactions.

Key Features:
\u2022 BLAST search functionality for complex sequence alignment queries.
\u2022 Kinase-Client Network visualization using advanced graph algorithms.
\u2022 AI-powered natural language query interface (Ask AI) for intuitive database interactions.

Technical Highlights:
\u2022 Architected FastAPI REST endpoints powering all major features.
\u2022 Led systematic bug resolution, raising platform stability by 75%.
\u2022 Trimmed page load times by 55% via lazy-load modules.`,
    technologies: ['Angular', 'FastAPI', 'Node.js', 'TensorFlow', 'Docker', 'Nginx', 'MySQL'],
    image: p3dbImg,
    github: 'https://github.com/basheer0208/P3DB',
    website: 'https://www.p3db.org/home',
    metrics: [
      '75% improvement in platform stability',
      '55% reduction in page load times',
      'AI-powered natural language queries',
    ],
  },
];

export default projects;
