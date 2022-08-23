import React, { useState } from 'react'

import { Link } from 'react-router-dom';


const Navbar = () => {
    const [ShopbookMenu,setShopBook] = useState(false )
    const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
          
              <div className='navlink'>
                  
                  <ul className={ MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                     
                      <li className='nav-item'>
                          
                          <Link to='/'>Trang chủ</Link>
                          
                      </li>
                      <li className="nav-item">
                          <Link to='/Product'>Sản Phẩm</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/'>Giới thiệu</Link>
                      </li>
                      <li className="nav-item">
                          <Link to='/'>Góp ý</Link>
                      </li>
                  </ul>

                  <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
              </div>
          
      </header>
    </>
  )
}

export default Navbar
