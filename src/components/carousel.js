import React, { useState } from "react";
import '../styles/carousel.css';
import right from '../assets/right.png';
import left from '../assets/left.png';

function Carousel({ images }) {
  //Créer un Hook d'état initialiser le current
  const [current, setCurrent] = useState(0); 
  //On definie la taille du tableau images
  const length = images.length; 
  //verficaion du tableau images 
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  //Fonction pour l'image precedente 
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); 
  };
  //Fonction pour l'image suivante
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); 
  };
  return (
    <section className="carousel">
      {length > 1 && (
        <img className='fleche left' src={left} alt="precedent" onClick={prevImage}/>
      )}
      {length > 1 && (
        <img className='fleche right' src={right} alt="suivant" onClick={nextImage}/>
      )}
      {images.map((image, index) => {
        return (
          <div className={index === current ? "carousel__item active" : "carousel__item"} key={index}>
            {index === current && (
              <img src={image}  className="carousel__image" alt="img_logement" />
            )}
            {index === current && length > 1 && (
              <span className="counter">{index + 1}/{length}</span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carousel;