import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Typography, useMediaQuery } from '@mui/material';
import AdminDashboardMain from './adminDashboardMain/AdminDashboardMain';
import AllProductsMain from './AllProducts/AllProductsMain';
import PendingProducts from './AllProducts/PendingProducts';
import Catogries from './Catogries';

const drawerWidth = 240;

const StaticSidebar = () => {
  const isMobileOrTablet = useMediaQuery('(max-width:960px)');
  const [open, setOpen] = useState(!isMobileOrTablet);
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    if (isMobileOrTablet) {
      setOpen(false); // Close the sidebar when an item is clicked on mobile/tablet
    }
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 'Categories':
        return <Catogries />;
      case 'All Products':
        return <AllProductsMain />;
      case 'Pending Products':
        return <PendingProducts />;
      default:
        return <AdminDashboardMain />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
    {isMobileOrTablet && (
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        edge="start"
        sx={{ zIndex: 1, margin: '2rem' }}
      >
        {open ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
    )}
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant={isMobileOrTablet ? 'temporary' : 'persistent'}
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            Menu
          </Typography>
        </Box>
        <Divider />
        <List>
          {['Dashboard', 'Categories', 'All Products', 'Pending Products'].map((text) => (
            <ListItem button key={text} onClick={() => handleItemClick(text)}>
              <ListItemIcon>
                {text === 'Dashboard' && <DashboardIcon />}
                {text === 'Categories' && <CategoryIcon />}
                {text === 'All Products' && <ShoppingCartIcon />}
                {text === 'Pending Products' && <AssignmentIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default StaticSidebar;
