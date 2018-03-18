import React, { Component } from 'react';
import QRCode               from 'qrcode.react';
import './App.css';

class App extends Component {
  render() {
    return (
      <QRCode value="http://facebook.github.io/react/" />
    );
  }
}

export default App;
