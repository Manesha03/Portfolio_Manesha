import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Compass,
  Database,
  ExternalLink,
  GraduationCap,
  Target,
} from "lucide-react";
import { Section } from "./Section";

const timeline = [
  {
    year: "2023 - Present",
    title: "BSc (Hons) Undergraduate",
    place: "Sri Lanka Institute of Information Technology (SLIIT)",
    url: "https://www.sliit.lk/",
    icon: GraduationCap,
    desc: "Specializing in Data Science with focus on analytics, statistical modeling, databases, and modern application development.",
  },
  {
    year: "2026",
    title: "Applied Data Analytics Projects",
    place: "Academic and portfolio work",
    url: "https://github.com/Manesha03",
    icon: BarChart3,
    desc: "Built projects in R, SQL Server, Power BI, data warehousing, and full-stack operational systems.",
  },
  {
    year: "2025 - 2026",
    title: "Full-Stack Product Development",
    place: "SLIIT project teams",
    url: "https://github.com/Manesha03",
    icon: Database,
    desc: "Developed MERN and Spring Boot systems with authentication, dashboards, APIs, data flows, and role-based workflows.",
  },
];

const cards = [
  {
    icon: Brain,
    title: "Interests",
    body: "Statistical modeling, educational analytics, data warehousing, business intelligence, and intelligent campus systems.",
  },
  {
    icon: Target,
    title: "Goals",
    body: "To build reliable data products that make decisions clearer, operations smoother, and insights easier to trust.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="A data-minded builder with a creative edge"
      subtitle="I enjoy connecting analysis, software, and design into systems people can actually use."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8"
        >
          <p className="text-base leading-relaxed text-muted-foreground">
            I&apos;m Manesha Dahanayake, an undergraduate at SLIIT specializing in Data Science. My
            work blends analytical thinking with hands-on development: cleaning datasets, testing
            hypotheses, building predictive models, designing data warehouses, and turning those
            insights into useful web platforms and reports.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I like projects where data has a job to do, whether that means improving campus
            operations, understanding student persistence, analyzing e-commerce performance, or
            helping farmers manage records and marketplace activity.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-primary/15 bg-primary/5 p-5">
                <c.icon className="size-5 text-secondary" />
                <h3 className="mt-3 text-base font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div
            className="absolute bottom-2 left-4 top-2 w-px bg-gradient-to-b from-secondary/70 via-primary/25 to-transparent"
            aria-hidden
          />
          <div className="flex items-center gap-2 pb-4 text-sm text-muted-foreground">
            <Compass className="size-4 text-secondary" /> Education and focus
          </div>
          <ul className="space-y-5">
            {timeline.map((t, i) => (
              <motion.li
                key={t.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12"
              >
                <span className="absolute left-2 top-1.5 size-4 rounded-full border-2 border-background bg-primary glow-primary" />
                <div className="glass rounded-2xl p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                      <t.icon className="size-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="font-semibold">{t.title}</h4>
                        <span className="text-xs text-secondary">{t.year}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <a
                          href={t.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 transition-colors hover:text-secondary"
                        >
                          {t.place}
                          <ExternalLink className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground/90">{t.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
