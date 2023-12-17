import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";




const EditUser = () => {
  const [editedUser, setEditedUser] = useState({
    membershipId: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    address: "",
    age: "",
    weight: "",
  });

  const [successMessage, setSuccessMessage] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [id]);

  const onEditClick = (userId) => {
    console.log("Edit clicked for user ID:", userId);
    navigate(`/Edituser/${userId}`);
  };
  
  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/${id}`);
      setEditedUser(response.data);
      console.log("Fetched user:", response.data);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/users/${id}`,editedUser
      );

      if (response.status === 200) {
        setSuccessMessage('User updated successfully!');
        setTimeout(() => {
          setSuccessMessage('');
          navigate("/admindashboard");
        }, 2000); // Automatically navigate after 2 seconds
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleCancel = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <div>
      <h2>Edit User</h2>

      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <form>
        {/* Include all relevant attributes in the form */}
        <div className="mb-3">
          <label htmlFor="membershipId" className="form-label">
            Membership ID
          </label>
          <input
            type="text"
            className="form-control"
            id="membershipId"
            name="membershipId"
            value={editedUser.membershipId}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={editedUser.first_name}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={editedUser.last_name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone_number" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone_number"
            name="phone_number"
            value={editedUser.phone_number}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Email
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={editedUser.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={editedUser.address}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            value={editedUser.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="weight" className="form-label">
            Weight
          </label>
          <input
            type="text"
            className="form-control"
            id="weight"
            name="weight"
            value={editedUser.weight}
            onChange={handleChange}
          />
        </div>

        
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
