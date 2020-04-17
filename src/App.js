import React, {Component} from 'react';
import './assets/css/App.css';

import { connect } from 'react-redux';

export class App extends Component{
  render(){
      return (
          <div className="App">
              Olá mundo
          </div>
      );
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App);
