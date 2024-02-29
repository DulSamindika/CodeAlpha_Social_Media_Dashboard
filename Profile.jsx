import { Grid, List, ListItem } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export default function Profile() {
  return (
    <>
      <div>
      </div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: 1000,
            height: 300,
          },
        }}
      >
        <Paper>
          <img src='.\cover.jpg' alt='cover' style={{ width: '100%', height: '300px' }}></img>
        </Paper>
        <Grid container spacing={2} alignItems="center">
          <Grid>
            <Stack sx={{ position: "relative", top: "-100px" }}>
              <Avatar
                alt="profile pic" src='.\home-child.jpg'
                sx={{ width: 250, height: 250, zIndex: 1 }}
              />
            </Stack>
          </Grid>
          <Grid sx={{ position: "relative", top: "-100px", left: "15px" }}>
            <h1>Dulshani Samindika</h1>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Create a Post</Button>
              <Button variant="outlined">Edit Profile</Button>
              </Stack>
          </Grid>
        </Grid>

        <Grid sx={{ display: "flex" }} container spacing={2}>
          <Grid>
            <Paper sx={{ width: 325, height: 400, margin: 2 }}>
             
              <List>
              <h3 style={{ paddingLeft: '16px' }}>About</h3>
                <ListItem>
                  <ListItemIcon>
                    <HomeIcon color="grey" />
                  </ListItemIcon>
                  <ListItemText primary="Kadawatha" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon color="grey" />
                  </ListItemIcon>
                  <ListItemText primary="Software Engineer" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon color="grey" />
                  </ListItemIcon>
                  <ListItemText primary="Graphic designer" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="grey" />
                  </ListItemIcon>
                  <ListItemText primary="University of colombo" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="grey" />
                  </ListItemIcon>
                  <ListItemText primary="Diploma in graphic design" />
                </ListItem>
              </List>
              <Button variant="contained" style={{ marginLeft: '16px', width:'290px' }}>Edit Details</Button>
            </Paper>
          
          </Grid>
          <Grid>
            <Paper sx={{ width: 625, height: 400 }} >
            <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="./Deadpool.jpg"
        alt="Deadpool"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
