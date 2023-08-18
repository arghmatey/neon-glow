import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OptionsInput from './components/options-input';
import TextOutput from './components/text-output';
import CodeOutput from './components/code-output';
import Header from './components/header';
import { hslCSS } from './utils/utils';
import './App.scss';

class App extends Component {
  state = {
    text: '',
    color: '',
  };

  handleUpdateText = updatedText => {
    this.setState({
      text: updatedText
    })
  }

  handleColorUpdate = updatedColor => {
    hslCSS(updatedColor);
  }

  render() {
    return (
      <div className='App'>
          <Header />
        
          <Router>
            <Route exact path='/' render={() =>
              <main className='App-main'>
                <TextOutput
                  text={this.state.text}
                />
                <CodeOutput />
                <OptionsInput
                  output={this.state}
                  handleDefaultOptions={this.handleDefaultOptions}
                  handleUpdateText={this.handleUpdateText}
                  handleColorUpdate={this.handleColorUpdate}
                />
              </main>
            } />
          </Router>
        <footer className='App-footer'>
          Made by Sarah W || <a href='https://www.linkedin.com/in/sarah--williams/'>LinkedIn</a>  <a href='https://github.com/arghmatey'>Github</a> || <a href='https://www.dafont.com/clip.font'>Font Used</a>
        </footer>
      </div>
    )
  }
}

export default App;
