import React, { useEffect, useRef, useState } from 'react';
import '../components/css/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const educationRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = educationRef.current;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (cardNumber) => {
    setSelectedCard(cardNumber);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
  };
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `../../public/result.pdf`; // Adjust the path to your PDF file
    link.download = 'sample.pdf'; // The filename for the downloaded PDF
    link.click();
  };
  const handleDownload1 = () => {
    const link = document.createElement('a');
    link.href = `../../public/result1.pdf`; // Adjust the path to your PDF file
    link.download = 'sample.pdf'; // The filename for the downloaded PDF
    link.click();
  };

  return (
    <div id='skill'>
      <div ref={educationRef} className="education" id='education'>
        <h1 style={{ fontSize: '50px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          Education <FontAwesomeIcon icon={faGraduationCap} />
        </h1>
        <div className="row">
          <div className="col-md-6 offset-md-6">
            <div className="card1 c2" onClick={() => handleCardClick(2)}>
              <h1>SSC and HSC</h1>
              <h3>SSC Obtained Marks -- 62.20%</h3>
              <h3>HSC Obtained Marks -- 82.50%</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card1" onClick={() => handleCardClick(1)}>
              <h1>Bachelor in Computer Engineering</h1>
              <h3>Samarth Group of Institution College Of Engineering, Belhe</h3>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <div>
              {selectedCard === 1 ? (
                <div>
                  <h3>Computer Engineering All Obtained Marks</h3>
                  <h5>First Year SGPA: <span style={{fontWeight:'bold'}}>7.67</span></h5>
                  <h5>Second Year SGPA: <span style={{fontWeight:'bold'}}>8.00</span></h5>
                  <h5>Third Year SGPA: <span style={{fontWeight:'bold'}}>9.14</span></h5>
                  <button className='btn btn-primary'  onClick={handleDownload}>My Results</button>
                </div>
              ) : (
                <div>
                  <h3>SSC and HSC information</h3>
                  <h5>SSC from :- <br /> <span style={{fontStyle:'italic'}}>Bhagawati Mata Vidyalaya Nandur Khandarmal</span></h5>
                  <h5>HSC from :- <br /> <span style={{fontStyle:'italic'}}>Vidya Prabodhini Prashala Junior College ,Sakur</span></h5>
                  <button className='btn btn-primary' onClick={handleDownload1}>My Results</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
