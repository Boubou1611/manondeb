import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Ressources de traduction
const resources = {
  fr: {
    translation: {
      fanzine: {
        title: "Fanzine interstellaire",
        comment: "risographie",
        description: "Et si nous, humains, disparissions ? Penser un fanzine à destination d’une potentielle civilisation extraterrestre. Initiation à la risographie. Le fanzine explore les émotions, interactions, relations humaines en rapprochant images et interprétations graphiques. Pensé en série, le numéro réalisé est celui de l’Amour.",
        source: "édition_risographie projet collectif avec Alix Bélière et Laura Challier",
      },
    },
  },
  en: {
    translation: {
      fanzine: {
        title: "Interstellar Fanzine",
        comment: "risography",
        description: "What if we humans disappeared? Thinking of a fanzine for a potential extraterrestrial civilization. Introduction to risography. The fanzine explores emotions, interactions, human relationships by bringing together images and graphic interpretations. Thought in series, the number produced is that of Love.",
        source: "edition_risography collective project with Alix Bélière and Laura Challier",
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr', 
  fallbackLng: 'fr', 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;