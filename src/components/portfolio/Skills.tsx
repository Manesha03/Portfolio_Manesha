import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section } from "./Section";

type Skill = { name: string; level: number };
type Cat = { id: string; label: string; skills: Skill[] };

const CATS: Cat[] = [
  {
    id: "data-science",
    label: "Data Science",
    skills: [
      { name: "R", level: 88 },
      { name: "Statistical Modeling", level: 86 },
      { name: "Hypothesis Testing", level: 84 },
      { name: "Regression Analysis", level: 84 },
      { name: "Classification", level: 80 },
      { name: "EDA", level: 88 },
      { name: "Data Visualization", level: 86 },
    ],
  },
  {
    id: "databases",
    label: "Databases & BI",
    skills: [
      { name: "SQL Server", level: 88 },
      { name: "T-SQL", level: 86 },
      { name: "Data Warehousing", level: 84 },
      { name: "ETL", level: 84 },
      { name: "SSAS", level: 78 },
      { name: "Power BI", level: 82 },
      { name: "MySQL", level: 84 },
      { name: "MongoDB", level: 82 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Vite", level: 82 },
      { name: "React Router", level: 82 },
      { name: "Tailwind CSS", level: 86 },
      { name: "Axios", level: 84 },
      { name: "HTML", level: 92 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 86 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Java 21", level: 82 },
      { name: "Spring Boot", level: 84 },
      { name: "Spring Security", level: 80 },
      { name: "OAuth2", level: 78 },
      { name: "JWT", level: 82 },
      { name: "Node.js", level: 84 },
      { name: "Express.js", level: 84 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Postman", level: 88 },
      { name: "GitHub Actions", level: 78 },
      { name: "Cloudinary", level: 80 },
      { name: "SSMS", level: 86 },
      { name: "SSDT", level: 78 },
      { name: "Excel", level: 86 },
      { name: "R Markdown", level: 84 },
      { name: "Git", level: 88 },
    ],
  },
];

export function Skills() {
  const [active, setActive] = useState<string>(CATS[0].id);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  const activeCat = CATS.find((c) => c.id === active)!;

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ width: 380, height: 380 });
      } else if (width < 768) {
        setDimensions({ width: 500, height: 450 });
      } else if (width < 1024) {
        setDimensions({ width: 700, height: 480 });
      } else {
        setDimensions({ width: 800, height: 500 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const center = {
    x: dimensions.width / 2,
    y: dimensions.height / 2,
  };

  const radius =
    Math.min(dimensions.width, dimensions.height) * (dimensions.width < 640 ? 0.35 : 0.4);
  const nodes = activeCat.skills.map((skill, i) => {
    const angle = (i / activeCat.skills.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...skill,
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius,
      angle,
    };
  });

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My constellation of data and code"
      subtitle="A focused map of the tools I use to analyze, model, build, and present information."
    >
      <div className="mb-6 overflow-x-auto pb-2">
        <div className="flex min-w-max justify-center gap-2 px-4">
          {CATS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                active === cat.id
                  ? "border-primary bg-primary text-primary-foreground shadow-lg"
                  : "border-primary/20 bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-full">
            <svg
              viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
              className="h-auto w-full"
              style={{ aspectRatio: `${dimensions.width}/${dimensions.height}` }}
            >
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="oklch(0.72 0.15 245 / 32%)" />
                  <stop offset="100%" stopColor="oklch(0.72 0.15 245 / 0%)" />
                </radialGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="oklch(0.72 0.15 245)" />
                  <stop offset="100%" stopColor="oklch(0.82 0.13 220)" />
                </linearGradient>
              </defs>

              <circle cx={center.x} cy={center.y} r={radius * 0.7} fill="url(#centerGlow)" />

              {nodes.map((node, i) => (
                <motion.line
                  key={`line-${node.name}`}
                  x1={center.x}
                  y1={center.y}
                  x2={node.x}
                  y2={node.y}
                  stroke="url(#lineGrad)"
                  strokeWidth={dimensions.width < 640 ? "1" : "1.5"}
                  strokeOpacity="0.42"
                  strokeDasharray="4 3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.03 }}
                />
              ))}

              {nodes.map((a, i) =>
                nodes
                  .slice(i + 1)
                  .map((b) => (
                    <line
                      key={`net-${a.name}-${b.name}`}
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      stroke="oklch(0.72 0.15 245 / 14%)"
                      strokeWidth={dimensions.width < 640 ? "0.5" : "0.8"}
                    />
                  )),
              )}

              <motion.circle
                cx={center.x}
                cy={center.y}
                r={dimensions.width < 640 ? "8" : "12"}
                fill="oklch(0.82 0.13 220)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <circle
                cx={center.x}
                cy={center.y}
                r={dimensions.width < 640 ? "16" : "24"}
                fill="oklch(0.72 0.15 245 / 20%)"
              />
              <circle
                cx={center.x}
                cy={center.y}
                r={dimensions.width < 640 ? "24" : "36"}
                fill="oklch(0.72 0.15 245 / 10%)"
              />
            </svg>

            {nodes.map((skill, i) => {
              const nodeSize = dimensions.width < 640 ? "h-7 w-7" : "h-9 w-9";
              const fontSize = dimensions.width < 640 ? "text-[10px]" : "text-xs";
              const labelSize = dimensions.width < 640 ? "text-[9px]" : "text-xs";

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    position: "absolute",
                    left: `${(skill.x / dimensions.width) * 100}%`,
                    top: `${(skill.y / dimensions.height) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="group"
                >
                  <div
                    className={`relative flex ${nodeSize} items-center justify-center rounded-full border bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm transition-all duration-300 ${
                      hoveredSkill === skill.name
                        ? "scale-110 border-primary shadow-lg shadow-primary/30"
                        : "border-primary/30 group-hover:scale-105 group-hover:border-primary/60"
                    }`}
                  >
                    <span className={`${fontSize} font-bold text-foreground`}>
                      {skill.name.charAt(0)}
                    </span>
                  </div>

                  <div
                    className={`absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 whitespace-nowrap rounded-lg bg-card/90 px-1.5 py-0.5 ${labelSize} font-medium shadow-lg backdrop-blur-sm`}
                  >
                    {skill.name}
                  </div>

                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap"
                    >
                      <div className="rounded-xl border border-primary/20 bg-card/95 px-2 py-1.5 shadow-xl backdrop-blur-md sm:px-3 sm:py-2">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[8px] text-muted-foreground sm:text-[10px]">
                              Comfort
                            </span>
                            <span className="text-[10px] font-bold text-primary sm:text-xs">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1 w-16 overflow-hidden rounded-full bg-muted sm:w-24">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.5 }}
                              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
