import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function AdminTable() {

    const [admins, setAdmins] = useState([])
    useEffect(()=>{
        loadAdmins();
    }, []);

    const loadAdmins = async()=>{
        const result = await axios.get("http://localhost:8080/admins");
        console.log(result.data);
        setAdmins(result.data);
    }


  return (
    <div className='container'>
        <div className='py-4'>
        <table className='table boarder shadow'>
    <thead>
     <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>
     </tr>  
        </thead>
              

            <tbody>
      {
        admins.map((admin)=>(
          <tr>
            <td>{admin.id}</td>
            <td>{admin.username}</td>
            <td>{admin.password}</td>
            <td>
              <button className='btn btn-primary mx-2'>View</button>
              <button className='btn btn-outline-primary mx-2'>Edit</button>
              <button className='btn btn-danger mx-2'>Delete</button>
            </td>
          </tr>
        ))
      }
  </tbody>    
  </table> 
        </div>
    </div>
  )
}