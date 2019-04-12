import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
      <Header/>
      <Body/>
      <Footer/>
      </div>
      </div>

      
    );
  }
}

export default App;
