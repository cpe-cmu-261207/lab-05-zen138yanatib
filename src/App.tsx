import React from 'react';
import { useState } from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todo from './Components/Todo';
function App() {
  return (
    <div>
      <Header/>
      <Todo/>
      <Footer/>
    </div>
  );
}

export default App;