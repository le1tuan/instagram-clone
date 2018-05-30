import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import SignUp from './SignUp';
import InstagramContent from './InstagramContent';
import './App.css';

class App extends Component {
  isDisplayHeader = () => {
    const exclude = ['login', 'sign-up']
  }
  render() {
    return (
      <div className="App">  
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={InstagramContent} />
              <Route path='/sign-in' component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
