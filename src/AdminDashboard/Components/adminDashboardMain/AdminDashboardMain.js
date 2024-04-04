import React from 'react'
import Catogries from '../../../Pages/Catogries/Catogries'
import AllProductsMain from '../AllProducts/AllProductsMain'
import PendingProducts from '../AllProducts/PendingProducts'
import { Box } from '@mui/material'

const AdminDashboardMain = () => {
  return (
    <>

    <Box display='flex'>

  <AllProductsMain/>
    <PendingProducts/>
    </Box>
    </>
  )
}

export default AdminDashboardMain