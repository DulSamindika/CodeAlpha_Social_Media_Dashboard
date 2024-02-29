import styled from '@emotion/styled'
import { AppBar, InputBase, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Face3Icon from '@mui/icons-material/Face3';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import { useState } from 'react';



 function Navbar() {

  
   const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
   })

   const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: "10px",
    height: "40px",
    width:"400px"

   }));

   const Icons = styled(Box)(({theme})=>({
    backgroundColor: 'primary',
    padding:"0 10px",
    display: "flex",
    gap: "20px",
    alignItems:"center"

   }))

   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);
 


  return (
    <AppBar position='sticky'>
        <StyledToolbar>< Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}> MyVlog</Typography>
        <Face3Icon sx={{display:{xs:"block", sm:"none"}}} p="5px"/>
        <Search><InputBase placeholder='Search'></InputBase></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
          <MailIcon color="white" />
          <NotificationsIcon color="white" />
          </Badge>
          <Link to='/Profile' onClick={handleClick}>
          <Avatar alt="profile pic" src='.\home-child.jpg'/>
          </Link>
        </Icons>
         </StyledToolbar>
       
    </AppBar>
  )
}

export default Navbar;