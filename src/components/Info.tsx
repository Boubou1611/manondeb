import React, { useState } from 'react';

export default function Info(){
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const newX = position.x - e.clientX;
      const newY = position.y - e.clientY;

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const card = document.getElementById('card');
      if (card) {
        card.style.top = `${card.offsetTop - newY}px`;
        card.style.left = `${card.offsetLeft - newX}px`;
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="info-page" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <main>
        <section className="info-container">
          <img
            id="card"
            src="/assets/images/info/trefle_1.png"
            alt="Trèfle"
            draggable="false"
            onMouseDown={handleMouseDown}
          />

          <p className="p1">
            Bienvenue sur la page d'informations. Ici, vous trouverez toutes les informations importantes concernant notre site et nos services.
            Bienvenue sur la page d'informations. Ici, vous trouverez toutes les informations importantes concernant notre site et nos services.
            Bienvenue sur la page d'informations. Ici, vous trouverez toutes les informations importantes concernant notre site et nos services.
            Bienvenue sur la page d'informations. Ici, vous trouverez toutes les informations importantes concernant notre site et nos services.
          </p>
          <p className="p2">
            <a href="mailto:manon.dbray@gmail.com">manon.debray@gmail.com</a>
          </p>
        </section>
      </main>

      {/*<div className="text-bottom-left">
        <p>
          Ce site a été rendu possible par{' '}
          <a href="https://github.com/votreutilisateur" target="_blank" rel="noopener noreferrer">
            Nathanaël Bosquet--Lefebvre
          </a>
        </p>
      </div>

      <div className="text-bottom-right">
        <p>Typographies utilisées Space Grotesk + Abordage.</p>
      </div>*/}
    </div>
  );
};