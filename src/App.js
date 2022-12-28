import React from 'react';
import Navbarr from './components/Navbarr';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Forms';

function App() {
  return (
    <div className="wrapper">
    <Navbarr/>
    <Forms/>
    </div>
  )
}

export default App;