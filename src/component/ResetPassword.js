import React, { useState } from 'react';
import axios from 'axios';
import './ResetPassword.css'; 

const ResetPassword = ({token}) => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      console.log(password, token);
      const response = await axios.post(
        `http://localhost:3000/api/v1/users/resetpassword`,
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        }
      );
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log('erreoer',error);
     setMessage(error.response.data.message);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleResetPassword();
        }}
      >
        <label>New Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
