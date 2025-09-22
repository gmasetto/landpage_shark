import React from "react";
import { FaWhatsapp, FaShieldAlt, FaTools, FaMobileAlt } from "react-icons/fa";
import sharkLogo from "./assets/shark_logo.png";
import phoneImage from "./assets/shark_logo_without_background.png";
import { Link } from "react-router-dom";

import ImageCarousel from "./ImageCarousel";

const whatsapp = {
  phone: "5548984519301",
  message: encodeURIComponent("Olá, gostaria de saber mais sobre as soluções de vocês."),
};

const services = [
  {
    icon: <FaMobileAlt size={40} className="mb-3 text-cyan-300" />,
    title: "Atendimento Cordial",
    description: "Valorizamos cada cliente com um atendimento atencioso e personalizado.",
  },
  {
    icon: <FaTools size={40} className="mb-3 text-cyan-300" />,
    title: "Atendimento Expresso",
    description: "Serviços realizados com agilidade para que você tenha seu equipamento de volta rápido.",
  },
  {
    icon: <FaShieldAlt size={40} className="mb-3 text-cyan-300" />,
    title: "Serviço de Coleta e Entrega",
    description: "Oferecemos o serviço de coleta e entrega para sua total comodidade.",
  },
  {
    icon: <FaTools size={40} className="mb-3 text-cyan-300" />,
    title: "Formatação de Notebooks",
    description:
      "Serviço de formatação completo, com backup opcional dos seus arquivos e instalação limpa do sistema operacional para melhorar o desempenho do seu notebook.",
  },
  {
    icon: <FaTools size={40} className="mb-3 text-cyan-300" />,
    title: "Suporte para Notebooks",
    description:
      "Assistência especializada em notebooks, incluindo diagnóstico, manutenção preventiva e reparos técnicos para manter seu equipamento sempre em bom funcionamento.",
  },
  {
    icon: <FaMobileAlt size={40} className="mb-3 text-cyan-300" />,
    title: "Reparo para Celulares",
    description:
      "Atendimento em reparos de celulares, como troca de telas, baterias e ajustes técnicos. Trabalhamos com transparência e informamos sempre quando o serviço envolver peças ou fornecedores terceirizados.",
  },
];

export default function AssistenciaTecnicaTemplate() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-gradient-to-br from-[#2a7de1] to-[#1a5a9e] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-50 shadow-md">
        <nav className="container mx-auto max-w-5xl flex justify-between items-center p-4">
          <Link to="/" className="flex items-center gap-3 font-bold text-lg">
            <img src={sharkLogo} alt="SharkCell Logo" className="h-8" />
            SharkCell
          </Link>
          <div className="flex gap-6">
            <Link to="/quem-somos" className="hover:text-cyan-300 transition">
              Quem somos
            </Link>
            <Link to="/politica-privacidade" className="hover:text-cyan-300 transition">
              Política de Privacidade
            </Link>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      <section className="w-full bg-white text-gray-900 py-12">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start px-6 md:px-8 gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Seu celular não tem mais o mesmo desempenho?
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-6">
              Bateria durando pouco ou aparelho muito lento? Nós temos a solução!
              Oferecemos diagnóstico e otimização para notebooks e celulares.
              Clique no botão abaixo e consulte nossa equipe!
            </p>
            <a
              href={`https://wa.me/${whatsapp.phone}?text=${whatsapp.message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#25D366] text-white font-bold text-lg rounded-full shadow-lg hover:bg-[#128C7E] transition-transform transform hover:scale-105 duration-300"
            >
              <FaWhatsapp size={24} />
              Consultar no WhatsApp
            </a>
            <p className="text-xs text-gray-500 mt-2">
              Fale conosco para um orçamento sem compromisso.
            </p>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 flex justify-center -mt-2 md:-mt-4">
            <img
              src={phoneImage}
              alt="Celular"
              className="max-h-[380px] object-contain drop-shadow-lg rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gradient-to-br from-[#2a7de1] to-[#1a5a9e]">
        <div className="container mx-auto max-w-6xl px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Nossos Serviços</h2>
          <p className="mb-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Na <span className="font-semibold">SharkCell</span>, oferecemos soluções rápidas e eficientes 
            para manter seu celular e notebook sempre com o melhor desempenho. 
            Nossa equipe é especializada em diagnósticos, reparos e otimizações, 
            sempre priorizando a sua comodidade e satisfação.
          </p>

          <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 md:px-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                {service.icon}
                <h3 className="font-bold text-xl mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="w-full bg-white py-16 text-gray-900">
      <div className="container mx-auto max-w-6xl px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Nosso Time</h2>
        <p className="mb-6 text-lg text-gray-700">
          Contamos com uma equipe experiente, dedicada e apaixonada por tecnologia.  
          Nosso compromisso é oferecer soluções ágeis, confiáveis e personalizadas para cada cliente, 
          garantindo um atendimento próximo e de qualidade.
        </p>
        <ImageCarousel />
      </div>
    </section>


      <section className="w-full bg-white py-16 text-gray-900">
        <div className="container mx-auto max-w-6xl px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Nossa Localização</h2>
          <p className="mb-6 text-lg">
            Av. Governador Jorge Lacerda, 283 - Sala 01 - Esquina com Rua Irmão Vieira, em frente à Guarda Municipal, São José - SC, 88101-420
          </p>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Localização SharkCell"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.013888056413!2d-48.62851842380562!3d-27.60454612399859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527374a7f9d4b6d%3A0xabc123456789abcd!2sAv.%20Governador%20Jorge%20Lacerda%2C%20283%20-%20Sala%2001%2C%20S%C3%A3o%20Jos%C3%A9%20-%20SC%2C%2088101-420!5e0!3m2!1spt-BR!2sbr!4v1693939200000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-100 text-sm border-t border-white/20 pt-6 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-bold">
            Não encontrou a solução que procurava? Entre em contato via Whatsapp e fale com nossa equipe técnica.
          </p>
          <p>CNPJ: 55.099.298/0001-20</p>
          <p>Telefone: (48) 98451-9301 | Email: atendimento@sharkcell.com.br</p>
          <p className="mt-4 text-xs text-gray-200">
            © 2025 SharkCell. Todos os direitos reservados.
          </p>
        </div>
      </footer>


    </div>
  );
}
