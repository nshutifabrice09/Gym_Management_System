import React from 'react';
import ViewUser from '../users/ViewUser';
import ViewProduct from '../products/ViewProduct'
import ViewTrainer from '../trainers/ViewTrainer'
import Bookings from './Bookings';

function App() {
  return (
    
      <div>
        
        <ViewUser/>
        <ViewTrainer/>
        <ViewProduct/>
        <Bookings/>
        
        <a href='./ ' className='btn '  style={{ color:'white', textAlign: 'left', backgroundColor:'#FF1414' }} >LOGOUT</a>
      </div>
      
   
  );
}

export default App;
