import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Rocket, Sparkles } from "lucide-react";
import { StarsBackground } from "./StarsBackground";
import profile from "@/assets/manesha-profile.jpeg";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <StarsBackground density={0.55} />
      <div className="absolute inset-0 grid-cosmic" aria-hidden />
      <div
        className="absolute left-1/2 top-1/3 size-[620px] -translate-x-1/2 rounded-full bg-primary/12 blur-[130px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs text-secondary"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-secondary" />
            </span>
            Data science undergraduate at SLIIT
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m <br />
            <span className="text-gradient text-[0.86em]">Manesha Dahanayake</span>
            <br />
            <span className="block max-w-3xl pt-2 text-[32px] leading-tight text-foreground/72 sm:text-[40px]">
              building intelligent, data-driven digital systems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I turn raw data, research questions, and operational problems into clean analytics
            workflows, statistical models, dashboards, and full-stack platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.03] glow-primary"
            >
              <Rocket className="size-4 transition-transform group-hover:-rotate-12" />
              View Projects
            </button>

            <a
              href="/cv/Manesha_Dahanayake.pdf"
              download="Manesha_Dahanayake_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/15"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a
              href="https://github.com/Manesha03"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-secondary"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/manesha-dahanayake"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-secondary"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:maneshadahanayake13@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-secondary"
            >
              <Mail className="size-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/35"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-dashed border-secondary/25"
          />
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

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground hover:text-foreground"
      >
        <ArrowDown className="size-5" />
      </motion.button>
    </section>
  );
}
