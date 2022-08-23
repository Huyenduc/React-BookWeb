import React from 'react'
import {useCart} from "react-use-cart"


const ItemCart = (props) => {

    const {addItem} =useCart();

  return (
    <>
        <div className="productDetail  " >
            <div className="row g-0">
              <div className="image col-md-6  " >
              <img src={`https://fzcwotbqbzolyknivfmw.supabase.co/storage/v1/object/public/${props.image}`} className="img-fluid rounded-start" alt="..."  />
              </div>
              <div className="col-md-6" style={{maginLeft:50}}>
                <div className="card-body">
                  <h4 className="card-title">{props.NameBook}</h4>
                  <p className="card-text">Tác giả: {props.NameAuthor}</p>
                  <p className="card-text">Lần tái bản: {props.Republishment}</p>
                  <p className="card-text">Năm xuất bản: {props.YearRepublishment}</p>
                  <p className="card-text">Nhà xuất bản: {props.Publisher}</p>
                  <h5 className="card-text">Giá: {props.Price} đ</h5>
                  <button  className='btn btn-outline-dark'
                   onClick={()=>addItem(props.item)}>
                  Thêm vào</button>

                </div>          
              </div>
              <div className='des col-md-10'>
                <h5 >Thông tin chi tiết</h5 > 
              <div className="card-text" dangerouslySetInnerHTML={{__html:props.Describe}}></div>

              </div>
              
            </div>

          </div>
        </>
  )
}

export default ItemCart