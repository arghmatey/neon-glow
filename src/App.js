import React, { Component } from 'react';
import OptionsInput from './components/OptionsInput';
import TextOutput from './components/TextOutput';
import CodeOutput from './components/CodeOutput';
import './App.css';

class App extends Component {
  state = {
    text: '',
    font: '',
    color: '',
  };

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Neon Text Generator</h1>
        </header>
        <main className='App-main'>
          <OptionsInput />
          <TextOutput />
          <CodeOutput />
        </main>
      </div>
    )
  }
}

export default App;