import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/home';

function App() {
  return (
    <div className='container'>
      <Home/>
    </div>
  );
}

export default App;
