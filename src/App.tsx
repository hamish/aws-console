import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from "./components/FirstComponent"
import UserComponent from './components/UserComponent';
function App() {
  return (
    <div className="App">
      <FirstComponent />
      <UserComponent name="John Doe" age={26} address="hi there lane" dob={new Date()} />
    </div>
  );
}

export default App;
