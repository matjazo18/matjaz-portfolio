"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import foto from "@/public/images/matjaz.jpg";
import write from "@/public/images/write-it-down.jpg";
import andraz from "@/public/images/andraz.jpg";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "I've built this page for a friend of mine who wanted a landing page for his personal finance tracker. For each user who wants to download the finance tracker, I send them an email with a copy of it and then store the user in the MongoDB database.",
    stack: [
      { name: "JavaScript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
    ],
    image: write,
    live: "https://write-it-down.com/",
  },
  {
    num: "02",
    category: "frontend and backend",
    title: "project 1",
    description: "I've made myself a nice portfolio page",
    stack: [
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "Tailwind.css" },
    ],
    image: foto,
    live: "https://matjaz-portfolio.vercel.app/",
    github: "https://github.com/matjazo18/matjaz-portfolio",
  },
  {
    num: "03",
    category: "frontend and backend",
    title: "project 1",
    description:
      "This app lets you book a study session with your Instructor. You can select between high school subjects or even subjects in IB program ",
    stack: [
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "Tailwind.css" },
    ],
    image: andraz,
    live: "https://andraz-ib-page.vercel.app/",
  },
];

const Projekti = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const current = swiper.activeIndex;
    setProject(projects[current]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-y-[30px]">
              <div className="text-8xl leading-none font-extrabold  outline-text">
                {project.num}{" "}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-5000 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex  flex-wrap md:flex-nowrap gap-2">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent ">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>
              <div className="flex gap-4">
                <Link
                  href={project.live}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.live, "_blank", "noopener,noreferrer");
                  }}
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group mt-2">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">Live projects</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {project.github ? (
                  <Link
                    href={project.github}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        project.live,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group mt-2">
                          <BsGithub className="text-white text-3xl group-hover:text-accent " />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">Live projects</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <motion.div
            className="w-full xl:w-[50%]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1, duration: 0.4, ease: "easeIn" },
            }}
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[300px] xl:h-[460px] relative group flex justify-center border-2">
                      <div></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        ></Image>
                      </div>
                    </div>{" "}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projekti;
