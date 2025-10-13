import React, { useState } from 'react'
import Logo from "../assets/img/logo-black.png"
import { FaBars } from "react-icons/fa";


function Navbar() {
    const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#about' },
    { label: 'Community', href: '#services' },
    { label: 'Blog', href: '#portfolio' },
    { label: 'Pricing', href: '#contact' } ];

    const navItems_tail = [
    { label: 'login', href: '#login' },
    { label: 'logout', href: '#logout' }
     ];
     const [toggle , setToggle] = useState(false);
     const updateToggle = () => {
        setToggle(!toggle);
     }
  return (
    <nav className='bg-[#F5F7FA]'>
        <div className='container max-auto max-w-[1920px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:h-[84px] md:items-center'>
            <div>
                <a href="#">
                    <img src={Logo} alt=""></img>
                </a>
            </div>
            <ul className={`${!toggle ?'hidden':'flex' }  flex-col my-5 md:flex md:flex-row`}>
                {
                    navItems.map((item) => (
                    <li className='my-2 md:mx-4'><a href={item.href}>{item.label}</a></li>
                    ))
                }
            </ul>
            <ul className={`${!toggle ?'hidden':'flex' }  flex-col my-5 md:flex md:flex-row`}>
                <li className='my-2 md:mx-4'><a className='inline-flex justify-center items-center py-2 px-4 text-[#4CAF4F]'href="#login">Login</a></li>
                <li className='my-2 md:mx-4'><a className='inline-flex justify-center items-center py-2 px-4 bg-[#4CAF4F] text-white rounded-md' href="#logout">Logout</a></li>
            </ul>

        {/*list bar*/}
        <FaBars onClick={updateToggle} className='absolute right-5 cursour-pointer text-xl md:hidden'></FaBars>
        </div>
    </nav>
  )
}

export default Navbar