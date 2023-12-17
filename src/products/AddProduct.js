import axios from 'axios';
import React from 'react'
import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
let navigate = useNavigate();
  const [product, setProduct] = useState({
    productCode:"",
    product_name:"",
    description:"",
    price:"",
    status:""
  })


  const{productCode, product_name, description, price, status}=product;

  const onInputChange=(e)=>{
    setUser({...product,[e.target.name]:e.target.value});

  }
  const [successMessage, setSuccessMessage] = useState('');
  const onSubmit=async(e)=>{
    e.preventDefault();
    const result= await axios.post("http://localhost:8080/product", product);
    if(result.status===200){
      setSuccessMessage('Product Registered Successfully!');
      setTimeout(()=>{
        navigate('/viewproduct');
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
        <h2 className='text-center m-4 '>Registering Products</h2>
        <div className='mb-3'/>
        <form onSubmit={(e)=>onSubmit(e)}>

        
          <label htmlFor='Product Code' className='form-label'>
          </label>
          <input
          type={'text'}
          className='form-control'
          placeholder='Product Code'
          name='productCode'
          value={productCode}
          onChange={(e)=>onInputChange(e)}
          />

          <div className='mb-3'/>
          <label htmlFor='Prod' className='form-label'>
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
          <label htmlFor='age' className='form-label'>          
          </label>
          <input
          type={'text'}
          className='form-control'
          placeholder='Age'
          name='age'
          value={age}
          onChange={(e)=>onInputChange(e)}
          />  

          <div className='mb-3'/>
          <label htmlFor='weight' className='form-label'>          
          </label>
          <input
          type={'text'}
          className='form-control'
          placeholder='Weight'
          name='weight'
          value={weight}
          onChange={(e)=>onInputChange(e)}
          />
          
        <button onSubmit={(e)=>onSubmit(e)} type='submit' className='btn btn-outline-primary'>
          Submit
        </button>
        <Link className='btn btn-outline-danger mx-2' to ="/">
          Abort
        </Link>
        </form>
      </div>
      
    </div>
    
    
  )
}
