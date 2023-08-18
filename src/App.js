import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OptionsInput from './components/options-input';
import TextOutput from './components/text-output';
import CodeOutput from './components/code-output';
import Header from './components/header';
import Footer from './components/footer';
import { getCSSOutput, getInlineStyle } from './utils/utils';
import './App.scss';

const INITIAL_OUTPUT = `color:
text-shadow:`;

const App = () => {
  const [ text, setText ] = useState('');
  const [ output, setOutput ] = useState(INITIAL_OUTPUT)

  const handleUpdateText = updatedText => {
    setText(updatedText)
  }

  const handleUpdateColor = hue => {
    getInlineStyle(hue);
    setOutput(getCSSOutput(hue))
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
              <CodeOutput 
                output={output}
              />
              <OptionsInput
                handleUpdateText={handleUpdateText}
                handleColorUpdate={handleUpdateColor}
              />
            </main>
          } />
        </Router>
      
      <Footer />
    </div>
  )
}

export default App;
