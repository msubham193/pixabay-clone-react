import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Loading = () => {
  return (
    <Box sx={{ display: 'flex' }} className="flex justify-center items-center">
    <CircularProgress />
  </Box>
  )
}

export default Loading