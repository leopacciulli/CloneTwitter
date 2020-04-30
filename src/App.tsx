import React, { useState } from 'react';

import OldTwitter from './pages/OldTwitter'
import NewTwitter from './pages/NewTwitter'

import './App.css';

const App: React.FC = () => {
  const [display, setDisplay] = useState('none')
  const [opacity, setOpacity] = useState(0)
  
  const toggle = () => {
    if (display === 'none') {
      setDisplay('block')
      setTimeout(() => {
        setOpacity(1)
      }, 200)
    }
    if (display === 'block') {
      setOpacity(0)
      setTimeout(() => {
        setDisplay('none')
      }, 200)
    }
  }

  return (
    <div>
      <div className={opacity === 1 ? "oldLayout" : "newLayout"} onClick={toggle}>
        Trocar layout
      </div>
      <div className="old" style={{transition: 'opacity 0.2s ease', opacity: opacity === 0 ? 0 : 1, display: display === 'none' ? 'none' : 'block'}}>
        <OldTwitter />
      </div>
      <div className="new" style={{transition: 'opacity 0.2s ease', opacity: opacity === 0 ? 1 : 0, display: display === 'none' ? 'block' : 'none'}}>
        <NewTwitter />
      </div>
    </div>
  );
}

export default App;
