
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import IntegrationCarousel from "@/components/landing/IntegrationCarousel";
import WorkflowDemo from "@/components/landing/WorkflowDemo";
import CallToAction from "@/components/landing/CallToAction";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const Index = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <Navigation />
      <Hero />
      <motion.div variants={sectionVariants}>
        <Features />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <IntegrationCarousel />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <WorkflowDemo />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <CallToAction />
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Index;
