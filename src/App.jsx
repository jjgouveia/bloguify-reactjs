import { Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App () {
  return (
    <Container>
    <Outlet />
    </Container>
  );
}

export default App;
