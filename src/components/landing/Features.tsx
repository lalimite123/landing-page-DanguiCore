
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Shield, Code, Puzzle, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Solutions sur mesure",
    description: "Développement personnalisé adapté à vos besoins spécifiques et contraintes métier."
  },
  {
    icon: Users,
    title: "Équipe experte",
    description: "Consultants certifiés avec une expertise reconnue dans les technologies de pointe."
  },
  {
    icon: Shield,
    title: "Sécurité avancée",
    description: "Protection optimale de vos données avec les dernières technologies de cybersécurité."
  },
  {
    icon: Code,
    title: "Innovation continue",
    description: "Intégration des dernières technologies pour maintenir votre avantage concurrentiel."
  },
  {
    icon: Puzzle,
    title: "Intégrations complètes",
    description: "Connexion fluide entre tous vos systèmes et plateformes existants."
  },
  {
    icon: Globe,
    title: "Déploiement global",
    description: "Solutions scalables pour accompagner votre croissance à l'international."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin pour innover
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DanguiCore vous accompagne dans votre transformation digitale avec des solutions 
            technologiques avancées et une expertise reconnue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-blue-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:shadow-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
