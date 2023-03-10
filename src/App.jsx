import './App.css'
import 'quill/dist/quill.snow.css'; // Add css for snow theme

import html2canvas from 'html2canvas';
import reactLogo from './assets/react.svg'
import { useQuill } from 'react-quilljs';
import { useState } from 'react';

// or const { useQuill } = require('react-quilljs');

// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme


function App() {
  const takeScreenshots = () => {
    const el = document.querySelector('.ql-editor').children[0];
    console.log(el)
    el.style.display  = 'inline-block'
    html2canvas(el).then(function(canvas) {
        console.log(document.querySelector('#element-to-capture'));
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.setAttribute('download', 'Screenshot.png')
        a.setAttribute('href', url);
        a.click();
    });
    el.style.display = 'block'
  }

  const [value, setValue] = useState('')

  const handleOnChange = (e, editor) => {
  }

  const { quill, quillRef } = useQuill();

  console.log(quill);    // undefined > Quill Object
  console.log(quillRef);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 id='element-to-capture'>Vite + React</h1>
      <div className="card">
        <button onClick={ takeScreenshots }>
          Take Screenshot
        </button>
      </div>

      <div style={{ width: 500, height: 300 }}>
        <div ref={quillRef} />
      </div>
    </div>
  )
}

export default App
