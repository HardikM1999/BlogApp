import React,{Component} from 'react';
import './App.css';
import NavBar from './components/navbar';
import {Jumbotron,Container,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <Jumbotron>
          <h1 className="display-3">
            BlogZilla
          </h1>
          <p>Best Website to do Blogging out there!</p>
        </Jumbotron>
        <Button color="primary">
          Hello
        </Button>
      </div>
    );
  }
}

export default App;
