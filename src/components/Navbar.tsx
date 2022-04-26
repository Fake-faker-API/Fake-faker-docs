import React from 'react';
import Grid from '@mui/material/Grid';
import {
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

export default function Navbar() {
  return (
    <Grid item xs={2} md={2} className="navbar">
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <NavLink to="/addresses">addresses</NavLink>
        </li>
        <li>
          <NavLink to="/books">books</NavLink>
        </li>
        <li>
          <NavLink to="/companies">companies</NavLink>
        </li>
        <li>
          <NavLink to="/movies">movies</NavLink>
        </li>
        <li>
          <NavLink to="/products">products</NavLink>
        </li>
        <li>
          <NavLink to="/users">users</NavLink>
        </li>
      </ul>
    </Grid>
  );
}