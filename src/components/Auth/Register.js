import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";
import { Container, Grid, Tabs, Tab, Typography, Box, TextField, Button } from '@mui/material';
import callAPI from "../../axios/Axios";
import {Link, useNavigate} from 'react-router-dom'
import Logo2 from '../../Assets/Register.jpg'

function Register() {

  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("login");
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await callAPI.post('/login', userData);
      if (response.status === 200) {
        const { role } = response.data; // Assuming the role is returned from the API

        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else if (role === 'seller') {
          navigate('/seller-dashboard');
        } else {
          // If the role is neither admin nor seller, handle it accordingly
          console.error('Unknown role:', role);
        }

        // Clear the form fields
        setUserData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      toast.error("Please Enter Valid Email or Password", { position: "top-right" });
    }
  };



const handleRegisterSubmit = async (e) => {
  e.preventDefault();


  try {


    const response = await callAPI.post(`/registerUser`, userData);

    if (response.status === 200) {

      navigate('/register')
      toast.success("Registration Successfull", { position: "top-right" });

      setUserData({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      toast.error("Registration Failed", { position: "top-right" });

    }
  } catch (error) {

    toast.error("Failed to register. Please check your details", { position: "top-right" });

  }
};


  return (
  <>
    <ToastContainer/>
    <Container className="my-1 gradient-form">
    <Grid container spacing={3} >
      <Grid item lg={6} md={12} sm={12} xs={12} className="mb-5">
        <Box sx={{ display: 'flex', flexDirection: 'column', ms: 5 }}>


          <Tabs
            value={activeTab}
            onChange={(e, newValue) => handleTabClick(newValue)}
            variant="fullWidth"
            className="mb-3 mt-5 d-flex flex-row justify-content-between"

          >
            <Tab label="Login" value="login"  style={{backgroundColor:'#fbfbfb', borderRadius:'10px'}}/>
            <Tab label="Seller Register" value="register" style={{backgroundColor:'#fbfbfb', borderRadius:'10px'}} />
          </Tabs>

          <Box>
            <TabPanel value={activeTab} index="login">
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  fullWidth
                  required

                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  value={userData.email}
                  onChange={handleChange}
                  variant="outlined"
                  className="mb-4"
                />
                <TextField
                  fullWidth
                  required
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  value={userData.password}
                  onChange={handleChange}
                  variant="outlined"
                  className="mb-4"
                />
                <Link className="text-muted" to="/forget-password">
                  Forgot password?
                </Link>
                <br />
                <br />

                <div>
                 <Button
                    type="submit"
                    variant="contained"
                    className="mb-4 w-10"
                    style={{ backgroundColor: "#94603b" }}
                  >
                    Login
                  </Button>
                 </div>
              </form>
            </TabPanel>
            <TabPanel value={activeTab} index="register">
              <form onSubmit={handleRegisterSubmit}>
                <TextField
                  fullWidth
                  required

                  label="Name"
                  id="name"
                  name="name"
                  type="text"
                  value={userData.name}
                  onChange={handleChange}
                  variant="outlined"
                  className="mb-4"
                />
                <TextField
                  fullWidth
                  required

                  label="Username"
                  id="username"
                  name="username"
                  type="text"
                  value={userData.username}
                  onChange={handleChange}
                  variant="outlined"
                  className="mb-4"
                />
                <TextField
                  fullWidth
                  required

                  label="Email"
                  id="sellerEmail"
                  name="email"
                  type="email"
                  value={userData.email}
                  onChange={handleChange}
                  variant="outlined"
                  className="mb-4"
                />
                <TextField
                  fullWidth
                  required

                  label="Password"
                  id="sellerPassword"
                  name="password"
                  type="password"
                  value={userData.password}
                  onChange={handleChange}
                  variant="outlined"
                  className="mb-4"
                />
                <TextField
                  fullWidth
                  required

                  label="Confirm Password"
                  id="sellerConfirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={userData.confirmPassword}
                  onChange={handleChange}
                  variant="outlined"
                  className="mb-4"
                />
              <div>
              <Button
                  type="submit"
                  variant="contained"
                  className="mb-4 w-10"
                  style={{ backgroundColor: "#94603b" }}
                >
                  Sign up
                </Button>
              </div>
              </form>
            </TabPanel>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={6} md={12} sm={12} xs={12}  className="mb-5">
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', mb: 4 }}>
          <Box sx={{ px: 0, py: 2, pxMd: 5, mxMd: 4 }}>
           <img src={Logo2} width={'100%'}/>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Container>
  </>
);
}

function TabPanel(props) {
const { children, value, index, ...other } = props;

return (
  <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
    {...other}
  >
    {value === index && <Box p={3}>{children}</Box>}
  </Typography>
);
}

export default Register;
