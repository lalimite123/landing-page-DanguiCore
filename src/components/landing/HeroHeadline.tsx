
import React from "react";
import { motion } from "framer-motion";
import RotatingText from "@/components/ui/rotating-text";

interface Props {
  itemVariants: any;
  rotatingTexts: string[];
}

const HeroHeadline: React.FC<Props> = ({ itemVariants, rotatingTexts }) => (
  <>
    <motion.h1
      className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-1 leading-tight tracking-tight text-left pl-0"
      variants={itemVariants}
    >
      <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
        DjanguiCore
      </span>
    </motion.h1>
    <motion.div variants={itemVariants}>
      <span className="text-xl md:text-3xl lg:text-4xl text-blue-200 font-bold mt-0 mb-2 block text-left">
        Spécialiste en{" "}
      </span>
    </motion.div>
    <motion.div variants={itemVariants} className="w-full mb-3">
      <span className="relative inline-block mt-1">
        <div className="flex flex-nowrap items-center">
          <RotatingText
            texts={rotatingTexts}
            mainClassName="px-3 sm:px-3 md:px-5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white overflow-x-auto overflow-y-hidden py-0.5 sm:py-0.5 md:py-1 rounded-2xl shadow-2xl shadow-blue-500/20 border border-blue-300/20 whitespace-nowrap text-[1.125rem] sm:text-lg md:text-2xl lg:text-3xl font-bold min-w-0"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-0.5 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            rotationInterval={3000}
            splitBy="characters"
          />
        </div>
      </span>
    </motion.div>
  </>
);

export default HeroHeadline;
