"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@radix-ui/react-select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

const info = [
  {
    icon: <FaPhoneAlt />,
    name: "Phone",
    Description: "your.email@gmail.com",
  },
  {
    icon: <FaEnvelope />,
    name: "Email",
    Description: "000 000 000",
  },
  {
    icon: <FaMapMarkerAlt />,
    name: "Addres",
    Description: "Code corner, Tech Town 1203123",
  },
];

import { motion } from "framer-motion";

const Kontakti = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className=" text-4xl text-accent">let's work together</h3>
              <p className=" text-white/60">Some desription</p>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                <Input type="firstname" placeholder="FirstName" />

                <Input type="lastname" placeholder="Lastname" />

                <Input type="email" placeholder="Email" />

                <Input type="phone" placeholder="Phone" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="est">UI/UX </SelectItem>
                    <SelectItem value="cst"></SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none xl:mb-0 ">
            d
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Kontakti;
