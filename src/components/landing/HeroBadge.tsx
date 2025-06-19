
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

interface Props {
  variants: any;
  itemVariants: any;
}

const HeroBadge: React.FC<Props> = ({ variants, itemVariants }) => (
  <motion.div
    className="inline-flex items-center gap-3 bg-white/12 backdrop-blur-xl border border-blue-200/30 rounded-full px-5 py-2 mb-5 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105"
    variants={itemVariants}
    whileHover={{
      y: -2,
      boxShadow: "0 20px 40px -4px rgba(59, 130, 246, 0.15)"
    }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
    >
      <Sparkles className="w-5 h-5 text-blue-300" />
    </motion.div>
    <span className="text-base font-semibold text-blue-100 tracking-wide">
      Experts en solutions technologiques innovantes
    </span>
    <div className="flex gap-1">
      {[...Array(3)].map((_, i) => (
        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
      ))}
    </div>
  </motion.div>
);

export default HeroBadge;
