import { useState } from 'react'
import logo from './assets/images/logo.svg';
import openMenu from './assets/images/icon-menu.svg';
import closeMenu from './assets/images/icon-close-menu.svg';

function App() {
  const [menu,setMenu] = useState(false);
  const [features,setFeatures] = useState(false);
  

  const handleMenu = () =>{
    setMenu(!menu)
  }

  return (
    <div className="flex justify-between mx-auto py-8 h-10 px-8 bg-white text-black"> 
        <div className='flex flex-row justify-between items-center space-x-8 items-center mt-2'>
          <img src={logo} alt="logo"className=''/>
            <div className='flex flex-row'>
              <ul className='flex space-x-8'>
                <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Features</li>
                <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Company</li>
                <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Careers</li>
                <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>About</li>
              </ul>
            </div>
        </div>
        <div className='hidden md:flex justify-end space-x-2 '>
          <button className='font-bold hover:text-gray-500 hover:cursor-default w-[80px] '>Login</button>
          <button className='rounded-xl border border-4 w-[100px] border-gray-400 font-bold hover:text-gray-700'>Register</button>
        </div>
        <div onClick={handleMenu}>{
          menu ?
          <img src={closeMenu} alt="closeMenu" />
          :
          <img src={openMenu} alt="icon-menu" />
          }
        </div>
        <div className={menu ? 'fixed right-0 w-1/3 px-10 top-0 bg-gray-100 h-screen py-16' : 'fixed right-[-100%]'}>
          <ul className='space-y-10'>
            <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Features</li>
            <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Company</li>
            <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>Careers</li>
            <li className='text-gray-500 font-bold hover:text-gray-300 hover:cursor-default'>About</li>
          </ul>
        </div>
    </div>
  )
}

export default App
