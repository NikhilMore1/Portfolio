import React from 'react'
import '../components/css/Heading.css';
import f3 from '../assets/img/f3.webp';
import v1 from '../assets/img/v1.png';
import v2 from '../assets/img/v2.png';
import '../../public/nikhil.pdf';
import me from '../assets/me.png';
const Heading = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `../../public/nikhil.pdf`; // Adjust the path to your PDF file
    link.download = 'sample.pdf'; // The filename for the downloaded PDF
    link.click();
  };
  return (
    <div>
      <div className='mt-3 ro1' >
        <h4 style={{fontSize:'40px',textTransform:'uppercase',letterSpacing:'2px',fontWeight:'bold'}}><marquee behavior="right" direction="left">welcome to my Portfolio ✌️</marquee></h4>
      </div>
        <div className="row ro1 full" style={{marginTop:'1rem'}} id='skills'>
            <div className="col-lg-6 col-md-12 text-section">
                <p className='co1'>hi,I am</p>
                <p className='co1'>Nikhil More</p>
                <p style={{marginLeft:'5rem',fontSize:'25px'}}>I passionate about developing Website's and Deploying them that some what need to society.
                  I can develop any fully functional website using MERN stack Technology's and other such as cloudinary,springboot,aws,Atlas as a database etc.
                </p>
                <div className="row " style={{marginLeft:'9rem'}}>
                  <div className="col-md-6">
                    <button className='btn bt' onClick={handleDownload}>My Resume</button>
                  </div>
                  <div className="col-md-6">
                 <a href="#hire">   <button className='btn bt'>Hire me</button></a>
                  </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 text-section ">
              {/* <img src={me} alt="" /> */}
            </div>
          
        </div>
    </div>
  )
}

export default Heading