import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

import './Login.css'; 

const TrainerLogin = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() =>{
    loadTrainers();
}, []);

const [trainers, setTrainers] = useState([]);
const loadTrainers = async ()=>{
  const result = await axios.get("http://localhost:8080/trainers");
  return result.data;
}



  const handleLogin = () => {      
        if (!adminUsername || !adminPassword) {
            alert("Please fill in all the required fields.");
        }else{
          loadTrainers().then(trainerList => {
            for (let i = 0; i < trainerList.length; i++){
              if (trainerList[i].email === adminUsername && trainerList[i].password === adminPassword){
                return navigate("/bookings");
              }else{
                continue;
              }
            }
            alert("invalid user");
          })          
        }
      
  };

  return (
    <>
    <div className="login-container">
      <h2>Trainer Login</h2>
      <form>
        <label htmlFor="adminUsername">Email:</label>
        <input
          type="text"
          id="adminUsername"
          value={adminUsername}
          onChange={(e) => setAdminUsername(e.target.value)}
        />

        <label htmlFor="adminPassword"> Password:</label>
        <input
          type="password"
          id="adminPassword"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
        />

        <button style={{ textAlign: 'center' ,  color:'white', backgroundColor:'#FF1414' }} type="button" onClick={handleLogin}>
          Login
        </button>
        <p></p>
      <h7>Don't have an account?<Link to={'/registertrainer'} style={{color:"blue"  }}>Sign Up.</Link></h7>
      </form>

      {loginSuccess && <p className="success-message">Login successful!</p>}
      {!loginSuccess && loginSuccess !== null && (
        <p className="error-message"></p>
      )}
      
    </div>
    <a href='/login' className='btn'  style={{ textAlign: 'right' ,  color:'white', backgroundColor:'#FF1414' }} >Back</a>
    </>
    

  );
};

export default TrainerLogin;
