
import React, { useState, useEffect } from 'react';

const motivationalQuotes = [
  "Seu único limite é você mesmo! 💪",
  "Cada treino te aproxima do seu objetivo! 🎯",
  "A consistência é a chave do sucesso! 🔑",
  "Transforme suor em conquista! 🏆",
  "Seu corpo pode fazer isso. É sua mente que você precisa convencer! 🧠",
  "Não pare quando estiver cansado, pare quando terminar! ⚡",
  "O progresso, não a perfeição! 📈"
];

const MotivationalQuote = () => {
  const [quote, setQuote] = useState(motivationalQuotes[0]);

  useEffect(() => {
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="mx-4 mb-8">
      <div className="bg-fitness-gradient p-6 rounded-2xl shadow-xl animate-pulse-soft">
        <div className="text-center">
          <p className="text-white font-semibold text-lg mb-2 text-shadow">
            {quote}
          </p>
          <p className="text-white/80 text-sm">
            Dica motivacional do dia
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotivationalQuote;
