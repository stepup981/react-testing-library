import React from 'react';
import { useState } from 'react';

const HelloWorld = props => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false)

  const toggle = () => value === 'hello' && setVisible(prev => !prev)
  const onChange = (e) => setValue(e.target.value)

  return (
    <div>
      <input id="search" type="text" onChange={onChange}/>
      <button id="toggle" onClick={toggle}>Hello world</button>
      {visible && <h1 id="hello">Hello world</h1>}
    </div>
  );
};



export default HelloWorld;