import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import callAPI from "../../axios/Axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state.email;

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password do not match", { position: "top-right" });

      return;
    }

    try {
      const response = await callAPI.post("/resetPassword", {
        email,
        password,
        confirmPassword,
      });
      if (response.data.success) {
        navigate("/register");
      } else {
        alert("Failed to update password");
      }
    } catch (error) {
      console.error("Failed to update password:", error);
      toast.error("Failed to update password", { position: "top-right" });
    }
  };

  return (
    <>
      <ToastContainer />
      <Stack sx={{ padding: "5rem 10%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Enter New Password</h1>
          <p>Please enter your new password and confirm it.</p>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                width: "100%",
                "@media(max-width:480px)": { width: "100%" },
              }}
            >
              <h5>New Password</h5>
              <TextField
                sx={{ width: "100%" }}
                type="password"
                value={password}
                onChange={handleChangePassword}
                required
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                marginTop: "2rem",
                "@media(max-width:480px)": { width: "100%" },
              }}
            >
              <h5>Confirm Password</h5>
              <TextField
                sx={{ width: "100%" }}
                type="password"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
                required
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "2rem",
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

export default SetPassword;
