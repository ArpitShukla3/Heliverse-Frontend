// CreateUserForm.js

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './CreateUserForm.css';

const CreateUserForm = () => {
  const [userData, setUserData] = useState({
    avatar: '',
    domain: '',
    email: '',
    first_name: '',
    gender: '',
    last_name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request with data in the request body
      const response = await fetch('https://heliverse-backend-rho.vercel.app/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Handle the response (you can customize this based on your needs)
      console.log('User created successfully:', response);

      // Show a success toast notification
      toast.success('User created successfully!');
    } catch (error) {
      // Handle errors (you can customize this based on your needs)
      console.error('Error creating user:', error);

      // Show an error toast notification
      toast.error('Error creating user. Please try again.');
    }
  };

  return (
    <div className="create-user-container">
      <Toaster />
      <h1>Create User</h1>
      <form onSubmit={handleSubmit} className="user-form">
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
    Submit
  </button>
</form>

    </div>
  );
};

export default CreateUserForm;
