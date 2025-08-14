import React from 'react';
import './App.css';
import FormularioLogin from './components/FormularioLogin';
import Logo from './Logo.png'; // Assuming you have a logo.svg in the src folder

function App() {
  return (
    <div className='App'>
      <img src={Logo} className='App-logo' alt='logo' />
        <FormularioLogin />
    </div>
  );
}

export default App;