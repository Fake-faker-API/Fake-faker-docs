import React from 'react';
import { Grid } from '@mui/material';
import "./App.css"
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <Router>
    <Grid container>
      <Navbar />
    <Grid item xs={10} md={10} className="main-content">
     <Main />
    </Grid>
  </Grid>
  </Router>
  );
}

export default App;
