import './App.css'
import { useState } from "react"
import Header from './components/Header'
import ContentPage from './components/ContentPage'
import Nav from './components/Nav'

function App() {
  
  return (
    <>
      <div id="container">
        <Header/>
        <Nav/>
        <ContentPage/>
    </div>
    </>
  )
}

export default App
