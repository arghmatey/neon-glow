import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OptionsInput from './components/options-input';
import TextOutput from './components/text-output';
import CodeOutput from './components/code-output';
import Header from './components/header';
import Footer from './components/footer';
import { hslCSS } from './utils/utils';
import './App.scss';

const App = () => {
  const [ text, setText ] = useState('');

  const handleUpdateText = updatedText => {
    setText(updatedText)
  }

  const handleColorUpdate = updatedColor => {
    hslCSS(updatedColor);
  }

  return (
    <div className='App'>
        <Header />
      
        <Router>
          <Route exact path='/' render={() =>
            <main className='main'>
              <TextOutput
                text={text}
              />
              <CodeOutput />
              <OptionsInput
                handleUpdateText={handleUpdateText}
                handleColorUpdate={handleColorUpdate}
              />
            </main>
          } />
        </Router>
      
      <Footer />
    </div>
  )
}

export default App;
