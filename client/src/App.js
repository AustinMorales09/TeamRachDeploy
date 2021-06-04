import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {Container, AppBar, Grow, Grid} from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import FooterHome from './FooterHome';
import Home from './pages/Home';
import About from './pages/About';
import './styles/Main.css';
import contact from './pages/Contact';


const App = () => {
  return (

<BrowserRouter>
    <div>
    <Navbar/>
    <Route exact path = '/home' component={Home}/>
     <Route exact path = '/about' component={About}/>
    <Route exact path = '/contact' component={Contact}/>
    <FooterHome />
    </div>
    </BrowserRouter>
  );
}
export default App;


const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));








