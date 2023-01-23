import './App.css'
import 'draft-js/dist/Draft.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import html2canvas from 'html2canvas';
import reactLogo from './assets/react.svg'
import { useState } from 'react';

function App() {
  const takeScreenshots = () => {
    const el = document.querySelector('.ck-content').children[0];
    el.style.display  = 'inline'

    html2canvas(document.querySelector('.ck-content').children[0]).then(function(canvas) {
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
    // console.log('object');
    console.log(editor.getData())
    // const data = 
  }

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
      <CKEditor
        editor={ ClassicEditor }
        onChange={ handleOnChange }
      />
    </div>
  )
}

export default App
