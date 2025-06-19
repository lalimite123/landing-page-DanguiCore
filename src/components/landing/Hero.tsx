import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles, Zap, Star, Code, Shield } from "lucide-react";
import { motion } from "framer-motion";
import RotatingText from "@/components/ui/rotating-text";
import Threads from "@/components/ui/threads";
import HeroDecorativeBar from "./HeroDecorativeBar";
import HeroBadge from "./HeroBadge";
import HeroHeadline from "./HeroHeadline";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";
import HeroPartners from "./HeroPartners";

const Hero = () => {
  const rotatingTexts = [
    "Intelligence Artificielle",
    "Cloud Computing",
    "Cybersécurité",
    "DevOps",
    "Data Science",
    "Blockchain"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.13,
        delayChildren: 0.18
      }
    }
  };

  // Correction ici : ease doit être un tableau/framer-motion compatible
  const itemVariants = {
    hidden: { y: 32, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 32,
        stiffness: 160,
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1] as const
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-12, 12, -12],
      x: [-8, 8, -8],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1] as const
      }
    }
  };

  const glowVariants = {
    glow: {
      scale: [1, 1.12, 1],
      opacity: [0.52, 0.75, 0.52],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1] as const
      }
    }
  };

  return (
    <section
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/40 py-4 lg:py-12 overflow-hidden min-h-[78vh] flex items-start"
    >
      {/* Enhanced Threads Background */}
      <div className="absolute inset-0 z-0">
        <Threads
          color={[0.2, 0.45, 0.9]}
          amplitude={1.4}
          distance={0.25}
          enableMouseInteraction={true}
        />
      </div>
      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-blue-900/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-15" />
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {/* Primary floating elements */}
        <motion.div
          className="absolute top-16 left-8 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-indigo-500/12 rounded-full blur-3xl"
          animate={floatingVariants.float}
        />
        <motion.div
          className="absolute bottom-16 right-8 w-96 h-96 bg-gradient-to-r from-cyan-400/12 to-blue-500/15 rounded-full blur-3xl"
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 2 }
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-60 h-60 bg-gradient-to-r from-purple-400/10 to-pink-400/8 rounded-full blur-2xl"
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 3, duration: 8 }
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full"
          animate={glowVariants.glow}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-3 h-3 bg-indigo-400 rounded-full"
          animate={{
            ...glowVariants.glow,
            transition: { ...glowVariants.glow.transition, delay: 1.5 }
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-300/20 rotate-45 rounded-lg opacity-30" />
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-indigo-300/15 rotate-12 rounded-lg opacity-25" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="flex flex-row justify-start items-start w-full">
          <motion.div
            className="flex flex-row w-full max-w-5xl items-start gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative Bar */}
            <HeroDecorativeBar />
            {/* Contenu colonne gauche */}
            <div className="flex flex-col gap-0 w-full items-start pt-4">
              {/* Badge */}
              <HeroBadge variants={containerVariants} itemVariants={itemVariants} />
              {/* Headline (titres et texte rotatif) */}
              <HeroHeadline itemVariants={itemVariants} rotatingTexts={rotatingTexts} />
              {/* Description */}
              <HeroDescription itemVariants={itemVariants} />
              {/* Boutons actions */}
              <HeroActions itemVariants={itemVariants} />
            </div>
          </motion.div>
          {/* Colonne centrale */}
          <motion.div
            className="hidden lg:flex flex-col items-center justify-start w-full max-w-2xl"
          />
        </div>
        {/* PARTIE PARTENAIRES (centralisée) */}
        <HeroPartners itemVariants={itemVariants} />
      </div>
    </section>
  );
};

export default Hero;
