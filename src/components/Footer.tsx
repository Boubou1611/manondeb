import { useEffect, useState } from "react";
import { FaMoon, FaSun } from 'react-icons/fa'; // Importez les icônes

// Assurez-vous que le chemin est correct
interface FooterProps {
  language: boolean;
  onChangeLanguage: (lng: boolean) => void;
}

export default function Footer({ language, onChangeLanguage }: FooterProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Sauvegarder le thème dans localStorage
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  return (
    <footer className="footer">
      {/* Bouton pour le dark/light mode à gauche */}
      <div className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? (
          <FaSun size={20} /> 
        ) : (
          <FaMoon size={20} /> 
        )}
      </div>

      {/* Langue à droite */}
      <div className="language-selector">
        <p
          onClick={() => onChangeLanguage(!language)}
        >
          {language ? "FR" : "EN"}
        </p>
      </div>
    </footer>
  );
}