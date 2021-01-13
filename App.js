import React from 'react';
import {BrowserRouter as Router, } from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import {Component}  from 'react'
import './App.css';

 export default class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

  componentDidMount() {
    if(localStorage.getItem('token') !== '') {
      this.setSessionState(localStorage.getItem('token'));
    }
  }

  setSessionState = (sessionToken) => {
    localStorage.setItem('token', sessionToken);
    this.setState({
      sessionToken: sessionToken
    })
  }

  logout = () => {
    localStorage.clear();
    this.setState({
      sessionToken: !this.state.sessionToken
    })
  }

  render() {
    
    const protectedViews = !this.state.sessionToken

    return(
      <div>

      </div>
    )
  }
 }
