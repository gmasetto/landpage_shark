import React from "react";
import { Link } from "react-router-dom";

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-blue-600 text-white flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">SharkCell</h1>
          <nav>
            <Link
              to="/"
              className="px-4 py-2 bg-white text-blue-700 rounded hover:bg-gray-200 transition"
            >
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto max-w-3xl p-6 flex-1">
        <h2 className="text-3xl font-bold mb-4">Quem Somos</h2>
        <p className="text-gray-100 leading-relaxed mb-4">
          A SharkCell foi fundada há mais de 10 anos por <strong>Leandro</strong> e <strong>Misslaine</strong>, 
          com o propósito de oferecer soluções confiáveis e eficientes para celulares e notebooks.
        </p>
        <p className="text-gray-100 leading-relaxed mb-4">
          Desde o início, nossa prioridade é unir experiência técnica a um atendimento humano e transparente, 
          garantindo que cada cliente tenha suporte adequado para o seu dia a dia.
        </p>
        <p className="text-gray-100 leading-relaxed">
          Hoje somos referência na região, reconhecidos pela dedicação em entregar resultados consistentes 
          e pela relação de confiança construída ao longo da nossa trajetória.
        </p>
      </main>
    </div>
  );
}
