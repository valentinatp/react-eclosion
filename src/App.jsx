import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Register from './Components/register/register'

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Register/>
    </>
  )
}

export default App
