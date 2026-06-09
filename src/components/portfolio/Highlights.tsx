import { motion } from "framer-motion";
import { useState } from "react";
import {
  Award,
  BarChart3,
  Brain,
  Code,
  Database,
  FileCode2,
  GitBranch,
  GraduationCap,
  LineChart,
  Medal,
  ShieldCheck,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { Section } from "./Section";

const ITEMS = [
  {
    icon: GraduationCap,
    title: "Data Science Specialization",
    year: "Present",
    issuer: "SLIIT",
    type: "milestone",
    credentialId: "BSc undergraduate",
    skills: ["Data Science", "Statistics", "Analytics"],
  },
  {
    icon: GitBranch,
    title: "GitHub Project Portfolio",
    year: "2025 - 2026",
    issuer: "Personal GitHub",
    type: "milestone",
    credentialId: "github.com/Manesha03",
    skills: ["Version Control", "Collaboration", "Documentation"],
  },
  {
    icon: Database,
    title: "Relational to Document Model",
    year: "Issued May 2026",
    issuer: "MongoDB",
    type: "certification",
    credentialId: "MongoDB Schema Design Patterns and Anti-patterns Skill Badge",
    skills: ["Data Modeling", "NoSQL", "MongoDB", "Schema Validation"],
  },
  {
    icon: Database,
    title: "Schema Design Patterns and Anti-patterns",
    year: "Issued May 2026",
    issuer: "MongoDB",
    type: "certification",
    credentialId: "MongoDB Schema Design Patterns and Anti-patterns Skill Badge",
    skills: ["Schema Design Pattern", "Anti Pattern Mitigation", "MongoDB"],
  },
  {
    icon: Code,
    title: "MongoDB Node.js Developer Path",
    year: "Issued May 2026",
    issuer: "MongoDB",
    type: "certification",
    credentialId: "MDBh3bt0m1m9u",
    skills: ["Node.js", "MongoDB", "Polyglot", "Aggregation Pipelines"],
  },
  {
    icon: FileCode2,
    title: "MongoDB PHP Developer Path",
    year: "Issued May 2026",
    issuer: "MongoDB",
    type: "certification",
    credentialId: "MDBayg1qrmrjl",
    skills: ["PHP", "MongoDB", "Cross-platform Development", "Aggregation Pipelines"],
  },
  {
    icon: Brain,
    title: "MongoDB Python Developer Path",
    year: "Issued May 2026",
    issuer: "MongoDB",
    type: "certification",
    credentialId: "MDB8qbtj1gf3g",
    skills: ["Python", "MongoDB", "Polyglot", "Indexing"],
  },
  {
    icon: Code,
    title: "MongoDB Java Developer Path",
    year: "Issued May 2026",
    issuer: "MongoDB",
    type: "certification",
    credentialId: "MDBl0vnis4knk",
    skills: ["Java", "MongoDB", "OOP", "Backend Development"],
  },
  {
    icon: Database,
    title: "MongoDB Data Modeling Path",
    year: "Issued Apr 2026",
    issuer: "MongoDB",
    type: "certification",
    credentialId: "MDB9v9w99kjyh",
    skills: ["NoSQL", "Data Modeling", "MongoDB", "Cloud Databases"],
  },
];

const SKILL_ICONS: Record<string, React.ElementType> = {
  "Data Science": Brain,
  Statistics: LineChart,
  Analytics: BarChart3,
  R: Code,
  "Hypothesis Testing": Brain,
  Regression: LineChart,
  Classification: Brain,
  "Data Warehousing": Database,
  "SQL Server": Database,
  ETL: Database,
  "Power BI": BarChart3,
  "Spring Boot": Code,
  React: Code,
  JWT: Code,
  MySQL: Database,
  MongoDB: Database,
  NoSQL: Database,
  "Data Modeling": Database,
  "Schema Validation": ShieldCheck,
  "Schema Design Pattern": Database,
  "Anti Pattern Mitigation": ShieldCheck,
  "Node.js": Code,
  PHP: FileCode2,
  Python: Brain,
  Java: Code,
  Polyglot: Code,
  "Cross-platform Development": FileCode2,
  "Aggregation Pipelines": BarChart3,
  Indexing: Database,
  OOP: Code,
  "Backend Development": Code,
  "Cloud Databases": Database,
  "Version Control": GitBranch,
  Collaboration: Medal,
  Documentation: Award,
};

export function Highlights() {
  const [filterType, setFilterType] = useState<"all" | "milestone" | "certification">("all");
  const [searchSkill, setSearchSkill] = useState("");

  const filteredItems = ITEMS.filter((item) => {
    const matchesType = filterType === "all" || item.type === filterType;
    const matchesSearch =
      searchSkill === "" ||
      item.skills.some((skill) => skill.toLowerCase().includes(searchSkill.toLowerCase()));
    return matchesType && matchesSearch;
  });

  const getSkillIcon = (skill: string) => {
    const Icon = SKILL_ICONS[skill] || Code;
    return <Icon className="size-2.5" />;
  };

  return (
    <Section
      id="achievements"
      eyebrow="Highlights"
      title="Certificates and learning milestones"
      subtitle="Academic focus areas, verified credentials, and technical proof points from my data science path."
    >
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {[
          { id: "all", label: "All Highlights", icon: Sparkles },
          { id: "certification", label: "Certificates", icon: ShieldCheck },
          { id: "milestone", label: "Milestones", icon: Medal },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setFilterType(item.id as typeof filterType)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                filterType === item.id
                  ? "scale-105 border-primary bg-primary text-primary-foreground shadow-lg"
                  : "border-primary/20 bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              }`}
            >
              <Icon className="size-4" /> {item.label}
            </button>
          );
        })}
      </div>

      <div className="mb-6 flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by skill, such as MongoDB, Python, Data Modeling..."
            value={searchSkill}
            onChange={(e) => setSearchSkill(e.target.value)}
            className="w-full rounded-full border border-primary/20 bg-background/40 py-2.5 pl-9 pr-8 text-sm outline-none transition-colors focus:border-primary"
          />
          {searchSkill && (
            <button
              onClick={() => setSearchSkill("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      <div className="mb-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-muted-foreground">
          <Sparkles className="size-3" />
          {filteredItems.length} highlight{filteredItems.length !== 1 ? "s" : ""} found
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
          >
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-blue-400/30 bg-blue-500/20 px-2.5 py-1 text-[10px] font-medium text-blue-200 backdrop-blur-sm">
              {it.type === "certification" ? (
                <ShieldCheck className="size-3" />
              ) : (
                <Medal className="size-3" />
              )}
              {it.type === "certification" ? "Certificate" : "Milestone"}
            </div>

            <div className="relative mb-4 inline-flex">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl transition-all group-hover:bg-primary/40" />
              <div className="relative grid size-14 place-items-center rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 ring-1 ring-primary/40">
                <it.icon className="size-6 text-secondary" />
              </div>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-foreground">{it.title}</h3>
              <span className="whitespace-nowrap rounded-full bg-secondary/10 px-2 py-0.5 text-xs text-secondary">
                {it.year}
              </span>
            </div>

            <p className="mt-1.5 text-sm text-muted-foreground">{it.issuer}</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {it.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-secondary"
                >
                  {getSkillIcon(skill)}
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-3 border-t border-border/30 pt-2">
              <span className="font-mono text-[10px] text-muted-foreground/70">
                {it.credentialId}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
