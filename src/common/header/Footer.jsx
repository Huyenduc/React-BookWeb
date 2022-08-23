import React from 'react'

import { Link } from 'react-router-dom'

import Grid from '../Grid'
import './Header.css'

// import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    }
    
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="content">
                            <p>
                                Liên hệ đặt hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="title">
                            Về Book Store
                        </div>
                        <div className="content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <span to={item.path}>
                                            {item.display}
                                        </span>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <span to={item.path}>
                                            {item.display}
                                        </span>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="about">
                        <p>
                            <Link to="/">
                                <img src={'logo.jpg'} className="logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer