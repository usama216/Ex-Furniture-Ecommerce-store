import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useNavigate } from 'react-router-dom';

const PendingProducts = () => {
  const navigate = useNavigate();
  const [pendingProducts, setPendingProducts] = useState([
    {
      id: 1,
      name: 'Pending Product 1',
      category: 'Category 1',
      image: 'https://via.placeholder.com/100',
      sellerName: 'Seller A'
    },
    {
      id: 2,
      name: 'Pending Product 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/100',
      sellerName: 'Seller B'
    },
    // Add more pending product data here
  ]);

  const handleApprove = (productId) => {
    const productToApprove = pendingProducts.find(product => product.id === productId);

    // Navigate to All Products page with product data
    navigate(`/all-products/${productId}`, { state: { product: productToApprove } });

    // Remove the product from the pending list
    setPendingProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  const handleNotApprove = (productId) => {
    console.log(`Product ${productId} not approved.`);
  };

  return (
    <div>
      <h2>Pending Products</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Seller Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingProducts.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell><img src={product.image} alt={product.name} style={{ width: 50, height: 50 }} /></TableCell>
                <TableCell>{product.sellerName}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleApprove(product.id)} style={{ marginRight: 8 }}>
                    <ThumbUpIcon />
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleNotApprove(product.id)}>
                    <ThumbDownIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PendingProducts;
