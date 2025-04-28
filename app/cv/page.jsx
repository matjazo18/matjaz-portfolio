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

const about = {
  title: "aboute me ",
  description: "Sem mlad študent",
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
      fieldName: "Kraj bivanja",
      fieldValue: "Dobrava, Dobrnič",
    },
    {
      fieldName: "Šola",
      fieldValue: "Športna gimnazija Novo mesto",
    },
    {
      fieldName: "Jeziki",
      fieldValue: "Slovenščina, B2 Angleščina , B1 Nemščina",
    },
    {
      fieldName: "Age",
      fieldValue: "19",
    },
  ],
};

const expericence = {
  icon: "",
};

const skillList = {
  title: " My skills",
  description: " bla bla bla",
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
      icon: <FaJs />,
      name: "JavaScript",
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
  title: "Šolanje",
  description: "Moje šolanje in izobraževanje, katere sem se udeležil",
  items: [
    {
      institucije: "Osnovna šola Trebnje",
      duration: "2017-2021",
    },
    { institucija: "Gimnazija Novo mesto", duration: "2021-2025 " },
    {
      institucija: "Fakulteta za računalništvo in informatiko v Ljubljani",
      duration: "2025...  ",
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
        <Tabs>
          <TabsList>
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skill list</TabsTrigger>
            <TabsTrigger>about me </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Cv;
