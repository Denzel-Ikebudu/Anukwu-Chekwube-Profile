import React, { useState, useEffect } from 'react'
import './Background.css'
import image1 from '../Assets/IMG-20250728-WA0003.jpg'
import image2 from '../Assets/IMG-20250801-WA0012.jpg'
import arrow_icon from '../Assets/arrow.png'
import { Link } from 'react-router-dom';




const Background = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        {
            src: image1,
            text: 'Graphics || Brand Identity Designer',
        },
        {
            src: image2,
            text: 'Brand Strategist || UI/UX Designer',
        },
    ]

     useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
    }, [images.length]);

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start' 
        });

      }
  };
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // For touch swipe functionality
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
      goToNextImage();
    } 
    else if (touchEndX - touchStartX > swipeThreshold) {
      goToPrevImage();
    }
  };
  return (
     <div
      className="background-slider"
      id='background-section'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => {
        let slideClass = "slide";
        if (index === currentImageIndex) {
            slideClass += " active";
        }    
        else if (index < currentImageIndex) {
            slideClass += " left";
        } 
        else {
            slideClass += " right";
  }
  return (
    <div
      key={index}
      className={slideClass}
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="image-overlay"></div>
      <div className="text-overlay">
        <p className='small-text'>{image.text}</p>
        <p>// Anukwu Chekwube Immanuel || CEO IMMAGINATION</p>
        <div className='nav-btns'>
            <button><Link to="/#about-section" onClick={() => scrollToSection('about-section')}>Who is he?</Link></button>
            <img src={arrow_icon} alt="" />
        </ div>
      </div>
    </div>
  );
})}


    </div>
  )
}

export default Background
