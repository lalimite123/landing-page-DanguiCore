
import { motion } from "framer-motion";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Code, Database, Cloud, Smartphone, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Web",
      description: "Applications web modernes avec React, Vue.js, Angular et les dernières technologies",
      features: ["Applications SPA", "Sites e-commerce", "Plateformes sur mesure", "API REST & GraphQL"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Applications Mobile",
      description: "Applications natives et cross-platform pour iOS et Android",
      features: ["React Native", "Flutter", "Applications natives", "PWA"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Solutions Backend",
      description: "Architecture serveur robuste et bases de données optimisées",
      features: ["Node.js & Python", "Microservices", "Bases de données", "DevOps"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Infrastructure",
      description: "Déploiement et gestion d'infrastructure cloud moderne",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD", "Monitoring"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Solutions E-commerce",
      description: "Plateformes de vente en ligne performantes et sécurisées",
      features: ["Shopify & WooCommerce", "Paiements sécurisés", "Gestion d'inventaire", "Analytics"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimisation Performance",
      description: "Amélioration des performances et de l'expérience utilisateur",
      features: ["Audit de performance", "SEO technique", "Optimisation mobile", "Core Web Vitals"]
    }
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="absolute inset-0 opacity-40">
            <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
              <defs>
                <pattern id="services-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="4" fill="#3b82f6" fillOpacity="0.05"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#services-pattern)"/>
            </svg>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Nos Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Des solutions technologiques complètes pour transformer vos idées en réalité digitale
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Discutons de vos besoins et trouvons ensemble la solution parfaite pour votre entreprise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl">
                  Consultation gratuite
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl">
                  Voir nos projets
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
