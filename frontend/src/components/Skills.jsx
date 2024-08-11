import React from 'react';
import '../components/css/Skills.css';
import '../components/css/Heading.css';
import react from '../assets/react.svg';
import clo from '../assets/clo.png';
import ex from '../assets/ex.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import js from '../assets/js.png';
import mi from '../assets/mi.png';
import mongo from '../assets/mongo.svg';
import py from '../assets/py.png';
import and from '../assets/and.svg';

const Skills = () => {
  return (
    <div id='skill'>
      <div className="row">
        <div className="col  mt-5">
          <p className='co1'>My Awesome Skills</p>
          <p  style={{marginLeft:'5rem',fontSize:'20px'}}>This is My Skill set that basically called me as MERN stack developer. <br /> 
          I always learn new things and I include more skills in my portfolio soon..</p>
        </div>
        <div className="col">
          <div className="row row1">
            <div className="col col1">
              <ul>
                <li><button><img src={react} alt="" height='70' width='100'/>React js</button></li>
                <li><button><img src={mongo} alt="" height='70' width='100'/>MongoDB</button></li>
                <li><button><img src={ex} alt="" height='70' width='100'/>Express js</button></li>
                <li><button><img src={java} alt="" height='70' width='100'/>JAVA</button></li>
               
              </ul>
            </div>
            <div className="col col2">
              <ul>
              <li><button><img src={and} alt="" height='70' width='100'/><span style={{fontSize:'18px'}}>Android Development</span></button></li>
                <li><button><img src={js} alt="" height='70' width='100'/>Javascript</button></li>
                <li><button><img src={clo} alt="" height='70' width='100'/>Cloudinary</button></li>
                <li><button><img src={mi} alt="" height='70' width='100'/>Material UI</button></li>
              
              </ul>
            </div>
            <div className="col col2">
              <ul>                 
                <li><button><img src={py} alt="" height='70' width='100'/>Python</button></li>
                <li><button><img src={html} alt="" height='70' width='100'/>HTML CSS</button></li>
                <li><button><img src={html} alt="" height='70' width='100'/>Redux</button></li>
              </ul>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
