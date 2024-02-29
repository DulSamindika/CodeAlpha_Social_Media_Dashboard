import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar';
import RightBar from './RightBar';
//import Navbar from './Navbar';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <div>
      
      <Stack direction='row' spacing={2} justifyContent='space-between'>
      
      <Sidebar/>
      <Feed/>
      <RightBar/>
      
      </Stack>

    </div>
  )
}
