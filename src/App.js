import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OptionsInput from './components/OptionsInput';
import TextOutput from './components/TextOutput';
import CodeOutput from './components/CodeOutput';
import { hslCSS } from './utils/utils';
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

  handleColorUpdate = async updatedColor => {
    hslCSS(updatedColor);
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Neon Text Generator
        </header>
        <main className='App-main'>
          <Router>
            <Route exact path='/' render={() =>
              <div className='in-and-out'>
                <OptionsInput
                  handleUpdateText={this.handleUpdateText}
                  handleColorUpdate={this.handleColorUpdate}
                />
                <div>
                  <TextOutput
                    text={this.state.text}/>
                  <CodeOutput />
                </div>
              </div>
            } />
          </Router>
        </main>
        <footer className='App-footer'>
          Made by Sarah W || <a href='https://www.linkedin.com/in/sarah--williams/'>LinkedIn</a>  <a href='https://github.com/arghmatey'>Github</a> || <a href='https://www.dafont.com/clip.font'>Font Used</a>
        </footer>
      </div>
    )
  }
}

export default App;