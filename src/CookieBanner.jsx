import React, { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Só esconde se já tiver aceitado
    if (!localStorage.getItem("cookiesAccepted")) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  const rejectCookies = () => {
    // Não salva nada no localStorage para sempre reabrir no refresh
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-6 z-50 flex flex-col items-center text-center gap-4">
      <p className="text-sm md:text-base max-w-3xl">
        Este site utiliza cookies para melhorar sua experiência de navegação,
        personalizar conteúdos e analisar nosso tráfego. Você pode aceitar
        para ter uma experiência completa, ou rejeitar e continuar navegando
        apenas com os recursos essenciais. Para saber mais, consulte nossa{" "}
        <a
          href="/politica-de-privacidade"
          className="underline text-blue-400 hover:text-blue-300"
        >
          Política de Privacidade
        </a>.
      </p>

      <div className="flex gap-3">
        <button
          onClick={rejectCookies}
          className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
        >
          Rejeitar
        </button>
        <button
          onClick={acceptCookies}
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
