import React from 'react'
import logo from "../../images/logo.png"

const NavBarItem = ({ title, classprops }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classprops}`}>
      {title}
    </li>
  )
}

const Navbar = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='justify-center items-center flex-initial'>
        <img src={logo} alt="logo" className='w-32 cursor-pointer' />
      </div>
      <ul className='w-full flex justify-center text-white items-center gap-2 md:justify-end md:mr-5'>
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => {
          return <NavBarItem title={item} key={index} />
        })}
        <li className='bg-[#2952e3] text-center rounded-full py-2 px-8 cursor-pointer hover:bg-[#2546bd]'>Login</li>
      </ul>
    </div>
  )
}

export default Navbar