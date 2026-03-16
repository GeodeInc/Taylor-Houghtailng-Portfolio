"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import {
  IconBrandReact, IconBrandNextjs, IconBrandTypescript, IconBrandNodejs,
  IconBrandPython, IconBrandDocker, IconBrandGit, IconBrandAws,
  IconBrandTailwind, IconDatabase, IconBrandJavascript,
  IconBrandHtml5, IconBrandCss3, IconChartBar,
} from "@tabler/icons-react";

const row1 = [
  { name: "React",        icon: <IconBrandReact />,       color: "var(--navy)"      },
  { name: "Next.js",      icon: <IconBrandNextjs />,      color: "#ffffff"          },
  { name: "TypeScript",   icon: <IconBrandTypescript />,  color: "var(--navy-dark)" },
  { name: "JavaScript",   icon: <IconBrandJavascript />,  color: "var(--navy)"      },
  { name: "Tailwind CSS", icon: <IconBrandTailwind />,    color: "var(--navy)"      },
  { name: "Recharts",     icon: <IconChartBar />,         color: "var(--sage)"      },
  { name: "Framer",       icon: <span>✦</span>,           color: "var(--navy-dark)" },
];
const row2 = [
  { name: "HTML",       icon: <IconBrandHtml5 />,   color: "var(--navy)"      },
  { name: "CSS",        icon: <IconBrandCss3 />,    color: "var(--sage)"      },
  { name: "Node.js",    icon: <IconBrandNodejs />,  color: "var(--navy-dark)" },
  { name: "Python",     icon: <IconBrandPython />,  color: "var(--navy)"      },
  { name: "PostgreSQL", icon: <IconDatabase />,     color: "var(--sage)"      },
  { name: "Docker",     icon: <IconBrandDocker />,  color: "var(--sage)"      },
  { name: "AWS",        icon: <IconBrandAws />,     color: "var(--navy-dark)" },
  { name: "Git",        icon: <IconBrandGit />,     color: "var(--navy)"      },
];
const categories = [
  { title: "Frontend",       skills: ["HTML","CSS","JavaScript","TypeScript","React","Next.js","Tailwind CSS","Recharts","Framer Motion"], dot: "var(--navy)"      },
  { title: "Backend",        skills: ["Node.js","Python","PostgreSQL"],                                                                    dot: "var(--navy-dark)" },
  { title: "DevOps & Tools", skills: ["Docker","AWS","Vercel","Git","GitHub Actions","Figma"],                                             dot: "var(--sage)"      },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="skills" className="relative bg-black py-32 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--navy-glow) 0%, transparent 70%)" }} />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "var(--navy-border)", backgroundColor: "var(--navy-fill-sm)", color: "var(--navy)" }}>
            Skills & Tech
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: "var(--font-sub)" }}>
            What I Work With
          </h2>
          <p className="mt-4 text-neutral-400">A curated toolkit built over years of building real products.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-4">
          <InfiniteMovingCards items={row1} direction="left"  speed="slow" />
          <InfiniteMovingCards items={row2} direction="right" speed="slow" />
        </motion.div>

        <div className="mt-20 grid grid-cols-3 gap-5 md:grid-cols-3 lg:grid-cols-3 ">
          {categories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="rounded-2xl border p-6"
              style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "rgba(255,255,255,0.02)" }}>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: cat.dot }} />
                <h3 className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-sub)" }}>{cat.title}</h3>
              </div>
              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-neutral-400">
                    <span className="text-xs" style={{ color: cat.dot }}>✦</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
