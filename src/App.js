import React, { Component } from 'react';
import OptionsInput from './components/OptionsInput';
import TextOutput from './components/TextOutput';
import CodeOutput from './components/CodeOutput';
import { colorCSS } from './utils/utils';
import './App.css';

class App extends Component {
  state = {
    text: '',
    color: '',
  };

  handleUpdateText = async updatedText => {
    this.setState({
      text: updatedText
    })
  }

  handleUpdateColor = async updatedColor => {
    colorCSS(updatedColor);
    this.setState({
      color: updatedColor
    })
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Neon Text Generator</h1>
        </header>
        <main className='App-main'>
          <OptionsInput
            handleUpdateText={this.handleUpdateText}
            handleUpdateColor={this.handleUpdateColor}
          />
          <TextOutput
            text={this.state.text}
            color={this.state.color} />
          <CodeOutput />
        </main>
      </div>
    )
  }
}

export default App;