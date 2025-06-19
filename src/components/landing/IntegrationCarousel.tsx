
import { motion } from "framer-motion";

const IntegrationCarousel = () => {
  const integrationLogos = [
    { name: "OpenAI", icon: "🤖", category: "IA" },
    { name: "Google Cloud", icon: "☁️", category: "Cloud" },
    { name: "Microsoft", icon: "🪟", category: "Enterprise" },
    { name: "AWS", icon: "📡", category: "Cloud" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "Kubernetes", icon: "⚙️", category: "DevOps" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "💻", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Data" },
    { name: "TensorFlow", icon: "🧠", category: "IA" },
    { name: "Blockchain", icon: "⛓️", category: "Web3" },
    { name: "IoT", icon: "📱", category: "Mobile" },
    { name: "Vue.js", icon: "💚", category: "Frontend" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "Redis", icon: "🔴", category: "Cache" },
    { name: "GraphQL", icon: "🎯", category: "API" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedLogos = [...integrationLogos, ...integrationLogos];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 200,
        duration: 0.8
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 200
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/80 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-800/40 to-slate-900/60" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/8 to-purple-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Maîtrise de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              500+ technologies
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Expertise approfondie dans les dernières technologies et frameworks pour accompagner votre transformation digitale
          </motion.p>
        </div>

        {/* Enhanced scrolling carousel */}
        <div className="relative overflow-hidden mb-20">
          <motion.div 
            className="flex gap-6 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            animate={{
              x: [0, -1440], // Adjusted for more items
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-28 h-20 flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-xl border border-blue-400/20 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-500 group shadow-xl hover:shadow-blue-500/20"
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                <div className="text-2xl mb-1 group-hover:scale-125 transition-transform duration-300">
                  {logo.icon}
                </div>
                <span className="text-xs font-semibold text-blue-100 group-hover:text-blue-300 transition-colors duration-300">
                  {logo.name}
                </span>
                <span className="text-[10px] text-blue-300/60 group-hover:text-blue-200/80 transition-colors duration-300">
                  {logo.category}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 via-slate-800/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 via-slate-800/80 to-transparent pointer-events-none z-10" />
        </div>

        {/* Enhanced integration categories */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { name: "Intelligence Artificielle", icon: "🧠", gradient: "from-blue-500 to-indigo-600" },
            { name: "Cloud Computing", icon: "☁️", gradient: "from-indigo-500 to-purple-600" },
            { name: "Cybersécurité", icon: "🛡️", gradient: "from-purple-500 to-pink-600" },
            { name: "DevOps", icon: "⚙️", gradient: "from-blue-600 to-cyan-600" },
            { name: "Data Science", icon: "📊", gradient: "from-cyan-500 to-blue-600" },
            { name: "Blockchain", icon: "⛓️", gradient: "from-indigo-600 to-blue-600" },
            { name: "Mobile", icon: "📱", gradient: "from-purple-600 to-indigo-600" },
            { name: "Web Frontend", icon: "🎨", gradient: "from-pink-500 to-purple-600" },
            { name: "Backend", icon: "🔧", gradient: "from-blue-500 to-indigo-500" },
            { name: "Analytics", icon: "📈", gradient: "from-cyan-600 to-blue-600" },
            { name: "Automatisation", icon: "🤖", gradient: "from-indigo-500 to-blue-500" },
            { name: "API & Microservices", icon: "🔗", gradient: "from-blue-600 to-purple-600" }
          ].map((category) => (
            <motion.div
              key={category.name}
              className="group relative text-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-blue-400/20 hover:bg-white/10 hover:border-blue-400/40 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-blue-500/20"
              variants={categoryVariants}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <span className="text-sm font-semibold text-blue-100 group-hover:text-white transition-colors duration-300 leading-tight block">
                  {category.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Technologies", icon: "⚡" },
              { number: "150+", label: "Projets réalisés", icon: "🚀" },
              { number: "50+", label: "Clients satisfaits", icon: "🎯" },
              { number: "24/7", label: "Support technique", icon: "🛠️" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationCarousel;
