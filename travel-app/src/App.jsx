import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Chat from "./components/Chat/Chat"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
      <Chat />
    </>
  )
}

export default App
