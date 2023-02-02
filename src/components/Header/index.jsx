import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>Lorem Blog</h1>
        <Link to='/users' >
        <div>
        <lord-icon
          src="https://cdn.lordicon.com/dqxvvqzi.json"
          trigger="hover"
          style={{ width: "56px", height: "56px" }}>
        </lord-icon>
        <p className='user-label'>Usuários</p>
        </div>
        </Link>
      </div>
    </header>
  )
}
