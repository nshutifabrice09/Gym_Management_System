import React, {useEffect, useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Login.css'; 

const AdminLogin = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() =>{
    loadAdmins();
}, []);

const [admins, setAdmin] = useState([]);
const loadAdmins = async ()=>{
  const result = await axios.get("http://localhost:8080/admins");
  return result.data;
}



  const handleLogin = () => {      
        if (!adminUsername || !adminPassword) {
            alert("Please fill in all the required fields.");
        }else{
          loadAdmins().then(adminList => {
            for (let i = 0; i < adminList.length; i++){
              if (adminList[i].username === adminUsername && adminList[i].password === adminPassword){
                return navigate("/admindashboard");
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
      <h2>Admin Login</h2>
      <form>
        <label htmlFor="adminUsername">Admin Username:</label>
        <input
          type="text"
          id="adminUsername"
          value={adminUsername}
          onChange={(e) => setAdminUsername(e.target.value)}
        />

        <label htmlFor="adminPassword">Admin Password:</label>
        <input
          type="password"
          id="adminPassword"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
        />

        <button type="button" style={{ textAlign: 'center', backgroundColor:'#FF1414'  }} onClick={handleLogin}>
          Login
        </button>
        <p></p>
      <h7>Login as a Trainer. <Link to={'/trainerlogin'} style={{color:"blue"  }}>Login</Link></h7>
      <p></p>
      <h7>Login as a client. <Link to={'/userlogin'} style={{color:"blue"  }}>Login</Link></h7>

      </form>

      {loginSuccess && <p className="success-message">Login successful!</p>}
      {!loginSuccess && loginSuccess !== null && (
        <p className="error-message"></p>
      )}
      
    </div>
    <a href='/' className='btn'  style={{ textAlign: 'right',  color:'white', backgroundColor:'#FF1414'  }} >Back</a>
    </>
  );
};

export default AdminLogin;
