import React from 'react';
import { useNavigate } from 'react-router-dom';

function Offer() {
  const navigate = useNavigate();
  const handleAddUser= () => {
    navigate('/adduser')
  }
  return (
    <div id='offer'>
        <div className='pr-heading'>
            <h1>A BIG <span>OFFER </span> FOR THIS DECEMBER! </h1>
            <p className='details'>This Time We Are Going All In!</p>

            <div className='pr-btns'>
              <button onClick={handleAddUser} className='pr-btn'>JOIN NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Offer;