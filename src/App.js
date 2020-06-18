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
        <header className='App-header'>
          Neon Text Generator
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
        <footer className='App-footer'>
          Made by Sarah W || <a href='https://www.linkedin.com/in/sarah--williams/'>LinkedIn</a>  <a href='https://github.com/arghmatey'>Github</a> || <a href='https://www.dafont.com/clip.font'>Font Used</a>
        </footer>
      </div>
    )
  }
}

export default App;