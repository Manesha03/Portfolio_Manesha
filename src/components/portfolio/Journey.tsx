import { motion } from "framer-motion";
import { BarChart3, BookOpen, Code2, Database, GraduationCap, ServerCog } from "lucide-react";
import { Section } from "./Section";

const ROLES = [
  {
    period: "2023 - Present",
    role: "BSc undergraduate specializing in Data Science",
    society: "Sri Lanka Institute of Information Technology (SLIIT)",
    icon: GraduationCap,
    iconColor: "text-blue-400",
  },
  {
    period: "Feb 2026 - Apr 2026",
    role: "Smart Campus Operations Hub",
    society: "Spring Boot, React, MySQL, OAuth2, JWT",
    desc: "Full-stack campus operations platform with bookings, QR verification, maintenance tickets, notifications, and admin workflows.",
    icon: ServerCog,
    iconColor: "text-cyan-400",
  },
  {
    period: "Mar 2026 - Apr 2026",
    role: "Student Persistence Analysis",
    society: "R, statistical modeling, EDA, classification",
    desc: "End-to-end analysis of academic and support factors using 6,607 student records.",
    icon: BarChart3,
    iconColor: "text-indigo-400",
  },
  {
    period: "Mar 2026 - Apr 2026",
    role: "UrbanCart Data Warehouse",
    society: "SQL Server, T-SQL, SSAS, Power BI",
    desc: "Source, staging, and warehouse layers with snowflake schema, ETL, SCD history, OLAP, and BI reports.",
    icon: Database,
    iconColor: "text-sky-400",
  },
  {
    period: "Jul 2025 - Nov 2025",
    role: "AgroSphere MERN Platform",
    society: "React, Node.js, Express.js, MongoDB",
    desc: "Agriculture management system for crops, land records, marketplace, orders, payments, Q&A, and admin dashboards.",
    icon: Code2,
    iconColor: "text-emerald-400",
  },
  {
    period: "Always Learning",
    role: "Data science and software craft",
    society: "Statistics, databases, dashboards, APIs",
    icon: BookOpen,
    iconColor: "text-violet-400",
  },
];

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Journey"
      title="A timeline through data and systems"
      subtitle="The projects and learning steps shaping my portfolio."
    >
      <div className="relative mx-auto max-w-4xl">
        <div
          className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:left-1/2"
          aria-hidden
        />
        <ul className="space-y-10">
          {ROLES.map((r, i) => (
            <motion.li
              key={`${r.period}-${r.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>div:first-child]:col-start-2" : ""}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <span className="absolute left-2 top-1 size-4 rounded-full border-2 border-background bg-primary glow-primary md:left-1/2 md:-translate-x-1/2" />
                <div className="glass rounded-2xl p-5 transition-shadow duration-300 hover:shadow-lg">
                  <div className="mb-2 inline-flex items-center gap-2 text-xs text-secondary">
                    <r.icon className={`size-3.5 ${r.iconColor}`} />
                    {r.period}
                  </div>
                  <h3 className="text-lg font-semibold">{r.role}</h3>
                  <p className="text-sm text-muted-foreground">{r.society}</p>
                  {r.desc && (
                    <div className="mt-3">
                      <p className="text-sm text-muted-foreground/90">{r.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
