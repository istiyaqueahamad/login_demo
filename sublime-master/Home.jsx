import React, { useState } from 'react';
import './Home.css'; // If you want to style the Home component specifically

const Home = () => {
  // State to control the modal visibility and content
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  // Function to handle card click (open modal with content)
  const handleCardClick = (service) => {
    setModalContent(service);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <div className="home">
     
      <p>
        This is the homepage of our website. You can find information about our services, company, and much more here.
      </p>
      
      <div className="home-cards">
        <h2>Our Services</h2>
        
        <div className="cards-container">
          <div className="card" onClick={() => handleCardClick('AR - Augmented Reality')}>
            <h3>Service 1: AR</h3>
            <p>Details about Augmented Reality.</p>
          </div>
          <div className="card" onClick={() => handleCardClick('VR - Virtual Reality')}>
            <h3>Service 2: VR</h3>
            <p>Details about Virtual Reality.</p>
          </div>
        
        </div>
      </div>
      
      {/* Modal for detailed information */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <h2>Details about {modalContent}</h2>
            <p>
              {modalContent === 'AR - Augmented Reality' && (
                <span>Augmented Reality (AR) is an interactive experience where real-world elements are augmented with virtual content.</span>
              )}
              {modalContent === 'VR - Virtual Reality' && (
                <span>Virtual Reality (VR) is a simulated experience that can mimic or differ completely from the real world.</span>
              )}
              {/* Add more conditions here for different services */}
            </p>
          </div>
        </div>
      )}

      <div className="home-image">
      
      </div>
    </div>
  );
};

export default Home;
