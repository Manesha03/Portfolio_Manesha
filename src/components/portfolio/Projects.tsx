import { motion } from "framer-motion";
import { useState } from "react";
import {
  BarChart3,
  ChevronDown,
  ChevronRight,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  HeartPulse,
  LineChart,
  Monitor,
  Network,
  ShoppingBag,
  ServerCog,
  Smartphone,
  Sprout,
} from "lucide-react";
import agrospherePreview from "../../assets/agrosphere-preview.jpg";
import flexPreview from "../../assets/flex-preview.jpg";
import halomedPreview from "../../assets/halomed-preview.jpg";
import moofiPreview from "../../assets/moofi-preview.jpg";
import smartCampusPreview from "../../assets/smart-campus-preview.png";
import studentStatisticsPreview from "../../assets/student-statistics-preview.png";
import trendifyPreview from "../../assets/trendify-preview.jpg";
import urbanCartEtlPreview from "../../assets/urbancart-etl-preview.png";
import { Section } from "./Section";

type Project = {
  title: string;
  period: string;
  desc: string;
  detailedDesc: string[];
  tags: string[];
  category: "Full Stack" | "Analytics" | "Data Warehouse" | "Mobile" | "Web App";
  gradient: string;
  github: string;
  icon: React.ElementType;
  stats: string[];
  image?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Smart Campus Operations Hub",
    period: "Feb 2026 - Apr 2026",
    desc: "A full-stack campus operations platform for resources, bookings, QR check-ins, maintenance tickets, notifications, and role-based administration.",
    detailedDesc: [
      "Built secure signup, email verification, Google OAuth2 login, JWT authorization, and role-based access control.",
      "Implemented resource discovery, availability checking, conflict prevention, capacity validation, and approval workflows.",
      "Added QR code booking verification, maintenance ticket tracking, technician assignment, attachments, and notification actions.",
      "Supported admin management for users, roles, staff approvals, resources, bookings, and maintenance operations.",
    ],
    tags: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "OAuth2",
      "JWT",
      "MySQL",
      "React",
      "Vite",
      "Tailwind CSS",
      "Cloudinary",
      "Postman",
      "GitHub Actions",
    ],
    category: "Full Stack",
    gradient: "from-sky-500/35 via-blue-500/25 to-cyan-400/35",
    github: "https://github.com/Manesha03/it3030-paf-2026-smart-campus-group118",
    icon: Monitor,
    stats: ["4 user roles", "QR verification", "CI workflow"],
    image: smartCampusPreview,
  },
  {
    title: "Student Persistence Analysis",
    period: "Mar 2026 - Apr 2026",
    desc: "An R-based statistical modeling project studying whether supported students show stronger persistence in their studies.",
    detailedDesc: [
      "Cleaned and engineered features from a Student Performance Factors dataset with 6,607 records.",
      "Performed EDA across academic, social, and support-related variables such as resources, attendance, tutoring, and peer influence.",
      "Applied ANOVA, t-tests, correlation analysis, multiple linear regression, Naive Bayes classification, and decision tree regression.",
      "Documented the workflow in R Markdown with visualizations and interpretation for educational analytics.",
    ],
    tags: [
      "R",
      "R Markdown",
      "EDA",
      "Hypothesis Testing",
      "ANOVA",
      "T-tests",
      "Regression",
      "Naive Bayes",
      "Decision Trees",
      "Data Visualization",
    ],
    category: "Analytics",
    gradient: "from-indigo-500/35 via-blue-500/25 to-violet-400/35",
    github: "https://github.com/Manesha03/student-performance-factors-stat-modeling",
    icon: GraduationCap,
    stats: ["6,607 records", "Statistical tests", "Predictive models"],
    image: studentStatisticsPreview,
  },
  {
    title: "UrbanCart SQL Data Warehouse",
    period: "Mar 2026 - Apr 2026",
    desc: "An end-to-end SQL Server data warehouse and analytics solution for e-commerce and superstore business insights.",
    detailedDesc: [
      "Transformed raw operational data through source, staging, and warehouse layers.",
      "Designed a snowflake schema with fact and dimension tables for analytical reporting.",
      "Created T-SQL ETL stored procedures with SCD Type 1 and Type 2 dimensional history management.",
      "Built profiling outputs, ER and ETL diagrams, an SSAS cube, and Power BI and Excel reports.",
    ],
    tags: [
      "SQL Server",
      "T-SQL",
      "SSMS",
      "SSDT",
      "SSAS",
      "Power BI",
      "Excel",
      "ETL",
      "Snowflake Schema",
      "OLAP",
      "Dimensional Modeling",
    ],
    category: "Data Warehouse",
    gradient: "from-cyan-400/35 via-blue-500/25 to-slate-300/30",
    github: "https://github.com/Manesha03/SQL-Data-Warehouse-and-Analytics-Solution",
    icon: Database,
    stats: ["SCD Type 1/2", "OLAP cube", "BI reports"],
    image: urbanCartEtlPreview,
  },
  {
    title: "AgroSphere",
    period: "Jul 2025 - Nov 2025",
    desc: "A MERN agriculture management platform for farmers, buyers, and admins across crops, land, marketplace, orders, payments, and Q&A.",
    detailedDesc: [
      "Developed crop tracking, crop record management, land details, marketplace browsing, and product ordering workflows.",
      "Built user and admin authentication, profiles, notifications, payment and billing handling, and admin dashboards.",
      "Created REST APIs with Node.js and Express.js connected to MongoDB for agricultural and marketplace records.",
      "Collaborated on a centralized platform for farmers, buyers, and administrators.",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST APIs",
      "Axios",
      "HTML",
      "CSS",
    ],
    category: "Full Stack",
    gradient: "from-emerald-400/30 via-blue-500/25 to-cyan-400/30",
    github: "https://github.com/Manesha03/Farmer-Network-and-Smart-Crop-Management-System",
    icon: Sprout,
    stats: ["MERN stack", "Marketplace", "Admin dashboard"],
    image: agrospherePreview,
  },
  {
    title: "MOOFI",
    period: "Oct 2025 - Oct 2025",
    desc: "An Android habit and wellness tracker that helps users build healthy routines, journal moods, manage hydration reminders, and view progress.",
    detailedDesc: [
      "Built habit tracking flows for daily routines and wellness-focused user engagement.",
      "Added emoji-based mood journaling to help users monitor emotional wellbeing.",
      "Included hydration reminders and visual progress charts for a more motivating experience.",
      "Designed the Android UI to feel intuitive, responsive, and easy to use.",
    ],
    tags: [
      "Kotlin",
      "Android Studio",
      "Android",
      "Habit Tracking",
      "Mood Journal",
      "Wellness",
      "Charts",
    ],
    category: "Mobile",
    gradient: "from-violet-500/35 via-blue-500/25 to-pink-400/30",
    github: "https://github.com/Manesha03/Habit-Tracker",
    icon: HeartPulse,
    stats: ["Android app", "Mood journal", "Wellness charts"],
    image: moofiPreview,
  },
  {
    title: "FLEX",
    period: "Sep 2025 - Sep 2025",
    desc: "A fitness tracker Android app for activity tracking, health stats, personalized workouts, progress insights, and meditation guidance.",
    detailedDesc: [
      "Designed a visually appealing mobile experience focused on motivation and health tracking.",
      "Created screens for step tracking, strength and cardio monitoring, and progress insights.",
      "Added personalized workout and meditation guidance flows.",
      "Built the interface with Android XML layouts while applying Android UI/UX best practices.",
    ],
    tags: [
      "Kotlin",
      "Android Studio",
      "XML",
      "Android",
      "Fitness Tracking",
      "UI/UX",
      "Health Stats",
    ],
    category: "Mobile",
    gradient: "from-cyan-400/35 via-blue-500/25 to-indigo-500/35",
    github: "https://github.com/Manesha03/Fitness-Tracker",
    icon: Smartphone,
    stats: ["Fitness UI", "Progress insights", "Meditation"],
    image: flexPreview,
  },
  {
    title: "HaloMed",
    period: "Feb 2025 - Jun 2025",
    desc: "A Java and MySQL healthcare web application that simulates online medical appointment booking and e-channelling workflows.",
    detailedDesc: [
      "Developed user and admin login flows for healthcare appointment management.",
      "Implemented doctor search by name, specialization, hospital, and date.",
      "Built appointment booking, patient profile management, lab test booking, and payment handling features.",
      "Created admin workflows for managing doctors, patients, appointments, availability, and lab tests.",
    ],
    tags: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Apache Tomcat",
    ],
    category: "Web App",
    gradient: "from-blue-500/35 via-sky-500/25 to-emerald-400/30",
    github: "https://github.com/Manesha03/Online-E-Channelling",
    icon: HeartPulse,
    stats: ["Doctor search", "Appointments", "Admin panel"],
    image: halomedPreview,
  },
  {
    title: "Trendify",
    period: "Aug 2024 - Nov 2024",
    desc: "A PHP and MySQL online clothing store management system for product browsing, carts, profiles, payments, and admin management.",
    detailedDesc: [
      "Developed customer and admin login flows for an online fashion store.",
      "Implemented category-based product browsing and shopping cart management.",
      "Built user profile, shipping, and payment detail handling workflows.",
      "Created admin dashboard features for managing users, products, and suppliers.",
    ],
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "XAMPP", "phpMyAdmin", "E-commerce"],
    category: "Web App",
    gradient: "from-slate-400/30 via-blue-500/25 to-fuchsia-400/30",
    github: "https://github.com/Manesha03/Online-Fashion-Store",
    icon: ShoppingBag,
    stats: ["E-commerce", "Cart system", "Admin dashboard"],
    image: trendifyPreview,
  },
];

const CATEGORY_CONFIG = {
  "Full Stack": { icon: ServerCog, label: "Full Stack" },
  Analytics: { icon: LineChart, label: "Analytics" },
  "Data Warehouse": { icon: Database, label: "Data Warehouse" },
  Mobile: { icon: Smartphone, label: "Mobile" },
  "Web App": { icon: Monitor, label: "Web App" },
};

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
      {project.image ? (
        <>
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/80" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-color" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_26%),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:auto,28px_28px,28px_28px]" />
      )}
      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs text-white backdrop-blur">
        <Network className="size-3" />
        {project.category}
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-white/70">{project.period}</p>
            <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
          </div>
          <div className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-black/25 backdrop-blur">
            <Icon className="size-7 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [categoryFilter, setCategoryFilter] = useState<"All" | Project["category"]>("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(PROJECTS[0].title);

  const filteredItems = PROJECTS.filter(
    (p) => categoryFilter === "All" || p.category === categoryFilter,
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Systems, models, and analytics I have built"
      subtitle="A selected set of data science, data warehouse, and full-stack projects from my SLIIT journey."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setCategoryFilter("All")}
          className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
            categoryFilter === "All"
              ? "bg-primary text-primary-foreground shadow-lg scale-105"
              : "border border-primary/10 bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-foreground"
          }`}
        >
          All Projects
        </button>
        {(Object.keys(CATEGORY_CONFIG) as Project["category"][]).map((cat) => {
          const Icon = CATEGORY_CONFIG[cat].icon;
          return (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                categoryFilter === cat
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "border border-primary/10 bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              }`}
            >
              <Icon className="size-4" />
              {CATEGORY_CONFIG[cat].label}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {filteredItems.map((project, index) => {
          const isExpanded = expandedProject === project.title;

          return (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
            >
              <ProjectVisual project={project} />

              <div className="p-5 md:p-6">
                <div className="-mt-1 mb-4 grid grid-cols-3 gap-2">
                  {project.stats.map((stat) => (
                    <div
                      key={stat}
                      className="flex min-h-12 items-center rounded-xl border border-primary/15 bg-primary/8 px-3 py-2 text-[10px] font-semibold leading-snug text-secondary"
                    >
                      {stat}
                    </div>
                  ))}
                </div>

                <p className="text-xs font-medium text-secondary">{project.period}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>

                <button
                  onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                  className="mt-3 flex items-center gap-1 text-xs font-medium text-secondary transition-colors hover:text-primary"
                >
                  {isExpanded ? (
                    <>
                      <ChevronDown className="size-3" /> Hide contributions
                    </>
                  ) : (
                    <>
                      <ChevronRight className="size-3" /> View key contributions
                    </>
                  )}
                </button>

                {isExpanded && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 space-y-1.5 border-t border-border/50 pt-3"
                  >
                    {project.detailedDesc.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-0.5 text-primary">-&gt;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-secondary/20 bg-secondary/10 px-2 py-0.5 text-[10px] font-medium text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-border/50 pt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-all hover:text-primary"
                  >
                    <Github className="size-3.5 transition-transform group-hover/btn:scale-110" />
                    Source Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center gap-1.5 text-xs font-medium text-secondary transition-all hover:text-primary"
                  >
                    <ExternalLink className="size-3.5 transition-transform group-hover/btn:scale-110" />
                    View Repository
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-300 group-hover:ring-primary/20" />
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
