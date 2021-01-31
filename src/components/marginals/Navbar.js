import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Firebase from '../../config/Firebase'
import logo from '../../assets/images/brand.jpg'

import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  brandLogo: {
    height: '50px',
    width: 'auto',
    borderRadius: '50%',
    padding: '5px auto'
  },
  search: {
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: fade(theme.palette.common.white, 0.15),
   '&:hover': {
     backgroundColor: fade(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(60),
   marginLeft: theme.spacing(10),
   width: '100%',
   [theme.breakpoints.up('sm')]: {
     marginLeft: theme.spacing(3),
     width: 'auto',
   },
 },
 searchIcon: {
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
 },
 inputRoot: {
   color: 'inherit',
 },
 inputInput: {
   padding: theme.spacing(1, 1, 1, 0),
   // vertical padding + font size from searchIcon
   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
   transition: theme.transitions.create('width'),
   width: '100%',
   [theme.breakpoints.up('md')]: {
     width: '20ch',
   },
 },
 navItems: {
  marginLeft: '0.5rem',
  marginRight: '0.5rem'
 }
}));

export default function Navbar() {
  const classes = useStyles();
  let history = useHistory();

  const handleLogout = () => {
   Firebase.auth().signOut();
  // history.push('/login');
  };

  const handleScholarships = () => {
   history.push('/scholarship');
  }
  const handleInternships = () => {
   history.push('/internship');
  }
  const handleFellowships = () => {
   history.push('/fellowship');
  }
  const handlePlacements = () => {
   history.push('/placement');
  }
  const handleProfile = () => {
   history.push('/profile');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <div className={classes.wrapper}>
          
          </div> */}
          <img className={classes.brandLogo} src={logo} />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <Button className={classes.navItems} color="inherit" onClick={handleScholarships}>Scholarships</Button>
          <Button className={classes.navItems} color="inherit" onClick={handleFellowships}>Fellowships</Button>
          <Button className={classes.navItems} color="inherit" onClick={handleInternships}>Internships</Button>
          <Button className={classes.navItems} color="inherit" onClick={handlePlacements}>Placements</Button>
          <Button className={classes.navItems} color="inherit" onClick={handleProfile}>Profile</Button>
          <Button className={classes.navItems} style={{color: 'blue', backgroundColor:'#fff'}} color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
