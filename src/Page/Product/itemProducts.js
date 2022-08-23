import { Link } from "react-router-dom";
import React from 'react'

const ItemProducts = ({item,handleCart2}) => {
    // const {idBook,image,NameBook,Price} = item
  return (
    <div>
        <div className='box' key={item.idBook}>
                  <div className='product mtop'>
                    <div className='img'>
                      {/* <span className='discount'>{shopItems.discount}% Off</span> */}
                      <img src={`https://fzcwotbqbzolyknivfmw.supabase.co/storage/v1/object/public/${item.image}`} className="img-fluid rounded-start" alt="..."  />

                      <div className='product-like'>
                        <label></label> <br />
                        <i className='fa-regular fa-heart' ></i>
                      </div>
                    </div>
                    <div className='product-details'>
                      <h3>{item.NameBook}</h3>
                      <div className='price'>
                        <h4>{item.Price} đ </h4>
                      </div>
                      <div className="button" style={{fontSize:14}}>
                      <Link key={item.idBook} to={`/Product/${item.idBook}`}   className="btn btn-outline-dark">Xem</Link>
                      <button style={{maginLeft:10}} className="btn btn-outline-dark" onClick={()=> handleCart2(item)} >Mua </button>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default ItemProducts