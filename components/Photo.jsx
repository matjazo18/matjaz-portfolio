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
        <div className="w-[208px] h-[258px] xl:w-[400px] xl:h-[400px] mix-blend-lighten ">
          {" "}
          <Image
            src={foto}
            alt="Matjaž Gazvoda holding flowers"
            width={350} // Adjust width as needed
            height={350} // Adjust height as needed
            quality={100}
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
