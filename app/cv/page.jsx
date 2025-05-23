"use client";

import { FaJs, FaReact, FaFigma, FaNodeJs, FaPython } from "react-icons/fa";

import { SiTailwindcss, siNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Scroll } from "lucide-react";

const about = {
  title: "About me ",
  description:
    "I am a young self-taught software developer. I like reading, exercising, and building cool projects. I enjoy doing things differently, and I hate the word average (:",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Matjaž Gazvoda",
    },
    {
      fieldName: "Age",
      fieldValue: "19",
    },
    {
      fieldName: "Phone",
      fieldValue: "+386 68 923 063",
    },
    {
      fieldName: "Email",
      fieldValue: "matjaz.gazvoda@gmail.com",
    },

    {
      fieldName: "Languages",
      fieldValue: "Slovenian, English, German",
    },
    {
      fieldName: "School",
      fieldValue: "Gimnazija Novo mesto",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experiences",
  description: "Previous work I've done",
  items: [
    {
      podjetje: "Terme Krka, Dolenjske Toplice",
      pozicija: "Preparing everything for the event",
      trajanje: "Summer 2024,2025",
    },
    {
      podjetje: "PRIA, ROK BLATNIK S.P",
      pozicija: "Animator for children",
      trajanje: "Poletje 2024,2025",
    },
  ],
};

const skills = {
  title: " My skills",
  description: "Programming languages, frameworks and apps I work with",
  skillList: [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },

    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
  ],
};

const education = {
  icon: "svg here",
  title: "School",
  description: "Moje šolanje in izobraževanje, katere sem se udeležil",
  items: [
    {
      institucija: "Osnovna šola Trebnje",
      trajanje: "2017-2021",
      kraj: "Trebnje",
    },
    {
      institucija: "Gimnazija Novo mesto",
      trajanje: "2021-now ",
      kraj: "Novo mesto",
    },
  ],
};

const Cv = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skill list</TabsTrigger>
            <TabsTrigger value="about">About me </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] mx-auto">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.trajanje}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.pozicija}
                          </h3>
                          <div className="flex items-center justify-center gap-3">
                            <span className="h-[6px] w-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.podjetje}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] mx-auto">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.trajanje}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institucija}
                          </h3>
                          <div className="flex items-center justify-center gap-3">
                            <span className="h-[6px] w-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.kraj}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              {" "}
                              <div className="text-6xl  group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-start justify-start xl:justify-start mx-auto xl:mx-0  gap-4"
                      >
                        <span className="text-white/60">
                          {item.fieldName}
                          <br />
                          <span className=" text-xl text-white ">
                            {item.fieldValue}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Cv;
