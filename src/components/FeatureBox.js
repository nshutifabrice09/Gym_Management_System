import React from 'react';

function FeatureBox(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        <div className='a-b-text'>
            <h2> {props.title} </h2>    

        </div>
    </div>
  )
}

export default FeatureBox;