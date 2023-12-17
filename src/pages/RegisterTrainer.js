import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function AddTrainer() {
  let navigate = useNavigate();
  const [trainer, setTrainer] = useState({
    cid:'',
    first_name:'',
    last_name:'',
    email:'',
    phone_number:'',
    password:'',
    address:'',
    profession:''
  })

  const{cid, first_name, last_name, email, phone_number, password, address, profession}= trainer;
  const onInputChange = (e)=>{
    setTrainer({...trainer,[e.target.name]:e.target.value});
  }

  const [successMessage, setSuccessMessage] = useState('');
  const onSubmit=async(e)=>{
    e.preventDefault();
    const result= await axios.post("http://localhost:8080/trainer", trainer);
    if(result.status===200){
      setSuccessMessage('Trainer Registered Successfully!');
      setTimeout(()=>{
        navigate('/trainerlogin');
      }, 2000);
    }else{
      alert("Can't be reached!")
    }
  }
  return (

    <div className='container'>

      {successMessage &&(
        <div className='alert alert-success' role='alert'>
        {successMessage} </div>
      )}
      

      <div className='row'>
      </div>
      <div className='col-md-4 offset-md-0 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4 '>Regitser Trainers</h2>
        <div className='mb-3'/>
        <form onSubmit={(e)=>onSubmit(e)}>

        
          <label htmlFor='CID' className='form-label'>
          </label>
          <input
          type={'text'}
          className='form-control'
          placeholder='CID'
          name='cid'
          value={cid}
          onChange={(e)=>onInputChange(e)}
          />

          <div className='mb-3'/>
          <label htmlFor='first_name' className='form-label'>
          </label>
          <input
          type={'text'}
          className='form-control'
          placeholder='First Name'
          name='first_name'
          value={first_name}
          onChange={(e)=>onInputChange(e)}
          />

          <div className='mb-3'/>
          <label htmlFor='Last Name' className='form-label'>          
          </label>
          <input
          type={'text'}
          className='form-control'
          placeholder='Last Name'
          name='last_name'
          value={last_name}
          onChange={(e)=>onInputChange(e)}
          />

          <div className='mb-3'/>
          <label htmlFor='Email' className='form-label'>          
          </label>
          <input
          type={'email'}
          className='form-control'
          placeholder='Email'
          name='email'
          value={email}
          onChange={(e)=>onInputChange(e)}
          />

          <div className='mb-3'/>
          <label htmlFor='Phone Number' className='form-label'>          
          </label>
          <input
          type={'text'}
          className='form-control'
          placeholder='Phone Number'
          name='phone_number'
          value={phone_number}
          onChange={(e)=>onInputChange(e)}
          />

          <div className='mb-3'/>
          <label htmlFor='password' className='form-label'>          
          </label>
          <input
          type={'password'}
          className='form-control'
          placeholder='Password'
          name='password'
          value={password}
          onChange={(e)=>onInputChange(e)}
          />

          <div className='mb-3'/>
          <label htmlFor='address' className='form-label'>          
          </label>
          <input
          type={'text'}
          className='form-control'
          placeholder='Address'
          name='address'
          value={address}
          onChange={(e)=>onInputChange(e)}

          />

          <div className='mb-3'/>
          <label htmlFor='profession' className='form-label'>          
          </label>
          <input
          type={'text'}
          className='form-control'
          placeholder='Profession'
          name='profession'
          value={profession}
          onChange={(e)=>onInputChange(e)}
          />
          
        <button onSubmit={(e)=>onSubmit(e)} type='submit' className='btn btn-outline-primary'>
          Submit
        </button>
        <Link className='btn btn-outline-danger mx-2' to ="/trainerlogin">
          Abort
        </Link>
        </form>
      </div>
      
    </div>
    
    
  )
}

