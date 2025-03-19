import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

interface PortfolioItemProps {
  id: number;
  project: string;
  comment: string;
  date: string;
  description: string;
  source: string;
  gif: string; // Maintenant, un seul GIF animé
  images: string[];
}

export default function PortfolioItem({
  id,
  project,
  comment,
  date,
  description,
  source,
  gif,
  images,
}: PortfolioItemProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToDetailPage = () => {
    navigate(`/project/${project}`, {
      state: {
        id,
        project,
        comment,
        date,
        description,
        source,
        gif,
        images,
      },
    });
  };

  return (
    <div
      className="portfolio-item"
      onClick={goToDetailPage}
    >
      <div className="image-container">
        <img
          src={images[0]} 
          alt={project}
          onMouseEnter={(e) => (e.currentTarget.src = gif)} 
          onMouseLeave={(e) => (e.currentTarget.src = images[0])} 
        />
      </div>
      <div className="description">
        <h3>{t(`${project}.title`, project)} - </h3>
        <p>{t(`${project}.comment`, comment)}</p>
      </div>
    </div>
  );
}