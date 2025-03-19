import { useState, useEffect } from 'react';
import './App.css';
import Info from './components/Info';
import Project from './components/Project';
import ProjectsList from './components/ProjectsList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import i18n from './i18n';
import Header from './components/Header';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [language, setLanguage] = useState(false); 

  const changeLanguageHandler = (lng: boolean) => {
    i18n.changeLanguage(lng ? 'en' : 'fr'); 
    setLanguage(lng);
  };

  useEffect(() => {
    console.log("showContent updated:", showContent); 
  }, [showContent]);

  return (
    <Router>
      {!showContent && (
        <LoadingScreen onAnimationEnd={() => setShowContent(true)} />
      )}

      {showContent && (
        <>
        <Header name="Manon Debray"/>
        <Routes>
          <Route path="/" element={<ProjectsList />} />
          <Route path="/project/:projectId" element={<Project />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <Footer language={language} onChangeLanguage={changeLanguageHandler} />
        </>
      
      )}
    </Router>
  );
}

export default App;