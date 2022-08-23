import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { supabase } from '../../client'
import './Products.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/action'

function ProductDetail(props)  {

  const { idBook } = useParams();
  // console.log("dd",idBook)

  
  const [product, setData] = useState([]);



  const dispatch = useDispatch();
  const addProduct =(product) =>{
    dispatch(addToCart(product));
  }

  const [cart,setCart] = useState([]);
  const handleCart2 = (product)=>{
    cart.push(product);
    console.log(cart)
  }

  // cú pháp react
  useEffect(() => {
    fetchPosts()
  }, [])

  // truy vấn
  async function fetchPosts() {

    const { data } = await supabase
      .from('Book')
      .select('*,Author(*),Publish(*),BookType(*)')
      .eq('idBook', idBook)
    setData(data)
    console.log("data", data)

  }

  return (
    <div>
      {
        product.map((post,index)=>{
          
          return(
            
            <div className="productDetail  "  >
            <div className="row g-0">
              <div className="image col-md-6  " >
              <img src={`https://fzcwotbqbzolyknivfmw.supabase.co/storage/v1/object/public/${post.image}`} className="img-fluid rounded-start" alt="..."  />
              </div>
              <div className="col-md-6" style={{maginLeft:50}}>
                <div className="card-body">
                  <h4 className="card-title">{post.NameBook}</h4>
                  <p className="card-text">Tác giả: {post.Author.NameAuthor}</p>
                  <p className="card-text">Lần tái bản: {post.Publish.Republishment}</p>
                  <p className="card-text">Năm xuất bản: {post.Publish.YearRepublishment}</p>
                  <p className="card-text">Nhà xuất bản: {post.Publish.Publisher}</p>
                  <h5 className="card-text">Giá: {post.Price} đ</h5>
                  <button  className='btn btn-outline-dark' key ={post.idBook}
                   onClick={()=>handleCart2(product)}>
                  Thêm vào</button>

                </div>          
              </div>
              <div className='des col-md-10'>
                <h5 >Thông tin chi tiết</h5 > 
              <div className="card-text" dangerouslySetInnerHTML={{__html:post.Describe}}></div>

              </div>
              
            </div>

          </div>
          )
        })
      }
    </div>

  )
  const mapDispatchToProps = dispatch=>({
    addToCartHandler:data =>dispatch(addToCart(data))
})
}

export default ProductDetail