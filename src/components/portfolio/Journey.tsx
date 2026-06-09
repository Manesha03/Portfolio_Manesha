import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Languages, Laptop } from "lucide-react";
import { Section } from "./Section";

const ROLES = [
  {
    period: "2023 - 2027",
    role: "BSc (Hons) in Information Technology",
    society: "Sri Lanka Institute of Information Technology (SLIIT)",
    desc: "Specializing in Data Science with a focus on analytics, statistical modeling, databases, and full-stack systems.",
    icon: GraduationCap,
    iconColor: "text-blue-400",
  },
  {
    period: "Feb 2023 - Sep 2023",
    role: "Diploma in Information Technology",
    society: "ICBT",
    desc: "Built a stronger foundation in IT concepts, computer systems, and practical digital skills.",
    icon: Laptop,
    iconColor: "text-cyan-400",
  },
  {
    period: "Feb 2023 - Sep 2023",
    role: "Diploma in English",
    society: "ICBT",
    desc: "Improved professional communication, writing, and presentation skills.",
    icon: Languages,
    iconColor: "text-sky-400",
  },
  {
    period: "2020 - 2022",
    role: "G.C.E. Advanced Level",
    society: "Maliyadeva Balika Vidyalaya",
    desc: "Completed the Physical Science stream before beginning my higher education journey in IT and data science.",
    icon: BookOpen,
    iconColor: "text-violet-400",
  },
];

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Journey"
      title="My academic journey"
      subtitle="The education path that shaped my move from physical science into information technology and data science."
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
