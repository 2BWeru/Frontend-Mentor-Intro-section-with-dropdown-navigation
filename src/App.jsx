import { useState } from 'react'
import logo from './assets/images/logo.svg';
import openMenu from './assets/images/icon-menu.svg';
import closeMenu from './assets/images/icon-close-menu.svg';
import todo from "./assets/images/icon-todo.svg";
import calendar from "./assets/images/icon-calendar.svg";
import reminder from "./assets/images/icon-reminders.svg";
import planners from "./assets/images/icon-planning.svg"
import Hero from "./components/hero"

function App() {
  const [menu,setMenu] = useState(false);
  const [features,setFeatures] = useState(false);
  const [company,setCompany] = useState(false);




  const handleMenu = () =>{
    setMenu(!menu)
  }
  const handleNav = ()=>{
    setFeatures(!features);
  }
  const handleCompany = ()=>{
    setCompany(!company);
  }

  return (
  <>
    <div className="flex justify-between mx-auto py-8 h-14 px-8 bg-white text-black"> 
        <div className='flex flex-row justify-between items-center space-x-8 items-center mt-2'>
          <img src={logo} alt="logo"className='ml-6'/>
            <div className='hidden lg:flex flex-row'>
              <ul className='flex space-x-8'>
                <li onClick={handleNav} className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Features</li>
                <li onClick={handleCompany} className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Company</li>
                <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Careers</li>
                <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>About</li>
              </ul>
            </div>
        </div>
        <div className='hidden lg:block flex flex-row space-x-4 '>
          <button className='font-bold text-gray-400 hover:text-gray-600 hover:cursor-default '>Log in</button>
          <button className='font-bold text-gray-400 border py-2 px-4 rounded-xl border-black border-4 hover:text-gray-600'>Register</button>
        </div>
        <div className='block lg:hidden' onClick={handleMenu}>{
          !menu && (
            <img src={openMenu} alt="closeMenu" />
          )}
        </div>
        <div className={menu ? 'fixed right-0 w-1/2 px-10 top-0 bg-white h-screen py-16' : 'fixed right-[-100%]'}>
          {menu && (
            <img onClick={handleMenu} className="ml-[100px] mb-8 border h-8 mt-2" src={closeMenu} alt="icon-menu" />
          )}
          <ul className='space-y-10'>
            <li onClick={handleNav} className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Features</li>
            <div className={features ? "flex flex-col" : 'hidden'}>
              <ul className='flex flex-col space-y-4 text-start pl-6'>
                <li className='flex flex-row text-md hover:cursor-default hover:text-gray-500'><img className='mr-2 h-4' src={todo} />Todo list</li>
                <li className='flex flex-row text-md hover:cursor-default hover:text-gray-500'><img className='mr-2 h-4' src={calendar} />Calendar</li>
                <li className='flex flex-row text-md hover:cursor-default hover:text-gray-500'><img className='mr-2 h-4' src={reminder} />Reminders</li>
                <li className='flex flex-row text-md hover:cursor-default hover:text-gray-500'><img className='mr-2 h-4' src={planners} />Planning</li>
              </ul>
            </div>
            <li onClick={handleCompany} className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Company</li>
            <div className={company ? "flex flex-col" : 'hidden'}>
              <ul className='flex flex-col space-y-4 text-start pl-8'>
                <li className='hover:cursor-default hover:text-gray-500'>History</li>
                <li className='hover:cursor-default hover:text-gray-500'>Our Team</li>
                <li className='hover:cursor-default hover:text-gray-500'>Blog</li>
              </ul>
            </div>
            <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Careers</li>
            <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>About</li>
          </ul>
          <div className="flex flex-col py-20 space-y-10">
            <button className="font-medium text-sm text-gray-900 hover:cursor-default hover:text-gray-500">log In</button>
            <button className="font-medium text-sm text-gray-900 hover:cursor-default hover:text-gray-500 border border-4 rounded-xl py-2 border-black">Register</button>

          </div>
        </div>
    </div>
  <div className='hidden lg:flex flex-row mt-2'>
    <div className={features ? 'flex fixed justify-center bg-white w-[200px] rounded-xl py-4 drop-shadow-2xl ml-[2%]' : 'hidden'}>
      <ul className='flex flex-col space-y-4 items-center text-center'>
        <li className='flex flex-row text-md hover:cursor-default hover:text-gray-500'><img className='mr-2 h-4' src={todo} />Todo list</li>
        <li className='flex flex-row text-md hover:cursor-default hover:text-gray-500'><img className='mr-2 h-4' src={calendar} />Calendar</li>
        <li className='flex flex-row text-md hover:cursor-default hover:text-gray-500'><img className='mr-2 h-4' src={reminder} />Reminders</li>
        <li className='flex flex-row text-md hover:cursor-default hover:text-gray-500'><img className='mr-2 h-4' src={planners} />Planning</li>
      </ul>
    </div>
    <div className={company ? 'flex fixed justify-center bg-white w-[160px] h-32 rounded-xl py-4 drop-shadow-2xl left-[20%] mt-[0%]' : 'hidden'} >
      <ul className='flex flex-col space-y-4 text-center'>
        <li className='hover:cursor-default hover:text-gray-500'>History</li>
        <li className='hover:cursor-default hover:text-gray-500'>Our Team</li>
        <li className='hover:cursor-default hover:text-gray-500'>Blog</li>
      </ul>
    </div>
  </div>
  <Hero />
  </>
  )
}

export default App
