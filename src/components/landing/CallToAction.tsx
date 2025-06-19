
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-400/90 to-indigo-500/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Prêt à transformer votre entreprise ?
        </h2>
        <p className="text-xl text-blue-50/90 mb-8 max-w-3xl mx-auto">
          Rejoignez les entreprises qui font confiance à DanguiCore pour leur transformation digitale. 
          Consultation gratuite et devis personnalisé.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white/95 text-blue-500 hover:bg-white px-8 py-4 text-lg rounded-xl shadow-lg">
            Consultation gratuite
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-white/80 text-white hover:bg-white/20 hover:text-white px-8 py-4 text-lg rounded-xl backdrop-blur-sm">
            <Download className="mr-2 h-5 w-5" />
            Télécharger notre brochure
          </Button>
        </div>

        <div className="mt-8 text-blue-50/80">
          <p>Aucun engagement • Consultation gratuite • Support 24/7 inclus</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
