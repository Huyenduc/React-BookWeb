import React from 'react'
import Head from './Head'
import Search from './Search'
import Navbar from './Navbar'
import './Header.css'
import Wrapper from './wrapper/Wrapper'


const Header = ({size}) => {
  return (
    <>
      <Head/>
      <Search size={size}/>
      <Navbar/>
      
    </>
  )
}

export default Header
