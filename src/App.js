import React, { Component } from 'react';
import TextInput from './components/TextInput';
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

        </header>
        <main className='App-main'>
          <TextInput />
          <TextOutput />
          <CodeOutput />
        </main>
      </div>
    )
  }
}

export default App;