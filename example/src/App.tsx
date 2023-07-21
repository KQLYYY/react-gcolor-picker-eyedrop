import React, { useState } from 'react';

import ReactGPicker from 'react-gcolor-picker';
import eyeDropImg from './eyeDropImg.jpeg'

function App() {
  const [color, setColor] = useState('#fff');
  const onChange = (value: string) => {
    setColor(value);
  };

  return (
    <>
      <div
        style={{
          background: color,
          height: '250px',
          fontSize: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 8px 24px 0 rgba(0, 0, 0, 0.22)'
        }}
      >
        {color}
      </div>
      <div>
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}
      >
        <ReactGPicker
          value={color}
          format='hex'
          gradient={true}
          onChange={onChange}
          showEyeDrop={true}
          showGradientMode={false}
        />
      </div>
      <div >
        <img  
          style={{width:300, height:300}}
          src={eyeDropImg}
          alt="eyeDropImg"></img>
      </div>
    </>
  );
}

export default App;
