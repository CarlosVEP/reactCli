import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Location from './components/Location';

function App() {
  var temperatura=37;
  var humedad={humedad:12,tiempo:13};
  return (
    <div className="App">
      <Location datos={{"temperatura":temperatura, "humedad":humedad}}></Location>
    </div>
  );
}

export default App;
