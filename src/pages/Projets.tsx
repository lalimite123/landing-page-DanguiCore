
import { motion } from "framer-motion";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projets = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Application",
      description: "Plateforme e-commerce complète avec gestion d'inventaire, paiements sécurisés et tableau de bord administrateur avancé.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Application",
      description: "Application bancaire mobile sécurisée avec authentification biométrique et transactions en temps réel.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Plaid API", "Biometrics"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI-Powered Analytics",
      category: "Data Science",
      description: "Plateforme d'analyse de données utilisant l'intelligence artificielle pour des insights business prédictifs.",
      image: "/placeholder.svg",
      technologies: ["Python", "TensorFlow", "FastAPI", "Docker", "GCP"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "IoT Dashboard",
      category: "IoT Solution",
      description: "Tableau de bord en temps réel pour la surveillance et le contrôle de dispositifs IoT industriels.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "MQTT", "InfluxDB", "Grafana", "Kubernetes"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "SaaS Marketing Platform",
      category: "SaaS",
      description: "Plateforme SaaS complète pour l'automatisation marketing avec analytics avancés et intégrations multiples.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Prisma", "Supabase", "Vercel", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Blockchain Voting System",
      category: "Blockchain",
      description: "Système de vote sécurisé basé sur la blockchain avec transparence totale et vérification cryptographique.",
      image: "/placeholder.svg",
      technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS", "MetaMask"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = ["Tous", "Web Application", "Mobile Application", "Data Science", "IoT Solution", "SaaS", "Blockchain"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="absolute inset-0 opacity-40">
            <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
              <defs>
                <pattern id="projets-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <polygon points="30,0 60,30 30,60 0,30" fill="#3b82f6" fillOpacity="0.05"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#projets-pattern)"/>
            </svg>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Nos Projets
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Découvrez nos réalisations et les solutions innovantes que nous avons développées pour nos clients
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    index === 0 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700" 
                      : "border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Projets Phares
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos réalisations les plus remarquables qui illustrent notre expertise technique
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white rounded-full">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white rounded-full">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <Badge className="bg-blue-100 text-blue-700 mb-4 rounded-full px-3 py-1">
                      {project.category}
                    </Badge>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other Projects Grid */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Autres Réalisations
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <Badge className="bg-indigo-100 text-indigo-700 mb-3 rounded-full px-2 py-1 text-xs">
                      {project.category}
                    </Badge>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 rounded-full text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 rounded-full text-xs">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Votre projet, notre expertise
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Transformons ensemble vos idées en solutions digitales innovantes
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl">
                Discuter de votre projet
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projets;
