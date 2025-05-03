"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import FormData from "form-data";
import Mailgun from "mailgun.js";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";
import axios from "axios";

const hadnleSend = async () => {
  try {
    const res = await axios.post("/api/send-email", {
      to: "matjaz.gazvoda@gmail.com",
      subject: "Hello Matjaz",
      text: "This is a message from your form.",
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

const info = [
  {
    icon: <FaPhoneAlt />,
    name: "Phone",
    Description: "068 923 063",
  },
  {
    icon: <FaEnvelope />,
    name: "Email",
    Description: "matjaz.gazvoda@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    name: "Addres",
    Description: "Trebnje / Novo mesto",
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="FirstName" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-xl">
                      Select a service
                    </SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX </SelectItem>
                    <SelectItem value="mst"> Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here "
              ></Textarea>
              <Button size="md" className="py-3 flex justify-center ">
                Send message
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none xl:mb-0 ">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-6 items-center">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]  text-accent flex items-center">
                      <div className="text-[28px] ">{item.icon}</div>
                    </div>
                    <div className="flex flex-col justify-center   ">
                      <div className="text-white/60">{item.name}</div>
                      <div>{item.Description}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Kontakti;
