
import React, { useState } from 'react'
import './Portfolio.css'
import image_1 from '../Assets/work1.jpg'
import image_2 from '../Assets/work2.jpg'
import image_3 from '../Assets/work3.jpg'
import image_4 from '../Assets/work4.jpg'
import image_5 from '../Assets/work5.jpg'
import image_6 from '../Assets/work6.jpg'
import image_7 from '../Assets/work7.jpg'
import pfp_1 from '../Assets/pfp1.png'
import pfp_2 from '../Assets/pfp2.png'
import pfp_3 from '../Assets/pfp3.png'
import banner_1 from '../Assets/banner1.png'
import banner_2 from '../Assets/banner2.png'
import banner_3 from '../Assets/banner3.png'
import banner_4 from '../Assets/banner4.png'


const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className='portfolio' id='portfolio-section'>
      <h2>PORTFOLIO</h2>
      <p>Here are some of my works, including profile pictures, banners, and other designs. Feel free to explore!</p>
      <div className='portfolio-items'>
        {[image_1, image_2, image_3, image_4, image_5, image_6, image_7, pfp_1, pfp_2, pfp_3].map((img, idx) => (
          <img key={idx} src={img} alt='' onClick={() => handleImageClick(img)} />
        ))}
      </div>
      <div className='portfolio-banners'>
        {[banner_1, banner_2, banner_3, banner_4].map((img, idx) => (
          <img key={idx} src={img} alt='' onClick={() => handleImageClick(img)} />
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Full size" />
            <button className="close-modal" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio
