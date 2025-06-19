
import { motion } from "framer-motion";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence Technique",
      description: "Nous visons l'excellence dans chaque ligne de code que nous écrivons, en utilisant les meilleures pratiques et les technologies les plus avancées."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et créer des solutions sur mesure."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation",
      description: "Nous repoussons constamment les limites de la technologie pour créer des solutions innovantes et avant-gardistes."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Notre passion pour le développement et la technologie se reflète dans la qualité de notre travail et notre engagement."
    }
  ];

  const team = [
    {
      name: "Alexandre Dubois",
      role: "Fondateur & Lead Developer",
      image: "/placeholder.svg",
      description: "10+ années d'expérience en développement full-stack, spécialisé dans les architectures modernes et scalables."
    },
    {
      name: "Sophie Martin",
      role: "UI/UX Designer",
      image: "/placeholder.svg", 
      description: "Experte en design d'interfaces utilisateur et expérience utilisateur, passionnée par l'innovation digitale."
    },
    {
      name: "Thomas Laurent",
      role: "DevOps Engineer",
      image: "/placeholder.svg",
      description: "Spécialiste en infrastructure cloud et automatisation, expert AWS et Kubernetes."
    },
    {
      name: "Marie Rousseau",
      role: "Project Manager",
      image: "/placeholder.svg",
      description: "Gestion de projet agile et coordination d'équipes, garantit la livraison dans les délais et budgets."
    }
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
                <pattern id="about-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M30 30c0-16.569 13.431-30 30-30v30H30z" fill="#3b82f6" fillOpacity="0.05"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-pattern)"/>
            </svg>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  À Propos
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  DjanguiCore est une agence de développement passionnée par l'innovation technologique. 
                  Nous transformons les idées en solutions digitales exceptionnelles depuis plus de 10 ans.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                    <div className="text-gray-600">Projets réalisés</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
                    <div className="text-gray-600">Clients satisfaits</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <div className="text-white text-3xl font-bold">DC</div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">DjanguiCore</h3>
                      <p className="text-gray-600">Excellence • Innovation • Passion</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nos Valeurs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes qui guident notre travail et définissent notre approche
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group text-center p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Équipe
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des experts passionnés qui donnent vie à vos projets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Notre Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Nous croyons que la technologie doit servir l'humain et faciliter la vie des entreprises. 
                  Notre mission est de créer des solutions digitales qui apportent une réelle valeur ajoutée 
                  à nos clients et leurs utilisateurs.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Chaque projet est une opportunité de repousser les limites du possible et de créer 
                  quelque chose d'exceptionnel. Nous mettons notre expertise technique au service de 
                  votre vision pour concrétiser vos ambitions digitales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Innovation constante</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Qualité garantie</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Support continu</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20"></div>
                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-6">🚀</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Transformons l'impossible en possible
                      </h3>
                      <p className="text-gray-600">
                        Avec passion, expertise et innovation
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
