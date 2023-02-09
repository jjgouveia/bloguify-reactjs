import React from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import logo from '../../assets/cafe.png';
import { Slide } from "react-awesome-reveal";


export default function Header () {
  const redirect = useNavigate();

  const logout = () => {
    localStorage.removeItem('lorem');
    redirect('/login');
  }

  return (
    <header>
      <div className='header-wrapper'>
        <Link to='/feed' style={{ textDecoration: 'none' }}>
          <Slide direction='down' triggerOnce>
          <Box className='logo-container' sx={ styles.logoContainer }>
            <img src={ logo } alt="Logo do Bloguify" width={ 32 } />
            <Typography variant='h1' sx={ styles.title }>Bloguify</Typography>
          </Box>
          </Slide>
        </Link>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <div className='icon-wrapper'>
              <lord-icon
                src="https://cdn.lordicon.com/ajkxzzfb.json"
                trigger="morph"
                colors="primary:#ffc738,secondary:#4bb3fd"
                state="morph-group"
                style={ styles.lordIcon }>
              </lord-icon>
              <p className='user-label'>Usuários</p>
            </div>
          </Link>
          <button className='icon-wrapper' onClick={ logout }>
            <lord-icon
                src="https://cdn.lordicon.com/bnylezcu.json"
                trigger="hover"
                colors="primary:#ebe6ef,secondary:#f49cc8,tertiary:#f24c00,quaternary:#3a3347,quinary:#2ca58d,senary:#b2"
              style={ styles.lordIcon }>
            </lord-icon>
            <p className='user-label'>Sair</p>
          </button>
        </Box>
      </div>
    </header>
  )
};

const styles = ({
  title: {
    fontSize: '32px',
    paddingLeft: "10%",
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    color: "#42A5F5",
    letterSpacing: 1,
  },

  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
  },

  lordIcon: {
    width: "42px",
    height: "42px",
  }
});
