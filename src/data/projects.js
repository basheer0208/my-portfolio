import discoveryImg from '../assets/projects/discovery.jpg';
import kitchenImg from '../assets/projects/kitchen.jpeg';
import airaImg from '../assets/projects/aria.png';
import mupathImg from '../assets/projects/mupath.png';
import p3dbImg from '../assets/projects/p3db.png';

const projects = [
  {
    id: 1,
    title: 'Tour Discovery',
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
    github: '',
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
    github: '',
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
    github: '',
    website: 'https://arialuxuryapts.com/',
    metrics: [
      '14 route modules with 28 database tables',
      'Real-time unit availability via Entrata API',
      'JWT auth with RBAC and S3 media pipeline',
    ],
  },
  {
    id: 4,
    title: 'MU-Path',
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
    id: 5,
    title: 'P3DB',
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
