import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Hidden,
  Menu,
  MenuItem,
  Box,Button,Grid,
  Divider,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import image from '../data/logo.png';
import { Link } from 'react-router-dom';



const TopAppBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [submenu, setSubmenu] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleServicesMenuOpen = (event: React.MouseEvent<HTMLAnchorElement | HTMLLIElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
    setSubmenu(null);
  };

  const handleSubmenuClick = (submenuName: string) => {
    setSubmenu(submenuName);
  };
  const linkStyle: React.CSSProperties = {
    marginRight: 20,
    fontWeight: 600,
    fontSize: '18px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif;',
    color: 'white',
    textDecoration: 'none',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'linear-gradient(to right, #0693e3, #0693e3 50%, white 50%)',
    backgroundSize: '200% 100%',
    backgroundPosition: '100%',
    transition: 'all 0.2s cubic-bezier(0.000, 0.000, 0.230, 1)',
  };

  
  const handleHover = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (event.currentTarget.style) {
      event.currentTarget.style.backgroundPosition = '0%';
    }
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (event.currentTarget.style) {
      event.currentTarget.style.backgroundPosition = '100%';
    }
  };

  // export const useStyles = makeStyles((theme: Theme) => ({
  //   menu: {
  //     "& .MuiPaper-root": {
  //       backgroundColor: "lightblue"
  //     }
  //   }
  // }));

  return (
    <AppBar position="static" sx={{ bgcolor: 'rgba(0, 0, 0, 1)', boxShadow: 'inset -8px -8px 12px -10px #f5f5f5', p: '5px' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to={'/'}>
              <img src={image} alt="Logo" style={{ width: '50px', marginRight: '5px' }} />
            </Link>
            <Link to={'/'}>
              <Typography variant="h5" component="div" sx={{ color: '#0693e3' }}>
                Sentex Lab
              </Typography>
            </Link>
          </Box>
          <Box>
            <Hidden mdUp>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={
                  { mt: "1px", "& .MuiMenu-paper": 
                    { backgroundColor: "black", }, 

                  }
                }

              >
                <MenuItem component={Link} to="/about-us" onClick={handleMenuClose} sx={{ color: 'white' }}>About Us</MenuItem>
                <Divider  sx={{backgroundColor:'white'}}/>
                <div style={{ display: 'flex', alignItems: 'center' }}>
  <MenuItem
    aria-controls="services-menu"
    aria-haspopup="true"
    component={Link} to="/services"
    sx={{ color: 'white' }}

  >
    Services 
  </MenuItem>
 
  <MenuItem
    aria-controls="services-menu"
    aria-haspopup="true"
    onClick={handleServicesMenuOpen}
    sx={{ color: 'white'  }}
  >
    <ExpandMoreIcon  sx={{Color:'white'}} />
  </MenuItem>
</div>

                <Divider  sx={{backgroundColor:'white'}} />
                <MenuItem component={Link} to="/portfolio" onClick={handleMenuClose} sx={{ color: 'White' }}>Portfolio</MenuItem>
                <Divider  sx={{backgroundColor:'white'}} />
                <MenuItem component={Link} to="/blogs" onClick={handleMenuClose} sx={{ color: 'White' }}>Blog</MenuItem>
                <Divider  sx={{backgroundColor:'white'}} />
                <MenuItem component={Link} to="/contactus" onClick={handleMenuClose} sx={{ color: 'White' }}>Contact Us</MenuItem>
              </Menu>
            </Hidden>

            <Hidden smDown>
  <Grid container alignItems="center">
    <Grid item>
      <a href="/about-us" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseOut}> About us</a>
    </Grid>

    <Grid item>
      <a href="/services" style={{fontSize:"18px", marginRight:'-5px'}} onMouseEnter={handleHover} onMouseLeave={handleMouseOut} > Services</a>
    </Grid>
  
    <Grid item >
      <IconButton href='' style={linkStyle} sx={{bgcolor:'green' }} onClick={handleServicesMenuOpen} aria-label="services menu">
        <ExpandMoreIcon sx={{Color:'white'}}/>
      </IconButton>
    </Grid>
    <Grid item>
      <a href="/portfolio" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseOut}>Portfolio</a>
    </Grid>
    <Grid item>
      <a href="/blogs" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseOut}>Blog</a>
    </Grid>
    <Grid item>
      <a href="/contactus" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleMouseOut}>Contact Us</a>
    </Grid>
    <Grid item>
      <Button variant="contained" style={{ marginLeft: 25, backgroundColor: '#0693e3' }}>Get a Quote</Button>
    </Grid>
  </Grid>
</Hidden>


          </Box>

        </Toolbar>
      </Container>
  
      <Menu
        anchorEl={servicesAnchorEl}
        open={Boolean(servicesAnchorEl)}
        onClose={handleServicesMenuClose}
        sx={
          { mt: "1px", "& .MuiMenu-paper": 
            { backgroundColor: "black", border: "1px solid white", }, 
            

          }
        }

      >
        <MenuItem >
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <Link to={'/WebDevelopment'}>
              <Typography  sx={{ p:1,color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>Web Development</Typography>
            </Link>
            <div onClick={(e) => { e.stopPropagation(); handleSubmenuClick('Web Development'); }}>
            <ExpandMoreIcon sx={{color:'white'}}/>
            </div>
          </div>
        </MenuItem>
        <Divider  sx={{backgroundColor:'white'}}/>
        <MenuItem>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to={'/MobileDevelopment'}>
              <Typography  sx={{ p:1,color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>App Development</Typography>
            </Link>
            
            <div onClick={(e) => { e.stopPropagation(); handleSubmenuClick('App Development'); }}>
              <ExpandMoreIcon sx={{color:'white'}}/>
            </div>
          </div>
        </MenuItem>
        <Divider sx={{backgroundColor:'white'}} />
        <MenuItem>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to={'/ArtificialIntelligence'}>
              <Typography sx={{ p:1,color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>Artificial Intelligence</Typography>
            </Link>
            <div onClick={(e) => { e.stopPropagation(); handleSubmenuClick('Artificial Intelligence'); }}>
            <ExpandMoreIcon sx={{color:'white'}}/>
            </div>
          </div>
        </MenuItem>
        <Divider sx={{backgroundColor:'white'}}/>
        <MenuItem>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to={'/StaffAugmentation'}>
              <Typography sx={{ p:1,color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>Staff Augmentation</Typography>
            </Link>
           
          </div>
        </MenuItem>
       
      </Menu>
   
      <Menu
        anchorEl={servicesAnchorEl}
        open={Boolean(submenu)}
        onClose={() => setSubmenu(null)}
        sx={
          { mt: "1px", "& .MuiMenu-paper": 
            { backgroundColor: "black", border: "1px solid white",}, 

          }
        }
      >
        {submenu === 'Web Development' && (
          <>
           <MenuItem component={Link} to="/react" sx={{p:3 ,color:'white'}} > 
           <Typography sx={{ color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>React</Typography>
            </MenuItem>
            <Divider sx={{backgroundColor:'white'}}/>
            <MenuItem component={Link} to="/Laravel" sx={{p:3,color:'white'}} >
            <Typography  sx={{color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>Laravel</Typography>
              </MenuItem>
            <Divider sx={{backgroundColor:'white'}}/>
            <MenuItem component={Link} to="/Wordpress" sx={{p:3 ,color:'white'}} >
            <Typography  sx={{ color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>WordPress</Typography>
              </MenuItem>
            <Divider sx={{backgroundColor:'white'}}/>
            <MenuItem component={Link} to="/Node"sx={{p:3 ,color:'white'}} >
            <Typography  sx={{ color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>Node</Typography>
              </MenuItem>
          </>
        )}
        {submenu === 'App Development' && (
          <>
            <MenuItem component={Link} to="/Native" sx={{p:3 ,color:'white'}} >
            <Typography  sx={{ color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>React Native</Typography>
              </MenuItem>
            <Divider sx={{backgroundColor:'white'}}/>
            <MenuItem component={Link} to="/Flutter" sx={{p:3 ,color:'white'}} >
            <Typography  sx={{ color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>Flutter</Typography> 
              </MenuItem>
            <Divider sx={{backgroundColor:'white'}}/>
            <MenuItem component={Link} to="/Android" sx={{p:3 ,color:'white'}} >
            <Typography  sx={{ color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>Android</Typography>
              </MenuItem>
            <Divider sx={{backgroundColor:'white'}}/>
            <MenuItem component={Link} to="/Ios" sx={{p:3 ,color:'white'}} >
            <Typography  sx={{ color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}>Ios</Typography>
            </MenuItem>
           
          </>
        )}
        {submenu === 'Artificial Intelligence' && (
          <>
            <MenuItem component={Link} to="/Robotic" sx={{p:3,color:'white'}} >
             
              <Typography  sx={{ color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}> Robotic Automation</Typography>
              </MenuItem>
            <Divider sx={{backgroundColor:'white'}}/>
            <MenuItem component={Link} to="/BigData" sx={{p:3,color:'white'}} >
            <Typography  sx={{ color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}> Big Data</Typography>
            </MenuItem>
            <Divider sx={{backgroundColor:'white'}}/>
            <MenuItem component={Link} to="/nlp" sx={{p:3,color:'white'}} >
            <Typography  sx={{ color: 'white', "&:hover": { color: '#0693e3',}, fontWeight: 'bold',}}> Natural Language Process</Typography>
              </MenuItem>
            
          </>
        )}
        {/* {submenu === 'Staff Augmentation' && (
          <>
            <MenuItem onClick={() => console.log('Full Stack')}>Full Stack</MenuItem>
            <Divider />
            <MenuItem onClick={() => console.log('Offshore')}>Offshore</MenuItem>
            <Divider />
          </>
        )} */}
      </Menu>
    </AppBar>
  );
}

export default TopAppBar;
