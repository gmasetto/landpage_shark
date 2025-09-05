import React from "react";
import { Link } from "react-router-dom";

export default function PoliticaPrivacidade() {
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
        <h2 className="text-3xl font-bold mb-6">Política de Privacidade</h2>

        <p className="mb-4 text-gray-100">
          <strong>Shark Cell LTDA</strong><br />
          Endereço: Av. Governador Jorge Lacerda, 283 - Sala 01 - Esquina com Rua
          Irmão Vieira, em frente à Guarda Municipal, São José - SC, 88101-420
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">1. Introdução</h3>
        <p className="text-gray-100 mb-4 leading-relaxed">
          A Shark Cell LTDA valoriza a privacidade e a segurança dos dados de seus
          clientes. Esta Política de Privacidade descreve como coletamos,
          utilizamos, armazenamos e protegemos suas informações pessoais, em
          conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">2. Informações que Coletamos</h3>
        <ul className="list-disc list-inside text-gray-100 mb-4 space-y-1">
          <li>Dados pessoais: nome, CPF, endereço, telefone, e-mail.</li>
          <li>Dados de serviços: informações sobre o aparelho e histórico de atendimento.</li>
          <li>Dados de pagamento: informações necessárias para emissão de nota fiscal e cobrança.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-2">3. Finalidade do Uso dos Dados</h3>
        <ul className="list-disc list-inside text-gray-100 mb-4 space-y-1">
          <li>Identificação e cadastro do cliente;</li>
          <li>Emissão de notas fiscais e documentos fiscais obrigatórios;</li>
          <li>Contato sobre andamento do serviço, prazos e orçamentos;</li>
          <li>Cumprimento de obrigações legais e regulatórias;</li>
          <li>Ofertas de produtos e serviços relacionados, mediante consentimento.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-2">4. Compartilhamento de Informações</h3>
        <p className="text-gray-100 mb-4 leading-relaxed">
          Seus dados pessoais <strong>não serão vendidos ou compartilhados</strong> com terceiros,
          exceto quando:
        </p>
        <ul className="list-disc list-inside text-gray-100 mb-4 space-y-1">
          <li>Houver obrigação legal;</li>
          <li>Necessário para emissão de nota fiscal ou procedimentos contábeis;</li>
          <li>Autorizado previamente pelo cliente.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-2">5. Armazenamento e Segurança</h3>
        <ul className="list-disc list-inside text-gray-100 mb-4 space-y-1">
          <li>Dados armazenados em sistemas internos com acesso restrito.</li>
          <li>Medidas técnicas e administrativas contra acessos não autorizados.</li>
          <li>Senhas de aparelhos são solicitadas apenas quando necessárias e excluídas após o serviço.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-2">6. Direitos do Titular</h3>
        <ul className="list-disc list-inside text-gray-100 mb-4 space-y-1">
          <li>Acessar, corrigir ou atualizar seus dados;</li>
          <li>Solicitar a exclusão de dados pessoais, quando aplicável;</li>
          <li>Revogar consentimento para uso em comunicações de marketing;</li>
          <li>Solicitar informações sobre o tratamento de seus dados.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-2">7. Prazo de Retenção</h3>
        <ul className="list-disc list-inside text-gray-100 mb-4 space-y-1">
          <li>Dados fiscais serão mantidos conforme prazo legal.</li>
          <li>Informações de contato poderão ser mantidas enquanto houver relacionamento ativo.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-2">8. Contato</h3>
        <p className="text-gray-100 leading-relaxed">
          Para dúvidas ou solicitações relacionadas a dados pessoais, entre em contato:<br />
          <strong>Shark Cell Comércio de Varejo e Reparos LTDA</strong><br />
          Endereço: Av. Governador Jorge Lacerda, 283 - Sala 01 - Esquina com Rua
          Irmão Vieira, em frente à Guarda Municipal, São José - SC, 88101-420<br />
          Telefone: (48) 98451-9301<br />
          E-mail: atendimento@sharkcell.com.br
        </p>
      </main>
    </div>
  );
}
