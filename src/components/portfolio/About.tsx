import { motion } from "framer-motion";
import { Brain, Sparkles, Target } from "lucide-react";
import { Section } from "./Section";
import profile from "@/assets/manesha-profile.jpeg";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square overflow-hidden rounded-full glass-strong p-2"
          >
            <img
              src={profile}
              alt="Manesha Dahanayake"
              width={768}
              height={768}
              className="size-full rounded-full object-cover"
              style={{ imageOrientation: "from-image" }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-secondary/35" />
          </motion.div>
          <div className="absolute -right-3 top-12 glass rounded-2xl px-4 py-3 text-xs text-muted-foreground shadow-xl">
            <Sparkles className="mb-1 size-4 text-secondary" />
            Data, models, dashboards
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-primary/20 blur-3xl" />
        </motion.div>
      </div>
    </Section>
  );
}
