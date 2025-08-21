import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import orthodonticsIcon from "@/assets/orthodontics-icon.png";
import implantIcon from "@/assets/implant-icon.png";
import prostheticsIcon from "@/assets/prosthetics-icon.png";
import surgeryIcon from "@/assets/surgery-icon.png";
import cosmeticIcon from "@/assets/cosmetic-icon.png";
import ortodontiaExemplo from "/lovable-uploads/adf19b4c-dea9-4b50-b220-9259640dac04.png";
import implanteExemplo from "/lovable-uploads/ebc75930-454a-4a0c-b776-cf2876adb975.png";
import proteseExemplo from "/lovable-uploads/068f7319-92b8-4a6f-a9cc-f8cb3849613a.png";
import cirurgiaExemplo from "@/assets/cirurgia-exemplo-new.jpg";
import esteticaExemplo from "@/assets/estetica-exemplo-new.jpg";
import lentesExemplo from "@/assets/lentes-exemplo-new.jpg";
import coroasExemplo from "@/assets/coroas-exemplo-new.jpg";
import raioXExemplo from "@/assets/raio-x-exemplo.jpg";
import cameraExemplo from "@/assets/camera-exemplo.jpg";
import sedacaoExemplo from "/lovable-uploads/e5306ebf-9131-4331-990f-4ea5477e41e9.png";
import { Camera, Scan, Sparkles, Award, Wind } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      title: "Ortodontia",
      description: "Correção do posicionamento dos dentes e estruturas maxilares com tecnologia avançada e aparelhos modernos.",
      icon: orthodonticsIcon,
      exampleImage: ortodontiaExemplo
    },
    {
      title: "Implantodontia",
      description: "Reposição de dentes perdidos com implantes de titânio, devolvendo função mastigatória e estética.",
      icon: implantIcon,
      exampleImage: implanteExemplo
    },
    {
      title: "Prótese",
      description: "Restauração e reabilitação oral com próteses fixas e removíveis de alta qualidade.",
      icon: prostheticsIcon,
      exampleImage: proteseExemplo
    },
    {
      title: "Cirurgias",
      description: "Procedimentos cirúrgicos orais realizados com precisão e cuidado em ambiente seguro.",
      icon: surgeryIcon,
      exampleImage: cirurgiaExemplo
    }
  ];

  const additionalServices = [
    {
      title: "Odontologia Estética",
      description: "Transformação do seu sorriso com procedimentos estéticos avançados e materiais de primeira linha.",
      icon: cosmeticIcon,
      exampleImage: esteticaExemplo
    },
    {
      title: "Lentes de Contato Dental",
      description: "Laminados ultrafinos para correção de imperfeições e criação de sorrisos perfeitos.",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      exampleImage: lentesExemplo
    },
    {
      title: "Coroas de Porcelana",
      description: "Restaurações completas em porcelana com estética natural e durabilidade excepcional.",
      icon: <Award className="h-8 w-8 text-primary" />,
      exampleImage: coroasExemplo
    },
    {
      title: "Raio-x Panorâmico",
      description: "Diagnóstico preciso com equipamentos de radiologia digital de última geração.",
      icon: <Scan className="h-8 w-8 text-primary" />,
      exampleImage: raioXExemplo
    },
    {
      title: "Consultas com Câmera Intraoral",
      description: "Exames detalhados com tecnologia de imagem intraoral para diagnósticos precisos.",
      icon: <Camera className="h-8 w-8 text-primary" />,
      exampleImage: cameraExemplo
    },
    {
      title: "Sedação com Óxido Nitroso",
      description: "Procedimentos dentários confortáveis e livres de ansiedade com sedação segura.",
      icon: <Wind className="h-8 w-8 text-primary" />,
      exampleImage: sedacaoExemplo
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-dental-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos com tecnologia de ponta 
            e profissionais especializados.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-dental-card transition-all duration-300 hover:scale-105 border-none bg-gradient-card overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={service.exampleImage} 
                  alt={`Exemplo de ${service.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center">
                    <img src={service.icon} alt={service.title} className="h-12 w-12" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-dental-blue-lighter/10 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Serviços Especializados
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-dental-card transition-all duration-300 hover:scale-105 border-none bg-dental-white overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={service.exampleImage} 
                    alt={`Exemplo de ${service.title}`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                      {typeof service.icon === 'string' ? (
                        <img src={service.icon} alt={service.title} className="h-8 w-8" />
                      ) : (
                        service.icon
                      )}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;