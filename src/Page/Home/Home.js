import React from 'react'

import Slider from './Slider'
import FlashDeals from './FlashDeals';


// import Link from 'next/link'


const Home = () => {

  
  // const [filter, setFilter] = useState([data]);
  // const [loading, setLoading] = useState([false]);



  
  return (
    <div>
      <Slider/>
      <FlashDeals/>
      
      <div className='container my-5 '>
        <div className='row'>
          <div className='col-12 mb5'>
            {/* <h2 className='display-6 fw-bolder text-center'> Sản Phẩm Bán chạy</h2> */}
          </div>
        </div>
      </div>
      {/* <div className='row justify-content-center'>
        {
          data.map(post => (
            <div key={post.idBook} className="col-md-3 mb-4" >
              <div class="card h-100 text-center p-3" style={{width:280, marginLeft:40}}>
                <img src={post.Image} class="card-img-top" alt="..." height='220px'/>
                  <div class="card-body">
                    <h5 class="card-title mb-0" >{post.NameBook} </h5>
                    <p class="card-text lead fw-bold">{post.Price} đ</p>
                    {/* <link to={''} class="btn btn-outline-dark"></link> */}
                    {/* <Link key={post.idBook} to={`/Product/${post.idBook}`} class="btn btn-outline-dark">Mua</Link>
                  </div>
              </div>              

            </div>
          )) 
        }
      // </div> */} *

    </div>
  )
}

export default Home
