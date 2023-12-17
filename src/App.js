import './index.css';
import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ViewUser from './users/ViewUser';
import AddUser from './pages/AddUserPage';
import EditUser from './users/EditUser';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ViewTrainer from './trainers/ViewTrainer'
import AdminDashboard from './pages/AdminDashboard';
import UserLogin from './pages/UserLogin'
import BookTrainer from './pages/BookTrainer';
import BMI from './pages/BMI'
import RegisterTrainer from './pages/RegisterTrainer'
import TrainerLogin from './pages/TrainerLogin'
import Bookings from './pages/Bookings'


function App() {
  return (
    <div className="App">
      
     
      <Router>
      <Navbar/> 
      
      
      <Routes>
      <Route 
        exact path="/" element={<Home/>}
        />
        <Route 
        
        exact path="/userlogin" element={<UserLogin/>}
        />
        <Route 
        
        exact path="/booktrainer" element={<BookTrainer/>}
        />

        <Route 
        exact path="/adduser" element={<AddUser/>}
        />
        <Route 
        exact path="/viewuser" element={<ViewUser/>}
        />
        <Route 
        exact path="/edituser" element={<EditUser/>}
        />
        <Route 
          path="/login" element={<LoginPage/>}
        />

        <Route 
        exact path="/viewtrainer" element={<ViewTrainer/>}
        />
       

        <Route 
        exact path="/admindashboard" element={<AdminDashboard/>}
        />
        <Route 
        exact path="/bmi" element={<BMI/>}
        />

        <Route 
        exact path="/registertrainer" element={<RegisterTrainer/>}
        />
        <Route 
        
        exact path="/trainerlogin" element={<TrainerLogin/>}
        />

      <Route 
        
        exact path="/bookings" element={<Bookings/>}
        />
        
        
      </Routes>
      </Router>

    </div>
  );
}

export default App;
