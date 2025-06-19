
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Play } from "lucide-react";

interface Props {
  itemVariants: any;
}

const HeroActions: React.FC<Props> = ({ itemVariants }) => (
  <motion.div
    className="flex flex-col sm:flex-row gap-4 mb-8 justify-start items-center w-full"
    variants={itemVariants}
  >
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -3
      }}
      whileTap={{ scale: 0.96 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      <Button size="lg" className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white px-10 py-5 text-lg font-bold shadow-2xl border-0 rounded-2xl backdrop-blur-sm transition-all duration-300">
        <Zap className="mr-3 h-6 w-6" />
        Découvrir nos solutions
        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </motion.div>
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -3
      }}
      whileTap={{ scale: 0.96 }}
      className="relative group"
    >
      <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold border-2 border-blue-300/40 bg-white/15 backdrop-blur-xl hover:bg-white/25 text-blue-100 hover:text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-300/60">
        <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        Voir notre démo
      </Button>
    </motion.div>
  </motion.div>
);

export default HeroActions;
