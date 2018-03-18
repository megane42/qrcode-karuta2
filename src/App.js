import React, { Component } from 'react';
import QRCode               from 'qrcode.react';
import './App.css';

class QRCodeBox extends Component {

    constructor(props) {
        super(props);
        this.state = { text: props.value };
    }
    
    changeText = (e) => {
        this.setState({
            text: e.target.value
        });
    }
    
    render = () => {
        let text = this.state.text;
        return (
                <div className="qrcode_box">
                    <QRCode value={text} />
                    <input type="text" value={text} onChange={this.changeText} />
                </div>
        )
    }
}

class App extends Component {
    render = () => {
        return (
                <QRCodeBox value="http://facebook.github.io/" />
        );
    }
}

export default App;
