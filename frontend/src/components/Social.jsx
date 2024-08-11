import React, { useEffect, useRef } from 'react';
import '../components/css/Skills.css';
import wave4 from '../assets/wave4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  const educationRef = useRef(null);

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

  const divStyle = {
    backgroundImage: `url(${wave4})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    backgroundSize: '100% auto',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    textAlign: 'center'
  };

  return (
    <div id='social'>
    <div ref={educationRef}  style={divStyle}>
      <div className="row foo " style={{fontSize:'60px'}}>
        <div className="col-auto" style={{marginRight:'200px'}}>
        <a href="https://www.instagram.com/nikhil_more_98/" target='_blank'>  <p className='so'><FontAwesomeIcon icon={faInstagram} /></p></a>
        </div>
        <div className="col-auto" style={{marginRight:'150px'}}>
        <a href="https://www.facebook.com/profile.php?id=100079894650019" target='_blank'>  <p className='so1'><FontAwesomeIcon icon={faFacebook} /></p></a>
        </div>
        <div className="col-auto">
          <a href="https://www.linkedin.com/in/morenikhil123/" target='_blank'><p className='so2'><FontAwesomeIcon icon={faLinkedin} /></p></a>
        </div>
      </div>
      <div className="f " style={{marginTop:'20rem',marginLeft:'-30rem',fontWeight:'bold'}}>
        <p>All rights reserved @Nikhil More</p>
        <p>&copy;2024-2025</p>
      </div>
    </div>
    </div>
  );
};

export default Social;
