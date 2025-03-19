import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";


interface ProjectProps {
  project: string;
  comment: string;
  date: string;
  description: string;
  source: string;
  gif: string[];
  images: string[];
}

export default function Project() {
  const location = useLocation();
  const projectData = location.state as ProjectProps; 

  const { t } = useTranslation();
  const [isTextVisible, setIsTextVisible] = useState(false);

  const checkVisibility = () => {
    let offset = 0; 
    if(projectData.images.length >= 2) offset = 300
    if (window.scrollY > offset) {
      setIsTextVisible(true);
    } else {
      setIsTextVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  useEffect(() => {
    checkVisibility();
  }, []);

  if (!projectData) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <>
        <div className="content">
        <div className="fixed-text">
          <h2 id="detail-title">{projectData.project}</h2>
          <h3 id="detail-date">{projectData.date}</h3>
          <div className={`rise ${isTextVisible ? "visible" : ""}`}>
            <p id="detail-description">{t(projectData.description)}</p>
            <h4 id="detail-additional-info">{projectData.comment}</h4>
          </div>
        </div>
        <div className="image-list" id="image-list">
        {projectData.images.map((image, index) => {
            console.log(image)
            return <img key={index} src={image} alt={`Image ${index}`} />;
        })}
        </div>
      </div>
    </>
  );
}