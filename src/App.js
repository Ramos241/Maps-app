import React, { useState } from 'react';
import Box from './Components/Box';
import Maps from './Components/Maps';
import './App.css';

function App() {

  const [seletPosition, setSeletPosition] = useState (null)

  return (
    <div className="App">
      <div className='Maps' >
        <Maps seletPosition={seletPosition} />
      </div>
      <div className='Box'>
        <Box seletPosition={seletPosition} setSeletPosition={setSeletPosition} />
      </div>
    </div>
  );
}

export default App;
