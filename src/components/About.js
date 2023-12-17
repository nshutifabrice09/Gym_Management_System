import React from 'react';
import aboutimage from '../assets/images/about.png'

 function About() {
  return (
    <div id='about'>
        <div className='about-image'>
          <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
          <h1>LEARN MORE ABOUT US</h1>
          <p>TSL creates spaces where people can work, live and thrive. 
            TSL started as Kigali’s largest independent health and fitness facility in 2014 and has now expanded to offer the continent’s first ever “Lifestyle Hub” – 
            a combined fitness, co-working, and event facility to accommodate a network of growing and aspiring companies and citizens.</p>
          {/* <button>READ MORE</button> */}

        </div>
        
    </div>
  )
}

export default About;

