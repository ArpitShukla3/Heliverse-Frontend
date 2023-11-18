// UpdateUserForm.js

import React, { useState } from 'react';
import './UpdateUserForm.css';
import { useParams } from 'react-router-dom';
function  UpdateUserForm (){
  const {id}= useParams();
  const [userData, setUserData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      // Send a POST request with updated data in the request body
      const response = await fetch('https://heliverse-backend-rho.vercel.app/updateUser/'+id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Handle the response (you can customize this based on your needs)
      console.log('User updated successfully:', response);

      // Trigger the onUpdate callback to inform the parent component about the update
      // onUpdate();
    } catch (error) {
      // Handle errors (you can customize this based on your needs)
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="update-user-container">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit} className="update-user-form">
        <label className="form-label">
          Avatar:
          <input
            type="text"
            name="avatar"
            value={userData.avatar}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-label">
          Domain:
          <input
            type="text"
            name="domain"
            value={userData.domain}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-label">
          Email:
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-label">
          First Name:
          <input
            type="text"
            name="first_name"
            value={userData.first_name}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-label">
          Gender:
          <input
            type="text"
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-label">
          Last Name:
          <input
            type="text"
            name="last_name"
            value={userData.last_name}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <button type="submit" className="form-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;

