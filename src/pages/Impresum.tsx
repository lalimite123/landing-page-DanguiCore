
import { motion } from "framer-motion";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import { Building, Mail, Phone, MapPin } from "lucide-react";

const Impresum = () => {
  const legalSections = [
    {
      title: "Informations légales",
      content: [
        { label: "Raison sociale", value: "DjanguiCore SARL" },
        { label: "Forme juridique", value: "Société à Responsabilité Limitée" },
        { label: "Capital social", value: "10 000 €" },
        { label: "SIRET", value: "123 456 789 00012" },
        { label: "RCS", value: "Paris B 123 456 789" },
        { label: "TVA Intracommunautaire", value: "FR12 123456789" }
      ]
    },
    {
      title: "Siège social",
      content: [
        { label: "Adresse", value: "123 Avenue des Champs-Élysées" },
        { label: "Code postal", value: "75008" },
        { label: "Ville", value: "Paris" },
        { label: "Pays", value: "France" }
      ]
    },
    {
      title: "Contact",
      content: [
        { label: "Téléphone", value: "+33 1 23 45 67 89" },
        { label: "Email", value: "contact@djanguicore.com" },
        { label: "Site web", value: "www.djanguicore.com" }
      ]
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
                <pattern id="impresum-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <rect x="11" y="18" width="38" height="4" fill="#3b82f6" fillOpacity="0.05"/>
                  <rect x="11" y="26" width="38" height="4" fill="#3b82f6" fillOpacity="0.05"/>
                  <rect x="11" y="34" width="38" height="4" fill="#3b82f6" fillOpacity="0.05"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#impresum-pattern)"/>
            </svg>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Mentions Légales
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Informations légales et mentions obligatoires de DjanguiCore
              </p>
            </motion.div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {legalSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mr-4">
                      {index === 0 && <Building className="w-6 h-6" />}
                      {index === 1 && <MapPin className="w-6 h-6" />}
                      {index === 2 && <Phone className="w-6 h-6" />}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col">
                        <dt className="text-sm font-medium text-gray-500 mb-1">
                          {item.label}
                        </dt>
                        <dd className="text-gray-900 font-medium">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Legal Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 space-y-8"
            >
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Directeur de la publication
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Le directeur de la publication est Alexandre Dubois, gérant de la société DjanguiCore SARL.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Hébergement
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                  <p><strong>Site web :</strong> vercel.com</p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Propriété intellectuelle
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                  sauf autorisation expresse du directeur de la publication.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Protection des données personnelles
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                  vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse : 
                  <a href="mailto:contact@djanguicore.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 ml-1">
                    contact@djanguicore.com
                  </a>
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite. 
                  En continuant votre navigation sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact pour questions légales
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pour toute question concernant ces mentions légales ou nos pratiques en matière de protection des données, 
                  n'hésitez pas à nous contacter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:legal@djanguicore.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email légal
                  </a>
                  <a
                    href="tel:+33123456789"
                    className="inline-flex items-center justify-center px-6 py-3 border border-blue-200 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Téléphone
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Impresum;
