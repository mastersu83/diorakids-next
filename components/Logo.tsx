"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LogoLetters } from "@/consts/data";

interface ILogo {
  letter: LogoLetters;
}

export const Logo = ({ letter }: ILogo) => {
  return (
    <motion.div
      className={cn(
        letter.color ? "text-customRed" : "",
        "[text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]"
      )}
      animate={{ rotateY: 360 }}
      transition={{
        delay: letter.delay,
        duration: 3,
        repeat: Infinity,
        repeatDelay: 8,
        type: "spring",
        repeatType: "loop",
      }}
    >
      {letter.name}
    </motion.div>
  );
};
