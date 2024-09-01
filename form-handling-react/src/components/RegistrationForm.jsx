import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required');
    } else {
      setError('');
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}  // Controlled input
            onChange={handleChange}
            style={{ display: 'block', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}  // Controlled input
            onChange={handleChange}
            style={{ display: 'block', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}  // Controlled input
            onChange={handleChange}
            style={{ display: 'block', margin: '10px 0' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
