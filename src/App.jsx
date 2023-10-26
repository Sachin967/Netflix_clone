import { useState } from 'react'
import { orginals, horror, comedy, action } from './url'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Row from './Components/Row/Row'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row url={orginals} title={'Netflix Orginals'} />
      <Row url={horror} title={'Horror'} isSmall />
      <Row url={comedy} title={'Romance'} />
      <Row url={action} title={'Action'} isSmall />
    </div>
  )
}

export default App
