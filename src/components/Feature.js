import React from 'react';
import FeatureBox from './FeatureBox';
import fimage1 from '../assets/images/1.svg';
import fimage2 from '../assets/images/2.svg';
import fimage3 from '../assets/images/3.svg';
import fimage4 from '../assets/images/4.svg';

function Feature() {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <FeatureBox image={fimage1} title='Weight Lifting. Get Big'/>
            <FeatureBox image={fimage2} title='Specific Muscle. Build it'/>
            <FeatureBox image={fimage3} title='Flex Your Muscle. Go Big'/>
            <FeatureBox image={fimage4} title='Cardio Exercises. Get In Shape'/>
        </div>
    </div>
  )
}

export default Feature;