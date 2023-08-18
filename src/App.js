import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OptionsInput from './components/options-input';
import TextOutput from './components/text-output';
import CodeOutput from './components/code-output';
import Header from './components/header';
import Footer from './components/footer';
import { getCSSOutput, getInlineStyle } from './utils/utils';

const INITIAL_OUTPUT = `color:
text-shadow:`;

const TEXT_OUTPUT = 'greetings'

const App = () => {
  const [ output, setOutput ] = useState(INITIAL_OUTPUT)

  const handleUpdateColor = hue => {
    console.log(hue)
    getInlineStyle(hue);
    setOutput(getCSSOutput(hue))
  }

  return (
    <div className='app'>
        <Header />
      
        <Router>
          <Route exact path='/' render={() =>
            <main className='main'>
              <section className="main-left">
                <TextOutput
                  text={TEXT_OUTPUT}
                />
              </section>

              <section className='main-right'>
                <OptionsInput
                  onColorChange={handleUpdateColor}
                />
                <CodeOutput 
                  output={output}
                />
              </section>
            </main>
          } />
        </Router>
      
      <Footer />
    </div>
  )
}

export default App;
