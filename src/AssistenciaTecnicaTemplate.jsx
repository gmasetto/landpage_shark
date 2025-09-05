import React from "react";
import { FaWhatsapp, FaShieldAlt, FaTools, FaMobileAlt } from "react-icons/fa";
import sharkLogo from "./assets/shark_logo.png"; // Verifique se o caminho está correto
import { Link } from "react-router-dom";

// Informações do WhatsApp
const whatsapp = {
  phone: "5548984519301",
  message: encodeURIComponent("Olá, gostaria de saber mais sobre as soluções de vocês."),
};

// Conteúdo de texto revisado
const headerTitle = "SharkCell";
const headerSubtitle = "Seu dispositivo em boas mãos: soluções com qualidade e transparência!";

const mainTitle = "Seu celular não tem mais o mesmo desempenho?";
const mainDescription =
  "Bateria durando pouco ou aparelho muito lento? Nós temos a solução! Oferecemos diagnóstico e otimização para notebooks e celulares. Clique no botão abaixo e consulte nossa equipe!";

const whatsappCTA = "Consultar no WhatsApp";
const whatsappNote = "Fale conosco para um orçamento sem compromisso.";

const services = [
  {
    icon: <FaMobileAlt size={40} className="mb-3 text-cyan-300" />,
    title: "Atendimento Cordial",
    description:
      "Valorizamos cada cliente e oferecemos um atendimento atencioso e personalizado, sempre prontos para ouvir suas necessidades e resolver suas dúvidas",
  },
  {
    icon: <FaTools size={40} className="mb-3 text-cyan-300" />,
    title: "Atendimento Expresso",
    description:
      "Respeitamos o seu tempo. Nossos diagnósticos e serviços são realizados com agilidade para que você tenha seu equipamento de volta o quanto antes.",
  },
  {
    icon: <FaShieldAlt size={40} className="mb-3 text-cyan-300" />,
    title: "Serviço de Coleta e Entrega",
    description:
      "Não se preocupe em sair de casa! Oferecemos o serviço de coleta e entrega para sua total comodidade.",
  },
];

const footerCompany = "Não encontrou a solução que procurava? Entre em contato via Whatsapp e fale com nossa equipe técnica.";
const footerCNPJ = "CNPJ: 55.099.298/0001-20";
const footerContact = "Telefone: (48) 98451-9301 | Email: atendimento@sharkcell.com.br";
const footerRights = "© 2025 SharkCell. Todos os direitos reservados.";

export default function AssistenciaTecnicaTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a7de1] to-[#1a5a9e] text-white font-sans p-4 sm:p-6 md:p-8 flex flex-col">
      {/* Cabeçalho */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-50 shadow-md">
        <nav className="container mx-auto max-w-5xl flex justify-between items-center p-4">
          <Link to="/" className="flex items-center gap-3 font-bold text-lg">
            <img src={sharkLogo} alt="SharkCell Logo" className="h-8" />
            {headerTitle}
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

      {/* Espaçamento para compensar header fixo */}
      <div className="h-16"></div>

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
