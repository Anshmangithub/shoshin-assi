import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Dashbord from './components/Dashbord'
import Aside from './components/Aside'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative'>
   <div className='flex'>
    <div className='w-[90px]  min-h-screen  md:w-1/5 border-r-2  bg-[#FAFAFA]'>
    <Aside/>
    </div>
    <div className='w-[744px] min-h-screen  md:w-4/5 '>
    <Navbar/>
    <Dashbord/>

    </div>
   </div>
    </div>
  )
}

export default App
