"use client";

import { useState } from "react";
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
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

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
    name: "Address",
    Description: "Trebnje / Novo mesto",
  },
];

const Kontakti = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setForm({ ...form, service: value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${form.service ? `[${form.service}] ` : ""}Contact from ${form.firstname} ${form.lastname}`.trim()
    );
    const body = encodeURIComponent(
      `From: ${form.firstname} ${form.lastname}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:matjaz.gazvoda@gmail.com?subject=${subject}&body=${body}`;
  };

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
            <form
              onSubmit={handleSend}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className=" text-4xl text-accent">let's work together</h3>
              <p className=" text-white/60">
                Fill in the form and your email client will open so you can send
                me a message directly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  value={form.firstname}
                  onChange={handleChange}
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  value={form.lastname}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-xl">
                      Select a service
                    </SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
                value={form.message}
                onChange={handleChange}
              ></Textarea>
              <Button type="submit" size="md" className="py-3 flex justify-center ">
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
