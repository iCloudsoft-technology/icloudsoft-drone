import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from './components/Routing'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
     <React.StrictMode>
      <BrowserRouter>
        <Routing />
        <ScrollToTop/>
      </BrowserRouter>
      </React.StrictMode>
    </>
  )
}

export default App