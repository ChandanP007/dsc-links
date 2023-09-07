import React from 'react'

import './App.css'

import logo from './assets/chapter-logo.png'
import Phone from './components/Phone'
import Desktop from './components/Desktop'


function App() {
  const isPhoneView = window.innerWidth <= 414;

  return (
    <div>
      {isPhoneView ? (
        <Phone/>
      ) : (
        <Desktop/>
      )}
    </div>
  );
}

export default App
