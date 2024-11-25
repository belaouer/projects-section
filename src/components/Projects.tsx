"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import Section from "./Section";
import { useAnimate, motion } from "framer-motion";

const projects = [
  {
    id: 0,
    domaine: "Architecture & Engineering",
    title: "Entuitive Engineering",
    tasks: ["design", "developpement"],
    year: 2024,
    img: "https://plus.unsplash.com/premium_photo-1663040174575-356b949bbfba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    domaine: "Technologie & Arts",
    title: "Sogai",
    tasks: ["design", "developpement"],
    year: 2024,
    img: "https://plus.unsplash.com/premium_photo-1706344618570-5b8d0a32c2ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    domaine: "Venture Capital",
    title: "BlueBrown Partners",
    tasks: ["design", "developpement"],
    year: 2024,
    img: "https://images.unsplash.com/photo-1661968272563-e1f904898f6b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    domaine: "Education & Entrepreneurship",
    title: "Mam La Viet Ignite",
    tasks: ["design", "developpement"],
    year: 2024,
    img: "https://images.unsplash.com/photo-1637681067285-7e7a5d3a1cfa?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    domaine: "Transportation Nestwork Services",
    title: "Ubimov",
    tasks: ["design", "developpement"],
    year: 2023,
    img: "https://images.unsplash.com/photo-1459482565928-0acbdd0dceb3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Projects = () => {
  const [change, setChange] = useState(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { top: `-${100 * change}%` });
  }, [change]);
  return (
    <Section
      title="selected works / (5)"
      section="projects"
      description="Featured projects that have been meticulously crafted with passion to drive results and impact. "
    >
      <div className="hidden md:flex md:col-span-5  text-[22vw] text-[#a29e9a] font-mono md:w-full md:h-fit  md:leading-none overflow-hidden md:sticky md:top-0">
        <span className="">0</span>
        <div className="relative">
          <motion.div
            ref={scope}
            className="absolute flex flex-col justify-start "
          >
            <span className="relative inline-block after:content-['.'] after:absolute after:-right-[0.35em] after:top-0 ">
              1
            </span>
            <span className="relative inline-block after:content-['.'] after:absolute after:-right-[0.35em] after:top-0">
              2
            </span>
            <span className="relative inline-block after:content-['.'] after:absolute after:-right-[0.35em] after:top-0">
              3
            </span>
            <span className="relative inline-block after:content-['.'] after:absolute after:-right-[0.35em] after:top-0">
              4
            </span>
            <span className="relative inline-block after:content-['.'] after:absolute after:-right-[0.35em] after:top-0">
              5
            </span>
          </motion.div>
        </div>
      </div>
      <div className="col-span-12  md:col-span-7 flex flex-col  gap-y-space2xl">
        {projects.map(({ domaine, title, tasks, img, id, year }) => {
          return (
            <Card
              domaine={domaine}
              title={title}
              tasks={tasks}
              img={img}
              key={id}
              year={year}
              setChange={setChange}
              id={id}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
