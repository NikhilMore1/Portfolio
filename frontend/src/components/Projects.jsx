import React, { useEffect, useRef } from 'react'
import { faCode, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hbs from '../assets/hbs.png'
import cart from '../assets/cart.png'
import '../components/css/Skills.css';
const Projects = () => {
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

  return (
  <div id='project'>
      <div id='skill'>

<div ref={educationRef} className='education' id='education'>
    <h1 style={{ fontSize: '50px', fontWeight: 'bold', textTransform: 'uppercase' }}>Project's <FontAwesomeIcon icon={faLaptopCode}/></h1>
    <div className="row">
        <div className="col-md-6 ">
         <a href="https://github.com/Nikhil-hub-creat/Hotel_Management_Full_Stack" target='_blank'>   <img src={hbs} alt="project1" height='350' width='700'/></a>
        </div>
        <div className="col-md-6 offset-md-6">
      <a href="https://github.com/Nikhil-hub-creat/E-CART" target='_blank'>  <img src={cart} alt="project1" height='350' width='650'/></a>
        </div>
    </div>
</div>
</div>
  </div>
  )
}

export default Projects