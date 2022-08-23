// import React, { useState } from "react"
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import { supabase } from '../../client'
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Home.css'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPosts()

  }, [])

  async function fetchPosts() {
    const { data } = await supabase
      .from('Book')
      .select('*,Author(*),Publish(*),BookType(*)')

    setData(data)
    console.log("data", data)
  }
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Delas</h1>
          </div>
          <Slider {...settings}>
            {data.map((productItems) => {
              return (
                <div className='box d_flex top'>
                  <div className='product mtop'>
                    <div className='img' key={productItems.id}>
                      <span className='discount'>25% Off</span>
                      <img src={`https://fzcwotbqbzolyknivfmw.supabase.co/storage/v1/object/public/${productItems.image}`} className="img-fluid rounded-start" alt="..."  />                      
                      <div className='product-like'>
                        <label>{count}</label> <br />
                        <i className='fa-regular fa-heart' onClick={increment}></i>
                      </div>
                    </div>
                    <div className='product-details'>
                      <h3>{productItems.NameBook}</h3>
                      
                      <div className='price'>
                        <h4>${productItems.Price} </h4>
                        {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                        <button >
                          <i className='fa fa-plus'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>

    </>
  )
}

export default FlashCard
