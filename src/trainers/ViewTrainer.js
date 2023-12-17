import React, {useEffect, useState}from 'react'
import axios from 'axios'


export default function TrainerTable() {

    const [trainers, setTrainers] = useState([]);

    useEffect(() =>{
        loadTrainers();
    }, []);

    const loadTrainers = async()=>{
        const result = await axios.get("http://localhost:8080/trainers");
        console.log(result.data);
        setTrainers(result.data);
    }



  return (
    <div>
        <div className='py-4'>
            <table className='table boarder shadow'>
            <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">CID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Password</th>
      <th scope="col">Address</th>
      <th scope="col">Profession</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
        trainers.map((trainer)=>(
          <tr>
            <td>{trainer.id}</td>
            <td>{trainer.cid}</td>
            <td>{trainer.first_name}</td>
            <td>{trainer.last_name}</td>
            <td>{trainer.email}</td>
            <td>{trainer.phone_number}</td>
            <td>{trainer.password}</td>
            <td>{trainer.address}</td>
            <td>{trainer.profession}</td>
            <td>
              
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
