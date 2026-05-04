import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Dumbbell,
  GitBranch,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Play,
  ShieldCheck,
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
  imageAlt: string;
  summary: string;
  links: Array<{ label: string; href: string }>;
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer — Oracle Cloud Infrastructure (Compute VMI)",
    meta: "Austin, TX | July 2025 - Present",
    summary:
      "Building production validation, release, and security systems for OCI Compute dataplane infrastructure.",
    bullets: [
      "Rebuilt a pre-deployment validation tool into a multi-repository service that runs 200+ stable test suites before OCI Compute production rollouts.",
      "Designed and implemented a long-running VM validation stage to catch stability regressions on active instances that launch-only testing missed.",
      "Built a fleet-wide security data pipeline ingesting, correlating, and reporting vulnerability signals across 10k+ hypervisors and 100k+ VMs per month.",
      "Automated triage and remediation workflows for hundreds of monthly security findings, reducing manual investigation and improving fleet-wide pattern analysis.",
    ],
  },
  {
    title: "Software Engineer Intern — Oracle",
    meta: "June-Aug 2024",
    summary:
      "Built observability and performance tooling for OCI Object Storage replication services.",
    bullets: [
      "Designed and deployed a metrics pipeline ingesting 50+ tenant-level replication and copy-service signals for network and latency analysis.",
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
      "Built a real-time PSU fault detection system that reduced mean detection time by about 60% and supported live repair services.",
      "Verified fault scenarios across 3+ hardware generations, supporting migration to non-terminating VM repair models.",
      "Moved hardware reliability workflows closer to production repair pipelines for OCI infrastructure operations.",
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
    category: "Systems Research",
    image: withBase("/img/video_77_clear_day.gif"),
    imageAlt: "Autonomous driving semantic segmentation output from a CARLA simulation",
    summary:
      "Built large-scale evaluation pipelines for 1M+ CARLA simulation samples, trained HRNetV2 segmentation models in PyTorch, and measured robustness under domain shift.",
    links: [
      { label: "Case Study", href: withBase("/projects/CV4AD.pdf") },
      { label: "Website", href: "https://www.cs.carleton.edu/cs_comps/2425/tamert/cv4ad_website/index.html" },
      { label: "Code", href: "https://github.com/Carleton-Comps-CV4AD" },
    ],
  },
  {
    title: "Frontage Inventory Automation",
    category: "Data Pipeline",
    image: withBase("/img/frontage.jpeg"),
    imageAlt: "Frontage Laboratories inventory automation project graphic",
    summary:
      "Built Python data automation for 300+ instrument inventories, replacing manual tracking with structured operational workflows for research teams.",
    links: [
      { label: "PDF", href: withBase("/projects/Frontage.pdf") },
      { label: "Code", href: "https://github.com/bzhao-1/Inventory-Data-Management-System" },
    ],
  },
  {
    title: "Computational Biology Publication",
    category: "Data Systems",
    image: withBase("/img/pub.png"),
    imageAlt: "Computational biology publication graphic",
    summary:
      "Designed an analysis workflow in R to model integrin adhesion relationships with bipartite graphs and produce publication-ready experimental results.",
    links: [
      { label: "PDF", href: withBase("/projects/Research.pdf") },
      { label: "Publication", href: "https://faseb.onlinelibrary.wiley.com/doi/10.1096/fasebj.2021.35.S1.03962" },
    ],
  },
  {
    title: "Scheme Interpreter",
    category: "Systems",
    image: withBase("/img/scheme-interpreter-diagram.png"),
    imageAlt: "Abstract diagram representing a Scheme interpreter runtime",
    summary:
      "Implemented a Scheme interpreter with primitives and continuations to strengthen compiler, runtime, and systems-level design fundamentals.",
    links: [],
  },
];

const skills = [
  { label: "Python", group: "languages", tone: "primary", style: { top: "12%", left: "8%", animationDelay: "0s" } },
  { label: "Java", group: "languages", tone: "primary", style: { top: "24%", left: "34%", animationDelay: "-4s" } },
  { label: "Go", group: "languages", tone: "primary", style: { top: "14%", left: "58%", animationDelay: "-8s" } },
  { label: "SQL", group: "languages", tone: "primary", style: { top: "36%", left: "20%", animationDelay: "-16s" } },
  { label: "Distributed Systems", group: "infrastructure", tone: "primary", style: { top: "40%", left: "50%", animationDelay: "-6s" } },
  { label: "CI/CD", group: "infrastructure", tone: "primary", style: { top: "20%", left: "80%", animationDelay: "-12s" } },
  { label: "Deployment Systems", group: "infrastructure", tone: "infra", style: { top: "32%", left: "72%", animationDelay: "-10s" } },
  { label: "Observability", group: "infrastructure", tone: "infra", style: { top: "56%", left: "14%", animationDelay: "-14s" } },
  { label: "Validation Pipelines", group: "infrastructure", tone: "infra", style: { top: "60%", left: "40%", animationDelay: "-18s" } },
  { label: "Infrastructure Automation", group: "infrastructure", tone: "infra", style: { top: "72%", left: "58%", animationDelay: "-20s" } },
  { label: "Docker", group: "infrastructure", tone: "infra", style: { top: "74%", left: "24%", animationDelay: "-2s" } },
  { label: "Terraform", group: "infrastructure", tone: "infra", style: { top: "78%", left: "80%", animationDelay: "-24s" } },
  { label: "Data Pipelines", group: "infrastructure", tone: "infra", style: { top: "50%", left: "84%", animationDelay: "-7s" } },
  { label: "Security Tooling", group: "infrastructure", tone: "infra", style: { top: "10%", left: "92%", animationDelay: "-19s" } },
  { label: "C/C++", group: "languages", tone: "working", style: { top: "84%", left: "10%", animationDelay: "-15s" } },
  { label: "JavaScript", group: "languages", tone: "working", style: { top: "86%", left: "50%", animationDelay: "-11s" } },
  { label: "R", group: "languages", tone: "working", style: { top: "88%", left: "72%", animationDelay: "-21s" } },
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
    image: withBase("/img/austin-blacks-rugby.jpg"),
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
    image: withBase("/img/ben-zhao-football.jpg"),
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
            <div className="hero-signal">
              <p className="hero-lead">Software Engineer focused on cloud infrastructure and distributed systems</p>
              <p className="hero-lead">Building deployment validation and release systems for OCI Compute at production scale</p>
              <p className="hero-techline">Python • Java • Distributed Systems • CI/CD • Infrastructure Automation</p>
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
              <img className="profile-photo" src={withBase("/img/ben-zhao-headshot.jpg")} alt="Ben Zhao headshot" />
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
              description="Cloud infrastructure engineer focused on production reliability, deployment safety, and distributed systems."
            />
            <div className="stack prose-card">
              <p>
                Software engineer based in Austin, Texas, focused on reliable cloud infrastructure and distributed systems.
              </p>
              <p>
                At Oracle Cloud Infrastructure Compute, I work on hypervisor image validation, deployment safety, release workflows, and security tooling for production systems operating across a global fleet.
              </p>
              <p>
                Previous OCI work includes PSU fault detection for live repair workflows and tenant-level observability pipelines for Object Storage replication services.
              </p>
              <p>
                I graduated from Carleton College in Computer Science, start the UT Austin MSCS program in Fall 2026, and am most interested in backend, platform, cloud infrastructure, and AI infrastructure roles.
              </p>
            </div>
          </div>

            <div className="aside-stack">
              <div className="mini-panel">
              <h3>Focus Areas</h3>
              <ul className="mini-list">
                <li>Distributed systems and backend infrastructure</li>
                <li>Deployment validation, rollout safety, and CI/CD</li>
                <li>Security tooling and observability at production scale</li>
              </ul>
            </div>
            <div className="mini-panel">
              <h3>Current Search</h3>
              <ul className="mini-list">
                <li>Open to SWE I / SWE II backend, platform, and infra roles</li>
                <li>Austin, remote, or high-scale infrastructure teams</li>
                <li>Targeting production cloud, platform, and AI infra work</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeader
            eyebrow="Experience"
            title="Experience"
            description="Production cloud infrastructure work across OCI Compute and Object Storage, with earlier systems, data, and teaching roles."
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
                  <li>UT Austin MSCS starting Fall 2026</li>
                  <li>Computational biology publication in FASEB Journal</li>
                  <li>Carleton computer science course staff experience</li>
                  <li>Four-year varsity football starter and rugby leadership experience</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeader
            eyebrow="Projects"
            title="Projects"
            description="Selected systems, data, and research projects that reinforce backend, infrastructure, and large-scale engineering work."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
                <div className="project-card__body">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  {project.links.length > 0 ? (
                    <div className="link-row">
                      {project.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                          <ArrowUpRight size={15} />
                        </a>
                      ))}
                    </div>
                  ) : null}
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
              description="Languages, backend systems, infrastructure tooling, and reliability work most relevant to production platform roles."
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
              <h3>Languages</h3>
              <ul className="mini-list">
                <li>Python, Java, Go, SQL</li>
                <li>C/C++ with working knowledge of JavaScript and R</li>
              </ul>
            </div>
            <div className="mini-panel">
              <h3>Backend</h3>
              <ul className="mini-list">
                <li>APIs, distributed systems, data pipelines</li>
                <li>Validation-heavy and production-close engineering</li>
              </ul>
            </div>
            <div className="mini-panel">
              <h3>Infrastructure</h3>
              <ul className="mini-list">
                <li>CI/CD, deployment systems, validation, observability</li>
                <li>Security tooling and infrastructure automation</li>
              </ul>
            </div>
            <div className="mini-panel">
              <h3>Cloud & Testing</h3>
              <ul className="mini-list">
                <li>Docker, Terraform, cloud infrastructure</li>
                <li>Automation, reliability, rollback-aware release workflows</li>
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
              <img src={withBase("/img/carleton-rugby-club.jpg")} alt="Carleton Rugby Club team photo" loading="lazy" />
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
