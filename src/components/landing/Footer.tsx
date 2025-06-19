import { Separator } from "@/components/ui/separator";
import Aurora from "./Aurora";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
      {/* Aurora Animated Background */}
      <div className="pointer-events-none absolute inset-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.55}
          amplitude={1.3}
          speed={0.35}
          colorCycle // On active le mode "jeu de couleur"
          style={{ width: "100%", height: "100%", minHeight: "100%" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-4">DanguiCore</div>
            <p className="text-gray-400 mb-4">
              Expert en solutions technologiques innovantes. Transformons ensemble vos défis en opportunités.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-blue-400">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-blue-400">Twitter</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Intelligence Artificielle</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cloud Computing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cybersécurité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">DevOps</a></li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Data Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blockchain</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">IoT</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mobile & Web</a></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Carrières</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 DanguiCore. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Conditions</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
