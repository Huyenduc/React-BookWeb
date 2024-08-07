import React from 'react'
import "./style.css"

function Login() {
  return (
    <div>
        <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Login #04</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div
                className="img"
                style="background-image: url(images/book.png)"
              ></div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 class="mb-4">Sign In</h3>
                  </div>
                  <div class="w-100">
                    <p class="social-media d-flex justify-content-end">
                      <a
                        href="#"
                        class="social-icon d-flex align-items-center justify-content-center"
                        ><span class="fa fa-facebook"></span
                      ></a>
                      <a
                        href="#"
                        class="social-icon d-flex align-items-center justify-content-center"
                        ><span class="fa fa-twitter"></span
                      ></a>
                    </p>
                  </div>
                </div>
                <form action="#" class="signin-form">
                  <div class="form-group mb-3">
                    <label class="label" for="name">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="form-control btn btn-primary rounded submit px-3"
                    >
                      Sign In
                    </button>
                  </div>
                  <div class="form-group d-md-flex">
                    <div class="w-50 text-left">
                      <label class="checkbox-wrap checkbox-primary mb-0"
                        >Remember Me
                        <input type="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <div class="w-50 text-md-right">
                      <a href="#">Forgot Password</a>   
                    </div>
                  </div>
                </form>
                <p class="text-center">
                  Not a member? <a data-toggle="tab" href="#signup">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Login