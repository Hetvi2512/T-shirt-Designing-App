import React, { Component } from 'react';
import Dashboard from './pages/dashboard/dashboard';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "antd/dist/antd.css"
import './App.css'
import Navbar from './components/navbar/navbar.component';
class App extends Component{
  render(){
    return(
      <Router>
      <div>
        <Navbar/>
       <Dashboard/>
      </div>
      </Router>
    )
  }
}
export default App;
