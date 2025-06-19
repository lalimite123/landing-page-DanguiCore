
import React from "react";
import { motion } from "framer-motion";
import { Shield, Code, Star } from "lucide-react";

interface Props {
  itemVariants: any;
}

const HeroPartners: React.FC<Props> = ({ itemVariants }) => (
  <div className="flex flex-col items-center justify-center w-full mt-2">
    {/* LABEL Partenaires */}
    <motion.div
      className="flex items-center justify-center gap-4 mb-3"
      variants={itemVariants}
    >
      <div className="h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent flex-1 max-w-20"></div>
      <p className="text-xs text-blue-300/90 font-semibold tracking-wider uppercase text-center">
        Partenaires technologiques de confiance
      </p>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent flex-1 max-w-20"></div>
    </motion.div>
    {/* Logos/partenaires */}
    <motion.div
      className="flex items-center justify-center gap-7 lg:gap-10 opacity-70 hover:opacity-90 transition-opacity duration-500"
      variants={itemVariants}
    >
      {["Microsoft", "AWS", "Google Cloud", "IBM"].map((partner) => (
        <motion.div
          key={partner}
          className="text-xl lg:text-2xl font-bold text-blue-200 hover:text-blue-100 transition-colors duration-300 cursor-pointer"
          whileHover={{ scale: 1.1, y: -2 }}
        >
          {partner}
        </motion.div>
      ))}
    </motion.div>
    {/* Badges */}
    <motion.div
      className="flex flex-wrap items-center justify-center gap-6 mt-5"
      variants={itemVariants}
    >
      <div className="flex items-center gap-2 text-blue-300/80">
        <Shield className="w-4 h-4" />
        <span className="text-xs font-medium">Certifié ISO 27001</span>
      </div>
      <div className="flex items-center gap-2 text-blue-300/80">
        <Code className="w-4 h-4" />
        <span className="text-xs font-medium">+50 projets livrés</span>
      </div>
      <div className="flex items-center gap-2 text-blue-300/80">
        <Star className="w-4 h-4 fill-current text-yellow-400" />
        <span className="text-xs font-medium">4.9/5 satisfaction client</span>
      </div>
    </motion.div>
  </div>
);

export default HeroPartners;
