// import axios from 'axios'


//  export const API_URL='https://wv9pfwh9-5000.inc1.devtunnels.ms/api/v1'


// export const callAPi = axios.create({
//     baseURL: API_URL,
//     headers: {
//     // 'Content-type': 'multipart/form-data',
//     'Content-type': 'application/json',
//     },
//   });


// export default callAPi


import axios from 'axios';

export const API_URL = 'https://wv9pfwh9-5000.inc1.devtunnels.ms/api/v1';

const callAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to send OPTIONS request to /registerUser
export const sendOptionsRequest = async () => {
  try {
    const response = await callAPI.options('/registerUser');
    console.log(response.status);
    console.log(response.headers);
    return response; // Optional: return the response if needed
  } catch (error) {
    console.error('Error:', error);
    throw error; // Optional: re-throw the error if needed
  }
};

export default callAPI;
