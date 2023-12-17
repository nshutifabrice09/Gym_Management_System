import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function UserTable() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async()=>{
    const result = await axios.get("http://localhost:8080/users");
    console.log(result.data);
    setUsers(result.data);
  }

  return (
    <>
    <div>
        <div className='py-4'>
        <table className="table boarder shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">MembershipId</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Password</th>
      <th scope="col">Address</th>
      <th scope="col">Age</th>
      <th scope="col">Weight</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
        users.map((user)=>(
          <tr>
            <td>{user.id}</td>
            <td>{user.membershipId}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.phone_number}</td>
            <td>{user.password}</td>
            <td>{user.address}</td>
            <td>{user.age}</td>
            <td>{user.weight}</td>
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
{/* <a href='/' className='btn '  style={{ color:'white', textAlign: 'left', backgroundColor:'#FF1414' }} >LOGOUT</a> */}
</>
  )
}
