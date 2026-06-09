import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Highlights } from "@/components/portfolio/Highlights";
import { Journey } from "@/components/portfolio/Journey";
import { Loader } from "@/components/portfolio/Loader";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { StarsBackground } from "@/components/portfolio/StarsBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manesha Dahanayake | Data Science Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Manesha Dahanayake, a SLIIT undergraduate specializing in Data Science, analytics, data warehousing, and full-stack systems.",
      },
      { property: "og:title", content: "Manesha Dahanayake | Data Science Portfolio" },
      {
        property: "og:description",
        content:
          "A dark blue creative portfolio featuring data science, analytics, SQL data warehouse, and full-stack projects.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
          <StarsBackground density={0.8} />
        </div>
        <main>
          <Navbar
            theme={theme}
            toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Highlights />
          <Journey />
          <Contact />
          <Footer />
        </main>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </>
  );
}
