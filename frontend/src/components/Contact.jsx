import React, { useEffect, useRef } from 'react'
import '../components/css/Skills.css';
const Contact = () => {
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
    <div id='contact'>
        <div id="skill" className='container-fluid body d-flex justify-content-center align-items-center vh-400 bg-dark '>
        <div ref={educationRef} className='education' id='education'>
            <h1 style={{ fontSize: '50px', fontWeight: 'bold', textTransform: 'uppercase' }}>Get in touch</h1>
            <div className="contact">
                <form id='hire'>
                <div className="mb-2 mt-4">
                    <label className="form-label w-100 label colors">
                        Enter your name:
                        <input
                            type="text"
                            name="name"
                            className="form-control inputArea"
                            
                            required
                        />
                    </label>
                </div><br />
                <div className="mb-2 mt-4">
                    <label className="form-label w-100 label colors">
                        Enter email
                        <input
                            type="text"
                            name="email"
                            className="form-control inputArea"
                            
                            required
                        />
                    </label>
                </div><br />
                <div className="mb-2 mt-4">
                    <label className="form-label w-100 label colors">
                        Message
                        <textarea
          id="msg"
          name="msg"
          className="form-control inputArea"
          required
        />
                    </label>
                </div>
                <button style={{ marginRight: '20px' }} type="submit" className='subBtn'>Submit</button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact