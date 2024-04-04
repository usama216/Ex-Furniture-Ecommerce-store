import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import callAPI from "../../axios/Axios";
import { ToastContainer, toast } from 'react-toastify';


const ForgetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await callAPI.post("/forgetPassword", { email });

      if (response.data.success) {


        navigate("/otp-verification", { state: { email: email } });

      } else {

        toast.error("Failed to send OTP", { position: "top-right" });
      }
    } catch (error) {

      toast.error("Failed to send OTP",  { position: "top-right" })
    }
  };


  return (
   <>

<ToastContainer/>
     <Stack sx={{ padding: "5rem 10%", textAlign: "center" }}>


      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Lost Your Password</h1>
        <p>
          Please enter your username or email address. You will receive a link
          to create a new password via email.
        </p>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            className="mb-4"
            required // Mark email field as required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#94603b",
              borderRadius: "25px",
              color: "white",
              "&:hover": {
      backgroundColor: "#94603b", // Change background color to red on hover
    },
            }}
          >
            Reset Password
          </Button>
        </form>
      </Box>
    </Stack>
   </>
  );
};

export default ForgetPassword;
