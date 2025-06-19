
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Cloud, Shield } from "lucide-react";

const WorkflowDemo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Méthodologie éprouvée
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre approche structurée garantit la réussite de vos projets technologiques, 
            de l'analyse des besoins jusqu'à la mise en production.
          </p>
        </div>

        {/* Workflow Visualization */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-blue-200/50 p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            
            {/* Start Node */}
            <Card className="relative border-blue-200 bg-blue-50">
              <CardContent className="p-4 text-center">
                <div className="bg-blue-500 p-3 rounded-full w-fit mx-auto mb-2">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium text-blue-800">Analyse & Conception</p>
                <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-700">Phase 1</Badge>
              </CardContent>
            </Card>

            <ArrowRight className="text-blue-400 h-8 w-8 hidden md:block" />
            
            {/* Process Node */}
            <Card className="relative border-indigo-200 bg-indigo-50">
              <CardContent className="p-4 text-center">
                <div className="bg-indigo-500 p-3 rounded-full w-fit mx-auto mb-2">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium text-indigo-800">Développement</p>
                <Badge variant="secondary" className="mt-2 bg-indigo-100 text-indigo-700">Phase 2</Badge>
              </CardContent>
            </Card>

            <ArrowRight className="text-blue-400 h-8 w-8 hidden md:block" />
            
            {/* End Node */}
            <Card className="relative border-cyan-200 bg-cyan-50">
              <CardContent className="p-4 text-center">
                <div className="bg-cyan-500 p-3 rounded-full w-fit mx-auto mb-2">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium text-cyan-800">Déploiement</p>
                <Badge variant="secondary" className="mt-2 bg-cyan-100 text-cyan-700">Phase 3</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Cette méthodologie éprouvée nous permet de livrer des solutions robustes, 
              sécurisées et parfaitement adaptées à vos besoins métier.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
            <p className="text-gray-600">Projets réalisés</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">98%</div>
            <p className="text-gray-600">Taux de satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
            <p className="text-gray-600">Support technique</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemo;
