import React from 'react';
import { Grid } from '@mui/material';
import {
  Link
} from 'react-router-dom';
import BASE_URL from '../const/base-url';

export default function Navbar () {
  // const label = { inputProps: { 'aria-label': 'Dark Mode' } };

  return (
    <Grid item xs={2} md={2} className='navbar' onChange={() => console.log('change theme')}>

      {/* <Switch {...label} /> */}
      <span className='base-url-title'>
        Base URL:
      </span>
      <span className='base-url'>
        {BASE_URL}
      </span>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to='/introduction'>introduction</Link>
        </li>
        <li>
          <Link to='/addresses'>addresses</Link>
        </li>
        <li>
          <Link to='/books'>books</Link>
        </li>
        <li>
          <Link to='/companies'>companies</Link>
        </li>
        <li>
          <Link to='/movies'>movies</Link>
        </li>
        <li>
          <Link to='/products'>products</Link>
        </li>
        <li>
          <Link to='/users'>users</Link>
        </li>
      </ul>
    </Grid>
  );
}
