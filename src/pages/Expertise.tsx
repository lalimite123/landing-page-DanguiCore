
import { motion } from "framer-motion";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";

const Expertise = () => {
  const expertiseAreas = [
    {
      category: "Frontend Development",
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Next.js", "Nuxt.js", "Svelte", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend Development", 
      technologies: ["Node.js", "Python", "Django", "FastAPI", "Express.js", "NestJS", "PHP", "Laravel"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Mobile Development",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin", "PWA"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase", "Supabase"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "AI & Machine Learning",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn", "Pandas", "NumPy"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Technologies maîtrisées" },
    { number: "10+", label: "Années d'expérience" },
    { number: "200+", label: "Projets réalisés" },
    { number: "50+", label: "Clients satisfaits" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="absolute inset-0 opacity-40">
            <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
              <defs>
                <pattern id="expertise-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" fill="#3b82f6" fillOpacity="0.05"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#expertise-pattern)"/>
            </svg>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Notre Expertise
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Une maîtrise technique approfondie dans les technologies les plus avancées du marché
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                      {area.category}
                    </h3>
                    
                    <div className="flex flex-wrap gap-3">
                      {area.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Processus de Développement
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une méthodologie éprouvée pour garantir la réussite de vos projets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Analyse", desc: "Étude approfondie de vos besoins" },
                { step: "02", title: "Conception", desc: "Architecture et design optimal" },
                { step: "03", title: "Développement", desc: "Code de qualité et tests rigoureux" },
                { step: "04", title: "Déploiement", desc: "Mise en production et suivi" }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">
                    {process.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Expertise;
