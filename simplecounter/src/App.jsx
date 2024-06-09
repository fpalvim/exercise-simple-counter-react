import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import CounterDesign from './CounterDesign'

function App() {
    return (
      <div className="App">
           <div className='container'>
          <CounterDesign icon={<i className="fa-solid fa-clock"></i>}/>
          <Counter />  
            </div>  
      </div>
    );
  
}

export default App
