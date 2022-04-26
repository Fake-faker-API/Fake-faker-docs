import React from 'react';
import { Grid, Switch } from '@mui/material';
import {
  Link,
  BrowserRouter as Router,
} from "react-router-dom";

export default function Navbar() {
  const label = { inputProps: { 'aria-label': 'Dark Mode' } };

  return (
    <Grid item xs={2} md={2} className="navbar" onChange={()=>console.log("change theme")}>
      
      <Switch {...label} />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/introduction">introduction</Link>
        </li>
        <li>
          <Link to="/addresses">addresses</Link>
        </li>
        <li>
          <Link to="/books">books</Link>
        </li>
        <li>
          <Link to="/companies">companies</Link>
        </li>
        <li>
          <Link to="/movies">movies</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
    </Grid>
  );
}