
import { motion } from "framer-motion";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "contact@djanguicore.com",
      link: "mailto:contact@djanguicore.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: "+33 1 23 45 67 89",
      link: "tel:+33123456789"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: "123 Avenue des Champs-Élysées, 75008 Paris, France",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      details: "Lun-Ven: 9h-18h",
      link: "#"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
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
                <pattern id="contact-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="4" fill="#3b82f6" fillOpacity="0.05"/>
                  <circle cx="30" cy="30" r="12" fill="#3b82f6" fillOpacity="0.05"/>
                  <circle cx="30" cy="30" r="20" fill="#3b82f6" fillOpacity="0.05"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-pattern)"/>
            </svg>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Prêt à démarrer votre projet ? Parlons-en ensemble et trouvons la solution parfaite pour vos besoins
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Envoyez-nous un message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Votre prénom"
                        className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Votre nom"
                        className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise (optionnel)
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Votre entreprise"
                      className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Le sujet de votre message"
                      className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Décrivez votre projet ou vos besoins..."
                      className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:pl-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Informations de contact
                </h2>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group flex items-start space-x-4 p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-gray-600">
                          {info.link && info.link !== "#" ? (
                            <a 
                              href={info.link}
                              className="hover:text-blue-600 transition-colors duration-300"
                            >
                              {info.details}
                            </a>
                          ) : (
                            info.details
                          )}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Response */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Réponse rapide garantie
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Nous nous engageons à répondre à votre demande dans les 24 heures. 
                    Pour les urgences, n'hésitez pas à nous appeler directement.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">
                      Équipe disponible maintenant
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Questions Fréquentes
              </h2>
              <p className="text-xl text-gray-600">
                Retrouvez les réponses aux questions les plus courantes
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Quel est le délai moyen pour un projet ?",
                  answer: "Le délai varie selon la complexité du projet, généralement entre 4 à 16 semaines pour un projet complet."
                },
                {
                  question: "Proposez-vous un support après livraison ?",
                  answer: "Oui, nous offrons un support technique et maintenance continue pour tous nos projets."
                },
                {
                  question: "Travaillez-vous avec des budgets serrés ?",
                  answer: "Nous adaptons nos solutions à votre budget et proposons différentes options pour répondre à vos besoins."
                },
                {
                  question: "Peut-on voir des exemples de vos travaux ?",
                  answer: "Bien sûr ! Consultez notre section Projets pour découvrir nos réalisations récentes."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
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

export default Contact;
