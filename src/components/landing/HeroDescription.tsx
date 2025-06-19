
import React from "react";
import { motion } from "framer-motion";

interface Props {
  itemVariants: any;
}

const HeroDescription: React.FC<Props> = ({ itemVariants }) => (
  <motion.p
    className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/90 mb-7 max-w-4xl mx-0 leading-normal font-light tracking-wide text-left"
    variants={itemVariants}
  >
    Nous transformons vos{" "}
    <span className="text-blue-300 font-semibold">défis technologiques</span>{" "}
    en opportunités de croissance.
    <span className="text-blue-200"> Solutions sur mesure</span>, expertise pointue, innovation constante.
  </motion.p>
);

export default HeroDescription;
