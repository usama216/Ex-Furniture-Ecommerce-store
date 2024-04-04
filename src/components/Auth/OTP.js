import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import callAPI from '../../axios/Axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const OTP = () => {

  // console.log(email);
const location = useLocation()
  const navigate = useNavigate()
  const email= location.state.email


console.log(email)

  const [otp, setOTP] = useState(['', '', '', '', '', '']);

  const handleChange = (index, event) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = event.target.value;
    setOTP(updatedOTP);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const enteredOTP = otp.join('');

    try {
      const response = await callAPI.post('/verifyOTP', { email, forgotPasswordOtp: enteredOTP  });
      if (response.data.success) {
navigate('/set-password', {state: {email: email}})


      } else {

        toast.error('Invalid OTP',  { position: "top-right" })

      }
    } catch (error) {

      toast.error('Failed to verify OTP:', error,  { position: "top-right" })
    }
  };

  const handleKeyPress = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && !otp[index]) {

      document.getElementsByName(`otp${index}`)[0].focus();
    } else if (event.key >= '0' && event.key <= '9' && index < 5 && otp[index]) {

      document.getElementsByName(`otp${index + 2}`)[0].focus();
    }
  };

  return (
   <>
    <ToastContainer/>
    <form onSubmit={handleSubmit}>
      <div className="otpContainer">
        {otp.map((value, index) => (
          <input
            key={index}
            name={`otp${index + 1}`}
            type="text"
            autoComplete="off"
            className="otpInput"
            value={value}
            onChange={(e) => handleChange(index, e)}
            maxLength="1"
            onKeyDown={(e) => handleKeyPress(index, e)}
            style={{ marginRight: '5px' }}
            required
          />
        ))}
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '5rem' }}>
        <Button
          variant="contained"
          type="submit"
          sx={{

      backgroundColor: "#94603b", // Change background color to red on hover

            color: 'white',
            "&:hover": {
      backgroundColor: "#94603b", // Change background color to red on hover
    },
          }}
        >
          Submit
        </Button>
      </Box>
    </form>
   </>
  );
};

export default OTP;
