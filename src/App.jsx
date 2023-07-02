import { useState } from 'react'

// import components
import Users from './components/Users'

// import css
import './App.css'


function App() {
  return (
    <div className='main'>
      <h1>ToDo App</h1>
      <Users />
    </div>
  )
}

export default App
