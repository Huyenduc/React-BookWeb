import React from 'react'
import { useState, useEffect } from 'react';
import { supabase } from '../../client'
import { Link } from "react-router-dom";
import './Products.css'
import { useSelector, useDispatch } from 'react-redux/es/exports'

import ItemProducts from './itemProducts';



const Products = ({ handleCart2 }) => {
  const [book, setBook] = useState([])
  const [category, setCategory] = useState([]);
  const [book2, setBook2] = useState([])
  const [filter, setFilter] = useState(book);
  const [loading, setLoading] = useState(false);


  const dispatch = useDispatch();

  let componnenMounted = true;


  useEffect(() => {
    fetchCategory()
    fetchBook()
    fetchBook2()
  }, [])

  async function fetchCategory() {
    const { data } = await supabase
      .from('BookType')
      .select('*')
    setCategory(data)
    console.log("data", data)
  }

  async function fetchBook2() {
    const { data } = await supabase
      .from('Book')
      .select('*,BookType!inner(*)')
      .eq('BookType.idType', 1)
    // .select('*,Author(*),Publish(*),BookType(*)')
    setBook2(data)
    // console.log('test', data)

  }

  async function fetchBook() {
    const { data } = await supabase
      .from('Book')
      .select('*')
    setBook(data)
    // .select('*,Author(*),Publish(*),BookType(*)')

    if (componnenMounted) {
      setBook(data)
      setFilter(data)
      // console.log("data", data)
      setLoading(false)
    }
    return () => {
      componnenMounted = false;
    }
  }


  const Loading = () => {
    return (
      <>
        loading....
      </>
    )
  }

  const ShowProducts = () => {
    return (
      <>
        <div className='contentWidth'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Book</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <div className='product-content  grid1'>
            {/* <ShopCart addToCart={addToCart} shopItems={shopItems} /> */}

            {book.map((item) => {
              return (
                <ItemProducts key={item.idBook} item={item} handleCart2={handleCart2} />
              )
            })}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          {/* <Category /> */}
          <div className='category'>
            <div className='chead z'>
              <h1>Thể loại sách </h1>
            </div>
            {category.map((value) => {
              return (
                <div className='box f_flex' key={value.idType}>
                  {/* <img src={'./images/category/cat-1.png'} alt='' /> */}
                  <button onClick={() => setFilter(book)} >{value.NameType}</button>
                </div>
              )
            })}

          </div>

          <div >
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </section>


    </>
  )
}

export default Products