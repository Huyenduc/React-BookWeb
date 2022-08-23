import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({size}) => {
  window.addEventListener("scroll",function(){
    const search = document.querySelector(".search")
    search.classList.toggle("active",this.window.scrollY > 100  )
  })
  // const state = useSelector((state)=> state.handleCart)

  return (
    <>
    <section className='search'>
      <div className="container c_flex" >
          <div className='logo with'>
            <img src={'logo.jpg'} alt='' width={100}/>
          </div>
          <div className='search-box f_flex' >
            <i className=' fa fa-search'></i>
            <input type="text" placeholder='Tìm kiếm...' />
            <span>Tất cả sản phẩm</span>
          </div>

        <div className="icon f_flex with">
          <Link to='/Login'>
          <i className='fa fa-user icon_circle'></i></Link>
          <div className='cart'>
            
            <Link to='/cart'>
            <i className ="fa fa-shopping-bag icon_circle">
              
            </i>
            <span  style={{ textDecoration: "none" }}>{size}</span>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Search