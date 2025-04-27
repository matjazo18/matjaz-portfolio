"use client";

import Image from "next/image";
import foto from "@/public/images/matjaz-flowers.jpg";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="w-[200px] h-[200px] xl:w-[450px] xl:h-[450px] mix-blend-lighten mb-8  ">
          {" "}
          <Image
            src={foto}
            alt="Matjaž Gazvoda holding flowers"
            width={350} // Adjust width as needed
            height={350} // Adjust height as needed
            quality={100}
            className="object-contain border-r-4  border-accent rounded-2xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
