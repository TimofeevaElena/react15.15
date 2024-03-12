
import './App.css'
import Header from './components/Header/Header'
import Katalog from './components/Katalog/Katalog'
import Start from './components/Start/Start'
import Footer from './components/Footer/Footer'
import OneCard from './components/OneCard/OneCard'
import Users from './components/Users/Users'
import AddPage from './components/AddPage/Add'
import BagPage from'./components/BagPage/Bag'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'

function App() {

  const[bag,setBag] = useState([])
  console.log(bag)

  return(
    <>
      <Header bag={bag}/>
      <Routes>
        <Route path="/" element={<Start/>}></Route>
        <Route path="/katalog" element={<Katalog addToBag={setBag} bag={bag}/>}></Route>
        <Route path="/katalog/:id" element={<OneCard/>}></Route>
        <Route path="/users" element = {<Users/>} />
        <Route path="/add" element = {<AddPage />} />
        <Route path="/bag" element = {<BagPage  bag={bag}/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
