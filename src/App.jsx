import './App.css'

import { useEffect, useState } from 'react'
import HomePage from './HomePage'
import LogoLoader from './Components/Loader/LogoLoader'


function App() {

  return (
    <>
    {/* {loaded ? <HomePage /> : <LogoLoader /> } */}
      <HomePage/>

    </>
  )
}

export default App
