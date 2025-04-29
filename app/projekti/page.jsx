"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowRight, BsGithub } from "react-icons/bs";
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
      { name: "React" },
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
      { name: "React" },
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
      { name: "React" },
      { name: "JavaScript" },
      { name: "Tailwind.css" },
    ],
    image: <Image src={foto} alt="img" width={200} height={200}></Image>,
    live: "",
    github: "",
  },
];

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
            </div>
          </div>
          <div className="w-full">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projekti;
