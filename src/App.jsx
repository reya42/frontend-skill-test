import React from 'react'

import { Navbar } from './components'
import Patients from './pages/Patients'

const App = () => {
  return (
    <div className='whole_container'>
      <Navbar/>
      <Patients/>
    </div>
  )
}

export default App