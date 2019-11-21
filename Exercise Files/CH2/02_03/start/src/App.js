import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Home from './components/Home';
import Vitamin from './components/Vitamin';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
    }
    this.toggleLogo = this.toggleLogo.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  toggleLogo(event) {
    this.setState((prevState) => ({
      toggleLogo: !prevState.toggleLogo
    }));
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} 
              className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'} 
              alt="logo"
              onMouseEnter={this.toggleLogo}
              onMouseLeave={this.toggleLogo}
              onClick={this.openNav}
            />
            <h1
              className={this.state.toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown'}
              onClick={this.openNav}
            >Menu</h1>
            <Navigation closeNav={this.closeNav} />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/vitamin" component={Vitamin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
