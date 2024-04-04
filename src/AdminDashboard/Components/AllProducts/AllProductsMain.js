// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
// import axios from 'axios';

// const AllProductsMain = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch product data from the database
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('your-api-endpoint-for-fetching-products');
//         setProducts(response.data); // Assuming response.data is an array of product objects
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>All Products</Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Image</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Category</TableCell>
//               <TableCell>Seller Name</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {products.map(product => (
//               <TableRow key={product.id}>
//                 <TableCell>
//                   <img src={product.image} alt={product.name} style={{ width: 50, height: 50 }} />
//                 </TableCell>
//                 <TableCell>{product.name}</TableCell>
//                 <TableCell>{product.price}</TableCell>
//                 <TableCell>{product.category}</TableCell>
//                 <TableCell>{product.sellerName}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default AllProductsMain;


import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation

const AllProductsMain = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Dummy data for testing
  const dummyProducts = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/100',
      price: '$10',
      category: 'Category 1',
      sellerName: 'Seller A'
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/100',
      price: '$20',
      category: 'Category 2',
      sellerName: 'Seller B'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/100',
      price: '$15',
      category: 'Category 1',
      sellerName: 'Seller C'
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'https://via.placeholder.com/100',
      price: '$25',
      category: 'Category 2',
      sellerName: 'Seller D'
    },
    {
      id: 5,
      name: 'Product 5',
      image: 'https://via.placeholder.com/100',
      price: '$18',
      category: 'Category 1',
      sellerName: 'Seller E'
    }
  ];

  useEffect(() => {
    // Set the dummy products initially
    setProducts(dummyProducts);
  }, []);

  // Function to handle clicking on a product
  const handleProductClick = (productId) => {
    // Navigate to the product detail page
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>All Products</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Seller Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow key={product.id} onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer' }}>
                <TableCell>
                  <img src={product.image} alt={product.name} style={{ width: 50, height: 50 }} />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.sellerName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllProductsMain;
