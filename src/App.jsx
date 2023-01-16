import './App.css'

import html2canvas from 'html2canvas';
import reactLogo from './assets/react.svg'

function App() {
  const takeScreenshots = () => {
    html2canvas(document.querySelector('#element-to-capture')).then(function(canvas) {
        console.log(document.querySelector('#element-to-capture'));
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.setAttribute('download', 'Screenshot.png')
        a.setAttribute('href', url);
        a.click();
    });
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
    </div>
  )
}

export default App
