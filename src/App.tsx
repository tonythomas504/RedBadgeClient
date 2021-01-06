import React from 'react';
import {BrowserRouter as Router, } from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import {Component}  from 'react'
import './App.css';

type AuthState = {
  token: string
}

 export default class App extends Component<{}, AuthState> {
  constructor(props: string) {
    super(props);
    this.state = {
      token: ''
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken)
    this.setState({
      token: newToken
    })
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({
      token: ''
    })
  }

  render() {
    return(
      <div>
        <Auth updateToken={this.updateToken.bind(this)}/>
      </div>
    )
  }

}
