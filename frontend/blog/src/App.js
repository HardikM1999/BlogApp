import React,{Component} from 'react';
import './App.css';
import NavBar from './components/navbar';
import {Jumbotron,Container,Button,Card,CardBody,CardTitle,CardText,Badge,Foo} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Post from './components/Post';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  
  render(){
    return(
      <Router>
        <div className="app">
          <NavBar />
          <div className="router">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/post/:id" component={Post}>
                {/* <Post props={...props}/> */}
              </Route>
              <Route path="/:mode" component={Home}>
                {/* <Home /> */}
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
        <footer className="footer">
              <div className="container">
                <span className="text-muted">Built By Hardik Mehta</span>
              </div>
            </footer>
      </Router>
    );
  }
}

export default App;
