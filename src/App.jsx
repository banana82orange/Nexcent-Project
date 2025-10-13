import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cilents from './components/Cilents';
import Comunity from './components/Comunity';
import Pixelgrade from './components/Pixelgrade';
import Helping from './components/Helping';
import Footer from './components/Footer';
import MeetCustomer from './components/MeetCustomer';
import Marketing from './components/Marketing';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Cilents/>
      <Comunity />
      <Pixelgrade />
      <Helping/>
      <Footer/>
      <MeetCustomer/>
      <Marketing/>
    </>
  )
}

export default App
