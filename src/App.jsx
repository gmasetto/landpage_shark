import React from "react";
import { FaWhatsapp, FaShieldAlt, FaTools, FaMobileAlt } from "react-icons/fa";
import sharkLogo from "./assets/shark_logo.png"; // Check if this path is correct

// WhatsApp info
const whatsapp = {
  phone: "5548984519301",
  message: encodeURIComponent("Olá, gostaria de um orçamento."),
};

// Text content
const headerTitle = "SharkCell";
const headerSubtitle = "Assistência técnica confiável e especializada em celulares.";

const mainTitle = "Seu celular está com defeito?";
const mainDescription =
  "Oferecemos diagnóstico técnico, reparos precisos e componentes de alta qualidade. Seu dispositivo volta a funcionar com garantia e atenção personalizada.";

const whatsappCTA = "Chamar no WhatsApp";
const whatsappNote = "Fale conosco para um orçamento sem compromisso.";

const services = [
  {
    icon: <FaMobileAlt size={40} className="mb-3 text-cyan-300" />,
    title: "Troca de Tela",
    description:
      "Substituição de telas com componentes de alta qualidade para diferentes marcas e modelos.",
  },
  {
    icon: <FaTools size={40} className="mb-3 text-cyan-300" />,
    title: "Reparos Gerais",
    description:
      "Consertos em bateria, conectores, câmeras, alto-falantes e outros componentes.",
  },
  {
    icon: <FaShieldAlt size={40} className="mb-3 text-cyan-300" />,
    title: "Serviço com Garantia",
    description:
      "Todos os serviços realizados contam com garantia e suporte pós-atendimento.",
  },
];

const footerCompany = "SharkCell Assistência Técnica";
const footerCNPJ = "CNPJ: 55.099.298/0001-20";
const footerContact = "Telefone: (48) 98451-9301 | Email: atendimento@sharkcell.com.br";
const footerRights = "© 2025 SharkCell. Todos os direitos reservados.";

export default function AssistenciaTecnicaTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a7de1] to-[#1a5a9e] text-white font-sans p-4 sm:p-6 md:p-8 flex flex-col">
      {/* Cabeçalho */}
      <header className="container mx-auto max-w-4xl text-center mb-8">
        <img src={sharkLogo} alt="Logo SharkCell" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{headerTitle}</h1>
        <p className="text-lg md:text-xl text-gray-200 mt-2">{headerSubtitle}</p>
      </header>

      {/* Seção Principal */}
      <main className="container mx-auto max-w-4xl flex-grow flex flex-col items-center justify-center text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">{mainTitle}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">{mainDescription}</p>

          <a
            href={`https://wa.me/${whatsapp.phone}?text=${whatsapp.message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-full shadow-lg hover:bg-[#128C7E] transition-transform transform hover:scale-105 duration-300"
          >
            <FaWhatsapp size={28} />
            {whatsappCTA}
          </a>
          <p className="text-xs text-gray-400 mt-3">{whatsappNote}</p>
        </div>

        {/* Seção de Serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center"
            >
              {service.icon}
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Rodapé */}
      <footer className="container mx-auto max-w-4xl text-center text-gray-300 text-sm mt-12 border-t border-white/20 pt-6">
        <p className="font-bold">{footerCompany}</p>
        <p>{footerCNPJ}</p>
        <p>{footerContact}</p>
        <p className="mt-4 text-xs text-gray-400">{footerRights}</p>
      </footer>
    </div>
  );
}