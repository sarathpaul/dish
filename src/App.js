import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// import './App.css';
// import Dishes from'./Dishes';
// import Login from'./Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Foods from './components/Foods';

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="container-fluid">
        <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Foods">
            <Foods/>
          </Route>
          </Switch>
        </Router>
        
      </div>
      // <Router>
      //   <div>
      //     <ui>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/Login">Login</Link>
      //       </li>
      //     </ui>
      //   </div>

      //   <Switch>
      //     <Route path="/Login">
      //       <Login/>
      //     </Route>
      //   </Switch>

      // </Router>
    )
  }
}
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    // </div>
    export default App;