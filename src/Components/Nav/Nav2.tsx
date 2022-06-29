import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Toolbar, Typography, Tabs, Tab } from '@mui/material';
import "./Nav.css";



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      
        <Toolbar className='tabs'>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} 
            >
             <Tabs >
                <Tab  label="ALL RECIPES" />
                <Tab label="BREAKFAST" />
                <Tab label="SALAD" />
                <Tab label="SOUP" /> 
                <Tab label="DINNER" />
                <Tab label="DESSERT" />
                <Tab label="FAVORITES" />
            </Tabs>
            
          </Typography>
          <Search >
          <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search', }}
            />
          </Search>
         
        </Toolbar>
        <Typography variant='h4' className='text'>
        What to Cook This June
        </Typography>
        <Typography>
        <img src='https://cookieandkate.com/images/2019/12/cookie-and-kate-top-10-recipes-of-2019.jpg'  alt='img' style={{width:"45%", height:'850px', padding:"20px"}}/>
        </Typography>
        <Typography variant='h6'>
<p><b>Why is this year is going by so quickly?</b> Watching our baby grow bigger makes me acutely aware of the days going by, though the months are a blur since the nights are still so long.

I’m also watching my dog, Cookie, grow older. A few weeks ago, I realized that she can’t hear me any more. She’s not feeling well at the moment and I’m working with the vets to get her better. Cookie is approximately fourteen years old now, and we’re having more conversations about her quality of life. Watching her slow down makes my heart ache and I’m loving on her as much as possible. I know she has a lot of fans here, so I wanted to fill you in. Send her some love if you will?

This month, seasonal produce options are expanding to include fresh fruit like blueberries and strawberries, rhubarb and cherries. I think I’ll make a crisp soon—the only question is which kind (blueberry, mixed berry or strawberry rhubarb?). Asparagus and spring peas are on the decline, so get them while you can. Stay well!

Avocado</p>
        </Typography>
    </Box>
  );
}
