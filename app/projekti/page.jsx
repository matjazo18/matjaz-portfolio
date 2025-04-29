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
import foto from "@/public/images/matjaz-flowers.jpg";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Write-it-down ",
    stack: [
      { name: "JavaScript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
    ],
    image: <Image src={foto} alt="img" width={200} height={200}></Image>,
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend and backend",
    title: "project 1",
    description: "Instructions page",
    stack: [
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "Tailwind.css" },
    ],
    image: <Image src={foto} alt="img" width={200} height={200}></Image>,
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend and backend",
    title: "project 1",
    description: "Instructions page ",
    stack: [
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "Tailwind.css" },
    ],
    image: <Image src={foto} alt="img" width={200} height={200}></Image>,
    live: "",
    github: "",
  },
];
const moveToNext = () => {};

const Projekti = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="text-8xl leading-none font-extrabold  outline-text">
                {project.num}{" "}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-5000 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              {
                <ul className="flex gap-4 ">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
              }
              <div className="border border-white/20"></div>
              <div>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">Live projects</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projekti;
