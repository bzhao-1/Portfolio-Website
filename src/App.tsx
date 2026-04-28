import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Dumbbell,
  GitBranch,
  GraduationCap,
  Layers3,
  Link2,
  Mail,
  MapPin,
  Play,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

type SkillFilter = "all" | "languages" | "infrastructure";

type ExperienceItem = {
  title: string;
  meta: string;
  summary: string;
  bullets: string[];
};

type ProjectItem = {
  title: string;
  category: string;
  image: string;
  summary: string;
  links: Array<{ label: string; href: string }>;
};

type TestimonialItem = {
  name: string;
  company: string;
  image: string;
  summary: string;
  href: string;
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Consulting", href: "#consulting" },
];

const recruiterHighlights = [
  "OCI Compute VMI engineer focused on production-safe deployments",
  "Austin-based, open to SWE I / SWE II opportunities",
  "Distributed systems, observability, and cloud infrastructure",
];

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer — Oracle Cloud Infrastructure (Compute VMI)",
    meta: "Austin, TX | July 2025 - Present",
    summary:
      "Working on OCI Compute dataplane infrastructure across security pipelines, validation systems, and fleet-wide production readiness.",
    bullets: [
      "Designed and deployed a distributed security data pipeline aggregating vulnerability signals across 10k+ hypervisors and 100k+ VMs per month, enabling fleet-wide analysis and automated remediation workflows.",
      "Built a long-running VM validation stage to catch stability regressions in active instances that launch-only testing missed.",
      "Transformed a pre-deployment validation tool into a scalable multi-repository validation service supporting parallel execution of 200+ test suites before production rollout.",
    ],
  },
  {
    title: "Software Engineer Intern — Oracle",
    meta: "June-Aug 2024",
    summary:
      "Built observability and performance tooling for OCI Object Storage replication services.",
    bullets: [
      "Developed a metrics pipeline ingesting 50+ tenant-level replication and copy-service signals for network and latency analysis.",
      "Authored 50+ MQL-based monitors to isolate replication and networking issues, reducing fault localization time by about 40%.",
      "Improved observability for distributed replication workflows and made client-facing diagnostics more actionable.",
    ],
  },
  {
    title: "Software Engineer Intern — Oracle",
    meta: "May-Aug 2023",
    summary:
      "Developed automation for hardware reliability in OCI data centers.",
    bullets: [
      "Built a real-time PSU fault detection system that reduced mean detection time by about 60%.",
      "Verified fault scenarios across 3+ hardware generations, supporting migration to non-terminating VM repair models.",
      "Helped move hardware reliability workflows closer to production-ready repair pipelines.",
    ],
  },
  {
    title: "Course Staff and Lab Assistant — Carleton College",
    meta: "Northfield, MN | Sept 2022 - Sep 2024",
    summary:
      "Supported computer science instruction across algorithms, computer systems, and computer architecture coursework.",
    bullets: [
      "Mentored 50+ students through assignments, labs, and debugging across algorithms, systems, and architecture courses.",
      "Supported coursework on pipelining, cache design, and low-level performance reasoning in hands-on lab settings.",
      "Helped students build stronger fundamentals in systems thinking and technical problem solving.",
    ],
  },
  {
    title: "Data Analyst Intern — Frontage Laboratories",
    meta: "Dec 2021-Jan 2022, June-Aug 2022",
    summary:
      "Automated inventory and data workflows for biological research operations.",
    bullets: [
      "Developed Python (pandas/numpy) automation for tracking 300+ instrument inventories; doubled operational efficiency.",
      "Reduced quality-control errors by 25% through structured data archiving and validation tooling.",
      "Managed $100K+ in research supply logistics across 25+ clinical studies.",
    ],
  },
  {
    title: "Website Developer — Cahai",
    meta: "2021-2022",
    summary: "Built and managed web platform for nonprofit organization.",
    bullets: [
      "Developed and maintained website using HTML/CSS and design tooling.",
      "Partnered with 50+ local sponsors to increase traffic and engagement.",
      "Improved operational workflows for event management and ticket sales (200% efficiency gain).",
    ],
  },
];

const projects: ProjectItem[] = [
  {
    title: "Computer Vision for Autonomous Driving",
    category: "Full Stack / Computer Vision",
    image: withBase("/img/video_77_clear_day.gif"),
    summary:
      "Senior comps project spanning model experimentation, evaluation, and a public-facing project site.",
    links: [
      { label: "Case Study", href: withBase("/projects/CV4AD.pdf") },
      { label: "Website", href: "https://www.cs.carleton.edu/cs_comps/2425/tamert/cv4ad_website/index.html" },
      { label: "Code", href: "https://github.com/Carleton-Comps-CV4AD" },
    ],
  },
  {
    title: "Portfolio Website",
    category: "Website",
    image: withBase("/img/port.png"),
    summary:
      "Personal website for sharing engineering work, consulting, and project experience.",
    links: [
      { label: "PDF", href: withBase("/projects/portfolio.pdf") },
      { label: "Live Site", href: "https://zehoubenzhao.com" },
      { label: "Code", href: "https://github.com/bzhao-1/Portfolio-Website" },
    ],
  },
  {
    title: "Wordle Clone Cloud Application",
    category: "Full Stack",
    image: withBase("/img/wordle.jpg"),
    summary:
      "Cloud-backed Wordle clone with game logic, full-stack flows, and deployable application structure.",
    links: [
      { label: "PDF", href: withBase("/projects/Wordle.pdf") },
      { label: "Code", href: "https://github.com/bzhao-1/WordleClone" },
    ],
  },
  {
    title: "Frontage Inventory Automation",
    category: "Data Analytics",
    image: withBase("/img/frontage.jpeg"),
    summary:
      "Operational data automation work that streamlined inventory tracking for research workflows.",
    links: [
      { label: "PDF", href: withBase("/projects/Frontage.pdf") },
      { label: "Code", href: "https://github.com/bzhao-1/Inventory-Data-Management-System" },
    ],
  },
  {
    title: "Cahai Website",
    category: "Website",
    image: withBase("/img/cahai.png"),
    summary:
      "Nonprofit web platform and workflow management work focused on usability and local engagement.",
    links: [
      { label: "PDF", href: withBase("/projects/InfoCahai.pdf") },
      { label: "Website", href: "https://www.cahai.org" },
    ],
  },
  {
    title: "Carleton Athletics Analytics",
    category: "Data Analytics",
    image: withBase("/img/carleton.jpeg"),
    summary:
      "Analytics project for athlete tracking and reporting built around practical coaching needs.",
    links: [
      { label: "PDF", href: withBase("/projects/Carleton.pdf") },
      { label: "Code", href: "https://github.com/bzhao-1/Carleton-College-Athletics-Data-Tracking-" },
    ],
  },
  {
    title: "Computational Biology Publication",
    category: "Research",
    image: withBase("/img/pub.png"),
    summary:
      "Published research modeling the integrin adhesion code using bipartite graph methods in R.",
    links: [
      { label: "PDF", href: withBase("/projects/Research.pdf") },
      { label: "Publication", href: "https://faseb.onlinelibrary.wiley.com/doi/10.1096/fasebj.2021.35.S1.03962" },
    ],
  },
  {
    title: "High Blood Pressure Predictor",
    category: "Full Stack",
    image: withBase("/img/hbp.png"),
    summary:
      "Full-stack application exploring predictive modeling and user-facing health data workflows.",
    links: [
      { label: "PDF", href: withBase("/projects/highbp.docx.pdf") },
      { label: "Code", href: "https://github.com/bzhao-1/CS257-HighBloodPressurePredictor.git" },
    ],
  },
];

const testimonials: TestimonialItem[] = [
  {
    name: "Zakariya Mobarak",
    company: "NCR Atleos",
    image: withBase("/img/zak.jpeg"),
    href: "https://www.linkedin.com/in/zak-mob/",
    summary:
      "Zak credited our prep rounds for helping him navigate a competitive SWE market and land multiple interviews and offers.",
  },
  {
    name: "Ntense Obono",
    company: "Amazon",
    image: withBase("/img/ntense.jpeg"),
    href: "https://www.linkedin.com/in/ntenseobono/",
    summary:
      "Mock technical interview prep helped Ntense convert a final round into an Amazon SDE internship offer.",
  },
  {
    name: "Viraaj Veeramachaneni",
    company: "Verizon",
    image: withBase("/img/vv.jpeg"),
    href: "https://www.linkedin.com/in/viraajveeramachaneni/",
    summary:
      "Behavioral and technical interview practice led to multiple offers, including Verizon.",
  },
  {
    name: "Elias Venetis",
    company: "Oracle",
    image: withBase("/img/ev.jpeg"),
    href: "https://www.linkedin.com/in/elias-venetis-04851b1b5/",
    summary:
      "Former client and Carleton alum who landed an Oracle SDR role after multiple mock interview sessions.",
  },
  {
    name: "Bemnet Abebayehu",
    company: "Walmart Global Tech",
    image: withBase("/img/ba.jpeg"),
    href: "https://www.linkedin.com/in/bemnet-abebayehu/",
    summary:
      "Technical interview prep helped Bemnet land Walmart Global Tech and return for full-time work.",
  },
  {
    name: "Nolan Lwin",
    company: "Stifel Financial",
    image: withBase("/img/NL.jpeg"),
    href: "https://www.linkedin.com/in/nolan-lwin/",
    summary:
      "Mock interviewing support helped Nolan secure a software engineering internship offer.",
  },
];

const skills = [
  { label: "Python", group: "languages", tone: "primary", style: { top: "12%", left: "8%", animationDelay: "0s" } },
  { label: "Java", group: "languages", tone: "primary", style: { top: "24%", left: "34%", animationDelay: "-4s" } },
  { label: "Go", group: "languages", tone: "primary", style: { top: "14%", left: "58%", animationDelay: "-8s" } },
  { label: "Terraform", group: "infrastructure", tone: "primary", style: { top: "20%", left: "80%", animationDelay: "-12s" } },
  { label: "SQL", group: "languages", tone: "primary", style: { top: "36%", left: "20%", animationDelay: "-16s" } },
  { label: "Distributed Systems", group: "infrastructure", tone: "infra", style: { top: "40%", left: "50%", animationDelay: "-6s" } },
  { label: "Cloud Infrastructure", group: "infrastructure", tone: "infra", style: { top: "32%", left: "72%", animationDelay: "-10s" } },
  { label: "Observability", group: "infrastructure", tone: "infra", style: { top: "56%", left: "14%", animationDelay: "-14s" } },
  { label: "Deployment Pipelines", group: "infrastructure", tone: "infra", style: { top: "60%", left: "40%", animationDelay: "-18s" } },
  { label: "Docker", group: "infrastructure", tone: "infra", style: { top: "74%", left: "24%", animationDelay: "-2s" } },
  { label: "DevOps", group: "infrastructure", tone: "infra", style: { top: "72%", left: "58%", animationDelay: "-20s" } },
  { label: "CI/CD", group: "infrastructure", tone: "infra", style: { top: "78%", left: "80%", animationDelay: "-24s" } },
  { label: "JavaScript", group: "languages", tone: "working", style: { top: "50%", left: "84%", animationDelay: "-7s" } },
  { label: "HTML/CSS", group: "languages", tone: "working", style: { top: "86%", left: "50%", animationDelay: "-11s" } },
  { label: "C/C++", group: "languages", tone: "working", style: { top: "84%", left: "10%", animationDelay: "-15s" } },
  { label: "R", group: "languages", tone: "working", style: { top: "10%", left: "92%", animationDelay: "-19s" } },
];

const beyondWork = [
  {
    title: "Strength Training",
    description: "Consistent lifting focused on longevity, performance, and recovery.",
    image: undefined,
    href: "https://www.youtube.com/watch?v=CsQwhHHTusc",
    icon: Dumbbell,
  },
  {
    title: "Rugby",
    description: "Team sport and community in Austin with the Blacks; I enjoy training and competing.",
    image: withBase("/img/austin_blacks.JPEG"),
    href: undefined,
    icon: Trophy,
  },
  {
    title: "Video Editing",
    description: "I occasionally edit highlights and short-form clips.",
    image: undefined,
    href: "https://www.youtube.com/watch?v=06CUc1_g4Xk",
    icon: Play,
  },
  {
    title: "Football",
    description: "Former four-year NCAA D3 starter; I bring that discipline to engineering.",
    image: withBase("/img/football.JPG"),
    href: "http://www.hudl.com/v/2JtXNT",
    icon: ShieldCheck,
  },
];

function App() {
  const [skillFilter, setSkillFilter] = useState<SkillFilter>("all");

  const visibleSkills =
    skillFilter === "all"
      ? skills
      : skills.filter((skill) => skill.group === skillFilter);

  return (
    <div className="site-shell">
      <div className="site-bg" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home">
          BZ
        </a>
        <nav className="topnav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-primary" href={withBase("/resume/resume.pdf")} target="_blank" rel="noreferrer">
          Resume
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Software Engineer | Austin, Texas</span>
            <h1>Ben Zhao</h1>
            <p className="hero-lead">
              I build reliable distributed systems and production deployment workflows at Oracle
              Cloud Infrastructure, with a focus on validation, observability, and safe rollouts
              across large fleets.
            </p>
            <div className="hero-highlights">
              {recruiterHighlights.map((item) => (
                <div key={item} className="highlight-pill">
                  <Sparkles size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                View Experience
              </a>
              <a className="button button-secondary" href="mailto:benzhao90@gmail.com">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="profile-card">
              <img className="profile-photo" src={withBase("/img/benzhao.jpg")} alt="Ben Zhao headshot" />
              <div className="profile-meta">
                <h2>Ben Zhao</h2>
                <p>Software Engineer | Distributed Systems & Cloud Infrastructure</p>
              </div>
              <ul className="quick-facts">
                <li>
                  <MapPin size={16} />
                  <span>Austin, Texas</span>
                </li>
                <li>
                  <BriefcaseBusiness size={16} />
                  <span>OCI Compute VMI</span>
                </li>
                <li>
                  <GraduationCap size={16} />
                  <span>Carleton College, BA Computer Science</span>
                </li>
                <li>
                  <GraduationCap size={16} />
                  <span>Starting MSCS at UT Austin, Fall 2026</span>
                </li>
              </ul>
              <div className="social-row">
                <a href="mailto:benzhao90@gmail.com" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href="https://www.linkedin.com/in/zehou-zhao/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Link2 size={18} />
                </a>
                <a href="https://github.com/bzhao-1" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitBranch size={18} />
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="section section-grid" id="about">
          <div>
            <SectionHeader
              eyebrow="About"
              title="About Me"
              description="Software engineer focused on cloud infrastructure, distributed systems, and production reliability."
            />
            <div className="stack prose-card">
              <p>
                I&apos;m a software engineer based in Austin, Texas, focused on building reliable,
                large-scale cloud infrastructure.
              </p>
              <p>
                I currently work on the Oracle Cloud Infrastructure (OCI) Compute dataplane,
                building hypervisor images, validation pipelines, and supporting global production
                deployments across a distributed fleet. My work centers on infrastructure
                reliability: ensuring images are validated and rolled out safely at scale while
                reducing deployment risk in complex environments.
              </p>
              <p>
                Previously, I built an automated PSU fault detection system that enabled one of
                OCI&apos;s first live hardware repair workflows. I&apos;ve also developed per-tenant
                metrics pipelines within Object Storage to improve observability, performance
                analysis, and root-cause clarity in distributed systems.
              </p>
              <p>
                I graduated from Carleton College with a degree in Computer Science and was a
                four-year varsity football starter. That experience shaped how I approach
                engineering: disciplined, accountable, and comfortable operating under pressure.
              </p>
              <p>
                I&apos;m particularly interested in resilient distributed systems, software that
                remains stable under shifting conditions and recovers intelligently from failure.
                I&apos;m open to new opportunities where I can continue operating close to production
                and solving high-impact infrastructure problems.
              </p>
            </div>
          </div>

            <div className="aside-stack">
              <div className="mini-panel">
              <h3>Focus Areas</h3>
              <ul className="mini-list">
                <li>Hypervisor image builds and validation</li>
                <li>Deployment safety and rollback design</li>
                <li>Observability for distributed cloud systems</li>
              </ul>
            </div>
            <div className="mini-panel">
              <h3>Current Search</h3>
              <ul className="mini-list">
                <li>Open to SWE I / SWE II roles</li>
                <li>Remote, Austin, or MSP preferred</li>
                <li>Resume and project portfolio linked below</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeader
            eyebrow="Experience"
            title="Experience"
            description="Oracle Cloud Infrastructure work across Compute VMI, Object Storage, and earlier analytics and web roles."
          />
          <div className="experience-layout">
            <div className="experience-column">
              {experiences.map((item, index) => (
                <article className={`experience-card ${index === 0 ? "is-current" : ""}`} key={`${item.title}-${item.meta}`}>
                  <div className="experience-card__header">
                    <div>
                      <h3>{item.title}</h3>
                      <p className="experience-meta">{item.meta}</p>
                    </div>
                    {index === 0 ? <span className="status-badge">Current</span> : null}
                  </div>
                  <p className="experience-summary">{item.summary}</p>
                  <ul className="experience-bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <aside className="education-panel">
              <div className="panel-card">
                <h3>Education</h3>
                <p className="education-school">Carleton College — BA Computer Science</p>
                <p className="education-meta">Mar 2025</p>
                <p className="education-gpa">3.72 GPA</p>
              </div>

              <div className="panel-card">
                <h3>Professional Development</h3>
                <ul className="mini-list">
                  <li>Coaching across football and rugby programs since 2021</li>
                  <li>Computational biology publication in FASEB Journal</li>
                  <li>Piper Sandler technology and finance exploration program</li>
                  <li>Carleton computer science course staff experience</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeader
            eyebrow="Projects"
            title="Projects"
            description="Selected work across full-stack applications, data systems, research, and web development."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card__body">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="link-row">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                        <ArrowUpRight size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section two-up-section" id="skills">
          <div>
            <SectionHeader
              eyebrow="Skills"
              title="Programming Languages & Skills"
              description="Languages, infrastructure tools, and systems work I use most often."
            />
            <div className="skill-controls">
              {[
                { label: "All", value: "all" },
                { label: "Languages", value: "languages" },
                { label: "Infrastructure", value: "infrastructure" },
              ].map((filter) => (
                <button
                  key={filter.value}
                  className={skillFilter === filter.value ? "is-active" : ""}
                  onClick={() => setSkillFilter(filter.value as SkillFilter)}
                  type="button"
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="skills-cloud-modern">
              {visibleSkills.map((skill) => (
                <span
                  key={skill.label}
                  className={`skill-tag tag-${skill.tone}`}
                  style={skill.style}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          <div className="aside-stack">
            <div className="mini-panel">
              <h3>Primary Stack</h3>
              <ul className="mini-list">
                <li>Python, Java, Go, Terraform, SQL</li>
                <li>Docker, CI/CD, deployment automation</li>
                <li>Cloud infrastructure and observability</li>
              </ul>
            </div>
            <div className="mini-panel">
              <h3>Working Style</h3>
              <ul className="mini-list">
                <li>Production-close, validation-heavy, rollback-aware</li>
                <li>Prefers clear system boundaries and operational visibility</li>
                <li>Comfortable with cross-functional engineering + operations work</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="beyond">
          <SectionHeader
            eyebrow="Beyond Work"
            title="Beyond Work"
            description="Interests outside engineering that have shaped how I work and compete."
          />
          <div className="media-grid">
            {beyondWork.map((item) => {
              const Icon = item.icon;
              const card = (
                <>
                  {item.image ? (
                    <img src={item.image} alt={item.title} loading="lazy" />
                  ) : (
                    <div className="media-card__visual" aria-hidden="true">
                      <Icon size={28} />
                    </div>
                  )}
                  <div className="media-card__body">
                    <div className="media-card__title">
                      <Icon size={16} />
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.description}</p>
                    {item.href ? (
                      <span className="media-link">
                        {item.title === "Football" ? "View" : "Watch"} <ArrowUpRight size={14} />
                      </span>
                    ) : null}
                  </div>
                </>
              );

              return item.href ? (
                <a className="media-card" href={item.href} key={item.title} target="_blank" rel="noreferrer">
                  {card}
                </a>
              ) : (
                <article className="media-card" key={item.title}>
                  {card}
                </article>
              );
            })}
          </div>
        </section>

        <section className="section two-up-section" id="leadership">
          <div>
            <SectionHeader
              eyebrow="Leadership"
              title="Organizations and leadership"
              description="Leadership roles and team responsibilities I have taken on outside the classroom and workplace."
            />
            <article className="leadership-card">
              <img src={withBase("/img/rfc.jpeg")} alt="Carleton Rugby Club" loading="lazy" />
              <div className="leadership-card__body">
                <h3>Carleton Rugby Club</h3>
                <p className="experience-meta">VP • Forwards Captain • Treasurer</p>
                <ul className="experience-bullets">
                  <li>Managed team budget, dues, and reimbursements.</li>
                  <li>Scheduled matches and coordinated weekly practices.</li>
                  <li>Onboarded new players and coached fundamentals.</li>
                  <li>Led forward pack organization and on-field communication.</li>
                </ul>
                <p className="impact-line">Impact: Improved team operations and player development.</p>
              </div>
            </article>
          </div>

            <div className="aside-stack">
              <div className="mini-panel">
              <h3>Career Services</h3>
              <p>
                Mock interviews, resume review, and practical recruiting prep for students and early-career candidates.
              </p>
              <a className="button button-secondary" href="https://calendly.com/benzhao1on1/30min?preview_source=et_card&month=2024-12" target="_blank" rel="noreferrer">
                Schedule a Session
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="consulting">
          <SectionHeader
            eyebrow="Consulting"
            title="Client Success Stories"
            description="Outcomes from interview prep, technical practice, and career coaching work."
          />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <a className="testimonial-card" href={item.href} key={item.name} target="_blank" rel="noreferrer">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div>
                  <h3>{item.name}</h3>
                  <p className="experience-meta">{item.company}</p>
                  <p>{item.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

type HeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeader({ eyebrow, title, description }: HeaderProps) {
  return (
    <div className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default App;
