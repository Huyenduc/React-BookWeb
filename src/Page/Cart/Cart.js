import React, { useState, useEffect } from "react";
import './cart.css'
import '../../client'
import { supabase } from "../../client";

import { Modal } from "react-bootstrap";

function Cart({ cart, setCart, handleChange }) {


  const [price, setPrice] = useState(0);
  // const [data, setData] = useState([]);

  const [customer, setcustomer] = useState({  NameCustomer: "", Address: "", Phone: "" })
  const {  NameCustomer, Address, Phone } = customer

  

  const bills = cart.map((item) => ({
    idBook: item.idBook,
    amounts: item.amount

  }))


  

  const handleSubmit3 = async (e) => {
    e.preventDefault();

   

  }



  const [open, setOpen] = useState(false)

  useEffect(() => {

    handlePrice();
    // handleSubmit2();
  });

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.idBook !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    let mone = 0;
    cart.map((item) => (ans += item.amount * item.Price));
    // console.log(ans)

    cart.map((item) => (mone = item.amount * item.Price));
    // console.log(ans)
    setPrice(ans);
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    var hd = Math.floor(Math.random() * 100000) + 1;
    var bill = Math.floor(Math.random() * 1000000) + 1;
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var datasetup = (time + ' ' + date)

    // console.log(hd)
    // console.log(bill)

    const { data2, error } = await supabase
      .from('Customer')
      .insert([{ IdCustomer: hd, NameCustomer, Address, Phone }])
      .single()
    setcustomer({ NameCustomer: "", Address: "", Phone: "" })
    if (error) {
      console.log("Lỗi")
      alert("Đặt hàng không thành công !")
      return
    }

    const { data } = await supabase
      .from('Bill')
      .insert([{ IdBill: bill, IdCustomer: hd, DateSetUp: datasetup, TotalMoney: price }])
      .single()
    if (error) {
      console.log("Lỗi")
      alert("Đặt hàng không thành công !")
      return
    }

    var lengths = bills.length
    //j< Object.keys(b[i]).length
    if (lengths != 0) {
      for (var i = 0; i < lengths; i++) {
        for (var j = 0; j < 1; j++) {
          var aID = bills[i].idBook
          var aMount = bills[i].amounts
          console.log(aID)
          console.log(aMount)
          console.log("f")
          const { data2, error } = await supabase
            .from('InvoiceDetails')
            .insert([{ idBook: aID, IdBill:bill, Amount:aMount}])
            .single()
          if (error) {
            console.log("Lỗi")
            alert("Thêm không thành công !")
            return
          }
        }
      }
    }
    alert("Đã đặt hàng !")
    setOpen(false)

  }


  return (
    <article className="cart">
      <Modal show={open}>
        <form className="mb-10" >
          <div className="maincontainer">
            <div className="container">
              <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Your cart</span>
                    <span class="badge badge-secondary badge-pill">3</span>
                  </h4>
                  <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 class="my-0">Product name</h6>
                        <small class="text-muted">Brief description</small>
                      </div>
                      <span class="text-muted">$12</span>
                    </li>


                    <li class="list-group-item d-flex justify-content-between">
                      <span>Tổng tiền: </span>
                      <strong> {price}đ</strong>
                    </li>
                  </ul>
                </div>
                <div class="col-md-8 order-md-1">
                  <h4 class="mb-3">Địa chỉ thanh toán</h4>
                  <form class="needs-validation" novalidate>
                    <div class="row">
                      <div class="col-mb-6 ">
                        <label for="firstName">Tên khách hàng </label>
                        <input type="text" className="form-control "
                          value={NameCustomer}
                          onChange={e => setcustomer({ ...customer, NameCustomer: e.target.value })}></input>
                        <div class="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                    </div>

                    <div class="mb-3">
                      <label >Số điện thoại</label>
                      <div class="input-group">
                        <input type="text" className="form-control "
                          value={Phone}
                          onChange={e => setcustomer({ ...customer, Phone: e.target.value })}></input>
                        <div class="invalid-feedback">
                          Your username is required.
                        </div>
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="email">Email <span class="text-muted">(Optional)</span></label>
                      <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="address">Địa chỉ</label>
                      <input type="text" className="form-control "
                        value={Address}
                        onChange={e => setcustomer({ ...customer, Address: e.target.value })}></input>
                      <div class="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                  </form>
                  <hr class="mb-4" />
                  <button style={{ marginLeft: 100, marginBottom: 20 }} class="btn btn-primary btn-lg btn-block" onClick={handleSubmit} type="button">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
      {cart.map((item) => (
        <div className="cart_box" key={item.idBook}>
          <div className="cart_img">
            <img src={`https://fzcwotbqbzolyknivfmw.supabase.co/storage/v1/object/public/${item.image}`} alt="" />
            <p>{item.NameBook}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.Price} đ</span>
            <button type="button" class="btn btn-danger" onClick={() => handleRemove(item.idBook)}>Xóa</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Tổng tiền: {price} đ</span>
        <div>
          <button style={{ marginTop: 20, marginLeft: 180 }} onClick={()=>{setOpen(true)}} type="button" class="btn btn-primary">Thanh toán</button>
        </div>
      </div>

    </article>
  );
}

export default Cart;