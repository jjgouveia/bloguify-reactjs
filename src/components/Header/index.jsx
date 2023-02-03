import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function Header () {
  return (
    <header>
      <div className='header-wrapper'>
        <div className='logo-container'>
          <Typography variant='h1' sx={{ fontSize: '32px' }}><lord-icon
              src="https://cdn.lordicon.com/wfxpxmpk.json"
              trigger="hover"
              style={{ width: "56px", height: "56px" }}>
            </lord-icon> Lorem Blog</Typography>
        </div>
        <Link to='/users' style={{ textDecoration: 'none' }}>
          <div className='icon-wrapper'>
            <lord-icon
              src="https://cdn.lordicon.com/dqxvvqzi.json"
              trigger="hover"
              style={{ width: "42px", height: "42px" }}>
            </lord-icon>
            <p className='user-label'>Usuários</p>
          </div>
        </Link>
      </div>
    </header>
  )
}
