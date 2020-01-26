import React,{Component} from 'react';
import './App.css';
import NavBar from './components/navbar';
import {Jumbotron,Container,Button,Card,CardBody,CardTitle,CardText,Badge} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Post from './components/Post';
import Home from './components/Home';
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
              <Route path="/post/:id" component={Post}>
                {/* <Post props={...props}/> */}
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
