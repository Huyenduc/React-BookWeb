import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Giao Hàng Toàn Quốc",
      decs: "Miễn phí giao hàng với đơn hàng >120k",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Thanh Toán COD",
      decs: "Thanh toán khi nhận hàng",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Mua Sắm thỏa thích",
      decs: "Mua sách nhiều ưu đãi",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Hỗ trợ 24/7 ",
      decs: "Hỗ trợ đổi trả hàng, giải đáp thắc mắc",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
